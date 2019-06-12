import { workspace } from "vscode";
import { Config } from "./config";
import { Argument } from "./provider";
import { ensureTerminalExists, selectTerminal } from "./terminal";

export const executeRunTestCommand = (config: Config) => async (uri: any) => {
  executeTestCommand(
    config,
    uri,
    config.unitTestCommand,
    config.integrationTestCommand
  );
};

export const executeWatchTestCommand = (config: Config) => async (uri: any) => {
  executeTestCommand(
    config,
    uri,
    config.unitTestWatchCommand,
    config.integrationTestWatchCommand
  );
};

const executeTestCommand = async (
  config: Config,
  uri: any,
  unitCommand: string,
  integrationCommand: string
) => {
  if (workspace.rootPath && uri) {
    const filePath = getFilePath(uri.path, workspace.rootPath);
    const command = isUnit(filePath) ? unitCommand : integrationCommand;

    sendTextsToTerminal([
      `cd ${workspace.rootPath}/${config.makefilePath}`,
      `make ${command} ${config.filePathEnv}=${filePath}`
    ]);
  }
};

export const getFilePath = (path: string, workspaceRootPath: string) =>
  path.split(workspaceRootPath + "/")[1];

export const isUnit = (filePath: string) => filePath.indexOf("unit") !== -1;

export const executeMakefileCommand = (config: Config) => async (
  argument: Argument
) => {
  sendTextsToTerminal([
    `cd ${workspace.rootPath}/${config.makefilePath}`,
    `make ${argument}`
  ]);
};

const sendTextToTerminal = async (text: string) => {
  if (ensureTerminalExists()) {
    const terminal = await selectTerminal();

    if (terminal) {
      terminal.sendText(text);
    }
  }
};

const sendTextsToTerminal = async (texts: string[]) => {
  for (let i = 0; i < texts.length; i++) {
    sendTextToTerminal(texts[i]);
  }
};
