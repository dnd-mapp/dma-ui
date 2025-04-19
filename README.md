# @dnd-mapp/dma-ui

[![License](https://img.shields.io/github/license/dnd-mapp/dma-ui)](./LICENSE.md)
[![Build](https://github.com/dnd-mapp/dma-ui/actions/workflows/build.yml/badge.svg?branch=main&event=push)](https://github.com/dnd-mapp/dma-ui/actions/workflows/build.yml)

## Overview

**@dnd-mapp/dma-ui** contains the source code for the `@dnd-mapp/dma-ui` library which contains shared components for the DnD-Mapp platform.
These components are themed and styled according to the house style of the DnD-Mapp platform.

---

## Getting started

Follow these steps to get started developing **@dnd-mapp/dma-ui**

### Prerequisites

Ensure that you have the following requirements prepared:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) v22.14 and npm v10.9.  
  We recommend using tools like [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to make it easier for yourself to switch between different versions of Node. Once installed, you can run one of the following commands to install the right version of Node.js:
    
    - When using nvm:

      ```bash 
      nvm install
      ````

    - When using nvm-windows
      
      ```bash
      nvm install 22.14
      nvm use 22.14
      ```

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/dnd-mapp/dma-ui.git
    ```

2. Navigate to the project directory

    ```bash
    cd dma-ui
    ```

3. Install Dependencies

    ```bash
    npm ci
    ```

### Running the project

To build the project locally you can run the following command:

```bash
npm run build
```

To run the build in dev mode run the following command:

```bash
npm run build-dev
```

To view the changes you've made, you must start up [Storybook](https://storybook.js.org/) by running the following command:

```bash
npm run storybook
```

---

## Usage

In order to run tests, run the following command:

```bash
npm run test
```

Or run them in dev mode, which will rerun the tests after each file change:

```bash
npm run test-dev
```

For creating and writing tests, we make use of [Karma](https://karma-runner.github.io/6.4/index.html) and [Jasmine](https://jasmine.github.io/).

---

## Contributing

Contributions are welcome! Please have a look at the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute to the project.

---

## License

This project is licensed under the [AGPL-3.0 License](./LICENSE.md). See the LICENSE.md file for details.

---

## Acknowledgments

- This repository contains [ESLint](https://eslint.org/) to maintain linting and [Prettier](https://prettier.io/) maintain formatting. Please make sure that your IDEA is correctly configured to run these tools automatically. For the JetBrains editors configuration files are already included to automatically configure the Prettier and ESLint tools so that they're run on every save.
