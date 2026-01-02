import React from 'react';

const FaqItem = ({ question, answer }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{question}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{answer}</p>
    </div>
);

const Join = () => {
    return (
        <section id="join" className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-700 font-bold uppercase tracking-wider text-sm mb-2 block">Get Involved</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Join the Network</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Become a host volunteer and contribute to one of the largest collaborative research networks in the world.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 grid gap-6">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2 px-2">Common Questions</h3>

                            <div className="grid gap-4">
                                <FaqItem
                                    question="What are the benefits of hosting?"
                                    answer="You contribute to global research. Researchers use the data to survey bird population health. Volunteers receive reports on which species flew over their property."
                                />
                                <FaqItem
                                    question="How do they work?"
                                    answer="Small acoustic recorders with a microphone in a skyward funnel connect to a small computer (Raspberry Pi) that sends recordings to Birds Canada via WiFi."
                                />
                                <FaqItem
                                    question="When do they operate?"
                                    answer="Migration seasons only: Spring (March-May) and Fall (August-October). They record at night (dusk to dawn), cycling 10 minutes on, 10 minutes off."
                                />
                                <FaqItem
                                    question="Privacy & Data Usage?"
                                    answer="They do not record human voices (birds are higher frequency). Internet usage is ~12GB/month (like one 4K movie). Power usage is negligible (<$1/month)."
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-emerald-50 text-emerald-900 p-8 rounded-lg border border-emerald-100">
                                <h3 className="font-bold text-2xl mb-4">Ready to Host?</h3>
                                <p className="mb-8 font-medium">
                                    We are looking for volunteers across Canada.
                                </p>

                                <div className="space-y-4">
                                    <div className="text-sm font-semibold opacity-90">Contact our team:</div>
                                    <a href="mailto:MotusAudioRecorder@gmail.com" className="block text-center bg-white text-emerald-800 border border-emerald-200 px-6 py-4 rounded font-bold hover:bg-emerald-50 transition-colors">
                                        MotusAudioRecorder@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-slate-100 p-8 rounded-lg text-center text-slate-400">
                                [Image of Deployment]
                                <div className="mt-4 p-4 bg-white rounded border border-slate-200">
                                    <p className="text-xs text-center text-slate-500 font-medium">Natalie and Madison deploying on Pelee Island.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;
