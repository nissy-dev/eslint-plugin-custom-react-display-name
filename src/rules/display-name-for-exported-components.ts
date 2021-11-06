import { TSESLint } from "@typescript-eslint/experimental-utils";

export const displayNameForExportedComponents: TSESLint.RuleModule<"noDisplayName", []> = {
  meta: {
    docs: {
      description: "Prevent missing displayName in exported React components",
      recommended: false,
      url: "TODO",
    },
    messages: {
      noDisplayName: "Exported Component is missing display name",
    },
    type: "suggestion",
    schema: {},
  },
  create: (context) => {
    // コメントを許さないルール
    return {
      Comment: (node) => {
        context.report({
          node,
          messageId: "noDisplayName",
        });
      },
    };
  },
};
