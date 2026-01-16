// src/data/servicesData.js
// Icons import කරන්නේ නෑ - string විදියට දානවා

export const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    iconName: 'Globe', // String විදියට
    gradient: 'from-blue-500 to-cyan-500',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
    description: 'High-performance websites built with modern technologies like React, Next.js, and Node.js.',
    longDescription: 'We build scalable, secure, and high-performance web applications tailored to your business goals. From simple landing pages to complex enterprise solutions, our team delivers clean, maintainable code that stands the test of time.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'CMS Integration (WordPress, Strapi)',
      'RESTful & GraphQL APIs',
      'Database Design & Optimization',
      'Third-party Integrations',
      'Performance Optimization'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
    pricing: {
      starting: 1500,
      currency: 'USD',
      note: 'Price varies based on project complexity'
    },
    timeline: '4-12 weeks',
    process: [
      { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap.', emoji: '🎯' },
      { step: 2, title: 'Design & Prototype', description: 'Creating wireframes and interactive prototypes for your approval.', emoji: '🎨' },
      { step: 3, title: 'Development', description: 'Building your application with clean, scalable code.', emoji: '💻' },
      { step: 4, title: 'Testing & QA', description: 'Rigorous testing across devices and browsers.', emoji: '🧪' },
      { step: 5, title: 'Launch & Support', description: 'Deploying your project and providing ongoing maintenance.', emoji: '🚀' }
    ],
    stats: [
      { value: '150+', label: 'Projects Delivered' },
      { value: '99.9%', label: 'Uptime Guarantee' },
      { value: '4.9/5', label: 'Client Rating' },
      { value: '24/7', label: 'Support Available' }
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Typically 4-12 weeks depending on complexity. Simple landing pages can be done in 1-2 weeks, while complex web applications may take 3-6 months.'
      },
      {
        question: 'Do you provide hosting?',
        answer: 'Yes! We offer managed hosting solutions with SSL, backups, and 24/7 monitoring included.'
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely! We specialize in website redesigns and migrations while preserving your SEO rankings.'
      }
    ],
    relatedServices: ['ui-ux-design', 'ecommerce-solutions', 'seo-optimization']
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    slug: 'app-development',
    iconName: 'Smartphone',
    gradient: 'from-purple-500 to-pink-500',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    description: 'Native and cross-platform mobile apps that provide seamless user experiences.',
    longDescription: 'Create engaging mobile experiences for iOS and Android. We use Flutter and React Native to build apps that feel native and perform beautifully on any device.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform (Flutter/React Native)',
      'UI/UX Design for Mobile',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization',
      'Analytics Integration'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'GraphQL', 'TypeScript'],
    pricing: {
      starting: 5000,
      currency: 'USD',
      note: 'MVP apps start from $5,000'
    },
    timeline: '8-16 weeks',
    process: [
      { step: 1, title: 'Ideation & Strategy', description: 'Understanding your vision and defining the app strategy.', emoji: '💡' },
      { step: 2, title: 'UI/UX Design', description: 'Creating beautiful, intuitive interfaces for your users.', emoji: '🎨' },
      { step: 3, title: 'Development', description: 'Building your app with performance and scalability in mind.', emoji: '📱' },
      { step: 4, title: 'Testing', description: 'Extensive testing on real devices and simulators.', emoji: '🔍' },
      { step: 5, title: 'App Store Launch', description: 'Publishing to Apple App Store and Google Play Store.', emoji: '🏆' }
    ],
    stats: [
      { value: '50+', label: 'Apps Launched' },
      { value: '2M+', label: 'Downloads' },
      { value: '4.8★', label: 'Avg. App Rating' },
      { value: '98%', label: 'Crash-Free Rate' }
    ],
    faqs: [
      {
        question: 'Should I build native or cross-platform?',
        answer: 'Cross-platform (Flutter/React Native) is cost-effective for most apps. Native is better for graphics-intensive apps.'
      },
      {
        question: 'How much does an app cost?',
        answer: 'Simple apps start around $5,000, while complex apps can range from $20,000-$100,000+.'
      },
      {
        question: 'Do you help with app store submission?',
        answer: 'Yes! We handle the entire submission process including screenshots and compliance requirements.'
      }
    ],
    relatedServices: ['ui-ux-design', 'web-development', 'cloud-solutions']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    iconName: 'Palette',
    gradient: 'from-pink-500 to-rose-500',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80',
    description: 'Beautiful, user-centric designs that convert visitors into customers.',
    longDescription: 'Design is not just how it looks, but how it works. Our UI/UX design process focuses on understanding your users, creating intuitive interfaces, and building experiences that drive engagement.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Responsive Design',
      'Design Systems',
      'Usability Testing',
      'Interaction Design',
      'Accessibility (WCAG)'
    ],
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'InVision', 'Principle', 'Zeplin', 'Maze'],
    pricing: {
      starting: 2000,
      currency: 'USD',
      note: 'Full design package from $2,000'
    },
    timeline: '2-6 weeks',
    process: [
      { step: 1, title: 'Research', description: 'User interviews, competitor analysis, and requirement gathering.', emoji: '🔬' },
      { step: 2, title: 'Wireframes', description: 'Low-fidelity sketches and information architecture.', emoji: '✏️' },
      { step: 3, title: 'Visual Design', description: 'High-fidelity designs with your brand identity.', emoji: '🎨' },
      { step: 4, title: 'Prototype', description: 'Interactive prototypes for testing and validation.', emoji: '🖱️' },
      { step: 5, title: 'Handoff', description: 'Developer-ready assets and design documentation.', emoji: '📦' }
    ],
    stats: [
      { value: '200+', label: 'Designs Created' },
      { value: '45%', label: 'Avg. Conversion Lift' },
      { value: '5 Days', label: 'Avg. Turnaround' },
      { value: '100%', label: 'Client Satisfaction' }
    ],
    faqs: [
      {
        question: 'What files will I receive?',
        answer: 'You will get Figma files, design system documentation, all assets (icons, images), and developer-ready specifications.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'Our packages include 2-3 revision rounds. Additional revisions can be added as needed.'
      },
      {
        question: 'Do you create design systems?',
        answer: 'Yes! We create comprehensive design systems with components, typography, colors, and usage guidelines.'
      }
    ],
    relatedServices: ['web-development', 'app-development', 'digital-marketing']
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    slug: 'ecommerce-solutions',
    iconName: 'ShoppingCart',
    gradient: 'from-green-500 to-emerald-500',
    color: 'green',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    description: 'Complete e-commerce platforms that drive sales and grow your business.',
    longDescription: 'Launch your online store with confidence. We build powerful e-commerce platforms using Shopify, WooCommerce, or custom solutions.',
    features: [
      'Custom Online Stores',
      'Shopify Development',
      'WooCommerce Solutions',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking System',
      'Multi-vendor Marketplaces',
      'Subscription Commerce'
    ],
    techStack: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Next.js Commerce', 'Medusa', 'Saleor', 'BigCommerce'],
    pricing: {
      starting: 3000,
      currency: 'USD',
      note: 'Basic store from $3,000'
    },
    timeline: '4-10 weeks',
    process: [
      { step: 1, title: 'Store Planning', description: 'Product strategy, categorization, and feature planning.', emoji: '📋' },
      { step: 2, title: 'Design', description: 'Brand-aligned store design optimized for conversions.', emoji: '🛍️' },
      { step: 3, title: 'Development', description: 'Building your store with all integrations.', emoji: '⚙️' },
      { step: 4, title: 'Product Setup', description: 'Importing products, setting up variants and pricing.', emoji: '📦' },
      { step: 5, title: 'Launch', description: 'Go live with payment testing and final QA.', emoji: '🎉' }
    ],
    stats: [
      { value: '$10M+', label: 'GMV Processed' },
      { value: '75+', label: 'Stores Built' },
      { value: '3.5%', label: 'Avg. Conv. Rate' },
      { value: '99.9%', label: 'Uptime' }
    ],
    faqs: [
      {
        question: 'Shopify or WooCommerce?',
        answer: 'Shopify is great for beginners. WooCommerce offers more customization for WordPress users.'
      },
      {
        question: 'Can you migrate my existing store?',
        answer: 'Yes! We handle migrations from any platform including products, customers, and order history.'
      },
      {
        question: 'What payment methods can you integrate?',
        answer: 'We integrate all major payment gateways: Stripe, PayPal, Square, and local payment methods.'
      }
    ],
    relatedServices: ['web-development', 'seo-optimization', 'digital-marketing']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    iconName: 'Cloud',
    gradient: 'from-sky-500 to-blue-500',
    color: 'sky',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
    longDescription: 'Harness the power of cloud computing with our expert solutions. We design, deploy, and manage cloud infrastructure on AWS, Google Cloud, and Azure.',
    features: [
      'Cloud Architecture Design',
      'AWS/GCP/Azure Setup',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Serverless Functions',
      'Database Management',
      'Monitoring & Logging',
      'Cost Optimization'
    ],
    techStack: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    pricing: {
      starting: 2500,
      currency: 'USD',
      note: 'Setup from $2,500 + monthly management'
    },
    timeline: '2-8 weeks',
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluating your current infrastructure and needs.', emoji: '📊' },
      { step: 2, title: 'Architecture', description: 'Designing scalable, cost-effective cloud solutions.', emoji: '🏗️' },
      { step: 3, title: 'Migration', description: 'Seamlessly moving your applications to the cloud.', emoji: '🚚' },
      { step: 4, title: 'Optimization', description: 'Fine-tuning for performance and cost efficiency.', emoji: '⚡' },
      { step: 5, title: 'Management', description: 'Ongoing monitoring, updates, and support.', emoji: '🔧' }
    ],
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '500+', label: 'Servers Managed' },
      { value: '24/7', label: 'Monitoring' }
    ],
    faqs: [
      {
        question: 'Which cloud provider should I use?',
        answer: 'AWS is most popular. Google Cloud excels in data analytics. Azure is ideal for Microsoft environments.'
      },
      {
        question: 'Can you reduce my cloud costs?',
        answer: 'Yes! Most clients see 30-50% cost reduction through optimization.'
      },
      {
        question: 'Do you provide 24/7 support?',
        answer: 'Yes, our managed services include 24/7 monitoring and emergency support.'
      }
    ],
    relatedServices: ['web-development', 'cybersecurity', 'ai-solutions']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    iconName: 'Shield',
    gradient: 'from-red-500 to-orange-500',
    color: 'red',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
    description: 'Protect your digital assets with comprehensive security solutions.',
    longDescription: 'In today\'s digital landscape, security is not optional. We provide comprehensive cybersecurity services including vulnerability assessments and penetration testing.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessment',
      'SSL/TLS Implementation',
      'GDPR Compliance',
      'Security Monitoring',
      'Incident Response',
      'Employee Training'
    ],
    techStack: ['OWASP', 'Nessus', 'Burp Suite', 'Metasploit', 'Cloudflare', 'Auth0', 'Vault', 'SonarQube'],
    pricing: {
      starting: 1500,
      currency: 'USD',
      note: 'Security audit from $1,500'
    },
    timeline: '1-4 weeks',
    process: [
      { step: 1, title: 'Reconnaissance', description: 'Understanding your systems and potential attack vectors.', emoji: '🔎' },
      { step: 2, title: 'Assessment', description: 'Identifying vulnerabilities and security gaps.', emoji: '🛡️' },
      { step: 3, title: 'Testing', description: 'Simulating attacks to test your defenses.', emoji: '⚔️' },
      { step: 4, title: 'Reporting', description: 'Detailed findings with prioritized recommendations.', emoji: '📑' },
      { step: 5, title: 'Remediation', description: 'Implementing fixes and security improvements.', emoji: '✅' }
    ],
    stats: [
      { value: '500+', label: 'Audits Completed' },
      { value: '10K+', label: 'Vulnerabilities Found' },
      { value: '0', label: 'Client Breaches' },
      { value: 'CISA', label: 'Certified Team' }
    ],
    faqs: [
      {
        question: 'How often should I do a security audit?',
        answer: 'At minimum annually, but quarterly assessments are recommended for sensitive data.'
      },
      {
        question: 'What is penetration testing?',
        answer: 'Pen testing simulates real-world attacks on your systems to find vulnerabilities before hackers do.'
      },
      {
        question: 'Can you help with compliance?',
        answer: 'Yes! We help with GDPR, HIPAA, SOC 2, PCI-DSS, and other compliance requirements.'
      }
    ],
    relatedServices: ['cloud-solutions', 'web-development', 'ai-solutions']
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    iconName: 'TrendingUp',
    gradient: 'from-amber-500 to-yellow-500',
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1c9?w=1200&q=80',
    description: 'Boost your visibility and rank higher on search engines.',
    longDescription: 'Get found by your customers with our data-driven SEO strategies. We optimize your website through technical SEO, content optimization, and link building.',
    features: [
      'Technical SEO Audit',
      'Keyword Research',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'Analytics & Reporting',
      'Competitor Analysis'
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Search Console', 'Screaming Frog', 'Moz', 'Surfer SEO', 'Clearscope'],
    pricing: {
      starting: 800,
      currency: 'USD',
      note: 'Monthly retainer from $800'
    },
    timeline: '3-6 months for results',
    process: [
      { step: 1, title: 'Audit', description: 'Comprehensive analysis of your current SEO standing.', emoji: '📈' },
      { step: 2, title: 'Research', description: 'Keyword research and competitor analysis.', emoji: '🔍' },
      { step: 3, title: 'Optimize', description: 'Implementing on-page and technical improvements.', emoji: '⚙️' },
      { step: 4, title: 'Content', description: 'Creating and optimizing content for target keywords.', emoji: '✍️' },
      { step: 5, title: 'Monitor', description: 'Tracking rankings and adjusting strategy.', emoji: '📊' }
    ],
    stats: [
      { value: '250%', label: 'Avg. Traffic Increase' },
      { value: '#1', label: 'Page 1 Rankings' },
      { value: '10K+', label: 'Keywords Ranked' },
      { value: '6 Mo', label: 'Avg. Time to Results' }
    ],
    faqs: [
      {
        question: 'How long until I see results?',
        answer: 'SEO is long-term. Initial improvements in 1-3 months, significant results in 6-12 months.'
      },
      {
        question: 'Do you guarantee rankings?',
        answer: 'No one can guarantee specific rankings. We guarantee transparent reporting and best efforts.'
      },
      {
        question: 'What makes your SEO different?',
        answer: 'We focus on sustainable, white-hat techniques that build long-term value.'
      }
    ],
    relatedServices: ['web-development', 'digital-marketing', 'ecommerce-solutions']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    iconName: 'Megaphone',
    gradient: 'from-violet-500 to-purple-500',
    color: 'violet',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    description: 'Strategic digital marketing campaigns that drive growth.',
    longDescription: 'Reach your audience where they are with integrated digital marketing strategies. From social media to paid advertising, we create cohesive campaigns.',
    features: [
      'Social Media Marketing',
      'Google Ads (PPC)',
      'Facebook & Instagram Ads',
      'Email Marketing',
      'Content Marketing',
      'Influencer Partnerships',
      'Marketing Automation',
      'Analytics & ROI Tracking'
    ],
    techStack: ['Meta Business Suite', 'Google Ads', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Canva', 'Zapier'],
    pricing: {
      starting: 1000,
      currency: 'USD',
      note: 'Monthly retainer from $1,000'
    },
    timeline: 'Ongoing',
    process: [
      { step: 1, title: 'Strategy', description: 'Defining goals, audience, and channel strategy.', emoji: '🎯' },
      { step: 2, title: 'Creative', description: 'Developing compelling content and creatives.', emoji: '🎨' },
      { step: 3, title: 'Launch', description: 'Executing campaigns across chosen channels.', emoji: '🚀' },
      { step: 4, title: 'Optimize', description: 'A/B testing and performance optimization.', emoji: '📊' },
      { step: 5, title: 'Scale', description: 'Expanding successful campaigns for growth.', emoji: '📈' }
    ],
    stats: [
      { value: '5X', label: 'Avg. ROAS' },
      { value: '$2M+', label: 'Ad Spend Managed' },
      { value: '50+', label: 'Active Clients' },
      { value: '85%', label: 'Client Retention' }
    ],
    faqs: [
      {
        question: 'What is your minimum ad budget?',
        answer: 'We recommend a minimum of $1,000/month in ad spend for meaningful results.'
      },
      {
        question: 'Which platforms do you specialize in?',
        answer: 'Facebook/Instagram, Google Ads, LinkedIn, TikTok, and email marketing.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We track ROI, ROAS, conversion rates, and other KPIs aligned with your goals.'
      }
    ],
    relatedServices: ['seo-optimization', 'web-development', 'ui-ux-design']
  },
  {
    id: 'ai-solutions',
    title: 'AI & Machine Learning',
    slug: 'ai-solutions',
    iconName: 'Bot',
    gradient: 'from-emerald-500 to-teal-500',
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    longDescription: 'Leverage the power of AI to automate processes, gain insights, and create intelligent applications. From chatbots to predictive analytics.',
    features: [
      'Custom AI Development',
      'ChatGPT Integration',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Predictive Analytics',
      'AI Automation'
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face', 'AWS SageMaker', 'Vertex AI'],
    pricing: {
      starting: 5000,
      currency: 'USD',
      note: 'AI projects from $5,000'
    },
    timeline: '6-16 weeks',
    process: [
      { step: 1, title: 'Discovery', description: 'Understanding your use case and data availability.', emoji: '🔬' },
      { step: 2, title: 'Data Prep', description: 'Collecting, cleaning, and preparing training data.', emoji: '📊' },
      { step: 3, title: 'Model Development', description: 'Building and training the AI model.', emoji: '🤖' },
      { step: 4, title: 'Testing', description: 'Validating accuracy and performance.', emoji: '🧪' },
      { step: 5, title: 'Deployment', description: 'Integrating into your applications.', emoji: '🚀' }
    ],
    stats: [
      { value: '40+', label: 'AI Projects' },
      { value: '95%', label: 'Model Accuracy' },
      { value: '60%', label: 'Process Automation' },
      { value: '10X', label: 'Efficiency Gains' }
    ],
    faqs: [
      {
        question: 'Do I need a lot of data?',
        answer: 'It depends on the use case. Some applications can work with pre-trained models.'
      },
      {
        question: 'Can you integrate with ChatGPT?',
        answer: 'Yes! We build custom applications using OpenAI APIs, including chatbots and content generators.'
      },
      {
        question: 'What about data privacy?',
        answer: 'We prioritize data security and can build solutions that keep your data private.'
      }
    ],
    relatedServices: ['web-development', 'app-development', 'cloud-solutions']
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain & Web3',
    slug: 'blockchain-web3',
    iconName: 'Blocks',
    gradient: 'from-indigo-500 to-blue-600',
    color: 'indigo',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=1200&q=80',
    description: 'Next-generation decentralized applications and blockchain solutions.',
    longDescription: 'Enter the world of Web3 with our blockchain development expertise. We build smart contracts, NFT platforms, and DeFi applications.',
    features: [
      'Smart Contract Development',
      'NFT Marketplaces',
      'DeFi Applications',
      'Wallet Integration',
      'Token Development',
      'DAO Creation',
      'Blockchain Consulting',
      'Web3 dApp Development'
    ],
    techStack: ['Solidity', 'Ethereum', 'Solana', 'Web3.js', 'Hardhat', 'IPFS', 'Metamask', 'Thirdweb'],
    pricing: {
      starting: 8000,
      currency: 'USD',
      note: 'Smart contracts from $8,000'
    },
    timeline: '8-20 weeks',
    process: [
      { step: 1, title: 'Consultation', description: 'Understanding your Web3 vision and requirements.', emoji: '💡' },
      { step: 2, title: 'Architecture', description: 'Designing the blockchain architecture.', emoji: '🏗️' },
      { step: 3, title: 'Smart Contracts', description: 'Developing and testing smart contracts.', emoji: '📜' },
      { step: 4, title: 'Frontend', description: 'Building the dApp interface.', emoji: '🖥️' },
      { step: 5, title: 'Audit & Deploy', description: 'Security audit and mainnet deployment.', emoji: '🔐' }
    ],
    stats: [
      { value: '30+', label: 'dApps Launched' },
      { value: '$50M+', label: 'TVL Managed' },
      { value: '100%', label: 'Audit Pass Rate' },
      { value: '5', label: 'Blockchains' }
    ],
    faqs: [
      {
        question: 'Which blockchain should I use?',
        answer: 'Ethereum has the largest ecosystem. Solana offers speed. Polygon provides low costs.'
      },
      {
        question: 'Are smart contracts secure?',
        answer: 'We follow security best practices and recommend third-party audits for production.'
      },
      {
        question: 'Can you create my own token?',
        answer: 'Yes! We can create ERC-20, ERC-721 (NFT), and custom tokens.'
      }
    ],
    relatedServices: ['web-development', 'app-development', 'ai-solutions']
  }
];

// ============================================
// ICON MAPPING - Component එකේ use කරන්න
// ============================================
export const iconMap = {
  Globe: 'Globe',
  Smartphone: 'Smartphone',
  Palette: 'Palette',
  ShoppingCart: 'ShoppingCart',
  Cloud: 'Cloud',
  Shield: 'Shield',
  TrendingUp: 'TrendingUp',
  Megaphone: 'Megaphone',
  Bot: 'Bot',
  Blocks: 'Blocks',
  Database: 'Database',
  Code: 'Code',
  Cpu: 'Cpu',
  Layout: 'Layout',
  Zap: 'Zap'
};

// Helper functions
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getRelatedServices = (relatedSlugs) => {
  return servicesData.filter(service => relatedSlugs?.includes(service.slug));
};