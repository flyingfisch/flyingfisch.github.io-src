import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured Image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Post Body",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
}
