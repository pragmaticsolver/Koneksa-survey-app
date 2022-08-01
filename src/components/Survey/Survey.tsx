import { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import moment from "moment";

import { ISurveyPayload, TechPref } from "../../models";

import { TimezoneDropdown } from "../TimezoneDropdown";
import { TechPrefRadio } from "../TechPrefRadio";
import { PizzaTopping } from "../PizzaTopping";
import SurveyService from "../../services/survey.service";

const Survey = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthday, setBirthday] = useState<Date | null>();
  const [timezone, setTimezone] = useState<string>("");
  const [techPref, setTechPref] = useState<TechPref>("front end");
  const [pizzaToppings, setPizzaToppings] = useState<string[]>([]);

  const handleBirthdayChange = (newValue: Date | null) => {
    setBirthday(newValue);
  };

  const handleTimezoneChange = useCallback((newTimezone: string) => {
    setTimezone(newTimezone);
  }, []);

  const handleTechPrefChange = useCallback((newTechPref: TechPref) => {
    setTechPref(newTechPref);
  }, []);

  const handlePizzaToppingsChange = useCallback((value: string[]) => {
    setPizzaToppings(value);
  }, []);

  const handleSubmitSurvey = async () => {
    // TODO: validation here

    const payload: ISurveyPayload = {
      name,
      password,
      birthday: moment(birthday).toISOString(),
      preferences: {
        techPref,
        pizzaToppings,
        timezone,
      },
    };

    window.alert(JSON.stringify(payload, null, 2));

    await SurveyService.postSurvey(payload);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: 640,
        border: "1px solid groove",
        borderRadius: "6px",
      }}
      padding={2}
    >
      <Stack display="flex" flexDirection="column" spacing={2}>
        <TextField
          required
          type="text"
          id="survey-name"
          data-testid="survey-name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value as string)}
        />
        <TextField
          required
          type="password"
          id="survey-password"
          data-testid="survey-password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value as string)}
        />
        <DesktopDatePicker
          label="Birthday"
          inputFormat="MM/DD/yyyy"
          value={birthday}
          onChange={handleBirthdayChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimezoneDropdown timezone={timezone} onChange={handleTimezoneChange} />
        <TechPrefRadio techPref={techPref} onChange={handleTechPrefChange} />
        <PizzaTopping onChange={handlePizzaToppingsChange} />
        <Button variant="contained" onClick={handleSubmitSurvey}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Survey;
