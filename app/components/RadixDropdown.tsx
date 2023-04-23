import React, { useState } from "react";
import {
  Button,
  Paper,
  MenuList,
  MenuItem,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdCheck } from "react-icons/md";
import { styled } from "@mui/system";

const TruncatedButton = styled(Button)({
  width: "100px", // fixed width
  whiteSpace: "nowrap", // don't wrap the text
  overflow: "hidden", // hide the overflowed text
  textOverflow: "ellipsis", // add ellipsis for the overflowed text
  display: "inline-block", // enable text truncation
});

const menuItemSx = {
  "&.Mui-selected": {
    backgroundColor: "primary.main",
    // hover style
    "&:hover": {
      backgroundColor: "primary.dark",
      color: "white",
    },
  },
  minWidth: "200px",
};

type Props = {
  options: string[];
};

export const CustomDropdown: React.FC<Props> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options?.[0] || "");
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

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
        <TruncatedButton onClick={handleOpen}>{selectedOption}</TruncatedButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          side="bottom"
          alignOffset={-500}
          sideOffset={10}
        >
          <Paper elevation={1}>
            <Box display="flex" flexDirection="column" p={1}>
              <MenuList>
                {options.map((option) => (
                  <DropdownMenu.Item
                    key={option}
                    onClick={() => handleSelectOption(option)}
                  >
                    <MenuItem
                      selected={selectedOption === option}
                      sx={menuItemSx}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        flex={1}
                      >
                        <Typography variant="button">{option}</Typography>
                        {selectedOption === option && <MdCheck />}
                      </Box>
                    </MenuItem>
                  </DropdownMenu.Item>
                ))}
              </MenuList>
            </Box>
          </Paper>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
