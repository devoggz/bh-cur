import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TextField } from "@mui/material";
import { Button } from "../ui/button";
const StepFour = () => {
  return (
    <div>
      <div>
        <TextField
          className="w-full"
          label="Mwendeshaji"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Chairman"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Password"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default StepFour;
