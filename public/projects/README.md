Place project demo images in folders like these:

- `/public/projects/codeverse-ai/`
- `/public/projects/nptel-result-system/`
- `/public/projects/news-nexus/`

The project data in `src/data/portfolio.js` points to files using public URLs such as:

- `/projects/codeverse-ai/editor.png`
- `/projects/nptel-result-system/overview.jpg`

You can use:

- plain strings: `images: ['/projects/codeverse-ai/editor.png']`
- or objects with captions: `images: [{ src: '/projects/codeverse-ai/editor.png', caption: 'Collaborative editor view' }]`

Recommended:

- export screenshots at desktop width
- use PNG or JPG for real UI captures
- keep consistent aspect ratios where possible for smoother carousel transitions
