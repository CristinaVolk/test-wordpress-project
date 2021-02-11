import React from "react";
import AntDetailSwitch from "../../components/AntDetailSwitch";
import styles from "./styles.module.css";

export default function CoursesPage() {
  return (
    <div className={styles.detailsSwitchContainer}>
      <AntDetailSwitch />
    </div>
  );
}
