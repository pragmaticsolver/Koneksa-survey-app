import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import Survey from "./Survey";

describe("<Survey /> Component", () => {
  it("check if some necessary elements there", () => {
    const view = render(
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Survey />
        </LocalizationProvider>
      </BrowserRouter>
    );

    expect(view.queryByTestId("survey-name")).toBeInTheDocument();
    expect(view.queryByTestId("survey-password")).toBeInTheDocument();
    expect(view.queryByTestId("survey-no-element")).not.toBeInTheDocument();
  });
});
