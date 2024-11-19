import { SchemaTypeDefinition } from 'sanity';

const timelineContent: SchemaTypeDefinition = {
  name: 'timelineContent',
  title: 'Timeline Content',
  type: 'document',
  fields: [
    { name: 'text', title: 'Text', type: 'string' },
    { name: 'year', title: 'Year', type: 'number' },
  ]
};

export default timelineContent;
