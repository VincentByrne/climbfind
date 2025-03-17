import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testLocations, testImages, awesome, awesomeView } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Image Model tests", () => {
  let locationList = null;

  setup(async () => {
    db.init("mongo");
    await db.locationStore.deleteAllLocations();
    await db.imageStore.deleteAllImages();
    locationList = await db.locationStore.addLocation(awesome);
    for (let i = 0; i < testImages.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testImages[i] = await db.imageStore.addImage(locationList._id, testImages[i]);
    }
  });

  test("create single image", async () => {
    const awesomeList = await db.locationStore.addLocation(awesome);
    const image = await db.imageStore.addImage(awesomeList._id, awesomeView)
    assert.isNotNull(image._id);
    assertSubset (awesomeView, image);
  });

  test("get multiple images", async () => {
    const images = await db.imageStore.getImagesByLocationId(locationList._id);
    assert.equal(images.length, testImages.length)
  });

  test("delete all images", async () => {     
    const images = await db.imageStore.getAllImages();     
    assert.equal(testImages.length, images.length);     
    await db.imageStore.deleteAllImages();     
    const newImages = await db.imageStore.getAllImages();     
    assert.equal(0, newImages.length);   
  });       

  test("get an image - success", async () => {     
    const awesomeList = await db.locationStore.addLocation(awesome);     
    const image = await db.imageStore.addImage(awesomeList._id, awesomeView);     
    const newImage = await db.imageStore.getImageById(image._id);     
    assertSubset(awesomeView, newImage);   
  });

  test("delete One Image - success", async () => {
    await db.imageStore.deleteImage(testImages[0]._id);
    const images = await db.imageStore.getAllImages();
    assert.equal(images.length, testLocations.length - 1);
    const deletedImage = await db.imageStore.getImageById(testImages[0]._id);
    assert.isNull(deletedImage);
  });

  test("get an image - bad params", async () => {
    assert.isNull(await db.imageStore.getImageById(""));
    assert.isNull(await db.imageStore.getImageById());
  });

  test("delete one image - fail", async () => {
    await db.imageStore.deleteImage("bad-id");
    const images = await db.imageStore.getAllImages();
    assert.equal(images.length, testLocations.length);
  });

});