import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Join from './components/Join';
import DashboardLink from './components/DashboardLink';
import People from './components/People';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
      <Navbar />
      <main>
        <About />
        <Join />
        <DashboardLink />
        <People />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Motus Audio. All rights reserved.</p>
        <p className="mt-2">University of Windsor • Birds Canada</p>
      </footer>
    </div>
  );
}

export default App;
