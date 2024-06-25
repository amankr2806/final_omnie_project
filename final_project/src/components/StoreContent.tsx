"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  IconButton,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { getStoreCount } from "@/store/storeCountSlice";

const StoreContent = () => {
  const { storeCount, error } = useSelector(
    (state: RootState) => state.storeCount
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStoreCount());
  }, [dispatch]);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!storeCount) {
    return null;
  }

  return (
    <Card sx={{ minWidth: 500, maxWidth: 500, minHeight: 200, mt: 5 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" component="div">
            {"Store"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ fontSize: 20 }}
          >
            Active Stores: {storeCount.activeStores}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ fontSize: 20 }}
          >
            Inactive Stores: {storeCount.inactiveSores}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ fontSize: 20 }}
          >
            Total Stores: {storeCount.totalStores}
          </Typography>
        </Box>
        <IconButton sx={{ fontSize: 80 }}>
          <PersonIcon fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default StoreContent;
