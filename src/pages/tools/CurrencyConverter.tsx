import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { RefreshCw } from "lucide-react";

const CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    setLoading(true);
    setError(null);
    try {
      // Using a free API for demonstration. In production, use a more reliable one with an API key.
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();
      if (data.result === "success") {
        setRates(data.rates);
      } else {
        throw new Error("Failed to fetch rates");
      }
    } catch (err) {
      setError("Could not fetch live rates. Using offline mode.");
      // Fallback rates if API fails
      setRates({
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.34,
        INR: 83.34,
        AUD: 1.53,
        CAD: 1.35,
        CHF: 0.90,
        CNY: 7.23,
        AED: 3.67,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, [fromCurrency]);

  const convertedAmount = rates[toCurrency] ? (parseFloat(amount) * rates[toCurrency]).toFixed(2) : "0.00";

  return (
    <ToolContainer
      title="Currency Converter"
      description="Convert currencies with real-time exchange rates."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1.00"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={fetchRates}
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-50 text-indigo-600 rounded-2xl font-bold text-sm hover:bg-indigo-100 transition-all disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              {loading ? "Updating Rates..." : "Refresh Rates"}
            </button>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-slate-100 min-h-[200px] relative overflow-hidden">
            {error && (
              <div className="absolute top-4 left-0 right-0 text-center text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                {error}
              </div>
            )}
            <div className="text-center space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Converted Amount</div>
              <div className="text-5xl font-black text-indigo-600">
                {CURRENCIES.find(c => c.code === toCurrency)?.symbol} {convertedAmount}
              </div>
              <div className="text-sm font-bold text-slate-400">
                1 {fromCurrency} = {rates[toCurrency]?.toFixed(4)} {toCurrency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
