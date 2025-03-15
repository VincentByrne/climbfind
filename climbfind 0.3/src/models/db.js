import { userJsonStore } from "./json/user-json-store.js";
import { locationJsonStore } from "./json/location-json-store.js";
import { imageJsonStore } from "./json/image-json-store.js";

export const db = {
  userStore: null,
  locationStore: null,
  imageStore: null,

  init() {
    this.userStore = userJsonStore;
    this.locationStore = locationJsonStore;
    this.imageStore = imageJsonStore;
  },
};
