import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import { Grid, Box, Paper, Typography } from "@mui/material";
import DividerVariants from "./MUI/Divider";
import SwipeableTemporaryDrawer from "./MUI/SwipableGuide";
import CollapsibleTable from "./MUI/ScroeCard"

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Light Theme
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#ffffff",
        paper: "#f5f5f5",
      },
      text: {
        primary: "#000000",
      },
    },
  });

  // Dark Theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ padding: "20px", textAlign: "center" }}>
        {/* Theme Toggle Button with Icon */}
        <IconButton 
          onClick={() => setDarkMode(!darkMode)} 
          color="primary"
        >
        <WbIncandescentIcon />
        </IconButton>

        {/* Grid Layout with Equal Sized Boxes */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Box Component */}
          {[
            { title: "Divider Component", component: <DividerVariants /> },
            { title: "Swipeable Drawer", component: <SwipeableTemporaryDrawer /> },
            { title: "CollapsibleTable", component: <CollapsibleTable/> },
            // { title: "Additional Feature", component: <Typography>Feature in Progress...</Typography> }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200, // Minimum height
                }}
              >
                {/* Icon and Title */}
                <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                
                {/* Dynamic Component */}
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  {item.component}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
