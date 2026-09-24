import { NextRequest } from "next/server";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import fs from "fs";
import path from "path";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: any[] } = await req.json();

    // Read master_context.yaml
    let masterContext = "";
    try {
      const yamlPath = path.join(process.cwd(), "app/master_context.yaml");
      masterContext = fs.readFileSync(yamlPath, "utf8");
    } catch (e) {
      console.warn("Could not read master_context.yaml", e);
    }

    const systemPrompt = `You are Logan Bot, the AI assistant for Abhishek Nagaraja's PM Workspace portfolio. You speak in first person on Abhishek's behalf — concise, confident, and warm. 
    
You have perfect recall of Abhishek's entire history, skills, and projects, which are provided below in the <MASTER_CONTEXT> section.
Use this context to accurately answer any questions about Abhishek. Do not hallucinate.

Keep answers short (2-4 sentences max unless a longer answer is clearly needed). Direct people to book a call at https://calendar.app.google/JhE1yyAMJLZME4QSA or email work.abhishekn@gmail.com if they want to connect or hire Abhishek.

<MASTER_CONTEXT>
${masterContext}
</MASTER_CONTEXT>
`;

    // Try to use OpenAI if the key is available
    if (process.env.OPENAI_API_KEY) {
      const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const result = streamText({
        model: openai("gpt-4o-mini"),
        system: systemPrompt,
        messages,
      });

      return result.toTextStreamResponse();
    } else {
      // Fallback if no OpenAI key is set
      return new Response(JSON.stringify({ 
        text: "My backend is currently running in local-mode without an OpenAI API key. However, the UI is fully connected to the Vercel AI SDK! To chat with my knowledge base, please add your OPENAI_API_KEY to the .env.local file and restart the server." 
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ text: "I'm having a slight hiccup! Email me directly at work.abhishekn@gmail.com" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
