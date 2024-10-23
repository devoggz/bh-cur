import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TextField } from "@mui/material";
import { Button } from "../ui/button";
const StepOne = () => {
  return (
    <div>
      <div>
        <TextField
          className="w-full"
          label="Jina la Kwanza"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Jina la Pili"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Username"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default StepOne;
