import { useState, useEffect } from "react";
import { Volume2, Play, Square, Pause, ShieldCheck, Zap, Sliders, Globe } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function TextToSpeech() {
  const [text, setText] = useState("Welcome to SmartConverter! This is a free, browser-based text to speech tool. You can type any text here and listen to it in your preferred voice.");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<number>(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      const enIdx = availableVoices.findIndex(v => v.lang.startsWith("en"));
      if (enIdx >= 0) setSelectedVoice(enIdx);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const toggleSpeech = () => {
    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      startSpeech();
    }
  };

  const startSpeech = () => {
    if (!text.trim()) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (voices[selectedVoice]) utterance.voice = voices[selectedVoice];
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <ToolLayout
      title="Text to Speech"
      desc="Listen to any text using your browser's built-in speech engine. Choose voice, speed, and pitch."
      icon={Volume2}
      badge="Text Tool"
      features={[
        { icon: Globe, title: "Multiple Voices", desc: "Choose from all voices available on your device and browser." },
        { icon: Sliders, title: "Full Control", desc: "Adjust speed, pitch, and volume to find the perfect narration." },
        { icon: ShieldCheck, title: "100% Offline", desc: "Uses your browser's built-in Web Speech API — no server needed." }
      ]}
    >
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Your Text</h4>
            <span className="text-xs font-bold text-slate-400">{text.length.toLocaleString()} characters</span>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste the text you want to hear..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:border-indigo-500 transition-all resize-none font-sans leading-relaxed"
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Voice Selection</label>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-medium text-slate-700"
            >
              {voices.map((voice, idx) => (
                <option key={idx} value={idx}>{voice.name} ({voice.lang})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Speed</label>
                <span className="text-xs font-bold text-indigo-600">{rate.toFixed(2)}x</span>
              </div>
              <input type="range" min="0.25" max="4" step="0.25" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pitch</label>
                <span className="text-xs font-bold text-indigo-600">{pitch.toFixed(1)}</span>
              </div>
              <input type="range" min="0" max="2" step="0.1" value={pitch} onChange={(e) => setPitch(parseFloat(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Volume</label>
                <span className="text-xs font-bold text-indigo-600">{Math.round(volume * 100)}%</span>
              </div>
              <input type="range" min="0" max="1" step="0.05" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
          <div className="flex items-center gap-6">
            <button
              onClick={toggleSpeech}
              className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
            >
              {isPlaying && !isPaused ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <div className="flex-1">
              <div className="text-xl font-black text-slate-900 mb-1">
                {isPlaying ? (isPaused ? "Paused" : "Speaking...") : "Ready to speak"}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {isPlaying ? `Voice: ${voices[selectedVoice]?.name}` : "Press play to start narration"}
              </div>
            </div>
            <button
              onClick={stopSpeech}
              className="p-4 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all"
            >
              <Square size={24} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
