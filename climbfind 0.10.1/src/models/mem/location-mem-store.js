import { v4 } from "uuid";

let locations = [];

export const locationMemStore = {
  async getAllLocations() {
    return locations;
  },

  async addLocation(location) {
    location._id = v4();
    locations.push(location);
    return location;
  },

  async getLocationById(id) {
    if (!id) return null;
    // eslint-disable-next-line no-shadow
    const location = locations.find((location) => location._id === id);
    return location || null;
  },

  async getUserLocations(userid) {
    return locations.filter((location) => location.userid === userid);
  },

  async deleteLocationById(id) {
    const index = locations.findIndex((location) => location._id === id);
    if (index !== -1) {
      locations.splice(index, 1);
    }
  },

  async deleteAllLocations() {
    locations = [];
  },
};