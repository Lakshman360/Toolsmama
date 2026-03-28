import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const today = new Date();
    const birth = new Date(birthDate);
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <ToolContainer
      title="Age Calculator"
      description="Calculate your exact age in years, months, and days."
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Select Birth Date</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-700"
          />
          <button
            onClick={calculateAge}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            Calculate Age
          </button>
        </div>

        {age && (
          <div className="grid grid-cols-3 gap-4">
            <AgeBox label="Years" value={age.years} />
            <AgeBox label="Months" value={age.months} />
            <AgeBox label="Days" value={age.days} />
          </div>
        )}
      </div>
    </ToolContainer>
  );
}

function AgeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
      <div className="text-3xl font-black text-indigo-600 mb-1">{value}</div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}
