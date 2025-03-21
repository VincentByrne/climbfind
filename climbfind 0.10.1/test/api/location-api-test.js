import { EventEmitter } from "events";
import { assert } from "chai";
import { climbfindService } from "./climbfind-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, maggieCredentials, awesome, testLocations } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Location API tests", () => {
  let user = null;
  
  setup(async () => {
    climbfindService.clearAuth();
    user = await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggieCredentials);
    await climbfindService.deleteAllLocations();
    await climbfindService.deleteAllUsers();
    user = await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggieCredentials);
    awesome.userid = user._id;
  });

  teardown(async () => {});

  test("create location", async () => {
    const returnedLocation = await climbfindService.createLocation(awesome);
    assert.isNotNull(returnedLocation);
    assertSubset(awesome, returnedLocation);
  });

  test("delete a location", async () => {
  });

  test("create multiple locations", async () => {
  });

  test("remove non-existant location", async () => {
  });
});
