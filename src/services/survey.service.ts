import { surveyApi } from "./api";
import { ISurveyPayload } from "../models";

const postSurvey = (surveyPayload: ISurveyPayload) => {
  return surveyApi.post("/surveys", surveyPayload);
};

const SurveyService = {
  postSurvey,
};

export default SurveyService;
