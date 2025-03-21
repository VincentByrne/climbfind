import { userApi } from "./api/user-api.js";
import { locationApi } from "./api/location-api.js";
import { imageApi } from "./api/image-api.js";


export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/locations", config: locationApi.create },
  { method: "DELETE", path: "/api/locations", config: locationApi.deleteAll },
  { method: "GET", path: "/api/locations", config: locationApi.find },
  { method: "GET", path: "/api/locations/{id}", config: locationApi.findOne },
  { method: "DELETE", path: "/api/locations/{id}", config: locationApi.deleteOne },

  { method: "GET", path: "/api/images", config: imageApi.find },
  { method: "GET", path: "/api/images/{id}", config: imageApi.findOne },
  { method: "POST", path: "/api/locations/{id}/images", config: imageApi.create },
  { method: "DELETE", path: "/api/images", config: imageApi.deleteAll },
  { method: "DELETE", path: "/api/images/{id}", config: imageApi.deleteOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];
