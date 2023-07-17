import { defineConfig } from "tinacms";
import { defaultFields } from "./templates";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.tinacms_client_id,
  token: process.env.tinacms_readonly_token,
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
        defaultItem: () => {
          return {
            layout: "post",
            author: "Mark Fischer, Jr.",
            published: false,
          }
        },
        fields: defaultFields(),
      }
    ],
  },
});
