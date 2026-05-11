"use client"
import { useEffect,useState } from "react";
import { generateSummary } from "@/function/Summary";
export default function AuditResult({ result}) {
   
    const [summary, setSummary] = useState("");
   
  
  useEffect(() => {
    async function fetchSummary() {
      async function getSummary(result) {
        console.log("Result:",result)
    const res = await fetch("/api/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result })
    });
    const data = await res.json();
    console.log("data:",data.summary)
    return data.summary;
    
  }
      
      const text = await getSummary(result);
      setSummary(text);
    }
    if (result) {
      fetchSummary();
    }
  }, [result]);


  return (
    <div className="mt-6 p-4 border rounded-lg shadow bg-white">
      <h3 className="text-lg font-bold mb-2">Audit Result</h3>

      <p className="text-gray-700">
        <strong>Expected Cost:</strong> ${result.expectedCost.toFixed(2)}
      </p>
      <p className="text-gray-700">
        <strong>Your Spend:</strong> ${result.spend}
      </p>

      {result.status === "overspending" ? (
        <p className="text-red-600 font-semibold">
          ⚠️ Overspending detected! You could save ${result.saving.toFixed(2)}.
        </p>
      ) : (
        <p className="text-green-600 font-semibold">
          ✅ Your spend is optimal.
        </p>
      )}

{summary && (
  <div className="mt-4 p-3 bg-gray-50 rounded">
    <h4 className="font-semibold mb-2">Personalized Summary</h4>
    <p className="text-gray-700">{summary}</p>
  </div>
)}

    </div>
  );
}
