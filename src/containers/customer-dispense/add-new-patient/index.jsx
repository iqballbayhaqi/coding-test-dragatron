import React, { useState } from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PatientDetails from "./PatientDetails";

const useStyles = makeStyles({
  root: {
    margin: 20,
    paddingTop: 20,
  },
  Tab: {
    textTransform: "unset",
  },
  title: {
    fontWeight: "bold",
    padding: "20px 0",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AddNewPatient() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="secondary" href="/">
          Dashboard
        </Link>
        <Link underline="hover" color="secondary" href="/">
          Customer Dispense
        </Link>
        <Typography color="primary">Create New Dispense</Typography>
      </Breadcrumbs>

      <Typography variant="h5" className={classes.title}>
        Add New Patient
      </Typography>

      <Paper elevation={1}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, paddingTop: 3, marginLeft: 3, marginRight: 3, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Patient Details"
                className={classes.Tab}
                inkBarStyle={{ background: "black" }}
                {...a11yProps(0)}
              />
              <Tab
                label="Patient Notes & Flags"
                className={classes.Tab}
                {...a11yProps(1)}
              />
              <Tab
                label="Allergies"
                className={classes.Tab}
                {...a11yProps(2)}
              />
              <Tab
                label="Extra Details"
                className={classes.Tab}
                {...a11yProps(3)}
              />
              <Tab
                label="Family Maintenance"
                className={classes.Tab}
                {...a11yProps(4)}
              />
              <Tab label="Debtors" className={classes.Tab} {...a11yProps(5)} />
              <Tab
                label="Patient Reports"
                className={classes.Tab}
                {...a11yProps(6)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PatientDetails />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box>
      </Paper>
      <div style={{paddingTop: value !== 0 ? 500 : 0}} />
    </div>
  );
}
