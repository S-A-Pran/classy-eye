import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hook/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyOrders = () => {
  const { user } = useAuth();
  const [isDeleted, setIsDeleted] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-everglades-80966.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted, user.email]);

  console.log(user.email);
  const handleCancel = (id) => {
    const proceed = window.confirm("Are You Sure To Cancel this Order?");
    if (proceed) {
      fetch(`https://limitless-everglades-80966.herokuapp.com/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setIsDeleted(true);
          if (data.deletedCount > 0) {
            alert("Order Canceled Successfully");
          }
        });
    }
  };

  return (
    <Box>
      <Typography
        textAlign="center"
        variant="h5"
        sx={{ fontWeight: "bold", pb: 2 }}
      >
        You have {orders.length} orders.
      </Typography>
      {orders.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Order&nbsp;Date</TableCell>
                <TableCell align="right">Order&nbsp;Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.brand}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  {row.status === "pending" ? (
                    <TableCell align="right">
                      <Button
                        style={{
                          background: "yellow",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {row.status}
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell
                      align="right"
                    >
                      <Button
                        style={{
                          background: "green",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {row.status}
                      </Button>
                    </TableCell>
                  )}
                  <TableCell align="right">
                    <Button
                      onClick={() => handleCancel(row._id)}
                      variant="small"
                      sx={{ color: "red" }}
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box textAlign="center">
          <img
            width="40%"
            src="https://image.freepik.com/free-vector/order-now-banner_52683-49573.jpg"
            alt=""
          />
        </Box>
      )}
    </Box>
  );
};

export default MyOrders;
