import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

interface TabMenuProps {
  tabLabels: string[];
  tabContent: React.ReactNode[];
  onTabChange: (tabLabel: string) => void; // Add this line
}

const TabMenu = ({ tabLabels, tabContent, onTabChange }: TabMenuProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setTabIndex(newValue);
    onTabChange(tabLabels[newValue]); // Call the onTabChange callback with the new tab label
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
            backgroundColor: "#05ce02", // Indicator color
          },
          "& .MuiTab-root": {
            color: "gray", // Default tab text color
            // Ensuring text color applies even when not selected
            "&.Mui-selected": {
              color: "#05ce02", // Selected tab text color
            },
          },
          // Applying color for selected tab
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
