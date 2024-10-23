import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TextField } from "@mui/material";
import { Button } from "../ui/button";

const StepTwo = () => {
  return (
    <div>
      <div>
        <TextField
          className="w-full"
          label="Nambari ya Simu"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Nambari ya Kitambulisho"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="w-full"
          label="Nambari ya Pikipiki"
          margin="normal"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="outline" color="primary" className="w-full">
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
