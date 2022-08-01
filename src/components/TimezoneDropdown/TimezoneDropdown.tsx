import { useCallback, useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import TimezoneService from "../../services/timezone.service";

export interface ITimezoneDropdownProps {
  timezone: string;
  onChange: Function;
}

const TimezoneDropdown = ({
  timezone = "",
  onChange = () => {},
}: ITimezoneDropdownProps) => {
  const [timezones, setTimezones] = useState<string[]>([]);

  const fetchTimezones = useCallback(async () => {
    const [data, err] = await TimezoneService.getTimezones();
    if (err) return;

    setTimezones(data ?? []);
  }, []);

  useEffect(() => {
    fetchTimezones();
  }, [fetchTimezones]);

  const handleTimezoneChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="timezone-select-label">Timezone</InputLabel>
      <Select
        required
        labelId="timezone-select-label"
        id="timezone-select"
        value={timezone}
        label="Timezone"
        onChange={handleTimezoneChange}
      >
        {timezones.map((el: string) => (
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimezoneDropdown;
