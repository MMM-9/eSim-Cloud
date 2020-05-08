import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/Shared/Layout";
import Header from "../components/SchematicEditor/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
}));

export default function SchematiEditor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Layout header={<Header />} />
    </div>
  );
}