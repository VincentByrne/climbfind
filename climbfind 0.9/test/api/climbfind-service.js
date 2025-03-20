import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const climbfindService = {
  climbfindUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.climbfindUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.climbfindUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.climbfindUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.climbfindUrl}/api/users`);
    return res.data;
  },

  async createLocation(location) {
    const res = await axios.post(`${this.climbfindUrl}/api/locations`, location);
    return res.data;
  },

  async deleteAllLocations() {
    const response = await axios.delete(`${this.climbfindUrl}/api/locations`);
    return response.data;
  },

  async deleteLocation(id) {
    const response = await axios.delete(`${this.climbfindUrl}/api/locations/${id}`);
    return response;
  },

  async getAllLocations() {
    const res = await axios.get(`${this.climbfindUrl}/api/locations`);
    return res.data;
  },

  async getLocation(id) {
    const res = await axios.get(`${this.climbfindUrl}/api/locations/${id}`);
    return res.data;
  },

  async createImage(locationId, image) {
    const res = await axios.post(`${this.climbfindUrl}/api/locations/${locationId}/images`, image);
    return res.data;
  },

  async getAllImages() {
    const res = await axios.get(`${this.climbfindUrl}/api/images`);
    return res.data;
  },

  async getImage(id) {
    const res = await axios.get(`${this.climbfindUrl}/api/images/${id}`);
    return res.data;
  },

  async deleteImage(id) {
    const res = await axios.delete(`${this.climbfindUrl}/api/images/${id}`);
    return res.data;
  },

  async deleteAllImages() {
    const res = await axios.delete(`${this.climbfindUrl}/api/images`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.climbfindUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${  response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  }
};
