import * as assert from "assert";
import extractCommands from "../parser";
import { resolve } from 'path';
import ConfigurationError from "../ConfigurationError";

suite("parser", () => {
  test("should retreive makefile commands", async () => {
    // given
    const path = resolve(__dirname, `../../src/test`);

    // when
    const commands = await extractCommands(path);

    // then
    assert.deepEqual(["command", "another-command"], commands);
  });

  test("should gracefully handle errors", async () => {
    // given
    const path = resolve(__dirname, `../../src`);

    // when
    let error;

    try {
      await extractCommands(path);
    } catch(e) {
      error = e;
    }

    // then
    assert(error instanceof ConfigurationError);
  });
});