import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Avatar,
  Typography,
  Badge,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "./navbar";

import HomeIcon from "@mui/icons-material/Home";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArticleIcon from "@mui/icons-material/Article";
import ContactsIcon from "@mui/icons-material/Contacts";
import InventoryIcon from "@mui/icons-material/Inventory";
import MedicationIcon from "@mui/icons-material/Medication";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import { border } from "@mui/system";

const drawerWidth = 300;

const useStyles = makeStyles({
  root: {
    backgroundColor: "#36a1ea",
    height: "fit",
  },
  logoWrapper: {
    padding: "20px 0px",
    margin: "0px 20px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #6bbaf0",
  },
  logo: {
    marginRight: 30,
  },
  statusUserCard: {
    backgroundColor: "#2791d9",
    margin: 15,
    padding: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonMenuPrimary: {
    color: "#6bbaf0",
    alignItems: "center",
    justifyContent: "flex-start",
    textTransform: "unset",
  },
  menuWrapper: {
    margin: "5px 15px",
  },
  accordion: {
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
  },
  accordionSummary: {
    backgroundColor: "#2791d9",
    margin: 0,
    padding: 0,
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
  },
  cardHelpWrapper: {
    backgroundColor: "#2791d9",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const [menuActive, setMenuActive] = useState("");

  const handleAccordionMenu = (value) => {
    if (value === menuActive) {
      setMenuActive("");
    } else {
      setMenuActive(value);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <img
          src={require("../images/logo.png")}
          height={50}
          width={150}
          className={classes.logo}
          alt="logo"
        />
        <MenuOpenIcon style={{ color: "#6bbaf0" }} />
      </div>
      <div className={classes.statusUserCard}>
        <Avatar
          alt="Niki Zefanya"
          src={require("../images/niki.jpg")}
          style={{ marginLeft: 15 }}
        />
        <div style={{ marginLeft: 15 }}>
          <Badge color="success" badgeContent=" " variant="dot">
            <Typography style={{ color: "#ddedf9" }}>Niki Zefanya</Typography>
          </Badge>
          <Typography variant="body2" style={{ color: "#62afe4" }}>
            Officer
          </Typography>
        </div>
      </div>

      <div className={classes.menuWrapper}>
        <Button
          startIcon={<HomeIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Dashboard")}
          style={{ color: menuActive === "Dashboard" ? "#ffffff" : "#6bbaf0" }}
        >
          Dashboard
        </Button>

        <Accordion
          expanded={menuActive === "My Office"}
          onChange={() => handleAccordionMenu("My Office")}
          className={classes.accordion}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon style={{ color: "#6bbaf0" }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={
              menuActive === "My Office"
                ? classes.accordionSummary
                : classes.accordion
            }
            style={{ borderRadius: "10px 10px 0px 0px" }}
          >
            <Button
              startIcon={<ArticleIcon />}
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "My Office" ? "#ffffff" : "#6bbaf0",
              }}
            >
              My Office
            </Button>
          </AccordionSummary>
          <AccordionDetails
            className={classes.accordionSummary}
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            <Button
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "My Office" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Menu 1
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={menuActive === "Contacts"}
          onChange={() => handleAccordionMenu("Contacts")}
          className={classes.accordion}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon style={{ color: "#6bbaf0" }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={
              menuActive === "Contacts"
                ? classes.accordionSummary
                : classes.accordion
            }
            style={{ borderRadius: "10px 10px 0px 0px" }}
          >
            <Button
              startIcon={<ContactsIcon />}
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "Contacts" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Contacts
            </Button>
          </AccordionSummary>
          <AccordionDetails
            className={classes.accordionSummary}
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            <Button
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "Contacts" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Menu 1
            </Button>
            <Button
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "Contacts" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Menu 2
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={menuActive === "Inventory"}
          onChange={() => handleAccordionMenu("Inventory")}
          className={classes.accordion}
          elevation={0}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownCircleIcon style={{ color: "#6bbaf0" }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={
              menuActive === "Inventory"
                ? classes.accordionSummary
                : classes.accordion
            }
            style={{ borderRadius: "10px 10px 0px 0px" }}
          >
            <Button
              startIcon={<InventoryIcon />}
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "Inventory" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Inventory
            </Button>
          </AccordionSummary>
          <AccordionDetails
            className={classes.accordionSummary}
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            <Button
              variant="text"
              fullWidth
              className={classes.buttonMenuPrimary}
              style={{
                color: menuActive === "Inventory" ? "#ffffff" : "#6bbaf0",
              }}
            >
              Menu 1
            </Button>
          </AccordionDetails>
        </Accordion>

        <Button
          startIcon={<MedicationIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Customer Dispense")}
          style={{
            color: menuActive === "Customer Dispense" ? "#ffffff" : "#6bbaf0",
          }}
        >
          Customer Dispense
        </Button>

        <Button
          startIcon={<LocalPharmacyIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Pharmacist")}
          style={{
            color: menuActive === "Pharmacist" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Pharmacist
        </Button>

        <Button
          startIcon={<MonetizationOnIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Pricing")}
          style={{
            color: menuActive === "Pricing" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Pricing
        </Button>

        <Button
          startIcon={<InsertChartIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Reporting")}
          style={{
            color: menuActive === "Reporting" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Reporting
        </Button>

        <Button
          startIcon={<ShowChartIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Activity")}
          style={{
            color: menuActive === "Activity" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Activity
        </Button>

        <Button
          startIcon={<SupportAgentIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Assistant")}
          style={{
            color: menuActive === "Assistant" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Assistant
        </Button>

        <Button
          startIcon={<GroupsIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Management")}
          style={{
            color: menuActive === "Management" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Management
        </Button>

        <Button
          startIcon={<SettingsIcon />}
          variant="text"
          fullWidth
          className={classes.buttonMenuPrimary}
          onClick={() => setMenuActive("Settings")}
          style={{
            color: menuActive === "Settings" ? "#ffffff" : "#6bbaf0",
            marginTop: 10,
          }}
        >
          Settings
        </Button>
      </div>

      <Card className={classes.cardHelpWrapper}>
        <CardContent style={{paddingBottom: 10}}>
          <Avatar
            variant="rounded"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <HelpSharpIcon
              style={{
                color: "#2791d9",
              }}
            />
          </Avatar>
          <Typography style={{ fontWeight: "bold", paddingTop: 20 }}>Need Help?</Typography>
          <Typography variant="caption">Please check documentation</Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="outlined"
            style={{
              color: "#ffffff",
              border: "1px solid #ffffff",
            }}
          >
            Documentation
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

function ResponsiveDrawer({ children, window }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
