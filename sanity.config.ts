import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Beroun sobe',

  projectId: '1jc9t4l8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema
})
