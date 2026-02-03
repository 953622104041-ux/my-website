export type LayoutType =
  | 'title-hero'
  | 'agenda-numbered'
  | 'agenda-split'
  | 'section-title'
  | 'content-image'
  | 'introduction-objectives'
  | 'executive-summary'
  | 'timeline-facts'
  | 'dos-donts-list'
  | 'dos-donts-comparison'
  | 'two-column-cards'
  | 'deep-dive'
  | 'conclusion-timeline'
  | 'summary-bullets'
  | 'features-cycle'
  | 'pill-10-row'
  | 'table-layout'
  | 'table-layout'
  | 'qna-final'
  | 'thank-you';

export interface LayoutField {
  name: string;
  type: 'title' | 'subtitle' | 'text' | 'bullet' | 'table-cell';
  maxWords?: number;
  required?: boolean;
}

export interface Layout {
  id: LayoutType;
  name: string;
  description: string;
  fields: LayoutField[];
  preview?: string;
}

export interface SlideContent {
  [fieldName: string]: string | string[];
}

export interface Slide {
  id: string;
  layoutId: LayoutType;
  content: SlideContent;
  order: number;
}

export interface Presentation {
  id: string;
  title: string;
  topic: string;
  audience: string;
  tone: 'simple' | 'professional' | 'student-friendly';
  slides: Slide[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PresentationInput {
  topic: string;
  audience: string;
  slideCount: number;
  tone: 'simple' | 'professional' | 'student-friendly';
}

export interface SlideFlowPlan {
  slideNumber: number;
  layoutId: LayoutType;
  purpose: string;
}
