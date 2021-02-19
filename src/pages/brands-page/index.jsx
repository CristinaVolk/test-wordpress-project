import React from "react";
import { Stack } from "../../components/stack-cards";
import styles from "./styles.module.css";
import { stackCardsList } from "../../utils/brandsPageContent";

export default function BrandsPage() {
  return (
    <div className={styles.brandsPageWrapper}>
      <div className={styles.brandsPageContainer}>
        {stackCardsList.map(({ image, background }) => (
          <Stack key={image} image={image} background={background} />
        ))}
      </div>
    </div>
  );
}
