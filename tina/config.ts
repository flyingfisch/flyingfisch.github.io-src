import { defineConfig } from "tinacms";
import { defaultFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7fc65719-80f5-4e2c-8667-53d5b6bc56ec", // Get this from tina.io
  token: "d269eed187043016bf2cdb25282efab76a17a7f8", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: defaultFields(),
      }
    ],
  },
});
