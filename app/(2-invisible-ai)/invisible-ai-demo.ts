import dotenvFlow from "dotenv-flow";
dotenvFlow.config();
import { generateText, Output } from "ai";
import { z } from "zod";

// Example: Smart form filling from natural language
async function smartFormFill(userInput: string) {
  console.log("\n🤖 Invisible AI: Smart Form Filling\n");
  console.log(`User types: "${userInput}"\n`);

  const eventSchema = z.object({
    eventTitle: z.string().describe("The title or purpose of the event"),
    date: z.string().describe("The date of the event"),
    time: z.string().nullable().describe("The time of the event"),
    duration: z.string().nullable().describe("How long the event will last"),
    location: z.string().nullable().describe("Where the event will take place"),
    attendees: z.array(z.string()).nullable().describe("People attending"),
    notes: z.string().nullable().describe("Additional notes or agenda items"),
  });

  const { output: eventDetails } = await generateText({
    model: "openai/gpt-5-mini",
    prompt: `Extract calendar event details from: "${userInput}"`,
    output: Output.object({ schema: eventSchema }),
  });

  console.log("✨ AI automatically fills your form:\n");
  console.log(`📅 Event: ${eventDetails.eventTitle}`);
  console.log(`📆 Date: ${eventDetails.date}`);
  if (eventDetails.time) console.log(`⏰ Time: ${eventDetails.time}`);
  if (eventDetails.duration) console.log(`⏳ Duration: ${eventDetails.duration}`);
  if (eventDetails.location) console.log(`📍 Location: ${eventDetails.location}`);
  if (eventDetails.attendees) {
    console.log(`👥 Attendees: ${eventDetails.attendees.join(", ")}`);
  }
  if (eventDetails.notes) console.log(`📝 Notes: ${eventDetails.notes}`);

  console.log("\n✅ Form ready to save - no manual input needed!");
}

// Example: Smart email categorization
async function smartEmailTriage(emailSubject: string, emailPreview: string) {
  console.log("\n📧 Invisible AI: Email Smart Triage\n");

  const emailSchema = z.object({
    category: z
      .enum(["urgent", "action-required", "fyi", "spam", "newsletter"])
      .describe("The type of email"),
    priority: z.enum(["high", "medium", "low"]).describe("The email priority"),
    suggestedFolder: z.string().describe("Where this email should be filed"),
    requiresResponse: z.boolean().describe("Whether the user needs to respond"),
    estimatedResponseTime: z
      .string()
      .nullable()
      .describe("Estimated time needed to respond, if a response is required"),
  });

  const { output: emailTriage } = await generateText({
    model: "openai/gpt-5-mini",
    prompt: `
Analyze this email and categorize it.

Subject: ${emailSubject}

Preview:
${emailPreview}
`,
    output: Output.object({ schema: emailSchema }),
  });

  console.log("✨ AI automatically organizes your email:\n");
  console.log(`📂 Category: ${emailTriage.category}`);
  console.log(`🚦 Priority: ${emailTriage.priority}`);
  console.log(`📁 Suggested folder: ${emailTriage.suggestedFolder}`);
  console.log(`✉️ Requires response: ${emailTriage.requiresResponse ? "Yes" : "No"}`);
  if (emailTriage.estimatedResponseTime) {
    console.log(`⏱️ Estimated response time: ${emailTriage.estimatedResponseTime}`);
  }

  console.log("\n✅ Email triaged automatically!");
}

async function runExamples() {
  // Smart form example
  await smartFormFill(
    "Coffee with John next Tuesday at 2pm at Starbucks on Market St, discuss Q4 roadmap",
  );

  console.log("\n" + "=".repeat(60));

  // Email triage example
  await smartEmailTriage(
    "Re: Q4 Budget Approval Needed by EOD",
    "Hi team, I need your approval on the attached Q4 budget proposal by end of day today. Please review the highlighted sections...",
  );
}

runExamples().catch(console.error);
