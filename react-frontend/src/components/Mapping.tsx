import { Grid, makeStyles } from "@material-ui/core";
import { DataGrid, GridValueGetterParams } from "@material-ui/data-grid";
import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { Route } from "../util/models";
import { Navbar } from "./Navbar";
import { v4 as uuidv4 } from "uuid";

const API_URL = process.env.REACT_APP_API_URL as string;

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  form: {
    margin: "16px",
  },
  btnSubmitWrapper: {
    textAlign: "center",
    marginTop: "8px",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export const Mapping: FunctionComponent = () => {
  const classes = useStyles();
  const [routes, setRoutes] = useState<Route[]>([]);
  const columns = [
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "startPosition",
      headerName: "Start Position",
      width: 170,
    },
    {
      field: "endPosition",
      headerName: "End Position",
      width: 170,
    },
  ];

  const buildRows = (routes: Route[]) => {
    return routes.map((value, index) => buildRow(value));
  };

  const buildRow = (route: Route) => {
    return {
      ...route,
      id: uuidv4(),
      startPosition: `(${route.startPosition.lat}, ${route.startPosition.lng})`,
      endPosition: `(${route.endPosition.lat}, ${route.endPosition.lng})`,
    };
  };

  useEffect(() => {
    console.log(`${API_URL}/routes`);
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Navbar />
        <DataGrid
          rows={buildRows(routes)}
          columns={columns}
          pageSize={5}
        />
      </Grid>
    </Grid>
  );
};
