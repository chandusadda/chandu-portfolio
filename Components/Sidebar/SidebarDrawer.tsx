"use client"

import { ClassNameMap, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Setting styles for SidebarDrawer
const styles = makeStyles(({ }: any) => {
  return {
    sideBarElement: {
      display: "flex",
      alignItems: "center",
      margin: 12,
      marginTop: 10,
      fontWeight: 500,
      width: 200,
      marginLeft: "10px",
      padding: "10px 20px",
      borderRadius: 5,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F0F3F9",
      },
    },
    sideBarElementActive: {
      backgroundColor: "#3F0071",
      color: "white",
      "&:hover": {
        backgroundColor: `#3F0071`,
      },
    },
    sideBarElementInactive: {
      backgroundColor: "#F4F7FD",
      color: "black",
      "&:hover": {
        backgroundColor: "#DAE1EF",
      },
    },
    root: {
      left: 0,
      top: 64,
      background: "#FFFFFF",
      zIndex: 1,
    },
    mainLogo: {
      fontFamily: "Avenir Next",
      display: "flex",
      marginLeft: "auto",
      marginTop: "20px !important",
      marginBottom: "20px !important",
      alignSelf: "center",
      justifyContent: "center",
      color: "black",
      fontWeight: "bolder !important",
    },
    textColored: {
      color: `#3F0071`,
    },
  };
});

// SidebarElement component
export function SidebarElement(props: any) {
  const classes: ClassNameMap = styles();
  return (
    <Link href={`${props.pathname}`}>
      <div
        //   onClick={props.onClick}
        className={`${classes.sideBarElement} ${
          props.pathCheck
            ? classes.sideBarElementActive
            : classes.sideBarElementInactive
        }`}
        style={props?.styles}
      >
        <div>{props.children}</div>
      </div>
    </Link>
  );
}

// SidebarDrawer component
export function SidebarDrawer() {
  const classes: ClassNameMap = styles();
  const pathname = usePathname();

  return (
    <div className={`${classes.root} sidebar-links`}>
      <Typography variant="h5" className={classes.mainLogo}>
        Chandu&nbsp;<span className={classes.textColored}>Sadda</span>
      </Typography>
      <SidebarElement
        pathname="/"
        pathCheck={
          pathname === "/" || pathname === "/home/" || pathname === "/home"
        }
      >
        Home
      </SidebarElement>
      <SidebarElement
        pathname="/education"
        pathCheck={pathname === "/education" || pathname === "/education/"}
      >
        Education
      </SidebarElement>
      <SidebarElement
        pathname="/work"
        pathCheck={pathname === "/work" || pathname === "/work/"}
      >
        Work Experience
      </SidebarElement>
      {/* <SidebarElement
        pathname="/accomplishments"
        pathCheck={
          pathname === "/accomplishments" || pathname === "/accomplishments/"
        }
      >
        Accomplishments
      </SidebarElement> */}
      <SidebarElement
        pathname="/contact"
        pathCheck={pathname === "/contact" || pathname === "/contact/"}
      >
        Contact
      </SidebarElement>
    </div>
  );
}

export default SidebarDrawer;
