import * as assert from "assert";
import { getFilePath, isUnit } from "../commands";

suite("makefile command runner", () => {
  test("should build a file path", () => {
    // given
    const path =
      "/Users/moustaphaamadoudiouf/Desktop/fff/test/integration/app/terrTest.js";
    const workspaceRootPath = "/Users/moustaphaamadoudiouf/Desktop/fff";

    // when
    const filePath = getFilePath(path, workspaceRootPath);

    // then
    assert.deepEqual("test/integration/app/terrTest.js", filePath);
  });

  test("should build a unit test command", () => {
    // given
    const filePath = "test/unit/app/terrTest.js";

    // when then
    assert.equal(true, isUnit(filePath));
  });

  test("should build an integration test command", () => {
    // given
    const filePath = "test/integration/app/terrTest.js";

    // when then
    assert.equal(false, isUnit(filePath));
  });
});
