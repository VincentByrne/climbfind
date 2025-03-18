import { userMemStore } from "./mem/user-mem-store.js";
import { locationMemStore } from "./mem/location-mem-store.js";
import { imageMemStore } from "./mem/image-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { locationJsonStore } from "./json/location-json-store.js";
import { imageJsonStore } from "./json/image-json-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { locationMongoStore } from "./mongo/location-mongo-store.js";
import { imageMongoStore } from "./mongo/image-mongo-store.js";

export const db = {
  userStore: null,
  locationStore: null,
  imageStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.locationStore = locationJsonStore;
        this.imageStore = imageJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.locationStore = locationMongoStore;
        this.imageStore = imageMongoStore; 
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.locationStore = locationMemStore;
        this.imageStore = imageMemStore;
    }
  },
};
