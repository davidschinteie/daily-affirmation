import styles from "./page.module.css";
import Categories from "@/components/Categories/Categories";

const categories = [
  {
    id: 1,
    title: "Confidence",
    type: "yellow",
  },
  {
    id: 2,
    title: "Motivation",
    type: "orange",
  },
  {
    id: 3,
    title: "Gratitude",
    type: "green",
  },
  {
    id: 4,
    title: "Stress Relief",
    type: "purple",
  },
  {
    id: 5,
    title: "Relationships",
    type: "magenta",
  },
];

export default async function Home() {
  return (
    <>
      <h1>Pick a Theme to Discover Your Daily Dose of Inspiration</h1>
      <Categories categories={categories} />
    </>
  );
}
