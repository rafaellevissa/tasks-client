import React, { useEffect } from "react";
import { Divider, Grid, Typography, Snackbar, Alert } from "@mui/material";
import { GridColDef, GridCellParams } from "@mui/x-data-grid";

import Show from "./Components/Show";
import Edit from "./Components/Edit";
import Add from "./Components/Add";
import Delete from "./Components/Delete";

import CustomDataGrid from "../../../components/DataGrid";
import Layout from "../../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/task/actions";
import { useTranslation } from "../../../hooks/use-translation";

export const ListTasksPage = () => {
  const dispatch = useDispatch();
  const { translate } = useTranslation();
  const { item, error, loading } = useSelector<any, any>((item) => item.task);

  useEffect(() => {
    dispatch(list());
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: translate("TASK:RESOURCES:ID"),
      minWidth: 30,
      flex: 0.3,
    },
    {
      field: "title",
      headerName: translate("TASK:RESOURCES:TITLE"),
      minWidth: 200,
      flex: 1,
    },
    {
      field: "description",
      headerName: translate("TASK:RESOURCES:DESCRIPTION"),
      minWidth: 200,
      flex: 1,
    },
    {
      field: "status",
      headerName: translate("TASK:RESOURCES:STATUS"),
      minWidth: 200,
      flex: 1,
    },
    {
      field: "actions",
      headerName: translate("TASK:RESOURCES:ACTIONS"),
      minWidth: 100,
      flex: 1,

      renderCell: (params: GridCellParams) => {
        return (
          <div>
            <Show id={params.row.id} />
            <Edit id={params.row.id} />
            <Delete id={params.row.id} />
          </div>
        );
      },
    },
  ];

  return (
    <Layout>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <Typography variant="h6">{translate("TASK:TITLE")}</Typography>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Add />
        </Grid>

        <Grid item xs={12}>
          {Array.isArray(item) && (
            <CustomDataGrid
              div={{ width: "100%", height: 500 }}
              dataGrid={{
                columns,
                rows: item,
                loading,
              }}
            />
          )}
        </Grid>
      </Grid>

      <Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: "100%" }}>
          {translate("TASK:ERROR")}
        </Alert>
      </Snackbar>
    </Layout>
  );
};
