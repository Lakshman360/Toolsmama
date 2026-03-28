import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

const UNIT_TYPES = {
  length: {
    name: "Length",
    units: {
      meters: 1,
      kilometers: 0.001,
      centimeters: 100,
      millimeters: 1000,
      miles: 0.000621371,
      yards: 1.09361,
      feet: 3.28084,
      inches: 39.3701,
    },
  },
  weight: {
    name: "Weight",
    units: {
      kilograms: 1,
      grams: 1000,
      milligrams: 1000000,
      pounds: 2.20462,
      ounces: 35.274,
      tons: 0.00110231,
    },
  },
  temperature: {
    name: "Temperature",
    units: {
      celsius: "C",
      fahrenheit: "F",
      kelvin: "K",
    },
  },
  volume: {
    name: "Volume",
    units: {
      liters: 1,
      milliliters: 1000,
      gallons: 0.264172,
      quarts: 1.05669,
      pints: 2.11338,
      cups: 4.22675,
    },
  },
};

export default function UnitConverter() {
  const [type, setType] = useState<keyof typeof UNIT_TYPES>("length");
  const [fromUnit, setFromUnit] = useState(Object.keys(UNIT_TYPES.length.units)[0]);
  const [toUnit, setToUnit] = useState(Object.keys(UNIT_TYPES.length.units)[1]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleTypeChange = (newType: keyof typeof UNIT_TYPES) => {
    setType(newType);
    const units = Object.keys(UNIT_TYPES[newType].units);
    setFromUnit(units[0]);
    setToUnit(units[1]);
    setResult(null);
  };

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    if (type === "temperature") {
      let celsius = val;
      if (fromUnit === "fahrenheit") celsius = (val - 32) * (5 / 9);
      if (fromUnit === "kelvin") celsius = val - 273.15;

      let final = celsius;
      if (toUnit === "fahrenheit") final = celsius * (9 / 5) + 32;
      if (toUnit === "kelvin") final = celsius + 273.15;
      
      setResult(final.toFixed(2));
    } else {
      const units = UNIT_TYPES[type].units as Record<string, number>;
      const inBase = val / units[fromUnit];
      const final = inBase * units[toUnit];
      setResult(final.toFixed(4));
    }
  };

  return (
    <ToolContainer
      title="Unit Converter"
      description="Convert between various units of length, weight, temperature, and volume."
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {Object.entries(UNIT_TYPES).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handleTypeChange(key as keyof typeof UNIT_TYPES)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                type === key ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">From</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value"
                className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-40 px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                {Object.keys(UNIT_TYPES[type].units).map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">To</label>
            <div className="flex gap-2">
              <div className="flex-1 px-6 py-4 bg-slate-100 border border-slate-200 rounded-3xl font-bold text-slate-400">
                {result || "Result"}
              </div>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-40 px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                {Object.keys(UNIT_TYPES[type].units).map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={convert}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Convert
        </button>

        {result && (
          <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Result</div>
            <div className="text-4xl font-black text-indigo-600">
              {value} {fromUnit} = {result} {toUnit}
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
