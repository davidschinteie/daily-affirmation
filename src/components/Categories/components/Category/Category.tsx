import Link from "next/link";
import { CategoryItem } from "../../Categories";
import styles from "./category.module.css";

interface CategoryProps {
  category: CategoryItem;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div className={styles.categoryItem}>
      <Link
        href={`/theme/${encodeURIComponent(category.title)}`}
        className={styles.categoryBox}
      >
        <div className={`${styles.categoryBg} ${styles[category.type]}`}></div>
        <h3 className={styles.categoryTitle}>{category.title}</h3>
      </Link>
    </div>
  );
};

export default Category;
