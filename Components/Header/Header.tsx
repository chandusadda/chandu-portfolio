"use client";

import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  Typography,
  ClassNameMap,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./HeaderStyles";
import Link from "next/link";
import SidebarDrawer from "../Sidebar/SidebarDrawer";
import MenuRounded from "@mui/icons-material/MenuRounded";
import { usePathname } from "next/navigation";

// NavBarElement component
export function NavBarElement(props: any) {
  const classes: ClassNameMap = styles();
  return (
    <Link href={`${props.pathname}`}>
      <div
        className={`${props.pathCheck ? classes.activeNav : classes.navLinks}`}
        style={props.style}
      >
        <div>{props.children}</div>
      </div>
    </Link>
  );
}

// Header component
function Header() {
  const classes: ClassNameMap = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar}>
        {/* Left Side */}
        <Link href={`/`} style={{ textDecoration: "none" }}>
          <Typography variant="h5" className={classes.mainLogo}>
            Chandu&nbsp;<span className={classes.textColored}>Sadda</span>
          </Typography>
        </Link>
        {/* Right Side */}
        <div className={`${classes.cta} header-links`}>
          <>
            <div className={classes.navbarElementsContainer}>
              {!small ? (
                <>
                  <NavBarElement
                    pathname="/"
                    pathCheck={
                      pathname === "/" ||
                      pathname === "/home/" ||
                      pathname === "/home"
                    }
                  >
                    Home
                  </NavBarElement>
                  <NavBarElement
                    pathname="/education"
                    pathCheck={
                      pathname === "/education" || pathname === "/education/"
                    }
                  >
                    Education
                  </NavBarElement>
                  <NavBarElement
                    pathname="/work"
                    pathCheck={pathname === "/work" || pathname === "/work/"}
                  >
                    Work
                  </NavBarElement>
                  {/* <NavBarElement
                    pathname="/accomplishments"
                    pathCheck={pathname === "/accomplishments" || pathname === "/accomplishments/"}
                  >
                    Accomplishments
                  </NavBarElement> */}
                  <NavBarElement
                    pathname="/contact"
                    pathCheck={pathname === "/contact" || pathname === "/contact/"}
                  >
                    Contact
                  </NavBarElement>
                </>
              ) : (
                <div>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setDrawerOpen(true);
                    }}
                    style={{
                      color: "black",
                      borderColor: "black",
                      marginLeft: "5px",
                    }}
                  >
                    <MenuRounded />
                  </IconButton>
                </div>
              )}
            </div>
          </>
        </div>
      </Toolbar>
      {/* Swipeable Drawer */}
      <SwipeableDrawer
        anchor="left"
        variant="temporary"
        open={drawerOpen}
        onOpen={() => {
          setDrawerOpen(true);
        }}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <SidebarDrawer />
      </SwipeableDrawer>
    </AppBar>
  );
}

export default Header;
