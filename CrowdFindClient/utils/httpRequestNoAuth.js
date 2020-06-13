import { BASE_URL, MODE } from "react-native-dotenv";

export const httpRequest = (path, method, body) => {
  const options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };

  console.log("The IP is " + BASE_URL);

  return fetch(BASE_URL + path, options)
    .then(async res => {
      if (MODE === "development") {
        console.log(res);
      }
      const json = await res.json();
      const result = json.data;
      result.status = res.status;
      return result;
    })
    .catch(err => {
      if (MODE === "development") {
        console.log(err);
      }
    });
};
