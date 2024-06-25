"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { getStoreList } from "@/store/storeListSlice";

const StoreTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { storeList, loading, error } = useSelector(
    (state: RootState) => state.storeList
  );

  React.useEffect(() => {
    dispatch(getStoreList());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {[
              "Partner Name",
              "Store Location",
              "Store Admin",
              "Agents",
              "Brands",
              "Status",
              "Action",
            ].map((column) => (
              <TableCell
                key={column}
                sx={{
                  width: "14.28%",
                  fontWeight: "bold",
                }}
                align="center"
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {storeList &&
            storeList.map((store) => (
              <TableRow
                key={store.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{store.partner}</TableCell>
                <TableCell align="center">{store.name}</TableCell>
                <TableCell align="center">{store.contactPerson}</TableCell>
                <TableCell align="center">{store.agentCount}</TableCell>
                <TableCell align="center">
                  {store.brands
                    .map((brand: { name: string }) => brand.name)
                    .join(", ")}
                </TableCell>
                <TableCell align="center">
                  {store.statusId === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <VisibilityIcon />

                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StoreTable;
