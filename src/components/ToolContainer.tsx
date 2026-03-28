import { ReactNode, useMemo } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Copy, Download, ShieldCheck, Zap, Star, HelpCircle, Info } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TOOLS } from "../registry/tools";

interface ToolContainerProps {
  title: string;
  description: string;
  children: ReactNode;
  onShare?: () => void;
  onCopy?: () => void;
  onDownload?: () => void;
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  content?: {
    whatIsIt: string;
    howItWorks: string;
    keyFeatures: string[];
    benefits: string[];
    whenToUse: string;
  };
}

export default function ToolContainer({
  title,
  description,
  children,
  onShare,
  onCopy,
  onDownload,
  seoTitle,
  metaDescription,
  keywords,
  content: manualContent
}: ToolContainerProps) {
  const { id } = useParams<{ id: string }>();
  const toolFromRegistry = useMemo(() => TOOLS.find(t => t.id === id), [id]);

  const finalSeoTitle = seoTitle || toolFromRegistry?.seoTitle || `${title} - SmartConverter`;
  const finalMetaDescription = metaDescription || toolFromRegistry?.metaDescription || description;
  const finalKeywords = keywords || toolFromRegistry?.keywords || [];
  const finalContent = manualContent || toolFromRegistry?.content;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <Helmet>
        <title>{finalSeoTitle}</title>
        <meta name="description" content={finalMetaDescription} />
        {finalKeywords.length > 0 && <meta name="keywords" content={finalKeywords.join(", ")} />}
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back */}
        <Link 
          to="/tools.html" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Tools
        </Link>

        {/* Tool Header */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight"
              >
                {title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
            
            <div className="flex items-center gap-2">
              {onShare && (
                <button 
                  onClick={onShare}
                  className="p-3 rounded-2xl bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                  title="Share Tool"
                >
                  <Share2 size={20} />
                </button>
              )}
              {onCopy && (
                <button 
                  onClick={onCopy}
                  className="p-3 rounded-2xl bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                  title="Copy Result"
                >
                  <Copy size={20} />
                </button>
              )}
              {onDownload && (
                <button 
                  onClick={onDownload}
                  className="p-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                  title="Download Result"
                >
                  <Download size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Tool Content Area */}
          <div className="space-y-8">
            {children}
          </div>
        </div>

        {/* Related Tools */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TOOLS
              .filter(t => t.id !== id)
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map(tool => (
                <Link
                  key={tool.id}
                  to={`/tool/${tool.id}`}
                  className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100 font-bold text-sm"
                >
                  {tool.name}
                </Link>
              ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-indigo-600" size={20} />
            <h3 className="text-indigo-900 font-bold">Privacy First & Secure</h3>
          </div>
          <p className="text-indigo-700 text-sm leading-relaxed">
            This tool works entirely in your browser. Your data is processed locally using client-side JavaScript and never uploaded to our servers. We prioritize your privacy and data security.
          </p>
        </div>

        {/* Detailed Content for SEO */}
        {finalContent && (
          <div className="space-y-12 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
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
