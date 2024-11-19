import { SchemaTypeDefinition } from 'sanity';

const faqContent: SchemaTypeDefinition = {
  name: 'faqContent',
  title: 'FAQ Content',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'string' }, 
  ],
};

export default faqContent;
