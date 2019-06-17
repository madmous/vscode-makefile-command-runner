import { commands, ExtensionContext, window, workspace } from "vscode";
import { executeMakefileCommand, executeRunTestCommand, executeWatchTestCommand } from "./commands";
import getConfig, { CONFIGURATION_NAME } from "./config";
import TaskTreeDataProvider from "./provider";

export const activate = (context: ExtensionContext) => {
  const config = getConfig();
  const provider = new TaskTreeDataProvider(config);

  context.subscriptions.push(
    commands.registerCommand(
      "extension.executeRunTestCommand",
      executeRunTestCommand(config)
    ),
    commands.registerCommand(
      "extension.executeWatchTestCommand",
      executeWatchTestCommand(config)
    ),
    commands.registerCommand(
      "extension.executeMakefileCommand",
      executeMakefileCommand(config)
    ),
    window.registerTreeDataProvider("makefile", provider),
    workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration(CONFIGURATION_NAME)) {
        commands.executeCommand("workbench.action.reloadWindow");
      }
    })
  );
};

export const deactivate = () => {};
