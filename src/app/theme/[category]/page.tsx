"use client";

import { Vollkorn } from "next/font/google";
import MessageCard from "@/components/MessageCard/MessageCard";
import ImageCard from "@/components/ImageCard/ImageCard";
import { useEffect, useRef, useState } from "react";

const vollkorn = Vollkorn({ subsets: ["latin"] });

const meditationPrompts: { [key: string]: string } = {
  Confidence:
    "Generate a positive and uplifting daily affirmation that focuses on boosting confidence. The affirmation should encourage self-belief, inner strength, and the courage to face challenges with confidence.",
  Motivation:
    "Generate a positive and motivational daily affirmation that inspires action, perseverance, and determination. The affirmation should encourage the user to stay focused on their goals and keep moving forward with enthusiasm.",
  Gratitude:
    "Generate a positive and uplifting daily affirmation that focuses on gratitude. The affirmation should encourage appreciation for the small and big things in life, fostering a sense of thankfulness and contentment.",
  "Stress Relief":
    "Generate a calming and soothing daily affirmation that focuses on stress relief. The affirmation should encourage relaxation, mindfulness, and the ability to let go of worries, promoting a sense of peace and calm.",
  Relationships:
    "Generate a positive and uplifting daily affirmation that focuses on nurturing and strengthening relationships. The affirmation should encourage kindness, support, understanding, and the growth of strong, fulfilling bonds with others.",
};

export default function Category({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  const [affirmation, setAffirmation] = useState<string | null>(null);
  const [loadingAffirmation, setLoadingAffirmation] = useState(true);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState(true);
  const hasFetched = useRef(false);

  const generateImage = async (affirmationPrompt: string) => {
    setLoadingImage(true);

    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meditationPrompt: affirmationPrompt,
          categoryName: categoryName,
        }),
      });

      const data = await response.json();

      setImageSrc(data.imageSrc);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoadingImage(false);
  };

  const generateAI = async () => {
    try {
      setLoadingAffirmation(true);
      const response = await fetch("/api/generateAffirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meditationPrompt: meditationPrompts[categoryName],
          categoryName: categoryName,
        }),
      });

      const data = await response.json();

      setAffirmation(data.message);
      setLoadingAffirmation(false);
      await generateImage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadingAffirmation(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      generateAI();
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <h1>Today's {categoryName} Boost Just for You</h1>
      <h2>Take this moment to reflect on your personalized message</h2>
      <ImageCard imageSrc={imageSrc} loading={loadingImage} />
      <div className={vollkorn.className}>
        <MessageCard message={affirmation} loading={loadingAffirmation} />
      </div>
    </>
  );
}
