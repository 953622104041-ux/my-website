import { PresentationInput, Slide, SlideFlowPlan, LayoutType } from '@/types/presentation';
import { layouts } from '@/data/layouts';

// Generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Predefined flow patterns based on slide count
const getSlideFlowPlan = (slideCount: number, topic: string): SlideFlowPlan[] => {
  const plan: SlideFlowPlan[] = [];

  // 1. Opening
  plan.push({ slideNumber: 1, layoutId: 'title-hero', purpose: 'Opening/Title' });
  plan.push({ slideNumber: 2, layoutId: 'agenda-numbered', purpose: 'Agenda/Overview' });
  plan.push({ slideNumber: 3, layoutId: 'features-cycle', purpose: 'Key Features' }); // Fixed Standard Slide

  // 2. Middle (dynamic)
  // We have 3 opening and 3 closing slides = 6. 
  // We calculate how many middle slides we need to reach the target slideCount.
  const targetMiddleCount = Math.max(1, slideCount - 6);

  const contentLayouts: LayoutType[] = [
    'section-title',
    'pill-10-row',
    'two-column-cards',
    'content-image',
    'timeline-facts',
    'executive-summary',
    'deep-dive',
    'dos-donts-comparison',
  ];

  for (let i = 0; i < targetMiddleCount; i++) {
    plan.push({
      slideNumber: plan.length + 1,
      layoutId: contentLayouts[i % contentLayouts.length],
      purpose: `Content ${i + 1}`,
    });
  }

  // 3. Closing
  plan.push({ slideNumber: plan.length + 1, layoutId: 'summary-bullets', purpose: 'Summary' });
  plan.push({ slideNumber: plan.length + 1, layoutId: 'qna-final', purpose: 'Q&A' });
  plan.push({ slideNumber: plan.length + 1, layoutId: 'thank-you', purpose: 'Thank You' });

  return plan;
};

// --- DYNAMIC CONTENT ENGINE ---

type ContentDomain = 'tech' | 'business' | 'creative' | 'education' | 'health' | 'ai' | 'finance' | 'general';

interface DomainContent {
  verbs: string[];
  adjectives: string[];
  nouns: string[];
  benefits: string[];
  challenges: string[];
  features: string[];
  metrics: string[];
  images: string[];
}

const contentLibraries: Record<ContentDomain, DomainContent> = {
  tech: {
    verbs: ['Architect', 'Deploy', 'Scale', 'Optimize', 'Integrate', 'Debug', 'Refactor'],
    adjectives: ['Scalable', 'Robust', 'Cloud-native', 'Low-latency', 'Secure', 'Modular'],
    nouns: ['Microservices', 'API', 'Latency', 'Throughput', 'Stack', 'Algorithm', 'Database'],
    benefits: ['Increased system throughput', 'Reduced technical debt', 'Enhanced security posture', 'Seamless scalability'],
    challenges: ['Legacy system integration', 'Data consistency', 'Latency requirements', 'Security vulnerabilities'],
    features: ['Real-time processing', 'Automated CI/CD pipelines', 'Serverless architecture', 'End-to-end encryption'],
    metrics: ['Uptime', 'Response Time', 'Error Rate', 'Throughput'],
    images: ['/illustrations/illustration5.png']
  },
  ai: {
    verbs: ['Train', 'Infer', 'Classify', 'Predict', 'Optimize', 'Fine-tune', 'Generate'],
    adjectives: ['Generative', 'Predictive', 'Neural', 'Autonomous', 'Supervised', 'Cognitive'],
    nouns: ['Neural Network', 'Model', 'inference', 'Dataset', 'Epoch', 'Transformer', 'Token'],
    benefits: ['Automated decision making', 'Enhanced prediction accuracy', 'Scalable intelligence', 'Personalized experiences'],
    challenges: ['Data bias', 'Model hallucination', 'Compute costs', 'Explainability'],
    features: ['Large Language Models', 'Computer Vision', 'Reinforcement Learning', 'Predictive Analytics'],
    metrics: ['Accuracy', 'F1 Score', 'Latency', 'Token Throughput'],
    images: ['/illustrations/tech_ai_consistent.png', '/illustrations/illustration5.png']
  },
  finance: {
    verbs: ['Invest', 'Audit', 'Forecast', 'Hedge', 'Diversify', 'Liquidate', 'Compound'],
    adjectives: ['Fiscal', 'Bearish', 'Bullish', 'Liquidity', 'Solvent', 'Yield-bearing'],
    nouns: ['Portfolio', 'Asset', 'Equity', 'Dividend', 'Capital', 'Liability', 'Margin'],
    benefits: ['Portfolio diversification', 'Risk mitigation', 'Compound growth', 'Fiscal stability'],
    challenges: ['Market volatility', 'Inflationary pressure', 'Regulatory compliance', 'Liquidity constraints'],
    features: ['Algorithmic trading', 'Risk assessment models', 'Portfolio rebalancing', 'Fraud detection'],
    metrics: ['ROI', 'Alpha', 'Beta', 'Sharpe Ratio'],
    images: ['/illustrations/illustration4.png']
  },
  business: {
    verbs: ['Strategize', 'Monetize', 'Leverage', 'Synergize', 'Optimize', 'Forecast', 'Scale'],
    adjectives: ['Profitable', 'Strategic', 'Market-leading', 'Disruptive', 'Efficient', 'Global'],
    nouns: ['ROI', 'EBITDA', 'Market Share', 'Stakeholders', 'Synergy', 'Growth', 'Revenue'],
    benefits: ['Maximized ROI', 'Expanded market share', 'Streamlined operations', 'Increased shareholder value'],
    challenges: ['Market saturation', 'Regulatory compliance', 'Competitive pressure', 'Economic volatility'],
    features: ['Comprehensive market analysis', 'Strategic growth roadmap', 'Financial modeling', 'Competitor benchmarking'],
    metrics: ['Revenue Growth', 'CAC', 'LTV', 'Churn Rate'],
    images: ['/illustrations/illustration4.png']
  },
  creative: {
    verbs: ['Design', 'Curate', 'Visualize', 'Craft', 'Innovate', 'Storytell', 'Express'],
    adjectives: ['Aesthetic', 'Minimalist', 'Vibrant', 'User-centric', 'Emotive', 'Bold'],
    nouns: ['Typography', 'Palette', 'Composition', 'UX/UI', 'Brand Identity', 'Narrative', 'Concept'],
    benefits: ['Stronger brand recall', 'Enhanced user engagement', 'Visual consistency', 'Emotional connection'],
    challenges: ['Subjective interpretation', 'Resource constraints', 'Brand dilution', 'Platform limitations'],
    features: ['Custom design system', 'Visual storytelling', 'Interactive prototypes', 'Brand guidelines'],
    metrics: ['Engagement', 'Brand Sentiment', 'Click-through Rate', 'Net Promoter Score'],
    images: ['/illustrations/illustration2.png']
  },
  health: {
    verbs: ['Heal', 'Prescribe', 'Diagnose', 'Treat', 'Prevent', 'Nourish', 'Strengthen'],
    adjectives: ['Holistic', 'Clinical', 'Evidence-based', 'Therapeutic', 'Vital', 'Wellness-focused'],
    nouns: ['Wellness', 'Vitality', 'Pathology', 'Nutrition', 'Treatment', 'Recovery', 'Diagnosis'],
    benefits: ['Improved patient outcomes', 'Enhanced quality of life', 'Preventative care', 'Holistic wellness'],
    challenges: ['Chronic conditions', 'Access to care', 'Lifestyle adherence', 'Genetic factors'],
    features: ['Personalized care plans', 'Evidence-based treatments', 'Wellness monitoring', 'Nutritional guidance'],
    metrics: ['Recovery Rate', 'Patient Satisfaction', 'Adherence', 'Vital Signs'],
    images: ['/illustrations/illustration1.png']
  },
  education: {
    verbs: ['Teach', 'Learn', 'Instruct', 'Assess', 'Mentor', 'Develop', 'Synthesize'],
    adjectives: ['Pedagogical', 'Interactive', 'Comprehensive', 'Foundational', 'Advanced', 'Curricular'],
    nouns: ['Curriculum', 'Pedagogy', 'Syllabus', 'Assessment', 'Learning Outcome', 'Module', 'Student'],
    benefits: ['Deepened understanding', 'Skill acquisition', 'Critical thinking', 'Knowledge retention'],
    challenges: ['Engagement levels', 'Diverse learning styles', 'Resource accessibility', 'Assessment validity'],
    features: ['Interactive learning modules', 'Comprehensive assessments', 'Peer collaboration', 'Real-world application'],
    metrics: ['Test Scores', 'Completion Rate', 'Student Engagement', 'Skill Proficiency'],
    images: ['/illustrations/illustration3.png']
  },
  general: {
    verbs: ['Analyze', 'Implement', 'Understand', 'Develop', 'Explore', 'Master', 'Review'],
    adjectives: ['Effective', 'Efficient', 'Comprehensive', 'Essential', 'Key', 'Important'],
    nouns: ['Strategy', 'Method', 'Concept', 'System', 'Process', 'Outcome', 'Goal'],
    benefits: ['Improved efficiency', 'Better outcomes', 'Clearer understanding', 'Strategic advantage'],
    challenges: ['Implementation complexity', 'Resource allocation', 'Time management', 'Adoption barriers'],
    features: ['Key insights', 'Practical steps', 'Proven methods', 'Detailed analysis'],
    metrics: ['Success Rate', 'Efficiency', 'Quality', 'Impact'],
    images: ['/illustrations/illustration1.png']
  }
};

const analyzeTopic = (topic: string): ContentDomain => {
  const lowerTopic = topic.toLowerCase();

  // High specificity domains first
  if (/(ai|neural|gpt|llm|robot|machine learning|inference|token|brain|cognitive)/.test(lowerTopic)) return 'ai';
  if (/(finance|stock|invest|asset|capital|fund|liquidity|fiscal|crypto|ledger)/.test(lowerTopic)) return 'finance';
  if (/(design|art|creative|color|ux|ui|brand|photo|film|music|draw|graphic|logo|product)/.test(lowerTopic)) return 'creative';

  // Broad domains
  if (/(code|software|app|data|tech|cloud|api|cyber|server|web|algorithm)/.test(lowerTopic)) return 'tech';
  if (/(business|market|sales|strategy|corp|revenue|management|startup)/.test(lowerTopic)) return 'business';
  if (/(health|food|diet|fitness|yoga|med|doctor|nurse|wellness|exercise)/.test(lowerTopic)) return 'health';
  if (/(learn|teach|school|class|student|study|edu|course|lesson)/.test(lowerTopic)) return 'education';

  return 'general';
};

// Generate sample content based on topic and layout
const generateSlideContent = (
  layoutId: LayoutType,
  topic: string,
  audience: string,
  slideNumber: number,
  totalSlides: number,
  tone: 'simple' | 'professional' | 'student-friendly'
): Record<string, string | string[]> => {
  const domain = analyzeTopic(topic);
  const lib = contentLibraries[domain];
  const topicWords = topic.split(' ').slice(0, 5).join(' ');
  const moduleTag = `Module ${Math.ceil(slideNumber / 2)}`;
  const topicTag = topicWords.length > 25 ? topicWords.substring(0, 25) + '...' : topicWords;

  const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const getMultiple = (arr: string[], count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const v = getMultiple(lib.verbs, 10);
  const a = getMultiple(lib.adjectives, 10);
  const n = getMultiple(lib.nouns, 10);
  const f = getMultiple(lib.features, 10);
  const m = getMultiple(lib.metrics, 10);

  // Smart Image Selection: Matches topic keywords OR specific slide context to consistent-style assets
  const getSmartImage = (text: string = '') => {
    const context = (text + ' ' + topic).toLowerCase();

    // 1. Context-Specific overrides (Based on Slide Heading/Content)
    if (context.includes('growth') || context.includes('profit') || context.includes('chart') || context.includes('revenue') || context.includes('scale')) return '/illustrations/illustration4.png';
    if (context.includes('team') || context.includes('meet') || context.includes('people') || context.includes('collab') || context.includes('community')) return '/illustrations/business_meeting_consistent.png';

    // Tech Context
    if (context.includes('cloud') || context.includes('server') || context.includes('database') || context.includes('infra')) return '/illustrations/tech_cloud_consistent.png';
    if (context.includes('ai') || context.includes('neural') || context.includes('brain') || context.includes('robot') || context.includes('intelligence')) return '/illustrations/tech_ai_consistent.png';

    // Creative Context
    if (context.includes('ui') || context.includes('ux') || context.includes('web') || context.includes('app') || context.includes('interface') || context.includes('screen') || context.includes('digital')) return '/illustrations/creative_ui_consistent.png';
    if (context.includes('art') || context.includes('draw') || context.includes('paint') || context.includes('design') || context.includes('creative') || context.includes('color') || context.includes('brand')) return '/illustrations/creative_art_consistent.png';

    // Health Context
    if (context.includes('health') || context.includes('med') || context.includes('doctor') || context.includes('clinic') || context.includes('wellness') || context.includes('fitness') || context.includes('hospital')) return '/illustrations/health_consistent.png';

    // Education Context
    if (context.includes('edu') || context.includes('school') || context.includes('learn') || context.includes('teach') || context.includes('class') || context.includes('study') || context.includes('university')) return '/illustrations/education_consistent.png';

    // 2. Domain Fallbacks (if context didn't match specific asset)
    // Tech Specifics
    if (domain === 'tech') {
      return '/illustrations/illustration5.png'; // Hexagon fallback
    }

    // Business Specifics
    if (domain === 'business') {
      return '/illustrations/illustration4.png'; // Growth fallback
    }

    // Creative Specifics
    if (domain === 'creative') {
      return '/illustrations/illustration2.png'; // Abstract fallback
    }

    // Fallback to strict domain default
    if (lib.images && lib.images.length > 0) return lib.images[0];
    return '/illustrations/illustration1.png';
  };

  // Pre-calculate titles for context-aware imagery
  const ciTitle = `${a[0]} ${n[0]}`;
  const introTitle = 'Introduction';
  const esTitle = 'Executive Summary';
  const tlTitle = 'Key Milestones';
  const concTitle = 'Conclusion';

  const contentMap: Record<LayoutType, Record<string, string | string[]>> = {
    'title-hero': {
      moduleTag,
      title: topic.length > 50 ? topic.substring(0, 50) : topic,
      subtitle: audience ? `Strategies for ${audience}` : `Mastering ${n[0]}`,
      image: getSmartImage(topic + ' ' + n[0]),
    },
    'introduction-objectives': {
      moduleTag,
      topicTag,
      title: introTitle,
      subtitle: 'Overview & Goals',
      image: getSmartImage(introTitle + ' ' + n[1]), // Contextualize with noun
      body: `This session explores the critical aspects of ${topic}. We will ${v[0].toLowerCase()} the core principles of ${a[0].toLowerCase()} ${n[0].toLowerCase()} systems and learn how to ${v[1].toLowerCase()} effectively.`,
      items: [
        `Understand ${a[1].toLowerCase()} ${n[1].toLowerCase()} fundamentals`,
        `${v[2]} strategies for ${n[2]}`,
        `Analyze real-world ${n[3]} scenarios`,
        `Master the art of ${a[2].toLowerCase()} ${n[4]}`,
      ],
    },
    'agenda-numbered': {
      moduleTag,
      topicTag,
      title: 'Agenda',
      items: [
        `Introduction to ${n[0]}`,
        `The ${a[0]} Framework`,
        `Key ${n[1]} Strategies`,
        `Managing ${n[2]}`,
        `Case Studies: ${a[1]} ${n[3]}`,
        `Future of ${n[4]}`,
      ].slice(0, Math.min(6, totalSlides - 2)),
    },
    'agenda-split': {
      title: 'Agenda',
      items: [
        `Phase 1: ${v[0]}`,
        `Phase 2: ${v[1]}`,
        `Phase 3: ${v[2]}`,
        `Phase 4: ${v[3]}`,
        `Closing: ${n[0]}`,
      ],
    },
    'section-title': {
      moduleTag,
      topicTag,
      title: `The ${a[0]} Approach`,
      body: `Moving beyond the basics, this section dives into ${a[1]} methods to ${v[0].toLowerCase()} your ${n[0].toLowerCase()}.`,
    },
    'content-image': {
      moduleTag,
      topicTag,
      title: ciTitle,
      body: `At the heart of any successful ${topic} initiative lies a strong ${n[1]}. By focusing on ${a[1]} ${n[2]}, you can maximize results.`,
      callout: `Key Insight: Always prioritize ${n[3]} over short-term gains.`,
      image: getSmartImage(ciTitle),
    },
    'executive-summary': {
      moduleTag,
      topicTag,
      title: esTitle,
      image: getSmartImage(esTitle + ' ' + n[2]),
      items: [
        `${topic} is a key driver for ${a[0]} ${n[0]}.`,
        `Implementing ${a[1]} strategies accelerates ${n[1]}.`,
        `Focus on ${n[2]} ensures long-term sustainability.`,
      ],
    },
    'timeline-facts': {
      moduleTag,
      topicTag,
      title: tlTitle,
      image: getSmartImage(tlTitle + ' ' + n[3]), // Ensure timeline context
      items: [
        `Year 1: Foundation of ${n[0]}`,
        `Year 2: Integration of ${a[0]} ${n[1]}`,
        `Year 3: Scaling ${n[2]} operations`,
        `Year 4: Optimizing ${n[3]} performance`,
        `Future: Next-gen ${n[4]}`,
      ],
    },
    'dos-donts-list': {
      moduleTag,
      topicTag,
      title: 'Best Practices',
      listType: 'Do',
      items: [
        `Do ${v[0].toLowerCase()} your ${n[0]}`,
        `Do focus on ${a[0]} ${n[1]}`,
        `Do prioritize ${n[2]}`,
        `Do maintain strict ${n[3]}`,
      ],
    },
    'dos-donts-comparison': {
      moduleTag,
      topicTag,
      title: 'Do\'s & Don\'ts',
      doItems: [
        `${v[0]} regularly`,
        `Focus on ${n[0]}`,
        `Invest in ${n[1]}`,
        `Monitor ${n[2]}`,
      ],
      dontItems: [
        `Ignore ${n[3]}`,
        `Neglect ${n[4]}`,
        `Overlook ${a[0]} signals`,
        `Rush the ${n[5]} process`,
      ],
    },
    'two-column-cards': {
      moduleTag,
      topicTag,
      title: 'Pros vs Cons',
      leftTitle: 'Benefits',
      leftItems: getMultiple(lib.benefits, 3),
      rightTitle: 'Challenges',
      rightItems: getMultiple(lib.challenges, 3),
    },
    'deep-dive': {
      moduleTag,
      topicTag,
      title: 'Deep Dive',
      subtitle: f[0],
      leftTitle: 'Core Value:',
      leftContent: `Leveraging ${n[0]} provides a distinct competitive advantage in ${n[1]}.`,
      rightTitle: 'Strategic Pillars:',
      rightItems: getMultiple(lib.features, 4),
      exampleLabel: 'In Practice:',
      exampleContent: `Successful teams ${v[0].toLowerCase()} their ${n[2]} to drive ${n[3]}.`,
    },
    'conclusion-timeline': {
      moduleTag,
      topicTag,
      title: concTitle,
      image: getSmartImage(concTitle + ' ' + n[5]),
      items: [
        `We explored the power of ${a[0]} ${n[0]}.`,
        `Remember to ${v[0].toLowerCase()} your ${n[1]}.`,
        `The journey to ${a[1]} ${n[2]} is continuous.`,
        `Stay focused on ${n[3]} and ${n[4]}.`,
        `Success relies on consistent ${n[5]}.`,
      ],
    },
    'summary-bullets': {
      moduleTag,
      topicTag,
      title: 'Summary',
      items: [
        `${n[0]} is the foundation of success.`,
        `${v[0]} strategies yield ${a[0]} results.`,
        `Prioritize ${n[1]} for long-term growth.`,
        `Monitor ${n[2]} to stay on track.`,
        `Adapt to changing ${n[3]} dynamics.`,
      ],
    },
    'features-cycle': {
      moduleTag,
      topicTag,
      title: 'Key Features',
      subtitle: `Why ${topic} Matters`,
      items: [
        `${f[0] || 'Feature 1'}: Core capability for ${n[0]}`,
        `${f[1] || 'Feature 2'}: Enhances ${n[1]} efficiency`,
        `${f[2] || 'Feature 3'}: Integrates with ${n[2]}`,
        `${f[3] || 'Feature 4'}: Scalable ${n[3]} solution`,
        `${f[4] || 'Feature 5'}: Secure ${n[4]} access`,
        `${f[5] || 'Feature 6'}: Real-time ${n[5]} analytics`,
        `${f[6] || 'Feature 7'}: Automated ${v[0].toLowerCase()}`,
        `${f[7] || 'Feature 8'}: Advanced ${a[0].toLowerCase()} support`,
      ],
    },
    'pill-10-row': {
      moduleTag,
      topicTag,
      title: 'Core Principles',
      subtitle: `10 Fundamentals of ${topic}`,
      items: [
        `Consistency: Ensure reliable ${n[0]}`,
        `Scalability: Built to grow with ${n[1]}`,
        `Security: Protecting ${n[2]} assets`,
        `Performance: Optimizing ${n[3]} speed`,
        `Usability: Enhancing ${n[4]} experience`,
        `Integration: Connecting with ${n[5]}`,
        `Automation: Streamlining ${n[6]} tasks`,
        `Analytics: Measuring ${n[7]} success`,
        `Compliance: Adhering to ${n[0]} standards`,
        `Innovation: Driving future ${n[1]}`,
      ]
    },
    'table-layout': {
      moduleTag,
      topicTag,
      title: 'Performance Matrix',
      subtitle: 'Key Metrics',
      headers: ['Metric', 'Current', 'Target', 'Status'],
      row1: [m[0] || 'Metric 1', 'Low', 'High', 'Improving'],
      row2: [m[1] || 'Metric 2', 'Avg', 'Top 10%', 'Stable'],
      row3: [m[2] || 'Metric 3', 'High', 'Max', 'Optimal'],
    },
    'qna-final': {
      moduleTag,
      topicTag,
      title: 'Q&A',
      subtitle: 'Discussion',
      reflectionQuestion: `How will you apply ${n[0]} in your work?`,
      callToAction: `Let's discuss your ${n[1]} challenges.`,
    },
    'thank-you': {
      title: 'Thank You',
      subtitle: `Ready to ${v[0].toLowerCase()} your ${n[0]}?`,
    },
  };

  return contentMap[layoutId] || { title: 'Content', body: 'Slide content here' };
};

export const generatePresentation = async (input: PresentationInput): Promise<Slide[]> => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const flowPlan = getSlideFlowPlan(input.slideCount, input.topic);

  const slides: Slide[] = flowPlan.map((plan, index) => ({
    id: generateId(),
    layoutId: plan.layoutId,
    content: generateSlideContent(
      plan.layoutId,
      input.topic,
      input.audience,
      plan.slideNumber,
      input.slideCount,
      input.tone
    ),
    order: index,
  }));

  return slides;
};

export const updateSlideContent = (
  slides: Slide[],
  slideId: string,
  newContent: Record<string, string | string[]>
): Slide[] => {
  return slides.map(slide =>
    slide.id === slideId
      ? { ...slide, content: { ...slide.content, ...newContent } }
      : slide
  );
};

export const changeSlideLayout = (
  slides: Slide[],
  slideId: string,
  newLayoutId: LayoutType
): Slide[] => {
  return slides.map(slide =>
    slide.id === slideId
      ? { ...slide, layoutId: newLayoutId }
      : slide
  );
};

export const reorderSlides = (slides: Slide[], fromIndex: number, toIndex: number): Slide[] => {
  const result = [...slides];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result.map((slide, index) => ({ ...slide, order: index }));
};
