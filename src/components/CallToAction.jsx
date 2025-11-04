import React from 'react';
import { Rocket, ShieldCheck, Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="get-started" className="relative py-20 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform How You Search Your Data?</h2>
          <p className="mt-4 text-indigo-100">Deploy your private, offline multimodal RAG system today.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#request-demo" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-indigo-700 font-semibold shadow-lg hover:bg-indigo-50">
            <Rocket size={18}/> Request Demo
          </a>
          <a href="#docs" className="inline-flex items-center gap-2 rounded-md bg-indigo-500/20 px-6 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-indigo-500/30">
            View Documentation
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-500/20 px-6 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-indigo-500/30">
            Contact Sales
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-indigo-100">
          <div className="flex items-center gap-2"><Check size={16}/> No cloud upload required</div>
          <div className="flex items-center gap-2"><Check size={16}/> Complete data privacy</div>
          <div className="flex items-center gap-2"><Check size={16}/> Works on your infrastructure</div>
        </div>

        <div id="contact" className="mt-16 rounded-2xl bg-white text-gray-900 p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium ring-1 ring-emerald-200">
                <ShieldCheck size={14}/> Offline • Private by Design
              </div>
              <h3 className="mt-3 text-xl font-semibold">Built for Smart India Hackathon 2024</h3>
              <p className="mt-1 text-gray-700">Have questions? Our team can help you evaluate fit, deployment, and security.</p>
            </div>
            <a href="mailto:team@example.com" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700">Email Us</a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Support</a>
              <a href="#" className="hover:text-gray-900">Technical Docs</a>
            </div>
            <p>© {new Date().getFullYear()} OmniRAG — All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
