export const heroHighlights = [
  { value: '3', label: 'featured builds' },
  { value: '200+', label: 'records automated' },
  { value: '10+', label: 'events anchored' },
]

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['Django', 'Django REST Framework', 'Flask'],
  },
  {
    title: 'Tools & Databases',
    items: ['Git', 'GitHub', 'SQL', 'SQLite', 'Streamlit'],
  },
  {
    title: 'Concepts',
    items: ['REST APIs', 'Authentication', 'Backend Systems', 'Full Stack Development'],
  },
]

export const projects = [
  {
    title: 'NPTEL Result Evaluation System',
    slug: 'nptel-result-system',
    period: 'Academic Project',
    tech: ['Python', 'Flask', 'SQLite', 'Jinja2'],
    github: null,
    live: null,
    demoType: 'screenshots',
   
    images: [
      {
        src: '/projects/nptel-result-system/Screenshot%202026-04-03%20150511.png',
        caption: 'Dashboard-style overview for bulk result evaluation and CSV processing.',
      },
      {
        src: '/projects/nptel-result-system/report.svg',
        caption: 'Result publishing flow with automated routing and PDF report generation.',
      },
    ],
    description:
      'A Flask-based academic result evaluation system developed for college-wide use and deployed on the college LAN, converting NPTEL raw scores into final outcomes using rule-driven logic and automated workflows.',
    impact:
      'Reduced manual evaluation effort by ~60% by automating student routing, processing 200+ CSV records per cycle, and generating downloadable PDF reports for result publication across departments.',
    highlights: [
      'Deployed the system on the college LAN for multi-department access and usage.',
      'Automated result evaluation and student routing based on certificate eligibility and performance rules.',
      'Implemented bulk CSV/Excel data processing to handle large student datasets efficiently.',
      'Generated structured, downloadable PDF reports to streamline result distribution.',
    ],
  },
  {
    title: 'CodeVerse AI',
    slug: 'codeverse-ai',
    period: 'Real-Time Collaborative Coding Platform',
    tech: ['React', 'Node.js', 'Socket.io', 'Python', 'Streamlit'],
    github: 'https://github.com/AkshitaChadha/CodeVerseAI',
    live: 'https://codeverseai.streamlit.app/',
    repositories: [
      {
        label: 'Editor',
        detail: 'MERN + Socket.io',
        href: 'https://github.com/AkshitaChadha/CodeVerseAI',
      },
      {
        label: 'AI Dashboard',
        detail: 'Streamlit + Python',
        href: 'https://github.com/AkshitaChadha?tab=repositories',
      },
    ],
    demoType: 'screenshots',
    
    images: [
      {
        src:'/projects/codeverse-ai/Screenshot%202026-04-03%20134829.png',
        caption: 'Collaborative editor landing view for the CodeVerse AI platform.',
      },
      {
        src:'/projects/codeverse-ai/image.png',
        caption: 'Real-time collaborative editor with synchronized sessions and shared workspace controls.',
      },
      {
        src: '/projects/codeverse-ai/Screenshot%202026-04-03%20135356.png',
        caption: 'Collaborative coding interface showing active files and live workspace layout.',
      },
      {
        src: '/projects/codeverse-ai/Screenshot%202026-04-03%20140558.png',
        caption: 'Editor-focused project view with structured navigation and coding workspace.',
      },
      {
        src: '/projects/codeverse-ai/Screenshot%202026-04-03%20141554.png',
        caption: 'AI dashboard section for assisted workflows and productivity-focused tooling.',
      },
      {
        src: '/projects/codeverse-ai/Screenshot%202026-04-03%20141723.png',
        caption: 'Streamlit-powered dashboard surface for AI-supported code assistance.',
      },
      {
        src: '/projects/codeverse-ai/Screenshot%202026-04-03%20141815.png',
        caption: 'Additional CodeVerse AI dashboard state highlighting the assistant workflow.',
      },
    ],
    description:
      'A real-time collaborative coding platform enabling multi-user editing, secure authentication, and AI-assisted development workflows using WebSocket-based architecture.',
    impact:
      'Enabled 5+ concurrent users to collaborate in synchronized coding sessions with low-latency updates, integrating AI-powered code generation and debugging within a unified development environment.',
    highlights: [
      'Implemented real-time multi-user code editing using Socket.io (WebSockets) with low-latency synchronization.',
      'Built secure authentication and session management for seamless multi-user collaboration.',
      'Integrated AI-powered code generation and debugging features using Python and Streamlit.',
    ],
  },
  {
    title: 'News Nexus',
    slug: 'news-nexus',
    period: 'News Aggregation Web Application',
    tech: ['Django', 'Python', 'SQLite', 'BeautifulSoup', 'Bootstrap'],
    github: 'https://github.com/AkshitaChadha/News-Nexus',
    live: 'https://news-nexus-ia8c.onrender.com/',
    demoType: 'screenshots',
    
    images: [
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214129.png',
        caption: 'Homepage with categorized news sections and the main editorial landing experience.',
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214255.png',
        caption: 'Top headlines flow with categorized content and structured article browsing.',
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214352.png',
        caption: 'Article listing experience showing organized news cards and category-driven discovery.',
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214441.png',
        caption: 'Authenticated news browsing interface with personalized reading access.',
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214509.png',
        caption: 'Saved and personalized content flow supporting returning users.',
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214833.png',
        caption: 'User profile and personalization dashboard with preferences and saved-news controls.',
        masks: [
          {
            left: '12.2%',
            top: '39.5%',
            width: '18%',
            height: '4.8%',
          },
        ],
      },
      {
        src: '/projects/news-nexus/Screenshot%202026-04-03%20214935.png',
        caption: 'Additional personalized dashboard view highlighting the authenticated user experience.',
      },
    ],
    description:
      'A Django-based news aggregation web application that fetches, categorizes, and displays news articles across multiple domains with user authentication and personalized features.',
    impact:
      'Aggregated and organized 100+ news articles across categories, improving content discovery and user engagement through authentication and bookmarking features.',
    highlights: [
      'Implemented user authentication and bookmarking to enable personalized news access.',
      'Developed backend logic for efficient news fetching, categorization, and data handling.',
      'Optimized content retrieval and structured data storage for improved performance and user experience.',
    ],
  }
]

export const achievements = [
  {
    kicker: 'Public speaking',
    title: 'Best Speaker',
    description: 'Recognized at the PTU Youth Festival 2024 for clarity, stage presence, and persuasive delivery.',
  },
  {
    kicker: 'Debate',
    title: 'Competition winner',
    description: 'Won debate and literary competitions, strengthening critical thinking and structured communication.',
  },
  {
    kicker: 'Leadership',
    title: 'Anchored 10+ events',
    description: 'Led and hosted technical and cultural events, managing 200+ attendees, fostering audience engagement and smooth event flow.',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'akshitachadha01@gmail.com',
    href: 'mailto:akshitachadha01@gmail.com',
    icon: 'email',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/akshita-chadha',
    href: 'https://linkedin.com/in/akshita-chadha',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/AkshitaChadha',
    href: 'https://github.com/AkshitaChadha',
    icon: 'github',
    external: true,
  },
  {
    label: 'Phone',
    value: '+91 88722 10386',
    href: 'tel:+918872210386',
    icon: 'phone',
    external: false,
  },
]

export const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akshita-chadha' },
  { label: 'GitHub', href: 'https://github.com/AkshitaChadha' },
  { label: 'Email', href: 'mailto:akshitachadha01@gmail.com' },
]
