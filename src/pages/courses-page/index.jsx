import React from "react";
import { DetailSwitch } from "../../components/detail-switch";
import styles from "./styles.module.css";

export default function CoursesPage() {
  return (
    <div className={styles.detailsSwitchContainer}>
      <DetailSwitch />
    </div>
  );
}
