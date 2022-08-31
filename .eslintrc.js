module.exports = {
  // parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
// module.exports = {
//   root: true,
//   extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: { project: ["./tsconfig.json"] },
//   plugins: ["@typescript-eslint"],
//   rules: {
//     "@typescript-eslint/strict-boolean-expressions": [
//       2,
//       {
//         allowString: false,
//         allowNumber: false,
//       },
//     ],
//   },
//   ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],
// };