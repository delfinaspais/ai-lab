import { getWeather } from "./tools";
import { streamText, convertToModelMessages, stepCountIs } from "ai";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: "openai/gpt-5-mini",
  system: `You are a helpful assistant. When using tools, only mention
capabilities you actually have. The weather tool provides current
temperature, conditions, and humidity only - no forecasts.`,
      messages: await convertToModelMessages(messages),
      tools: { getWeather },
      stopWhen: stepCountIs(5),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}