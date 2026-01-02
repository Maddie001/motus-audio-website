import React from 'react';

const People = () => {
  return (
    <section id="people" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">The Team</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { name: "Natalie Emerick", role: "MSc Student", uni: "University of Windsor" },
            { name: "Madison Bygrove", role: "MSc Student", uni: "University of Windsor" },
            { name: "Dan Mennill", role: "Professor of Biology", uni: "University of Windsor" },
          ].map((person, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-200 w-72 text-center">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center text-slate-500 text-3xl font-bold">
                {person.name[0]}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-1">{person.name}</h3>
              <p className="text-emerald-700 font-medium text-sm mb-2">{person.role}</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">{person.uni}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center ">
          <p className="text-slate-500 text-sm font-medium mb-6">In collaboration with</p>
          <div className="flex justify-center items-center gap-8 text-slate-500">
            <span className="font-bold text-xl">Birds Canada</span>
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
            <span className="font-bold text-xl">University of Windsor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
