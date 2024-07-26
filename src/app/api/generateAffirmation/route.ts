import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_KEY_OPENAI,
});

export async function POST(request: Request) {
  const body = await request.json();

  const result = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that generates positive and uplifting daily affirmations. These affirmations should be tailored to the user's selected theme and should focus on personal growth, self-improvement, and well-being. Ensure that each affirmation is encouraging, motivational, and supportive.",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: body.meditationPrompt,
          },
        ],
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return Response.json({ message: result.choices[0].message.content });
}
