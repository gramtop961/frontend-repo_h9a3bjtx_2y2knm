import React from 'react';
import { 
  GitBranch,
  SearchX,
  Clock,
  UploadCloud,
  Network,
  MessageSquare,
  ShieldCheck,
  FileText,
  Image as ImageIcon,
  Mic,
  Link,
  CheckCircle,
  Zap,
  Cpu
} from 'lucide-react';

const SectionWrapper = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && <p className="mt-4 text-gray-700">{subtitle}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const ProblemSection = () => (
  <SectionWrapper
    id="problem"
    title="The Data Chaos Challenge"
  >
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><GitBranch size={20}/></div>
          <h3 className="font-semibold">Siloed Data</h3>
        </div>
        <p className="mt-3 text-gray-700">Organizations handle PDF reports, Word documents, screenshots, recorded calls, and handwritten notes—all stored separately.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><SearchX size={20}/></div>
          <h3 className="font-semibold">Search Limitations</h3>
        </div>
        <p className="mt-3 text-gray-700">Traditional search can't understand context across formats. Finding "that screenshot from the morning call about Q4 targets" is nearly impossible.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Clock size={20}/></div>
          <h3 className="font-semibold">Wasted Time</h3>
        </div>
        <p className="mt-3 text-gray-700">Teams spend hours manually searching through folders, transcripts, and image libraries instead of focusing on insights.</p>
      </div>
    </div>
    <div className="mt-8 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-gray-200 p-6">
      <p className="text-gray-800 font-medium">What if you could ask your data questions—in plain English—and get answers from ALL your sources at once?</p>
    </div>
  </SectionWrapper>
);

const SolutionSection = () => (
  <SectionWrapper id="features" title="Meet Your Intelligent Knowledge Assistant">
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <FileText className="mx-auto text-indigo-600"/>
            <p className="mt-2 text-sm text-gray-700">Documents & PDFs</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <ImageIcon className="mx-auto text-indigo-600"/>
            <p className="mt-2 text-sm text-gray-700">Images & Screenshots</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <Mic className="mx-auto text-indigo-600"/>
            <p className="mt-2 text-sm text-gray-700">Voice & Audio</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <ShieldCheck className="mx-auto text-indigo-600"/>
            <p className="mt-2 text-sm text-gray-700">Grounded Answers</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><UploadCloud size={20}/></div>
            <h3 className="font-semibold">Multimodal Ingestion</h3>
          </div>
          <p className="mt-3 text-gray-700">Automatically extracts text from DOC/PDF, generates image embeddings, and converts speech to searchable text.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Network size={20}/></div>
            <h3 className="font-semibold">Unified Vector Space</h3>
          </div>
          <p className="mt-3 text-gray-700">Indexes all data types in a shared semantic space—text, images, and audio speak the same language.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><MessageSquare size={20}/></div>
            <h3 className="font-semibold">Natural Language Queries</h3>
          </div>
          <p className="mt-3 text-gray-700">Ask questions like you're talking to a colleague: "Show me reports mentioning international development in 2024".</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><ShieldCheck size={20}/></div>
            <h3 className="font-semibold">Grounded AI Answers</h3>
          </div>
          <p className="mt-3 text-gray-700">Every response cites exact sources—no hallucinations, complete transparency.</p>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Text-to-Everything Search</h4>
        <p className="mt-2 text-gray-700">Type a natural language query and retrieve matching content across all formats—PDFs, images, audio segments, and more.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Image-to-Context Discovery</h4>
        <p className="mt-2 text-gray-700">Upload or select a screenshot, and the system finds related documents, audio transcripts, and text passages that provide context.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Audio Intelligence</h4>
        <p className="mt-2 text-gray-700">Play an audio clip and instantly surface related documents, images, and text that match the spoken content.</p>
      </div>
    </div>

    <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Link size={20}/></div>
        <div>
          <h4 className="font-semibold">Citation Transparency & Cross-Format Linking</h4>
          <p className="mt-2 text-gray-700">Every answer includes numbered citations. See how an audio transcript segment links to a cited paragraph and referenced screenshot.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const HowItWorks = () => (
  <SectionWrapper id="how" title="Simple Interface. Powerful Intelligence." subtitle="Three steps to get from chaos to clarity.">
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><UploadCloud size={20}/></div>
          <h3 className="font-semibold">Step 1: Ingest</h3>
        </div>
        <p className="mt-3 text-gray-700">Import your documents, images, and audio files. The system extracts, processes, and indexes everything automatically.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><MessageSquare size={20}/></div>
          <h3 className="font-semibold">Step 2: Query</h3>
        </div>
        <p className="mt-3 text-gray-700">Ask questions in plain English through a simple chat or search box. No complex syntax required.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><ShieldCheck size={20}/></div>
          <h3 className="font-semibold">Step 3: Discover</h3>
        </div>
        <p className="mt-3 text-gray-700">Receive AI-generated answers grounded in your actual data, with full citations and source transparency.</p>
      </div>
    </div>
  </SectionWrapper>
);

const UseCases = () => (
  <SectionWrapper id="use-cases" title="Built for Real-World Workflows">
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Research & Analysis</h4>
        <p className="mt-2 text-gray-700">Find all mentions of a specific policy across 5 years of reports, meeting recordings, and email screenshots.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Compliance & Audit</h4>
        <p className="mt-2 text-gray-700">Trace decision-making: from recorded call → meeting notes → final signed document with complete citation trail.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Knowledge Management</h4>
        <p className="mt-2 text-gray-700">Onboard new team members: ask questions and instantly access relevant documentation, training videos, and past examples.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold">Content Discovery</h4>
        <p className="mt-2 text-gray-700">Locate that "presentation slide about market trends" even if you don't remember the file name or exact date.</p>
      </div>
    </div>

    <div id="docs" className="mt-10 grid gap-6 md:grid-cols-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700"><ShieldCheck size={18}/> <span className="font-medium">Offline First</span></div>
        <p className="mt-2 text-gray-700">No internet required, complete data privacy.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700"><Zap size={18}/> <span className="font-medium">Fast Retrieval</span></div>
        <p className="mt-2 text-gray-700">Semantic vector search returns results in milliseconds.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700"><Cpu size={18}/> <span className="font-medium">LLM-Powered</span></div>
        <p className="mt-2 text-gray-700">State-of-the-art language models for understanding and generation.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700"><CheckCircle size={18}/> <span className="font-medium">Scalable</span></div>
        <p className="mt-2 text-gray-700">Handles thousands of documents, images, and hours of audio.</p>
      </div>
    </div>
  </SectionWrapper>
);

const Sections = () => {
  return (
    <>
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <UseCases />
    </>
  );
};

export default Sections;
