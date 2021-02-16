import { useState } from "react";

export function useComponent() {
  const [language, setLanguage] = useState("En");

  const handleClick = (event) => {
    const newValue = event.target.value === "En" ? "Ru" : "En";
    setLanguage(newValue);
  };

  return { language, handleClick };
}
