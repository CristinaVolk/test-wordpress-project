import { useState, useEffect } from "react";

const queryString = (params) =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

const createUrl = (url, queryOptions) => {
  return url + "?" + queryString(queryOptions);
};

export const useFetch = (url, options = { body: {}, query: {} }) => {
  const [data, setData] = useState({
    response: null,
    error: false,
    loading: true,
  });

  useEffect(() => {
    setData({ ...data, error: null, loading: true });
    fetch(createUrl(url, options.query), {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: options.method !== "GET" && JSON.stringify(options.body),
    })
      .then(async (response) => {
        const data = await response.json();
        setData({
          response: data,
          error: !response.ok,
          loading: false,
        });
      })
      .catch((error) => {
        setData({
          response: { status: "network_failure" },
          error: true,
          loading: false,
        });
      });
  }, [url, data, options.body, options.method, options.query, setData]);

  return data;
};
