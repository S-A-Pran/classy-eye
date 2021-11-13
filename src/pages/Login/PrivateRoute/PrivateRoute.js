import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Box style={{position: 'absolute', top:'48%', left:"48%"}}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
