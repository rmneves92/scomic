import ky from "ky";

const headers = {
  "Content-Type": "application/json",
};

const api = ky.create({
  prefixUrl: "http://gateway.marvel.com/v1/public/",
  headers,
});

export default api;
