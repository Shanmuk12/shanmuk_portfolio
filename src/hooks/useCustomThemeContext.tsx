import { useContext } from "react";
import { CustomThemeContextProps } from "../interfaces";
import { CustomThemeContext } from "../contexts/CustomThemeContext";

const useCustomThemeContext: () => CustomThemeContextProps = () => useContext(CustomThemeContext);

export default useCustomThemeContext;