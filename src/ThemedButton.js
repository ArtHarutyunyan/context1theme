import { ThemeContext, ThemeToggleFunc } from "./themeContext";
import React, { useCallback, useContext, useState } from "react";
import Button from "./components/Button";

function ThemedButton({ children, ...restProps }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button theme={theme} onClick={toggleTheme} {...restProps}>
      {children}
    </Button>
  );
}

export default ThemedButton;
