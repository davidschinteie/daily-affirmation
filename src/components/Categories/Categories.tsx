import React from "react";
import styles from "./categories.module.css";
import Category from "./components/Category/Category";

export interface CategoryItem {
  title: string;
  type: string;
  id: number;
}

interface CategoriesProps {
  categories: Array<CategoryItem>;
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className={styles.categoriesBox}>
      {categories.map((catEl) => (
        <Category key={catEl.id} category={catEl} />
      ))}
    </div>
  );
};

export default Categories;
