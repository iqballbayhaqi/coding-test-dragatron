import React from "react";
import { Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "#bcbcbd",
    marginLeft: 8
  },
  wrapper: {
    display: 'flex',
    justifyContent: "space-between",
    padding: 20,
    borderTop: "1px solid #bcbcbd"
  },
  copyright: {
    color: "#bcbcbd"
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <Typography variant="caption" className={classes.copyright}>2021 © Taserver Pharmacy. All Right Reserved.</Typography>
      </div>
      <div>
        <Link href="#" className={classes.link} variant="caption">About</Link>
        <Link href="#" className={classes.link} variant="caption">Support</Link>
        <Link href="#" className={classes.link} variant="caption">Help</Link>
      </div>
    </div>
  );
}
