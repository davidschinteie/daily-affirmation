import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.API_KEY_OPENAI,
// });

const mockImages: { [key: string]: string[] } = {
  Confidence: ["/img-confidence-01.png"],
  Motivation: ["/img-motivation-01.png", "/img-motivation-02.png"],
  Gratitude: ["/img-gratitude-01.png", "/img-gratitude-02.png"],
  "Stress Relief": ["/img-stress-01.png"],
  Relationships: [
    "/img-relationship-01.png",
    "/img-relationship-02.png",
    "/img-relationship-03.png",
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

  // const imagePrompt = await openai.chat.completions.create({
  //   model: "gpt-4o",
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are an assistant that generates detailed and descriptive image prompts based on daily affirmations. Each prompt should capture the essence and key elements of the affirmation, translating it into a visual scene. The image prompt should include specific details, emotions, and symbolic elements that visually represent the core message of the affirmation.",
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

  // const imageResult = await openai.images.generate({
  //   model: "dall-e-3",
  //   prompt: imagePrompt.choices[0].message.content as string,
  //   n: 1,
  //   size: "1024x1024",
  // });

  // return Response.json({ imageSrc: imageResult.data[0].url });

  await delay(3000);

  return Response.json({ imageSrc: mockImages[body.categoryName][0] });
}
