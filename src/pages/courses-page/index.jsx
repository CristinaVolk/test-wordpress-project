import React from "react";
import { DetailSwitch } from "../../components/slider-switch";
import styles from "./styles.module.css";

export default function CoursesPage() {
  return (
    <div className={styles.detailsSwitchContainer}>
      <DetailSwitch />
    </div>
  );
}
