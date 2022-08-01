import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { TechPref } from "../../models";

export interface ITechPrefRadioProps {
  techPref: TechPref;
  onChange: Function;
}

const TechPrefRadio = ({
  techPref = "front end",
  onChange = () => {},
}: ITechPrefRadioProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl
      sx={{ padding: 2, borderRadius: "6px", border: "1px solid #e2e2e2" }}
    >
      <FormLabel id="tech-pref-radio-label">Tech Pref</FormLabel>
      <RadioGroup
        aria-labelledby="tech-pref-radio-label"
        value={techPref}
        onChange={handleChange}
        name="tech-pref"
      >
        <FormControlLabel
          value="front end"
          control={<Radio />}
          label="Front End"
        />
        <FormControlLabel
          value="back end"
          control={<Radio />}
          label="Back End"
        />
        <FormControlLabel value="both" control={<Radio />} label="Both" />
      </RadioGroup>
    </FormControl>
  );
};

export default TechPrefRadio;
