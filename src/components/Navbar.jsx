import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-lg">
            M
          </div>
          <span className="text-xl font-bold text-slate-800">Motus Audio</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {['About', 'Join', 'Dashboard', 'People'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="md:hidden bg-slate-800 text-white px-4 py-2 rounded font-bold text-sm"
        >
          Join
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
