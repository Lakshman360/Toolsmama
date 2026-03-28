import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setError("Please enter valid positive numbers for weight and height.");
      setBmi(null);
      return;
    }
    
    setError(null);
    setBmi(w / (h * h));
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: "Underweight", color: "text-blue-500" };
    if (val < 25) return { label: "Normal weight", color: "text-green-500" };
    if (val < 30) return { label: "Overweight", color: "text-orange-500" };
    return { label: "Obese", color: "text-red-500" };
  };

  return (
    <ToolContainer
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI) to check your health status."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="170"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <button
              onClick={calculate}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Calculate BMI
            </button>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-slate-100 min-h-[200px]">
            {error ? (
              <div className="text-red-500 font-bold text-center">
                {error}
              </div>
            ) : bmi ? (
              <div className="text-center space-y-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Your BMI</div>
                <div className="text-5xl font-black text-indigo-600">{bmi.toFixed(1)}</div>
                <div className={`text-xl font-bold ${getCategory(bmi).color}`}>
                  {getCategory(bmi).label}
                </div>
              </div>
            ) : (
              <div className="text-slate-400 font-medium text-center">
                Enter your details to see your BMI result
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
