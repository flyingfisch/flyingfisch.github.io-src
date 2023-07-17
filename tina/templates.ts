import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      label: "Post Metadata",
      name: "metadata",
      type: "object",
      fields: [
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
      ]
    },
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
      type: "rich-text",
      name: "body",
      label: "Post Body",
      isBody: true,
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
  ] as TinaField[];
}
