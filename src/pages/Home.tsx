import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../registry/categories";
import { TOOLS } from "../registry/tools";

export default function Home() {
  const [currentCat, setCurrentCat] = useState<string | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "SmartConverter - All-in-One Online Tools Hub";
  }, []);

  const featuredTools = useMemo(() => {
    // Show top 9 tools as featured
    return TOOLS.slice(0, 9);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50/50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-8"
          >
            <Zap size={16} />
            100% Free & Browser-Based
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            All the tools you need,<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              right in your browser
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            No installs, no uploads to servers. Powerful tools that work entirely on your device — fast, private, and always free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/tools.html"
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
            >
              Browse All Tools
            </Link>
            <a
              href="#featured"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:border-indigo-500 hover:text-indigo-600 transition-all active:scale-95"
            >
              Featured Tools
            </a>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 py-8">
            <StatItem num={`${TOOLS.length}`} label="Working Tools" />
            <StatItem num="0" label="Uploads Required" />
            <StatItem num="100%" label="Browser-Based" />
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      <section id="featured" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Featured Tools</h2>
              <p className="text-slate-500">Our most popular browser-based utilities</p>
            </div>
            <Link 
              to="/tools.html" 
              className="group flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
            >
              View All Tools
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredTools.map((tool, idx) => {
              const catInfo = CATEGORIES.find(c => c.id === tool.category);
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    to={`/tool/${tool.id}`}
                    className="group block bg-white border border-slate-200 rounded-3xl p-6 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110 ${catInfo?.color || "bg-slate-100 text-slate-600"}`}>
                        <tool.icon size={28} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{tool.description}</p>
                      </div>
                      <div className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/tools.html"
              className="inline-flex items-center gap-2 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
            >
              Explore All {TOOLS.length} Tools
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureItem 
              icon={ShieldCheck} 
              title="100% Private" 
              desc="Your files never leave your device. No privacy concerns, no server costs — just instant results." 
            />
            <FeatureItem 
              icon={Zap} 
              title="Lightning Fast" 
              desc="Everything runs locally in your browser. No uploads, no waiting, no server round-trips." 
            />
            <FeatureItem 
              icon={Globe} 
              title="Works Everywhere" 
              desc="Access your favorite tools from any device with a modern web browser. No installation needed." 
            />
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>
    </div>
  );
}

function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-1">
        {num}
      </div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-indigo-100 leading-relaxed">{desc}</p>
    </div>
  );
}
