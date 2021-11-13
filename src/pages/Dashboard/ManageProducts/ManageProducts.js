import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ManageProducts = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-everglades-80966.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isDeleted]);

  const handleCancel = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure To delete this Product?");
    if (proceed) {
      fetch(`https://limitless-everglades-80966.herokuapp.com/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setIsDeleted(true);
          if (data.deletedCount > 0) {
            alert("Product Deleted Successfully");
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
        Total {products.length} Products.
      </Typography>
      {products.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">About</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.brand}
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.about}</TableCell>
                  <TableCell align="right"><img width="20%" src={row.img} alt="" /></TableCell>
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

export default ManageProducts;
