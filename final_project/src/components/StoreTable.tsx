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
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "@/store";
import { getStoreList } from "@/store/storeListSlice";
import StoreHeader from "./StoreHeader";


const StoreTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { storeList, loading, error } = useSelector((state: RootState) => state.storeList);
  const [filteredRows, setFilteredRows] = useState<any[] | null>(null);

  useEffect(() => {
    dispatch(getStoreList());
  }, []);

  useEffect(() => {
    setFilteredRows(storeList);
  }, [storeList]);

  const handleSearch = (term: string) => {
    if (term.trim() === "") {
      setFilteredRows(storeList);
    } else {
      const filtered = storeList?.filter((store) =>
        store.partner.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredRows(filtered ?? []);
    }
  };

  const handleReset = () => {
    setFilteredRows(storeList);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="wrapper">
      <StoreHeader onSearch={handleSearch} onReset={handleReset} />
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
            {filteredRows && filteredRows.length > 0 ? (
              filteredRows.map((store) => (
                <TableRow
                  key={store.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{store.partner}</TableCell>
                  <TableCell align="center">{store.city}</TableCell>
                  <TableCell align="center">{store.contactPerson}</TableCell>
                  <TableCell align="center">{store.agentCount}</TableCell>
                  <TableCell align="center">
                    {store.brands.map((brand: { name: string }) => brand.name).join(", ")}
                  </TableCell>
                  <TableCell align="center">
                    {store.statusId === 1 ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                      <VisibilityIcon />
                    </Button>
                    <Button variant="contained" color="secondary">
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StoreTable;
