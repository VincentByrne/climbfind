import { assert } from "chai";
import { climbfindService } from "./climbfind-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    climbfindService.clearAuth();
    await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggie);
    await climbfindService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await climbfindService.createUser(maggie);
    const response = await climbfindService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await climbfindService.createUser(maggie);
    const response = await climbfindService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    climbfindService.clearAuth();
    try {
      await climbfindService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
