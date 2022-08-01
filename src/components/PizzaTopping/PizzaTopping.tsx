import { useEffect, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export interface IPizzaToppingProps {
  onChange: Function;
}

const PizzaTopping = ({ onChange = () => {} }: IPizzaToppingProps) => {
  const [pizzaToppings, setPizzaToppings] = useState<string[]>([]);

  const handleSelect = (pizzaTopping: string, checked: boolean) => {
    if (checked) {
      setPizzaToppings((prev) => [...prev, pizzaTopping]);
      return;
    }

    setPizzaToppings((prev) => prev.filter((el) => el !== pizzaTopping));
  };

  useEffect(() => {
    onChange(pizzaToppings);
  }, [onChange, pizzaToppings]);

  return (
    <FormControl
      sx={{ padding: 2, borderRadius: "6px", border: "1px solid #e2e2e2" }}
      component="fieldset"
      variant="standard"
    >
      <FormLabel component="legend">Pizza Toppings</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) =>
                handleSelect("Pepperoni", event.target.checked)
              }
            />
          }
          label="Pepperoni"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) =>
                handleSelect("Sausage", event.target.checked)
              }
            />
          }
          label="Sausage"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) =>
                handleSelect("Mushrooms", event.target.checked)
              }
            />
          }
          label="Mushrooms"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => handleSelect("Bacon", event.target.checked)}
            />
          }
          label="Bacon"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => handleSelect("Onions", event.target.checked)}
            />
          }
          label="Onions"
        />
      </FormGroup>
    </FormControl>
  );
};

export default PizzaTopping;
