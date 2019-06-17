import { workspace } from "vscode";
import ConfigurationError from "./ConfigurationError";

type Content = string[];
type Commands = string[];

const extractCommands = (filePath: string): Promise<Commands> =>
  getFileContent(filePath).then(buildCommands);

export default extractCommands;

const getFileContent = async (filePath: string): Promise<Content> => {
  let document;

  try {
    document = await workspace.openTextDocument(filePath);
  } catch (e) {
    throw new ConfigurationError(
      'Makefile cannot be read. Check the configuration and update the makefilePath'
    );
  }

  const content = document.getText().split("\n");

  return content;
};

const buildCommands = (content: Content) => {
  const commands = [];

  for (let i = 0; i < content.length; i++) {
    const line = content[i];
    const separator = ": ##";

    if (line.indexOf(": ##") !== -1) {
      const command = line.split(separator)[0];
      commands.push(command);
    }
  }

  return commands;
};
