import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, CERTIFICATIONS, LANGUAGES } from '@/constants';

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { message: 'Message is required' },
                { status: 400 }
            );
        }

        // Initialize Gemini
        const apiKey = process.env.GEMINI_API_KEY;
        console.log('API Key present:', !!apiKey);
        console.log('API Key length:', apiKey?.length || 0);

        if (!apiKey) {
            console.error('Gemini API Key is missing');
            return NextResponse.json(
                { message: 'Server Configuration Error: Missing API Key' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Create comprehensive context from all profile data
        const skillsText = SKILLS.map(cat => `${cat.category}: ${cat.skills.join(', ')}`).join('\n');
        const projectsText = PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('\n');
        const experienceText = EXPERIENCE.map(exp =>
            `- ${exp.role} at ${exp.company} (${exp.period}, ${exp.location})\n  ${exp.details.join('\n  ')}`
        ).join('\n\n');
        const educationText = EDUCATION.map(edu => `- ${edu.institution}: ${edu.degree} (${edu.period}) ${edu.details || ''}`).join('\n');
        const certsText = CERTIFICATIONS.map(cert => `- ${cert.name} (${cert.issuer})`).join('\n');

        const context = `
You are an AI assistant for ${PROFILE.name}'s portfolio website.

COMPLETE PROFILE INFORMATION:

Name: ${PROFILE.name}
Role: ${PROFILE.role}
Location: ${PROFILE.location}
Email: ${PROFILE.email}
Phone: ${PROFILE.phone}
LinkedIn: ${PROFILE.linkedin}
GitHub: ${PROFILE.github}

PROFESSIONAL SUMMARY:
${PROFILE.summary}

TECHNICAL SKILLS:
${skillsText}

PROJECTS:
${projectsText}

PROFESSIONAL EXPERIENCE:
${experienceText}

EDUCATION:
${educationText}

CERTIFICATIONS:
${certsText}

HACKATHON AWARDS:
${AWARDS.join('\n')}

LANGUAGES:
${LANGUAGES.join(', ')}

Answer questions about ${PROFILE.name}'s background, skills, experience, projects, education, and achievements based on this comprehensive information.
Be professional, concise, and helpful. Provide specific details from the resume when relevant.
If asked about something not in the portfolio, politely indicate that information is not available.
`;

        const prompt = `${context}\n\nUser: ${message}\nAssistant:`;

        console.log('Sending request to Gemini 2.5 Flash...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();

        console.log('Gemini response received, length:', reply?.length || 0);

        // Validate response
        if (!reply || reply.trim().length === 0) {
            console.error('Empty response from Gemini');
            return NextResponse.json({
                reply: 'I apologize, but I received an empty response. Please try again.'
            });
        }

        return NextResponse.json({ reply });
    } catch (err: any) {
        console.error('AI Error:', err);
        console.error('Error details:', err.message, err.stack);
        return NextResponse.json(
            { message: 'Error processing AI request', error: err.message },
            { status: 500 }
        );
    }
}
