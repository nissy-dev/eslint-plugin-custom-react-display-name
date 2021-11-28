import { exampleRule } from "./rules/example-rule";

export = {
  rules: {
    "example-rule": exampleRule,
  },
  configs: {
    all: {
      plugins: ["ts-template"],
      rules: {
        "example-rule": "error",
      },
    },
  },
};
