import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.API_KEY_OPENAI,
// });

const mockMessages: { [key: string]: string[] } = {
  Confidence: [
    "I am confident in my abilities, and I trust myself to handle whatever comes my way. My inner strength guides me through every challenge, empowering me to achieve success with courage and grace. I believe in myself and my potential to shine brightly in all that I do.",
    "I am confident and capable. Every challenge I encounter is an opportunity for me to grow and shine. I trust in my abilities and believe in my inner strength. I embrace each moment with courage and grace, knowing that I am unstoppable.",
  ],
  Motivation: [
    "Today, I am filled with unwavering determination and boundless enthusiasm. My focus on my goals is sharp and clear, and I embrace each challenge as an opportunity to grow and succeed. With every step I take, I am moving closer to the life I envision. Perseverance and action fuel my journey, and I celebrate every small victory along the way. I believe in myself and my ability to achieve greatness.",
  ],
  Gratitude: [
    "Today, I choose to embrace gratitude for both the small joys and the grand blessings in my life. Every moment offers me a chance to appreciate the beauty around me, nurturing my heart with thankfulness and filling my spirit with contentment.",
    "Today, I choose to recognize and appreciate the abundance in my life, both in the smallest moments and the grandest blessings. With a heart full of gratitude, I embrace each day with thankfulness and contentment, knowing that every experience, big or small, contributes to my growth and happiness.",
  ],
  "Stress Relief": [
    "I release my worries and embrace the present moment with deep, calming breaths. Each inhale brings me peace, and each exhale carries away my stress. I am serene, grounded, and at ease.",
    "Today, I embrace the tranquility within me. I let go of all worries and breathe deeply, allowing peace and calm to fill my mind and body. I trust in the process of life and release all stress, knowing that I am safe, supported, and capable of handling whatever comes my way.",
  ],
  Relationships: [
    "Today, I embrace kindness and understanding in all my interactions. I am a source of support and compassion, fostering strong and fulfilling relationships. As I nurture these bonds, they grow deeper and more meaningful, enriching my life with the beauty of connection and mutual respect.",
  ],
};

async function delay(delayInms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  // const result = await openai.chat.completions.create({
  //   model: "gpt-4o",
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a helpful assistant that generates positive and uplifting daily affirmations. These affirmations should be tailored to the user's selected theme and should focus on personal growth, self-improvement, and well-being. Ensure that each affirmation is encouraging, motivational, and supportive.",
  //     },
  //     {
  //       role: "user",
  //       content: [
  //         {
  //           type: "text",
  //           text: body.meditationPrompt,
  //         },
  //       ],
  //     },
  //   ],
  //   temperature: 1,
  //   max_tokens: 256,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  // });

  // return Response.json({ message: result.choices[0].message.content });

  await delay(2000);

  return Response.json({ message: mockMessages[body.categoryName][0] });
}
