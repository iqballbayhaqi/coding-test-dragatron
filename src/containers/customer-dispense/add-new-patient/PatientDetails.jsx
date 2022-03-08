import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  FilledInput,
  TextField,
  Select,
  MenuItem,
  Switch,
  Button,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { makeStyles, styled } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";

const useStyles = makeStyles({
  wrapper: {
    border: "1px solid #bdbdbd",
    borderRadius: 10,
    padding: 20,
    width: "70%",
  },
  textHead: {
    fontWeight: "bold",
    marginTop: -33,
    backgroundColor: "#ffffff",
    width: "fit-content",
    padding: "0 10px",
    marginLeft: -10,
  },
  datePicker: {
    marginLeft: 8,
  },
  inputFiled: {
    padding: 8,
  },
});

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function PatientDetails() {
  const classes = useStyles();
  const [dataDate, setDataDate] = useState(new Date());
  return (
    <div>
      <div className={classes.wrapper}>
        <Typography className={classes.textHead}>Patient Details</Typography>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Last Name</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="Clark"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>First Name</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="Patrick"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>Title</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  style={{ marginLeft: 8 }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>Gender</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  style={{ marginLeft: 8 }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Address</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="20 Trennery Crs"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Subrub</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="20 Trennery Crs"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>State</Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="Patrick"
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>Postcode</Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="Patrick"
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center", marginTop: 10 }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>Birthdate</Typography>
              </Grid>
              <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={dataDate}
                    onChange={(newValue) => {
                      setDataDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.datePicker}
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>

        <Grid container style={{ alignItems: "center", marginTop: 10 }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>Home Phone</Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="Patrick"
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>
                  Moobile Phone
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="Patrick"
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.wrapper} style={{ marginTop: 50 }}>
        <Typography className={classes.textHead}>Medical Details</Typography>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Consent</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value="Yes"
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>Card Number</Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="2296-...."
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>Valid To</Typography>
              </Grid>
              <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={dataDate}
                    onChange={(newValue) => {
                      setDataDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.datePicker}
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Card Last Name</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="Clark"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Card First Name</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                placeholder="Patrick"
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>CTG</Typography>
          </Grid>
          <Grid item xs={10}>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </Grid>
        </Grid>
      </div>

      <div className={classes.wrapper} style={{ marginTop: 50 }}>
        <Typography className={classes.textHead}>Concession Details</Typography>

        <Grid container style={{ alignItems: "center", marginTop: 8 }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>Card Number</Typography>
              </Grid>
              <Grid item xs={8}>
                <OutlinedInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="2296-...."
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>Valid To</Typography>
              </Grid>
              <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={dataDate}
                    onChange={(newValue) => {
                      setDataDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.datePicker}
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.wrapper} style={{ marginTop: 50 }}>
        <Typography className={classes.textHead}>DVA/Repat Details</Typography>

        <Grid container style={{ alignItems: "center", marginTop: 8 }}>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography>DVA/Repat Type</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  value="Noe"
                >
                  <MenuItem value={"Noe"}>Noe</MenuItem>
                  <MenuItem value={"Alfa"}>Alfa</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 30 }}>Card Number</Typography>
              </Grid>
              <Grid item xs={8}>
                <FilledInput
                  id="filled-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  aria-describedby="filled-weight-helper-text"
                  style={{ marginLeft: 8 }}
                  inputProps={{
                    "aria-label": "weight",
                    style: { padding: "8px" },
                  }}
                  disableUnderline
                  fullWidth
                  placeholder="2296-...."
                  className={classes.inputFiled}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.wrapper} style={{ marginTop: 50 }}>
        <Typography className={classes.textHead}>
          Safety Net (CN or SN)
        </Typography>

        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Typography>Card Number</Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                id="filled-adornment-weight"
                // value={values.weight}
                // onChange={handleChange('weight')}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  style: { padding: "8px" },
                }}
                disableUnderline
                fullWidth
                className={classes.inputFiled}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: 50 }}>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button variant="outlined" color="warning" style={{textTransform: 'unset'}} fullWidth>
                Close
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                color="warning"
                fullWidth
                style={{color: "#ffffff", textTransform: 'unset'}}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
