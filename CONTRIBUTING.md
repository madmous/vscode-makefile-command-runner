# Contributing

Thank for contributing! It's appreciated 🎉🎉

Before contributing to this project, please first create an [issue](https://github.com/Madmous/vscode-makefile-command-runner/issues) and start a discussion around potential changes.

## Code Contribution

If you do not know where to start, take a look at the the [`help-wanted`](https://github.com/Madmous/vscode-makefile-command-runner/labels/help%20wanted) issues.

### Getting the code

```
git clone https://github.com/Madmous/vscode-makefile-command-runner.git
```

Prerequisites

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/), `>= 8.9.1, <= 10.16.0`
- [yarn](https://yarnpkg.com/), `>= 1.16.0`

### Dependencies

From a terminal, where you have cloned the repository, execute the following command to install the required dependencies:

```
yarn install
```

### Watch

During development you can use a watcher to make builds on changes quick and easy. From a terminal, where you have cloned the repository, execute the following command:

```
yarn watch
```

### Formatting

TBD

### Linting

TBD

### Debugging and testing

#### Using VS Code

1. Open the `vscode-gitlens` folder
2. Ensure the required [dependencies](#dependencies) are installed
3. Start the [`watch`](#watch) task
4. Choose either `Run extension` or `Extension Tests` launch configuration from the launch dropdown in the Debug sidebar and press `F5`.

## Submitting a Pull Request

Please follow all the instructions in the [PR template](.github/PULL_REQUEST_TEMPLATE.md).
