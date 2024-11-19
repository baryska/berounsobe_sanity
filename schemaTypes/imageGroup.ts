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
      name: 'type',
      type: 'text',
      title: 'Group Type',
      description: 'A type of the group.',
    },
    {
      name: 'key',
      type: 'number',
      title: 'Group Key',
      description: 'A key of the group.',
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
        },
      ],
    },
  ],
};

export default imageGroup;
