import React from "react";
import { NavLink } from "react-router-dom";
import { useComponent } from "./hook";
import { useParticleEffect } from "../../components/custom-particle-effect/hook";
import { CustomParticleEffect } from "../../components/custom-particle-effect";
import styles from "./styles.module.css";

export default function CoursePage() {
  const { response, error, loading } = useComponent();
  const { animating } = useParticleEffect();

  const particleOptions = {
    direction: "left",
  };

  if (error) {
    return <h1>Error occurred</h1>;
  }

  return (
    <div className={styles.coursePageWrapper}>
      <CustomParticleEffect
        hidden={!loading}
        particleOptions={particleOptions}
        content={<h1 className={styles.loading}>Loading...</h1>}
      />

      {response && !animating && (
        <div className={styles.coursePageContainer}>
          <NavLink to='/courses'>Go Back</NavLink>
          <hr></hr>
          <h1>
            <strong>{response.title.rendered}</strong>
          </h1>
          <hr></hr>
          <div
            dangerouslySetInnerHTML={{ __html: response.excerpt.rendered }}
          ></div>
          <div
            className={styles.courseContent}
            dangerouslySetInnerHTML={{ __html: response.content.rendered }}
          ></div>
        </div>
      )}
    </div>
  );
}
