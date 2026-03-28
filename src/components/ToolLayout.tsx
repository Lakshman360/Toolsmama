import { Link, useParams } from "react-router-dom";
import { ArrowLeft, LucideIcon, ShieldCheck, Zap, Sparkles, Info, Star, HelpCircle } from "lucide-react";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { TOOLS } from "../registry/tools";

interface ToolLayoutProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge: string;
  children: React.ReactNode;
  features?: { icon: LucideIcon; title: string; desc: string }[];
}

export default function ToolLayout({ title, desc, icon: Icon, badge, children, features }: ToolLayoutProps) {
  const { id } = useParams<{ id: string }>();
  const toolFromRegistry = useMemo(() => TOOLS.find(t => t.id === id), [id]);

  const finalSeoTitle = toolFromRegistry?.seoTitle || `${title} - SmartConverter`;
  const finalMetaDescription = toolFromRegistry?.metaDescription || desc;
  const finalKeywords = toolFromRegistry?.keywords || [];
  const finalContent = toolFromRegistry?.content;

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{finalSeoTitle}</title>
        <meta name="description" content={finalMetaDescription} />
        {finalKeywords.length > 0 && <meta name="keywords" content={finalKeywords.join(", ")} />}
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools.html" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-12 transition-all hover:-translate-x-1">
          <ArrowLeft size={18} />
          Back to all tools
        </Link>

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-6"
          >
            <Icon size={14} />
            {badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            {desc}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>

        {features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feat.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{feat.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Content for SEO */}
        {finalContent && (
          <div className="mt-16 space-y-12 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">What is this tool?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {finalContent.whatIsIt}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">How it works?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {finalContent.howItWorks}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-indigo-600" size={20} />
                  <h2 className="text-xl font-bold text-slate-900">Key Features</h2>
                </div>
                <ul className="space-y-3">
                  {finalContent.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-indigo-600" size={20} />
                  <h2 className="text-xl font-bold text-slate-900">Benefits</h2>
                </div>
                <ul className="space-y-3">
                  {finalContent.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">When to use it?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {finalContent.whenToUse}
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
