import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Paper,
  IconButton,
  InputBase,
  Grid,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  col2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
});

export default function Navbar({ drawerWidth }) {
  const classes = useStyles();
  const [handleMenuUser, setHandleMenuUser] = React.useState(null);
  const [handleMenuLanguage, setHandleMenuLanguage] = React.useState(null);
  const [language, setLanguage] = React.useState("EN")

  const openUsermenu = Boolean(handleMenuUser);
  const openLanguageMenu = Boolean(handleMenuLanguage);

  const handleClickUserMenu = (event) => {
    setHandleMenuUser(event.currentTarget);
  };
  
  const handleMenuCloseUser = () => {
    setHandleMenuUser(null);
  };
  
  const handleClickLanguageMenu = (event) => {
    setHandleMenuLanguage(event.currentTarget);
  };
  
  const handleCloseMenuLanguage = () => {
    setHandleMenuLanguage(null);
  };

  const handleSelectMenuLanguage = (value) => {
    setHandleMenuLanguage(null);
    setLanguage(value)
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="inherit"
        elevation={0.9}
        className={classes.root}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  background: "#f8f8f8",
                }}
                elevation={0}
              >
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter Keywords..."
                />
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.col2}>
              <Button
                id="basic-button"
                aria-controls={openLanguageMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openLanguageMenu ? "true" : undefined}
                onClick={handleClickLanguageMenu}
                style={{ marginLeft: 15 }}
                color="inherit"
              >
                {language}
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={handleMenuLanguage}
                open={openLanguageMenu}
                onClose={handleCloseMenuLanguage}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleSelectMenuLanguage("EN")}>EN</MenuItem>
                <MenuItem onClick={() => handleSelectMenuLanguage("ID")}>ID</MenuItem>
              </Menu>

              <Avatar style={{ marginLeft: 15 }}>
                <Badge color="error" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </Avatar>
              <Avatar
                alt="Niki Zefanya"
                src={require("../images/niki.jpg")}
                style={{ marginLeft: 15 }}
              />

              <Button
                id="basic-button"
                aria-controls={openUsermenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openUsermenu ? "true" : undefined}
                onClick={handleClickUserMenu}
                style={{ marginLeft: 15 }}
                color="inherit"
              >
                Niki Zefanya
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={handleMenuUser}
                open={openUsermenu}
                onClose={handleMenuCloseUser}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleMenuCloseUser}>Profile</MenuItem>
                <MenuItem onClick={handleMenuCloseUser}>My account</MenuItem>
                <MenuItem onClick={handleMenuCloseUser}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
