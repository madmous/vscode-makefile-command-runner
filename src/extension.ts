import { commands, ExtensionContext, window } from "vscode";
import TaskTreeDataProvider from "./provider";
import {
  executeRunTestCommand,
  executeMakefileCommand,
  executeWatchTestCommand
} from "./commands";
import getConfig from "./config";

export const activate = (context: ExtensionContext) => {
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
