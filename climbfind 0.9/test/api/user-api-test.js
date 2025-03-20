import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { climbfindService } from "./climbfind-service.js";
import { maggie, testUsers } from "../fixtures.js";
import { db } from "../../src/models/db.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    climbfindService.clearAuth();
    await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggie);
    await climbfindService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await climbfindService.createUser(testUsers[i]);
    }
    await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggie);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await climbfindService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all user", async () => {
    let returnedUsers = await climbfindService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await climbfindService.deleteAllUsers();
    await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggie);
    returnedUsers = await climbfindService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await climbfindService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await climbfindService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });

  test("get a user - deleted user", async () => {
    await climbfindService.deleteAllUsers();
    await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggie);
    try {
      const returnedUser = await climbfindService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});

