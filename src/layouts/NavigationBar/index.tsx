import React, { useState, useEffect } from "react";
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
  Divider,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import difaJobsLogo from "../../assets/images/difajobs-light.webp";
import LogoutButton from "../../components/LogoutButton";
import styles from "./NavigationBar.module.scss";
import { decodeToken } from "../../utils/jwtUtils";

interface NavBarProps {
  // 
}

const NavBar: React.FC<NavBarProps> = () => {
  const small = useMediaQuery("(max-width:768px)");
  const full = useMediaQuery("(min-width:769px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const section = path.substring(1);
    setActiveSection(section);

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Decode the token to get user's role
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        const role = decodedToken.role;
        setUserRole(role);
      }
    } else {
      setIsLoggedIn(false);
      setUserRole(null); // Reset user's role if not logged in
    }
  }, [location]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

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

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleVerification = () => {
    navigate("/verification");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
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
                    onClick={() => mobileNavigateTo("")}
                  >
                    <Typography className={styles.listItemText}>
                      Beranda{" "}
                      {activeSection === "" && (
                        <span className={styles.arrowIcon}>
                          {" "}
                          <ArrowLeftIcon />
                          Anda disini{" "}
                        </span>
                      )}
                    </Typography>
                  </ListItem>
                  {isLoggedIn && (
                    <ListItem
                      className={styles.listItem}
                      onClick={() => mobileNavigateTo("dashboard")}
                    >
                      <Typography className={styles.listItemText}>
                        Lowongan Pekerjaan{" "}
                        {activeSection === "dashboard" && (
                          <span className={styles.arrowIcon}>
                            {" "}
                            <ArrowLeftIcon />
                            Anda disini{" "}
                          </span>
                        )}
                      </Typography>
                    </ListItem>
                  )}
                  {isLoggedIn ? (
                    <>
                      <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('profile')}>
                        <Typography className={styles.listItemText}>
                          Akun Saya{' '}
                          {activeSection === 'profile' && (
                            <span className={styles.arrowIcon}>
                              {' '}
                              <ArrowLeftIcon />
                              Anda disini{' '}
                            </span>
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <LogoutButton onLogout={handleLogout} />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('login')}>
                        <Typography className={styles.listItemText}>
                          Masuk{' '}
                          {activeSection === 'login' && (
                            <span className={styles.arrowIcon}>
                              {' '}
                              <ArrowLeftIcon />
                              Anda disini{' '}
                            </span>
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('register')}>
                        <Typography className={styles.listItemText}>
                          Daftar{' '}
                          {activeSection === 'register' && (
                            <span className={styles.arrowIcon}>
                              {' '}
                              <ArrowLeftIcon />
                              Anda disini{' '}
                            </span>
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('verification')}>
                        <Typography className={styles.listItemText}>
                          Verifikasi Akun{' '}
                          {activeSection === 'verification' && (
                            <span className={styles.arrowIcon}>
                              {' '}
                              <ArrowLeftIcon />
                              Anda disini{' '}
                            </span>
                          )}
                        </Typography>
                      </ListItem>
                    </>
                  )}
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
                onClick={() => navigateTo("")}
              />
              <Box className={styles.navbarMenu}>
                <Typography
                  className={styles.navbarText}
                  onClick={() => navigateTo("")}
                  style={{ fontWeight: "bold" }}
                >
                  Beranda
                </Typography>
                {isLoggedIn && (
                  <Typography
                    className={styles.navbarText}
                    onClick={() => navigateTo("dashboard")}
                  >
                    Lowongan Pekerjaan
                  </Typography>
                )}
                {isLoggedIn && userRole === "job seeker" && (
                  <Typography
                    className={styles.navbarText}
                    onClick={() => navigateTo("job-seeker-application")}
                  >
                    Lamaran Pekerjaan
                  </Typography>
                )}
                {isLoggedIn && userRole === "recruiter" && (
                  <Typography
                    className={styles.navbarText}
                    onClick={() => navigateTo("job-seeker-list")}
                  >
                    Daftar Pelamar
                  </Typography>
                )}
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
                  {isLoggedIn ? (
                    // Jika sudah login, tampilkan opsi Edit Profile dan Logout
                    <>
                      <MenuItem
                        className={styles.menuItem}
                        onClick={() => navigateTo("profile")}
                      >
                        Edit Profile
                      </MenuItem>
                      <MenuItem>
                        <LogoutButton onLogout={handleLogout} />
                      </MenuItem>
                    </>
                  ) : (
                    // Jika belum login, tampilkan tombol Login
                    <>
                      <MenuItem onClick={handleLogin}>
                        Masuk
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleRegister}>
                        Daftar
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleVerification}>
                        Verifikasi Akun
                      </MenuItem>
                    </>
                  )}
                </Menu>
              </Box>
            </Box>
          </Box>
        )}
      </AppBar>
    </>
  );
};

export default NavBar;