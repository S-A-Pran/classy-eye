import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const AllOrders = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isShipped, setIsShipped] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-everglades-80966.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted, isShipped]);

  const handleCancel = (id) => {
    console.log(id);
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

  const handleShip = (id) => {
    const data = { id, status: "Shipped" };
    fetch(`https://limitless-everglades-80966.herokuapp.com/orders`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
        }
        setIsShipped(true);
      });
  };

  return (
    <Box>
      <Typography
        textAlign="center"
        variant="h5"
        sx={{ fontWeight: "bold", pb: 2 }}
      >
        Total {orders.length} orders.
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
                <TableCell align="right">Ordered&nbsp;by</TableCell>
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
                    <TableCell align="right">
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
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleCancel(row._id)}
                      variant="small"
                      sx={{ color: "red" }}
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => handleShip(row._id)}
                      variant="small"
                      sx={{ color: "green" }}
                      color="error"
                      startIcon={<LocalShippingIcon />}
                    >
                      Ship
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
            src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg"
            alt=""
          />
        </Box>
      )}
    </Box>
  );
};

export default AllOrders;
