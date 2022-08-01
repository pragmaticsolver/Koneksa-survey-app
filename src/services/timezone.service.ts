import { timezoneApi } from "./api";

const getTimezones: () => Promise<[string[] | null, any]> = async () => {
  try {
    const { data } = await timezoneApi.get("/timezone");
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

const TimezoneService = {
  getTimezones,
};

export default TimezoneService;
