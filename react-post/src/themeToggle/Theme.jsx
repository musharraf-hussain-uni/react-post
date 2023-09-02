import React, { useState } from "react";
import "./Theme.css";
function ThemeToggle() {
  // Initialize the theme state with "light" as the default
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    // If the current theme is "light", change it to "dark"; otherwise, change it to "light"
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
      <h1>Theme Toggle Example</h1>
      <p>This is an example of a light and dark theme toggle.</p>
    </div>
  );
}
export default ThemeToggle;
