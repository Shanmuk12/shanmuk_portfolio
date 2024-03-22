import { FC, useState, useEffect } from "react";
import { useTheme, Theme } from "@emotion/react";
import Link from "../Link";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
/**Styles */
import { Container } from "./styles";
/**Helpers */
import { listenToScroll } from "./helpers";
/**Props */
import BackToTopProps from "./BackToTopProps";

const BackToTop: FC<BackToTopProps> = ({ t }): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const theme: Theme = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => listenToScroll(isVisible, setIsVisible));
    return () => {
      window.removeEventListener("scroll", () => listenToScroll(isVisible, setIsVisible));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link scroll rel="top" href="#top" to="top" aria-label={t("backToTop")}>
      <Container isVisible={isVisible} title={t("backToTop")}>
        <KeyboardDoubleArrowUpIcon sx={{ fill: theme.colors.white }} />
      </Container>
    </Link>
  );
};

export default BackToTop;