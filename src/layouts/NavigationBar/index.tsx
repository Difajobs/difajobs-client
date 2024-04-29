import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  List,
  ListItem,
  Collapse,
  Box,
  IconButton,
  AppBar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./NavigationBar.module.scss";
import difaJobsLogo from "../../assets/images/difajobs-light.webp";
import { LogoutButton } from "../../components";
import React from "react";

export default function NavBar() {
  const small = useMediaQuery("(max-width:425px)");
  const full = useMediaQuery("(min-width:426px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Renamed to mobileMenuOpen
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update active section when location changes
    const path = location.pathname;
    const section = path.substring(1); // Assuming paths start with "/"
    setActiveSection(section);
  }, [location]); // Re-run effect when location changes

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl); // Renamed to menuOpen
  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (section: string) => {
    navigate("/" + section);
  };

  const mobileNavigateTo = (section: string) => {
    navigate("/" + section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        {small && (
          <Box className={styles.navbarMobileContainer}>
            <List className={styles.navbarListContainer}>
              <ListItem className={styles.navbarListItem}>
                <img
                  src={difaJobsLogo}
                  className={styles.mobileLogo}
                  alt="Logo"
                  onClick={() => mobileNavigateTo("")}
                />
                <IconButton
                  onClick={handleMobileMenuClick}
                  aria-label={mobileMenuOpen ? "Collapse menu" : "Expand menu"}
                >
                  <MenuIcon className={styles.burgerButton} />
                  {mobileMenuOpen ? (
                    <ExpandLess className={styles.burgerButton} />
                  ) : (
                    <ExpandMore className={styles.burgerButton} />
                  )}
                </IconButton>
              </ListItem>
              <Collapse
                in={mobileMenuOpen}
                timeout="auto"
                unmountOnExit
                className={styles.collapse}
              >
                <List component="div" disablePadding>
                  <ListItem
                    className={styles.listItem}
                    onClick={() => mobileNavigateTo("dashboard")}
                  >
                    <Typography className={styles.listItemText}>
                      Beranda{" "}
                      {activeSection === "dashboard" && (
                        <span className={styles.arrowIcon}>
                          {" "}
                          <ArrowLeftIcon />
                          Anda disini{" "}
                        </span>
                      )}
                    </Typography>
                  </ListItem>
                  <ListItem
                    className={styles.listItem}
                    onClick={() => mobileNavigateTo("profile")}
                  >
                    <Typography className={styles.listItemText}>
                      Akun Saya{" "}
                      {activeSection === "profile" && (
                        <span className={styles.arrowIcon}>
                          {" "}
                          <ArrowLeftIcon />
                          Anda disini{" "}
                        </span>
                      )}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <LogoutButton />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Box>
        )}

        {full && (
          <Box className={styles.navbarDesktopContainer}>
            <Box className={styles.navbarDesktop}>
              <img
                className={styles.desktopLogo}
                src={difaJobsLogo}
                alt="Logo"
                onClick={() => navigateTo("/")}
              />
              <Box className={styles.navbarMenu}>
                <Typography
                  className={styles.navbarText}
                  onClick={() => navigateTo("dashboard")}
                  style={{ fontWeight: "bold" }}
                >
                  Beranda
                </Typography>
                <Typography
                  className={styles.navbarText}
                  onClick={handleClickMenu}
                >
                  Akun Saya
                </Typography>
                <Menu
                  className={styles.menuAccount}
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleCloseMenu}
                >
                  <MenuItem
                    className={styles.menuItem}
                    onClick={() => navigateTo("profile")}
                  >
                    Edit Profile
                  </MenuItem>
                  <MenuItem className={styles.menuItem}>
                    <LogoutButton />
                  </MenuItem>
                </Menu>
                {/* <NotificationsIcon className={styles.navbarText} /> */}
              </Box>
            </Box>
          </Box>
        )}
      </AppBar>
    </>
  );
}
