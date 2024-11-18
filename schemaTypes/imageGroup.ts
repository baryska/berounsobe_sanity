import { SchemaTypeDefinition } from 'sanity';

const imageGroup: SchemaTypeDefinition = {
  name: 'imageGroup',
  type: 'document',
  title: 'Image Group',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Group Title',
      description: 'Title of the image group.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Group Description',
      description: 'A short description of the group.',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'List of images in this group.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Short description of the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for accessibility.',
            },
          ],
        },
      ],
    },
  ],
};

export default imageGroup;