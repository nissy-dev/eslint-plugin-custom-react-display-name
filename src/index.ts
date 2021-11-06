import { displayNameForExportedComponents } from "./rules/display-name-for-exported-components";

export = {
  rules: {
    ruleName: displayNameForExportedComponents,
  },
  configs: {
    all: {
      plugins: ["custom-react-display-name"],
      rules: {
        "display-name-for-exported-components": "error",
      },
    },
  },
};
