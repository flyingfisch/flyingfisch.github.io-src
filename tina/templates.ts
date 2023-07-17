import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
      ui: {
        dateFormat: "YYYY-MM-DD",
      },
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
      name: "author",
      label: "Author",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      label: "Published",
      name: "published",
      type: "boolean",
    },
  ] as TinaField[];
}
