import { TSESLint } from "@typescript-eslint/experimental-utils";
import { displayNameForExportedComponents } from "../src/rules/display-name-for-exported-components";

const ruleName = "display-name-for-exported-components";
const messageId = "noDisplayName";

const tester = new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

describe("test", () => {
  tester.run(ruleName, displayNameForExportedComponents, {
    valid: [{ code: "<span>{`${1}`}</span>" }],
    invalid: [
      {
        code: "<span>${1}</span>",
        errors: [{ messageId }],
        output: "<span>{1}</span>",
      },
    ],
  });
});
