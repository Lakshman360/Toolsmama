import { ShieldCheck, Zap, Heart, Globe, Smartphone, Code } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - SmartConverter";
  }, []);

  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            About SmartConverter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            A collection of powerful, privacy-first online tools — built to run entirely in your browser.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <ValueCard icon={ShieldCheck} title="Privacy First" desc="Your files and data never leave your device. All processing happens locally in your browser." />
          <ValueCard icon={Zap} title="Always Fast" desc="No uploads, no waiting. Results are instant because everything runs on your machine." />
          <ValueCard icon={Heart} title="Always Free" desc="Every tool on SmartConverter is completely free, with no limits, no sign-up required." />
          <ValueCard icon={Globe} title="Works Offline" desc="Once the page is loaded, many tools work without an internet connection." />
          <ValueCard icon={Smartphone} title="Mobile Friendly" desc="Fully responsive design that works great on phones, tablets, and desktops." />
          <ValueCard icon={Code} title="Developer Built" desc="Built with clean, modern React and Tailwind CSS — no server-side processing." />
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Our Mission</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            SmartConverter was created with a simple goal: to provide useful, everyday tools that respect user privacy and require zero setup. No accounts, no cloud uploads, no subscriptions.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            We believe that utility tools should be simple, fast, and accessible to everyone. Whether you're a student, developer, designer, or just someone who needs to quickly convert a file — SmartConverter has you covered.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Every tool on this platform runs entirely inside your web browser using JavaScript APIs. When you compress an image, the data stays on your device. When you generate a password, it's computed locally using your browser's cryptographic API.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            This approach means we never see your data — ever. It also means the tools are lightning fast, since there's no server round-trip.
          </p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:border-indigo-300 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
