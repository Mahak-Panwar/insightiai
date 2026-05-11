import pricingData from "@/pricing.json";

export function AuditSpend(data) {
  const formData = {...data};
console.log("Formdata:",formData)
  let expectedCost = 0;

  // Token-based tools
  if (formData.tokens && pricingData[formData.AI]?.[formData.plan]?.input) {
    expectedCost = (formData.tokens / 1_000_000) * pricingData[formData.AI][formData.plan].input;
    console.log(expectedCost)
  }

  // Seat-based tools
  if (formData.seats && pricingData[formData.AI]?.[formData.plan]?.price) {
    expectedCost = formData.seats * pricingData[formData.AI][formData.plan].price;
    console.log(expectedCost)
  }

  // Mixed case (Claude Enterprise, ChatGPT Business Codex)
  if (formData.tokens && formData.seats && pricingData[AI]?.[plan]) {
    const tokenCost = (formData.tokens / 1_000_000) * (pricingData[formData.AI][formData.plan].input || 0);
    const seatCost = formData.seats * (pricingData[formData.AI][formData.plan].seat || 0);
    expectedCost = tokenCost + seatCost;
    console.log(expectedCost)
  }
const spend= formData.spend
const AI = formData.AI
  return {
    expectedCost,
    AI,
    spend,
    status: spend > expectedCost ? "overspending" : "ok",
    saving: spend > expectedCost ? spend - expectedCost : 0
  };
}

