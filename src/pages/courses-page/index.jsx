import React from "react";
import { SwitchSlider } from "../../components/slider-switch";
import styles from "./styles.module.css";

export default function CoursesPage() {
  return (
    <div className={styles.detailsSwitchContainer}>
      <SwitchSlider />
    </div>
  );
}
