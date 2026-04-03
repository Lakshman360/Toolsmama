import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Heart, Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SITE_NAME = "ToolsMama";
const TAGLINE = "All-in-One Free Online Tools";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#111827] font-sans text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex flex-col group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform">
                  T
                </div>
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {SITE_NAME}
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-1 ml-10 hidden sm:block">
                {TAGLINE}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
              <NavLink to="/tools.html" active={location.pathname === "/tools" || location.pathname === "/tools.html"}>Tools</NavLink>
              <NavLink to="/blog" active={location.pathname === "/blog"}>Blog</NavLink>
              <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
              
              <Link
                to="/tools"
                className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Browse Tools
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/tools.html" onClick={() => setIsMenuOpen(false)}>Tools</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                <Link
                  to="/tools"
                  className="mt-2 w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Tools
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#111827] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">
                  T
                </div>
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {SITE_NAME}
                </span>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                Free, fast, and secure online tools. Process files right in your browser — no uploads, no servers.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Email: <a href="mailto:support@toolsmama.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@toolsmama.com</a>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider">PDF Tools</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/tool/merge-pdf">Merge PDF</FooterLink></li>
                <li><FooterLink to="/tool/split-pdf">Split PDF</FooterLink></li>
                <li><FooterLink to="/tool/compress-pdf">Compress PDF</FooterLink></li>
                <li><FooterLink to="/tool/pdf-to-jpg">PDF to JPG</FooterLink></li>
                <li><FooterLink to="/tool/jpg-to-pdf">JPG to PDF</FooterLink></li>
                <li><FooterLink to="/tool/pdf-to-word">PDF to Word</FooterLink></li>
                <li><FooterLink to="/tool/word-to-pdf">Word to PDF</FooterLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Utility Tools</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li><FooterLink to="/tool/image-compressor">Image Compressor</FooterLink></li>
                <li><FooterLink to="/tool/word-counter">Word Counter</FooterLink></li>
                <li><FooterLink to="/tool/qr-generator">QR Code Generator</FooterLink></li>
                <li><FooterLink to="/tool/password-generator">Password Generator</FooterLink></li>
                <li><FooterLink to="/tool/case-converter">Case Converter</FooterLink></li>
                <li><FooterLink to="/tool/json-formatter">JSON Formatter</FooterLink></li>
                <li><FooterLink to="/tool/base64">Base64 Encode/Decode</FooterLink></li>
                <li><FooterLink to="/tool/text-to-speech">Text to Speech</FooterLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/blog">Blog</FooterLink></li>
                <li><FooterLink to="/about">About Us</FooterLink></li>
                <li><FooterLink to="/contact">Contact</FooterLink></li>
                <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <div className="flex items-center gap-1">
              <span>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> — 100% free & browser-based
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active 
          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" 
          : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
    >
      {children}
    </Link>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
      {children}
    </Link>
  );
}
