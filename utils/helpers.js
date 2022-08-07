import axios from "axios";
import { API_PATH } from "./constants";

export const fetchData = async (path) => {
  const config = {
    method: "get",
    url: `${API_PATH}${path}`,
  };
  let { data } = await axios(config);
  if (data) return data;
};

export const postData = async (data) => {
  var headers = {};
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: data,
  };

  let result = await (
    await fetch(`${API_PATH}/pipeline-partner`, requestOptions)
  ).json();
  if (result) return result;
};
