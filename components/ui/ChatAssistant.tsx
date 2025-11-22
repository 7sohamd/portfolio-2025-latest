'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
        { role: 'assistant', content: 'Greetings. I am the AI assistant. How may I assist you?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });
            const data = await res.json();

            // Check if response has an error
            if (data.error || data.message) {
                console.error('API Error:', data);
                setMessages((prev) => [...prev, {
                    role: 'assistant',
                    content: `Error: ${data.message || data.error || 'Unknown error occurred'}`
                }]);
            } else if (!data.reply || data.reply.trim().length === 0) {
                console.error('Empty reply from API');
                setMessages((prev) => [...prev, {
                    role: 'assistant',
                    content: 'I received an empty response. Please try again.'
                }]);
            } else {
                setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessages((prev) => [...prev, { role: 'assistant', content: 'Apologies, I encountered an error.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
                className={`fixed bottom-6 right-6 p-4 bg-jap-black dark:bg-jap-white text-jap-white dark:text-jap-black rounded-full shadow-lg hover:bg-jap-red dark:hover:bg-jap-red hover:text-white transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatRef}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-80 md:w-96 bg-jap-white dark:bg-jap-black rounded-sm shadow-2xl border-2 border-jap-black dark:border-jap-white z-50 overflow-hidden flex flex-col h-[500px]"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-jap-black dark:text-jap-white hover:text-jap-red transition-colors p-1 z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-1 p-4 pt-10 overflow-y-auto space-y-4 bg-neutral-100 dark:bg-neutral-900/50 no-scrollbar">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 text-sm font-mono ${msg.role === 'user'
                                            ? 'bg-jap-black dark:bg-jap-white text-jap-white dark:text-jap-black border border-jap-black dark:border-jap-white'
                                            : 'bg-white dark:bg-neutral-800 text-jap-black dark:text-jap-white border border-neutral-300 dark:border-neutral-700 shadow-sm'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-neutral-800 p-3 border border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-500 animate-pulse">
                                        Thinking...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 bg-jap-white dark:bg-jap-black border-t-2 border-jap-black dark:border-jap-white">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-2 border border-jap-black dark:border-jap-white bg-transparent text-jap-black dark:text-jap-white font-mono text-sm focus:outline-none focus:border-jap-red dark:focus:border-jap-red transition-colors placeholder:text-neutral-400"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={loading}
                                    className="p-2 bg-jap-black dark:bg-jap-white text-jap-white dark:text-jap-black hover:bg-jap-red dark:hover:bg-jap-red hover:text-white transition-colors disabled:opacity-50 border border-jap-black dark:border-jap-white"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
