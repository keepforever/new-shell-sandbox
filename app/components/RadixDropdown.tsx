import React, { useState } from "react";
import { Button, Paper, MenuList, MenuItem } from "@mui/material";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const CustomDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu.Root onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenu.Trigger>
        <Button onClick={handleOpen}>{selectedOption}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <Paper>
          <MenuList>
            <MenuItem
              onClick={() => handleSelectOption("Option 1")}
              selected={selectedOption === "Option 1"}
            >
              Option 1
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectOption("Option 2")}
              selected={selectedOption === "Option 2"}
            >
              Option 2
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectOption("Option 3")}
              selected={selectedOption === "Option 3"}
            >
              Option 3
            </MenuItem>
          </MenuList>
        </Paper>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
