import Cookies from "js-cookie";
import { ThemeOpts, CustomThemeContextProps } from "../interfaces";
import { FC, ReactNode, createContext, useState, useEffect } from "react";

export const CustomThemeContext = createContext<CustomThemeContextProps>({
  currentTheme: null,
  changeCurrentTheme: null
});

export const CustomThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<any>(null);

  const changeCurrentTheme = (newTheme: ThemeOpts): void => {
    setCurrentTheme(newTheme);
    Cookies.set("currentTheme", newTheme);
  };

  useEffect(() => {
    let themeStore = Cookies.get("currentTheme");
    if (!themeStore || typeof themeStore === "undefined" || !["dark", "light"].includes(themeStore)) {
      themeStore = "dark";
      Cookies.set("currentTheme", themeStore);
    };

    setCurrentTheme((themeStore && themeStore === "dark")
      ? "dark"
      : (themeStore && themeStore === "light")
        ? "light" : "dark")

  }, []);

  return (
    <CustomThemeContext.Provider value={{
      currentTheme: currentTheme, changeCurrentTheme: changeCurrentTheme
    }}>
      {children}
    </CustomThemeContext.Provider>
  );
};