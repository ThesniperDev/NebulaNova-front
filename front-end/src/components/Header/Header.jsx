import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

const pages = ["Home", "Games", "Reviews"];
const userPages = ["Profile", "Collection", "Lists"];
const settings = ["Log In", "Sign Up"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ width: "100%", backgroundColor: "#353941", padding: "0 15px" }}>
      <Toolbar disableGutters sx={{ width: "100% !important" }}>
        <Typography
          variant="h1"
          noWrap
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            color: "inherit",
            textDecoration: "none",
            padding: "15px 0",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless"
            className="img"
          />
          NebulaNova
        </Typography>

        <Box sx={{ flexGrow: 1, padding: "10px 0", marginRight: "260.05px", display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          {pages.map((page) => (
            <Link key={page} to={page.toLocaleLowerCase()}>
              <Button variant="h1" sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            </Link>
          ))}
          {localStorage.getItem("token") &&
            userPages.map((page) => (
              <Link key={page} to={`user/${page.toLocaleLowerCase()}`}>
                <Button variant="h1" sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              </Link>
            ))}
        </Box>

        <Button onClick={handleClickOpen} sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-start" }}>
          <IconButton sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: "relative", backgroundColor: "#353941" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Menu
              </Typography>
            </Toolbar>
          </AppBar>
          <List sx={{ backgroundColor: "#2A2D33", height: "100vh" }}>
            <ListItemButton sx={{ backgroundColor: "#353941" }}>
              <ListItemText sx={{ color: "white" }} primary="Home" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ backgroundColor: "#353941" }}>
              <ListItemText sx={{ color: "white" }} primary="Games" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ backgroundColor: "#353941" }}>
              <ListItemText sx={{ color: "white" }} primary="Reviews" />
            </ListItemButton>
            <Divider />
            <ListItemText sx={{ color: "white", paddingLeft: "25px", height: "40px", display: "flex", alignItems: "center", width: "100%" }} primary="ACCOUNT" />
            <Divider />
            <ListItemButton sx={{ backgroundColor: "#353941" }}>
              <ListItemText sx={{ color: "white" }} primary="Log In" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ backgroundColor: "#353941" }}>
              <ListItemText sx={{ color: "white" }} primary="Sign Up" />
            </ListItemButton>
          </List>
        </Dialog>
        <Typography
          variant="h1"
          noWrap
          href="#app-bar-with-respon </Container>sive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            padding: "15px 0",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "5px",
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless"
            className="img"
          />
          NebulaNova
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
          <Tooltip title="Open settings" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <Link key={setting} to={setting.toLocaleLowerCase().split(" ").join("")}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
