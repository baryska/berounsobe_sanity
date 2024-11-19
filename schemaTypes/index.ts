import { type SchemaTypeDefinition } from 'sanity';
import textContent from './textContent';
import imageContent from './imageContent';
import postContent from './postContent';
import imageGroup from './imageGroup';
import faqContent from './faqContent';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [textContent, imageContent, postContent, imageGroup, faqContent],
}
