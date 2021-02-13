import React from "react";
import { NavLink } from "react-router-dom";

export const CourseItem = ({ item }) => {
  const { course_id, title, excerpt, background } = item;
  return (
    <>
      <h1 key='h1'>{title}</h1>
      <em key='em' style={{ background }} />
      <p dangerouslySetInnerHTML={{ __html: excerpt }} key='p'></p>
      <NavLink to={`/courses/course/${course_id}`}>Course Review</NavLink>
    </>
  );
};
