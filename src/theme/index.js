import { createContext, useState } from "react";
import { ThemeProvider } from "react-bootstrap";

export const ColorModeContext = createContext();

export function ThemeComponent({ children }) {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    checked ? colorMode("light", "dark") : colorMode("dark", "light");
    setChecked(!checked);
  };
  return (
    <ColorModeContext.Provider value={{ handleChange, checked }}>
      <ThemeProvider>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const colorMode = (mode1, mode2) => {
  let re = new RegExp(`${mode1}`, "g");
  // body
  if (document.body.classList.contains(`bg-${mode1}`)) {
    document.body.classList.replace(`bg-${mode1}`, `bg-${mode2}`);
  } else {
    document.body.classList.add(`bg-${mode2}`);
  }
  //navbar
  document.querySelectorAll(`.navbar-${mode1}`).forEach((element) => {
    element.className = element.className.replace(re, `${mode2}`);
  });
  //button
  document.querySelectorAll(`button`).forEach((element) => {
    element.className = element.className.replace(re, mode2);
  });
  // text
  if (document.body.classList.contains(`text-${mode2}`)) {
    document.body.classList.replace(`text-${mode2}`, `text-${mode1}`);
  } else {
    document.body.classList.add(`text-${mode1}`);
  }
};
