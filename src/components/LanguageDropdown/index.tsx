import { FC, useRef, useState } from "react";
import MenuItem from "../MenuItem";
import AnchorMenu from "../AnchorMenu";
import { IconButton } from "@mui/material";
import { useTheme, Theme } from "@emotion/react";
import { useRouter, NextRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";
/**Props */
import LanguageDropdownProps from "./LanguageDropdownProps";
/**Styles */
import { useStyles, Container } from "./styles";

const LanguageDropdown: FC<LanguageDropdownProps> = ({ t, onClick, ...props }): JSX.Element => {
  const anchorRef = useRef(null);
  const theme: Theme = useTheme();
  const router: NextRouter = useRouter();
  const { classes } = useStyles({ emotionTheme: theme });
  const [openAnchorMenu, setOpenAnchorMenu] = useState<boolean>(false);
  return (
    <Container {...props}>
      <IconButton aria-label={t("header.language")} onClick={() => setOpenAnchorMenu(true)} ref={anchorRef}>
        <LanguageIcon classes={{ root: classes.icon }} />
      </IconButton>
      <AnchorMenu
        anchorEl={anchorRef.current}
        id="account-menu"
        open={openAnchorMenu}
        onClose={() => setOpenAnchorMenu(false)}
      >
       <MenuItem
          value={"en"}
          onClick={(e) => {
          if (e) e.preventDefault();
          if (onClick) onClick(null);
          setOpenAnchorMenu(false);
          router.push("/", "/", { locale: "en" });
        }}>
          {t("header.english")}
        </MenuItem>
      </AnchorMenu>
    </Container>
  );
};

export default LanguageDropdown;