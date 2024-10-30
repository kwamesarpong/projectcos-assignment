import { initTRPC } from "@trpc/server";
import { z } from "zod";

const ads = [
  {
    id: 1,
    title: 'Product Features',
    category: 'features & benefits',
    imageUrl: 'https://placehold.co/600x400',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2, 
    title: 'Customer Story',
    category: 'testimonial', 
    imageUrl: 'https://placehold.co/600x800',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Social Media Reviews',
    category: 'social proof',
    imageUrl: 'https://placehold.co/600x600',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Product Collection',
    category: 'collage',
    imageUrl: 'https://placehold.co/600x500',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Black Friday Sale',
    category: 'retail',
    imageUrl: 'https://placehold.co/600x700',
    author: 'Creative OS', 
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Product Display',
    category: 'product showcase',
    imageUrl: 'https://placehold.co/600x450',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Customer Testimonials',
    category: 'testimonial',
    imageUrl: 'https://placehold.co/600x900',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Summer Collection',
    category: 'retail',
    imageUrl: 'https://placehold.co/600x550',
    author: 'Creative OS',
    createdAt: new Date().toISOString(),
  }
];

const categories = [
  { id: 1, categoryName: 'features & benefits' },
  { id: 2, categoryName: 'testimonial' },
  { id: 3, categoryName: 'social proof' },
  { id: 4, categoryName: 'collage' },
  { id: 5, categoryName: 'product showcase' },
  { id: 6, categoryName: 'retail' }
] as const;

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),

  getAds: publicProcedure
    .query(() => {
      return ads;
    }),

  getCategories: publicProcedure
    .query(() => {
      return categories;
    }),
});

export type AppRouter = typeof appRouter;
