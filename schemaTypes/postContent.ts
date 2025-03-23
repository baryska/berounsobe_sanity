import { SchemaTypeDefinition } from 'sanity';

const postContent: SchemaTypeDefinition = {
  name: 'postContent',
  title: 'Post Content',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'theme', title: 'Theme', type: 'string' },
    { name: 'key', title: 'Key', type: 'number' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    {
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Odkaz',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default postContent;

