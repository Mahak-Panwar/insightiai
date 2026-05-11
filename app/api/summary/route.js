import { Anthropic } from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
      

 const body = await req.json()
 console.log("Expectedcost:",body.result.expectedCost)
 console.log("spend:",body.result.spend)
 console.log("saving:",body.result.saving)
  const prompt = `
Summarize this audit in ~100 words, highlighting overspending and savings opportunities.
Tone: professional but friendly.
Input: Expected Cost: ${body.result.expectedCost}, Spend: ${body.result.spend}, Saving: ${body.result.saving}, Status: ${body.result.status} also suggest them other plans which is more cost effective even if .
`;

  try {
    const response = await client.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 300,
      messages: [{ role: "user", content: prompt }]
    });

    return Response.json({summary: response.content[0].text});
  } catch (error) {
    console.error("AI summary failed:");
    const fallbacksummary = (body)  => {
  if (body.result.status === "overspending") {
    return `Your current spend of $${body.result.spend} is higher than the expected cost of $${body.result.expectedCost}. 
You could save approximately $${body.result.saving} by switching to the optimal plan.`;
  } else {
    return `Your current spend of $${body.result.spend} matches the expected cost of $${body.result.expectedCost}. 
No overspending detected — your usage is optimal.`;
  }
}
    // Fallback to templated summary
    return Response.json ({summary : fallbacksummary(body)})

  }


}
