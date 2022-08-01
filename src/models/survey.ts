export type TechPref = "front end" | "back end" | "both";

export interface ISurveyPayload {
  name: string;
  password: string;
  birthday: string;
  preferences: {
    techPref: TechPref;
    pizzaToppings: string[];
    timezone: string;
  };
}
