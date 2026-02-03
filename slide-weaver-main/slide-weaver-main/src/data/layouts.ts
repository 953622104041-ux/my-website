import { Layout } from '@/types/presentation';

export const layouts: Layout[] = [
  {
    id: 'title-hero',
    name: 'Title / Hero',
    description: 'Opening slide with module tag, title, and hero image',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5, required: true },
      { name: 'title', type: 'title', maxWords: 8, required: true },
      { name: 'subtitle', type: 'subtitle', maxWords: 12 },
    ],
  },
  {
    id: 'agenda-numbered',
    name: 'Agenda (Numbered)',
    description: 'Numbered agenda items with dotted lines',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 3, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'agenda-split',
    name: 'Agenda (Split)',
    description: 'Large title on blue left, bullet points on right',
    fields: [
      { name: 'title', type: 'title', maxWords: 3, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'section-title',
    name: 'Section Title + Image',
    description: 'Section header with background image overlay',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 8, required: true },
    ],
  },
  {
    id: 'content-image',
    name: 'Content + Image',
    description: 'Text content on left with large image on right',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'body', type: 'text', required: true },
      { name: 'callout', type: 'text' },
    ],
  },
  {
    id: 'executive-summary',
    name: 'Executive Summary',
    description: 'Summary bullets on left, image on right',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 4, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'timeline-facts',
    name: 'Timeline / Key Facts',
    description: 'Vertical timeline with dots and key information',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 4, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'dos-donts-list',
    name: 'Do\'s List',
    description: 'Checklist of do\'s or don\'ts with icons',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'listType', type: 'text', required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'dos-donts-comparison',
    name: 'Do\'s & Don\'ts Comparison',
    description: 'Two-column comparison with green checks and red X',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'doItems', type: 'bullet', required: true },
      { name: 'dontItems', type: 'bullet', required: true },
    ],
  },
  {
    id: 'two-column-cards',
    name: 'Two Column Cards',
    description: 'Two cards with titles and bullet points each',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 8, required: true },
      { name: 'leftTitle', type: 'subtitle', maxWords: 5, required: true },
      { name: 'leftItems', type: 'bullet', required: true },
      { name: 'rightTitle', type: 'subtitle', maxWords: 5, required: true },
      { name: 'rightItems', type: 'bullet', required: true },
    ],
  },
  {
    id: 'deep-dive',
    name: 'Deep Dive / Explanation',
    description: 'Why/How/Example format with two columns',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'subtitle', type: 'subtitle', maxWords: 5 },
      { name: 'leftTitle', type: 'subtitle', maxWords: 4, required: true },
      { name: 'leftContent', type: 'text', required: true },
      { name: 'rightTitle', type: 'subtitle', maxWords: 4, required: true },
      { name: 'rightItems', type: 'bullet', required: true },
      { name: 'exampleLabel', type: 'text', maxWords: 2 },
      { name: 'exampleContent', type: 'text' },
    ],
  },
  {
    id: 'conclusion-timeline',
    name: 'Conclusion',
    description: 'Timeline-style conclusion points with image',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 3, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'summary-bullets',
    name: 'Summary',
    description: 'Clean bullet-point summary slide',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 3, required: true },
      { name: 'items', type: 'bullet', required: true },
    ],
  },
  {
    id: 'table-layout',
    name: 'Table Layout',
    description: 'Data table with headers and rows',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'subtitle', type: 'subtitle', maxWords: 5 },
      { name: 'headers', type: 'bullet', required: true },
      { name: 'row1', type: 'bullet' },
      { name: 'row2', type: 'bullet' },
      { name: 'row3', type: 'bullet' },
    ],
  },
  {
    id: 'qna-final',
    name: 'Q&A / Final',
    description: 'Closing slide with reflection question and Q&A',
    fields: [
      { name: 'moduleTag', type: 'text', maxWords: 5 },
      { name: 'topicTag', type: 'text', maxWords: 10 },
      { name: 'title', type: 'title', maxWords: 6, required: true },
      { name: 'subtitle', type: 'subtitle', maxWords: 8 },
      { name: 'reflectionQuestion', type: 'text' },
      { name: 'callToAction', type: 'text' },
    ],
  },
  {
    id: 'thank-you',
    name: 'Thank You',
    description: 'Final closing slide with thank you message',
    fields: [
      { name: 'title', type: 'title', maxWords: 4, required: true },
      { name: 'subtitle', type: 'subtitle', maxWords: 12 },
    ],
  },
];

export const getLayoutById = (id: string): Layout | undefined => {
  return layouts.find(l => l.id === id);
};

export const getLayoutName = (id: string): string => {
  return getLayoutById(id)?.name || id;
};
