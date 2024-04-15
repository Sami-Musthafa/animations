import React from "react";
import { motion } from "framer-motion";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const SelectMenu = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Option"
          id="demo-simple-select"
          value={selectedOption}
          onChange={handleChange}
          sx={{ bgcolor: "whitesmoke", width: "250px", color: "black" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <MenuItem style={{ marginTop: "-100px" }} value="">
              <b>
                <em>None</em>
              </b>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option2">Option 4</MenuItem>
            <MenuItem value="option3">Option 5</MenuItem>
          </motion.div>
        </Select>
      </FormControl>
    </motion.div>
  );
};

export default SelectMenu;
