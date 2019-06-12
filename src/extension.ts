import { commands, ExtensionContext, window } from "vscode";
import TaskTreeDataProvider from "./provider";
import {
  executeRunTestCommand,
  executeMakefileCommand,
  executeWatchTestCommand
} from "./commands";
import getConfig from "./config";

// integration tests
export const activate = (context: ExtensionContext) => {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  const config = getConfig();

  commands.registerCommand(
    "extension.executeRunTestCommand",
    executeRunTestCommand(config)
  );
  commands.registerCommand(
    "extension.executeWatchTestCommand",
    executeWatchTestCommand(config)
  );
  commands.registerCommand(
    "extension.executeMakefileCommand",
    executeMakefileCommand(config)
  );
  window.registerTreeDataProvider("makefile", new TaskTreeDataProvider(config));
};

export const deactivate = () => {};
