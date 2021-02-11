import React from "react";
import { Link } from "react-router-dom";
import { useComponent } from "./hook";
import "./styles.css";

export default function CoursePage() {
  const { response, error, loading } = useComponent();

  if (error) {
    return <h1>Error occurred</h1>;
  }

  if (loading) {
    return <h1>Loading ...</h1>;
  } else {
    return (
      <div className='course-page-wrapper'>
        {response && (
          <div className='course-page-container'>
            <Link to='/courses'>Go Back</Link>
            <hr></hr>
            <h1>
              <strong>{response.title.rendered}</strong>
            </h1>
            <hr></hr>
            <div
              dangerouslySetInnerHTML={{ __html: response.excerpt.rendered }}
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: response.content.rendered }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}
