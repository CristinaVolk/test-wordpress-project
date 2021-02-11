import { useState, useRef } from "react";
import { useFetch } from "../../common/hooks/useFetch";
import { useParams } from "react-router-dom";

export function useComponent() {
  const { id } = useParams();

  const { response, error, loading } = useFetch(
    `http://localhost:8000/wp-json/wp/v2/posts/${id}`,
    {
      query: {},
    },
  );

  return {
    response,
    error,
    loading,
  };
}
