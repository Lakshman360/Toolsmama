import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../registry/categories";
import { TOOLS } from "../registry/tools";

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "All Tools - SmartConverter";
  }, []);

  const filteredTools = useMemo(() => {
    return TOOLS.filter(t => 
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toolsByCategory = useMemo(() => {
    const grouped: Record<string, typeof TOOLS> = {};
    CATEGORIES.forEach(cat => {
      const tools = filteredTools.filter(t => t.category === cat.id);
      if (tools.length > 0) {
        grouped[cat.id] = tools;
      }
    });
    return grouped;
  }, [filteredTools]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            All Tools
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto"
          >
            Browse our complete collection of {TOOLS.length} 100% free, browser-based tools. No uploads, no servers, just instant results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search tools by name or description..."
              className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="popLayout">
          {Object.keys(toolsByCategory).length > 0 ? (
            CATEGORIES.map(cat => {
              const tools = toolsByCategory[cat.id];
              if (!tools) return null;

              return (
                <motion.section 
                  key={cat.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-16 last:mb-0"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color}`}>
                      <cat.icon size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{cat.name}</h2>
                    <div className="h-px bg-slate-200 flex-1 ml-4" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, idx) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={`/tool/${tool.id}`}
                          className="group block bg-white border border-slate-200 rounded-3xl p-6 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all active:scale-[0.98]"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110 ${cat.color || "bg-slate-100 text-slate-600"}`}>
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
                    ))}
                  </div>
                </motion.section>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 text-slate-400 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No tools found</h3>
              <p className="text-slate-500">Try searching for something else</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Zap className="mx-auto mb-6 text-indigo-200" size={48} />
          <h2 className="text-3xl font-black mb-4">Need a specific tool?</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            We're constantly adding new tools. If you can't find what you're looking for, let us know!
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Request a Tool
          </Link>
        </div>
      </section>
    </div>
  );
}
