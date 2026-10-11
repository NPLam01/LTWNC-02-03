
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
    "src/hooks/useProducts.ts",
    "src/hooks/useDebounce.ts",
    "src/context/ShopContext.tsx",
    "src/components/ProductCard.tsx",
    "!src/**/*.d.ts",
  ],

  coverageDirectory: "coverage",

  coverageReporters: ["text", "html"],

  clearMocks: true,
};
