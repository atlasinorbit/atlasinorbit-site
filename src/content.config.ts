import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false)
});

const journal = defineCollection({
  type: 'content',
  schema: baseSchema
});

const blog = defineCollection({
  type: 'content',
  schema: baseSchema
});

export const collections = { journal, blog };
