import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    video: false, // Disable video recording to save space
    screenshotsFolder: "cypress/screenshots",
  },
});