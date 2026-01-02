import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Hero Area */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Listening to the Night Sky
          </h1>
          <p className="text-xl text-slate-600">
            Uncovering the secrets of nocturnal bird migration with a Canada-wide acoustic surveillance network.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Nocturnal Flight Calls
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Many birds migrate at night to avoid predators and use celestial cues. As they fly, they produce short, species-specific <strong>"Flight Calls"</strong> (NFCs) to maintain flock cohesion and navigate. Unlike radar, which tracks volume but not species, acoustic monitoring allows us to identify exactly <em>who</em> is flying overhead.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                The Technology
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our <strong>Motus Audio Recorders</strong> are custom-built sensors designed for the Canadian climate. Each unit pairs a high-fidelity <strong>AudioMoth</strong> microphone with a 3D-printed acoustic horn to amplify distant calls. A <strong>Raspberry Pi</strong> computer processes data and uploads it via WiFi.
              </p>
              <div className="p-4 bg-slate-100 rounded text-sm text-slate-500 font-mono">
                AudioMoth Mic + 3D Horn + Raspberry Pi &rarr; Cloud
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Automated Research
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Files are analyzed by <strong>Nighthawk</strong>, a machine learning algorithm that automatically classifies bird calls. This allows us to track migration in near real-time and study how light pollution and landscape fragmentation affect these amazing journeys.
              </p>
            </div>
          </div>

          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center text-slate-400">
            [Image of Recorder]
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
