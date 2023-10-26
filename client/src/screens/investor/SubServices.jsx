import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
// react icons
import { locationsTab } from "./sample";
import { useHistory } from "react-router-dom";

const SubServices = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue ? initialValue : null);

  const navigate = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatString = (string) => {
    let temp = string;
    temp = temp.replace(/\s+/g, "");
    temp = temp.toLowerCase();
    return temp;
  };

  const handleClick = (service) => {
    const serviceurl = formatString(service);
    alert("Coming Soon!")
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          //sx toggles the disabled nav button whether disbaled should appear or not
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab && locationsTab.map((tab) => {
            return (
              <Tab
                key={tab.id}
                icon={tab.icon}
                label={tab.label}
                onClick={() => handleClick(tab.label)}
              />
            );
          })}
        </Tabs>
      </Box>
    </Container>
  );
};

export default SubServices;
