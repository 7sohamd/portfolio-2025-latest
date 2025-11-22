import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PROFILE } from '@/constants';

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
        if (!apiKey) {
            console.error('Gemini API Key is missing');
            return NextResponse.json(
                { message: 'Server Configuration Error: Missing API Key' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Create context from profile data
        const context = `
You are an AI assistant for ${PROFILE.name}'s portfolio website.

Here is information about ${PROFILE.name}:
- Name: ${PROFILE.name}
- Role: ${PROFILE.role}
- Email: ${PROFILE.email}
- Location: ${PROFILE.location}
- Summary: ${PROFILE.summary}

Answer questions about ${PROFILE.name}'s background, skills, experience, and projects based on this portfolio.
Be professional, concise, and helpful. If asked about something not in the portfolio, politely indicate that information is not available.
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
