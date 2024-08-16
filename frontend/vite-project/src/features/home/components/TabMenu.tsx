// src/components/TabMenu.tsx
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

interface TabMenuProps {
  tabLabels: string[];
  tabContent: React.ReactNode[]; // 유지
  onTabChange: (tabLabel: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({
  tabLabels,
  tabContent,
  onTabChange,
}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    onTabChange(tabLabels[newValue]);
  };

  return (
    <>
      {/* Tab Menu */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="tabs"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#05ce02",
          },
          "& .MuiTab-root": {
            color: "gray",
            "&.Mui-selected": {
              color: "#05ce02",
            },
          },
          "& .Mui-selected": {
            color: "#05ce02",
          },
        }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ margin: "30px 0" }}>{tabContent[tabIndex]}</Box>
    </>
  );
};

export default TabMenu;
