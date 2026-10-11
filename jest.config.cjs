/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          module: "CommonJS",
          moduleResolution: "Node",
          esModuleInterop: true,
          allowImportingTsExtensions: false,
          types: ["jest", "@testing-library/jest-dom", "node"],
        },
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],

  testMatch: [
    "**/?(*.)+(test|spec).tsx",
    "**/?(*.)+(test|spec).ts",
  ],

  collectCoverageFrom: [
    "src/data/products.ts",
    "src/services/productApi.ts",
    "src/hooks/useProducts.ts",
    "src/context/ShopContext.tsx",
    "src/components/ProductCard.tsx",
    "src/components/CartDrawer.tsx",
    "!src/**/*.d.ts",
  ],

  coverageDirectory: "coverage",

  coverageReporters: ["text", "html"],

  clearMocks: true,
};
