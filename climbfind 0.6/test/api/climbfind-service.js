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
};
