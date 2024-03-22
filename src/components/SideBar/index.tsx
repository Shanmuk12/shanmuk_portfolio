import { FC, Fragment, useState, lazy, Suspense } from "react";
import List from "@mui/material/List";
import Button from "../Button";
import Link from "../Link";
import SwitchTheme from "../SwitchTheme";
import SideBarProps from "./SideBarProps";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import LoadingContent from "../LoadingContent";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, Theme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import LanguageDropdown from "../LanguageDropdown";
import { useRouter, NextRouter } from "next/router";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Drawer = lazy(() => import("@mui/material/Drawer"));
/**Styles */
import { useStyles, TopBar } from "./styles";

const SideBar: FC<SideBarProps> = ({ t, ...props }): JSX.Element => {
  const theme: Theme = useTheme();
  const router: NextRouter = useRouter();
  const isHome: boolean = router.pathname === "/";
  const [open, setOpen] = useState<boolean>(false);
  const { classes } = useStyles({ emotionTheme: theme });

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const handleDrawerCloseOutside = (event: MouseEvent | KeyboardEvent | Event | {}, reason: string) => {
    if (reason === "clickaway") {
      return;
    };
    setOpen(false);
  };

  return (
    <Fragment>
      <TopBar {...props}>
        <IconButton color="inherit" aria-label="Abrir menu" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }), padding: "0px" }}>
          <MenuIcon classes={{ root: classes.menuIcon }} />
        </IconButton>
      </TopBar>
      <Suspense fallback={<LoadingContent open={true} />}>
        <Drawer variant="temporary" anchor="right" open={open} onClose={handleDrawerCloseOutside} classes={{ root: classes.drawer }}>
          <IconButton onClick={handleDrawerClose} classes={{ root: classes.iconArrowBack }}>
            <ChevronRightIcon />
          </IconButton>
          <List classes={{ root: classes.list }}>
            <Divider />
            <ListItem key="services" classes={{ root: classes.listItem }}>
              <Link scroll={isHome} href={isHome ? "#services" : "/#services"} rel="services" onClick={handleDrawerClose} to="services">
                {t("header.services")}
              </Link>
            </ListItem>

            <ListItem key="about-me" classes={{ root: classes.listItem }}>
              <Link scroll={isHome} href={isHome ? "#about-me" : "/#about-me"} rel="about-me" onClick={handleDrawerClose} to="about-me">
                {t("header.aboutMe")}
              </Link>
            </ListItem>

            <ListItem key="qualifications" classes={{ root: classes.listItem }}>
              <Link scroll={isHome} href={isHome ? "#qualifications" : "/#qualifications"} rel="qualifications" onClick={handleDrawerClose} to="qualifications">
                {t("header.qualifications")}
              </Link>
            </ListItem>

            <ListItem key="portfolio" classes={{ root: classes.listItem }}>
              <Link scroll={isHome} href={isHome ? "#portfolio" : "/#portfolio"} rel="portfolio" onClick={handleDrawerClose} to="portfolio">
                {t("header.portfolio")}
              </Link>
            </ListItem>

            <ListItem key="contact" classes={{ root: classes.listItem }}>
              <Link scroll={isHome} href={isHome ? "#contact" : "/#contact"} rel="contact"onClick={handleDrawerClose} to="contact">
                <Button style={{ width: "11.5rem", height: "6rem" }}>
                  {t("header.contact")}
                </Button>
              </Link>
            </ListItem>

            <Divider classes={{ root: classes.divider }} />
            <ListItem key="theme-language" classes={{ root: classes.listItem }}>
              <SwitchTheme t={t} onClick={handleDrawerClose} />
              <LanguageDropdown t={t} onClick={handleDrawerClose} />
            </ListItem>
          </List>
        </Drawer>
      </Suspense>
    </Fragment>
  );
}

export default SideBar;