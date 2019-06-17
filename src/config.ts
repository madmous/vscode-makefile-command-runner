import { workspace } from "vscode";

export type Config = {
  makefilePath: string;
  makefileName: string;
  unitTestCommand: string;
  integrationTestCommand: string;
  filePathEnv: string;
  unitTestWatchCommand: string;
  integrationTestWatchCommand: string;
};

const getConfig = (): Config => {
  const config = workspace.getConfiguration("makefileCommandRunner");

  return {
    makefilePath: config.makefilePath,
    makefileName: config.makefileName,
    unitTestCommand: config.unitTestCommand,
    integrationTestCommand: config.integrationTestCommand,
    filePathEnv: config.filePathEnv,
    unitTestWatchCommand: config.unitTestWatchCommand,
    integrationTestWatchCommand: config.integrationTestWatchCommand
  };
};

export default getConfig;
