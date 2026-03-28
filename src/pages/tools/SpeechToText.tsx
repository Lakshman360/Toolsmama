import { useState } from "react";
import { Mic, Volume2, Trash2, Zap, ShieldCheck, Sparkles, Play, Square } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function SpeechToText() {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event: any) => setError(event.error);
    
    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setText((prev) => prev + event.results[i][0].transcript + " ");
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };

    recognition.start();
    (window as any).recognition = recognition;
  };

  const stopListening = () => {
    if ((window as any).recognition) {
      (window as any).recognition.stop();
    }
  };

  return (
    <ToolLayout
      title="Speech to Text"
      desc="Convert your voice into text in real-time using your microphone."
      icon={Mic}
      badge="Misc Tool"
      features={[
        { icon: Sparkles, title: "Real-Time", desc: "See your words appear as you speak." },
        { icon: Zap, title: "Browser Based", desc: "Uses native Web Speech API for processing." },
        { icon: ShieldCheck, title: "Private", desc: "Audio is processed locally by your browser." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-sm font-bold">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={isListening ? stopListening : startListening}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all shadow-xl ${isListening ? "bg-rose-500 text-white animate-pulse" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
          >
            {isListening ? <Square size={48} fill="currentColor" /> : <Mic size={48} />}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            {isListening ? "Listening... Speak now" : "Click the microphone to start"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Transcribed Text</h4>
            <button onClick={() => setText("")} className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
          <div className="w-full min-h-[200px] p-8 bg-slate-50 border border-slate-100 rounded-3xl text-slate-700 leading-relaxed font-medium">
            {text || "Your transcribed text will appear here..."}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
