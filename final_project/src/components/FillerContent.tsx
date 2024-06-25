"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const FillerContent = () => {
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
            {"Admin"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ fontSize: 20 }}
          >
            {2}
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

export default FillerContent;
