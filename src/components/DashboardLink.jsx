import React from 'react';

const DashboardLink = () => {
    return (
        <section id="dashboard" className="py-24 bg-slate-900 text-white flex items-center justify-center">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 text-white">Live Data Dashboard</h2>
                <p className="text-xl text-slate-300 mb-12">
                    Watch migration happen in real-time. Explore live data from recorders across North America.
                </p>

                <div className="relative inline-block">
                    <a
                        href="https://nighthawk-motus.migrationbiology.org/dashboard"
                        target="_blank"
                        rel="noreferrer"
                        className="px-10 py-5 bg-emerald-600 rounded flex items-center gap-3 hover:bg-emerald-500 transition-colors"
                    >
                        <span className="font-bold text-xl text-white">View Nighthawk Dashboard</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DashboardLink;
