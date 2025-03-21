import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { climbfindService } from "./climbfind-service.js";
import { maggie, maggieCredentials, awesome, testLocations, testImages, awesomeView } from "../fixtures.js";

suite("Image API tests", () => {
  let user = null;
  let awesomeWalls = null;

  setup(async () => {
    climbfindService.clearAuth();
    user = await climbfindService.createUser(maggie);
    await climbfindService.authenticate(maggieCredentials);
    await climbfindService.deleteAllLocations();
    await climbfindService.deleteAllImages();
    awesome.userid = user._id;
    awesomeWalls = await climbfindService.createLocation(awesome);
  });

  teardown(async () => {});

  test("create image", async () => {
    const returnedImage = await climbfindService.createImage(awesomeWalls._id, awesomeView);
    assertSubset(awesomeView, returnedImage);
  });

  test("create Multiple images", async () => {
    for (let i = 0; i < testImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await climbfindService.createImage(awesomeWalls._id, testImages[i]);
    }
    const returnedImages = await climbfindService.getAllImages();
    assert.equal(returnedImages.length, testImages.length);
    for (let i = 0; i < returnedImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const image = await climbfindService.getImage(returnedImages[i]._id);
      assertSubset(image, returnedImages[i]);
    }
  });

  test("Delete ImageApi", async () => {
    for (let i = 0; i < testImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await climbfindService.createImage(awesomeWalls._id, testImages[i]);
    }
    let returnedImages = await climbfindService.getAllImages();
    assert.equal(returnedImages.length, testImages.length);
    for (let i = 0; i < returnedImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const image = await climbfindService.deleteImage(returnedImages[i]._id);
    }
    returnedImages = await climbfindService.getAllImages();
    assert.equal(returnedImages.length, 0);
  });

  test("denormalised location", async () => {
    for (let i = 0; i < testImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await climbfindService.createImage(awesomeWalls._id, testImages[i]);
    }
    const returnedLocation = await climbfindService.getLocation(awesomeWalls._id);
    assert.equal(returnedLocation.images.length, testImages.length);
    for (let i = 0; i < testImages.length; i += 1) {
      assertSubset(testImages[i], returnedLocation.images[i]);
    }
  });
});
