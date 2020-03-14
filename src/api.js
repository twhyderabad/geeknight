import { create as axiosCreate } from "axios";

const {
  REACT_APP_EVENTBRITE_OATH_TOKEN: EVENTBRITE_OATH_TOKEN,
  REACT_APP_SERVER_URL: SERVER_URL,
  REACT_APP_PROXY_URL: PROXY_URL,
  NODE_ENV
} = process.env;

const apiPrefix = "api/v3";
let baseUrl = `${PROXY_URL}/${SERVER_URL}/${apiPrefix}/`;

if (NODE_ENV === "production") baseUrl = `${SERVER_URL}/${apiPrefix}/`;

const axiosApi = axiosCreate({
  baseURL: baseUrl,
  headers: {
    Authorization: EVENTBRITE_OATH_TOKEN
  }
});

export default axiosApi;
