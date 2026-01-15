import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// PeerPush tarzı kategoriler
const categories = [
  { name: 'AI Tools', slug: 'ai-tools', icon: '🤖' },
  { name: 'Developer Tools', slug: 'developer-tools', icon: '💻' },
  { name: 'Design Tools', slug: 'design-tools', icon: '🎨' },
  { name: 'Marketing', slug: 'marketing', icon: '📈' },
  { name: 'SEO & Content Marketing', slug: 'seo-content-marketing', icon: '🔍' },
  { name: 'Social Media & Influencer Tools', slug: 'social-media-influencer-tools', icon: '📱' },
  { name: 'Productivity', slug: 'productivity', icon: '⚡' },
  { name: 'Automation & Workflow', slug: 'automation-workflow', icon: '🔄' },
  { name: 'Analytics & Monitoring', slug: 'analytics-monitoring', icon: '📊' },
  { name: 'Fintech', slug: 'fintech', icon: '💰' },
  { name: 'E-commerce', slug: 'e-commerce', icon: '🛒' },
  { name: 'Education & Learning', slug: 'education-learning', icon: '📚' },
  { name: 'Health & Wellness', slug: 'health-wellness', icon: '❤️' },
  { name: 'Entertainment', slug: 'entertainment', icon: '🎮' },
  { name: 'Communication', slug: 'communication', icon: '💬' },
  { name: 'Project Management', slug: 'project-management', icon: '📋' },
  { name: 'No-Code & Low-Code', slug: 'no-code-low-code', icon: '🧩' },
  { name: 'APIs & Integrations', slug: 'apis-integrations', icon: '🔗' },
  { name: 'Security & Privacy', slug: 'security-privacy', icon: '🔒' },
  { name: 'Free & Open Source', slug: 'free-open-source', icon: '🆓' },
]

const tags = [
  { name: 'SaaS', slug: 'saas' },
  { name: 'Open Source', slug: 'open-source' },
  { name: 'Free', slug: 'free' },
  { name: 'Freemium', slug: 'freemium' },
  { name: 'API', slug: 'api' },
  { name: 'No-Code', slug: 'no-code' },
  { name: 'Mobile', slug: 'mobile' },
  { name: 'Chrome Extension', slug: 'chrome-extension' },
  { name: 'Automation', slug: 'automation' },
  { name: 'Analytics', slug: 'analytics' },
  { name: 'AI-Powered', slug: 'ai-powered' },
  { name: 'Startup', slug: 'startup' },
  { name: 'B2B', slug: 'b2b' },
  { name: 'B2C', slug: 'b2c' },
  { name: 'Indie Hacker', slug: 'indie-hacker' },
]

// 100 ürün - Shipybara ve PeerPush'tan derlendi
const products = [
  // AI Tools (20)
  { name: 'ChatGPT', slug: 'chatgpt', tagline: 'AI assistant for writing, coding, and creative tasks', website: 'https://chat.openai.com', categorySlug: 'ai-tools', isVerified: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Claude', slug: 'claude', tagline: 'AI assistant by Anthropic for thoughtful conversations', website: 'https://claude.ai', categorySlug: 'ai-tools', isVerified: true, logo: 'https://www.anthropic.com/images/icons/apple-touch-icon.png' },
  { name: 'Midjourney', slug: 'midjourney', tagline: 'AI-powered image generation from text prompts', website: 'https://midjourney.com', categorySlug: 'ai-tools', isVerified: true, logo: 'https://cdn.midjourney.com/favicon.ico' },
  { name: 'DALL-E', slug: 'dall-e', tagline: 'Create realistic images and art from text descriptions', website: 'https://openai.com/dall-e-3', categorySlug: 'ai-tools', isVerified: true, logo: 'https://openai.com/favicon.ico' },
  { name: 'Synthesia', slug: 'synthesia', tagline: 'Create AI videos from text in minutes', website: 'https://synthesia.io', categorySlug: 'ai-tools', isVerified: true, logo: 'https://www.synthesia.io/favicon.ico' },
  { name: 'Jasper', slug: 'jasper', tagline: 'AI content platform for marketing teams', website: 'https://jasper.ai', categorySlug: 'ai-tools', isVerified: true, logo: 'https://www.jasper.ai/favicon.ico' },
  { name: 'Copy.ai', slug: 'copy-ai', tagline: 'AI-powered copywriting and content generation', website: 'https://copy.ai', categorySlug: 'ai-tools', logo: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828a0a9e6e0c6c3e6b6b3a_favicon.png' },
  { name: 'Runway', slug: 'runway', tagline: 'AI-powered creative tools for video editing', website: 'https://runway.ml', categorySlug: 'ai-tools', isVerified: true, logo: 'https://runway.ml/favicon.ico' },
  { name: 'ElevenLabs', slug: 'elevenlabs', tagline: 'AI voice generator and text-to-speech platform', website: 'https://elevenlabs.io', categorySlug: 'ai-tools', isVerified: true, logo: 'https://elevenlabs.io/favicon.ico' },
  { name: 'Perplexity', slug: 'perplexity', tagline: 'AI-powered answer engine for research', website: 'https://perplexity.ai', categorySlug: 'ai-tools', isVerified: true, logo: 'https://www.perplexity.ai/favicon.ico' },
  { name: 'Gamma', slug: 'gamma', tagline: 'AI-powered presentations and documents', website: 'https://gamma.app', categorySlug: 'ai-tools', logo: 'https://gamma.app/favicon.ico' },
  { name: 'Otter.ai', slug: 'otter-ai', tagline: 'AI meeting assistant for transcription and notes', website: 'https://otter.ai', categorySlug: 'ai-tools', logo: 'https://otter.ai/favicon.ico' },
  { name: 'Descript', slug: 'descript', tagline: 'AI-powered video and podcast editing', website: 'https://descript.com', categorySlug: 'ai-tools', isVerified: true, logo: 'https://www.descript.com/favicon.ico' },
  { name: 'Pictory', slug: 'pictory', tagline: 'Turn long-form content into short videos with AI', website: 'https://pictory.ai', categorySlug: 'ai-tools', logo: 'https://pictory.ai/favicon.ico' },
  { name: 'Lumen5', slug: 'lumen5', tagline: 'AI video creator for marketing content', website: 'https://lumen5.com', categorySlug: 'ai-tools', logo: 'https://lumen5.com/favicon.ico' },
  { name: 'Writesonic', slug: 'writesonic', tagline: 'AI writer for blogs, ads, and marketing copy', website: 'https://writesonic.com', categorySlug: 'ai-tools', logo: 'https://writesonic.com/favicon.ico' },
  { name: 'AI Talk Coach', slug: 'ai-talk-coach', tagline: 'Improve your speaking with AI feedback', website: 'https://aitalkcoach.com', categorySlug: 'ai-tools' },
  { name: 'PicTwin AI', slug: 'pictwin-ai', tagline: 'Create professional AI headshots and photos', website: 'https://pictwin.ai', categorySlug: 'ai-tools' },
  { name: 'BizSage', slug: 'bizsage', tagline: 'Company-trained AI chatbot for customer support', website: 'https://bizsage.ai', categorySlug: 'ai-tools' },
  { name: 'AgentAya', slug: 'agentaya', tagline: 'Multilingual AI agent comparison platform for SMEs', website: 'https://agentaya.com', categorySlug: 'ai-tools' },

  // Developer Tools (15)
  { name: 'GitHub Copilot', slug: 'github-copilot', tagline: 'AI pair programmer that helps you write code faster', website: 'https://github.com/features/copilot', categorySlug: 'developer-tools', isVerified: true, logo: 'https://github.githubassets.com/favicons/favicon.svg' },
  { name: 'Vercel', slug: 'vercel', tagline: 'Develop. Preview. Ship. For the best frontend teams', website: 'https://vercel.com', categorySlug: 'developer-tools', isVerified: true, logo: 'https://vercel.com/favicon.ico' },
  { name: 'Supabase', slug: 'supabase', tagline: 'The open source Firebase alternative', website: 'https://supabase.com', categorySlug: 'developer-tools', isVerified: true, logo: 'https://supabase.com/favicon/favicon-32x32.png' },
  { name: 'Railway', slug: 'railway', tagline: 'Deploy apps and databases in seconds', website: 'https://railway.app', categorySlug: 'developer-tools', isVerified: true, logo: 'https://railway.app/favicon.ico' },
  { name: 'Planetscale', slug: 'planetscale', tagline: 'Serverless MySQL database platform', website: 'https://planetscale.com', categorySlug: 'developer-tools', isVerified: true, logo: 'https://planetscale.com/favicon.ico' },
  { name: 'Neon', slug: 'neon', tagline: 'Serverless Postgres with branching', website: 'https://neon.tech', categorySlug: 'developer-tools', isVerified: true, logo: 'https://neon.tech/favicon.ico' },
  { name: 'Linear', slug: 'linear', tagline: 'The issue tracking tool you will enjoy using', website: 'https://linear.app', categorySlug: 'developer-tools', isVerified: true, logo: 'https://linear.app/favicon.ico' },
  { name: 'Raycast', slug: 'raycast', tagline: 'Supercharged productivity for Mac', website: 'https://raycast.com', categorySlug: 'developer-tools', isVerified: true, logo: 'https://raycast.com/favicon.ico' },
  { name: 'Warp', slug: 'warp', tagline: 'The terminal reimagined with AI and collaboration', website: 'https://warp.dev', categorySlug: 'developer-tools', logo: 'https://warp.dev/favicon.ico' },
  { name: 'Fig', slug: 'fig', tagline: 'Autocomplete for your terminal', website: 'https://fig.io', categorySlug: 'developer-tools', logo: 'https://fig.io/favicon.ico' },
  { name: 'Cursor', slug: 'cursor', tagline: 'AI-first code editor built for pair programming', website: 'https://cursor.sh', categorySlug: 'developer-tools', isVerified: true, logo: 'https://cursor.sh/favicon.ico' },
  { name: 'Replit', slug: 'replit', tagline: 'Build software collaboratively from anywhere', website: 'https://replit.com', categorySlug: 'developer-tools', isVerified: true, logo: 'https://replit.com/public/icons/favicon-196.png' },
  { name: 'Render', slug: 'render', tagline: 'Cloud application hosting for developers', website: 'https://render.com', categorySlug: 'developer-tools', logo: 'https://render.com/favicon.ico' },
  { name: 'Fly.io', slug: 'fly-io', tagline: 'Deploy app servers close to your users', website: 'https://fly.io', categorySlug: 'developer-tools', logo: 'https://fly.io/favicon.ico' },
  { name: 'Coolify', slug: 'coolify', tagline: 'Self-hostable Heroku & Netlify alternative', website: 'https://coolify.io', categorySlug: 'developer-tools', logo: 'https://coolify.io/favicon.ico' },

  // Design Tools (10)
  { name: 'Figma', slug: 'figma', tagline: 'The collaborative interface design tool', website: 'https://figma.com', categorySlug: 'design-tools', isVerified: true, logo: 'https://static.figma.com/app/icon/1/favicon.png' },
  { name: 'Framer', slug: 'framer', tagline: 'The web builder for stunning sites', website: 'https://framer.com', categorySlug: 'design-tools', isVerified: true, logo: 'https://framer.com/favicon.ico' },
  { name: 'Canva', slug: 'canva', tagline: 'Design anything and publish anywhere', website: 'https://canva.com', categorySlug: 'design-tools', isVerified: true, logo: 'https://static.canva.com/static/images/favicon-1.ico' },
  { name: 'Spline', slug: 'spline', tagline: '3D design tool for the web', website: 'https://spline.design', categorySlug: 'design-tools', logo: 'https://spline.design/favicon.ico' },
  { name: 'Rive', slug: 'rive', tagline: 'Create interactive animations for apps and games', website: 'https://rive.app', categorySlug: 'design-tools', logo: 'https://rive.app/favicon.ico' },
  { name: 'Penpot', slug: 'penpot', tagline: 'Open source design and prototyping platform', website: 'https://penpot.app', categorySlug: 'design-tools', logo: 'https://penpot.app/favicon.ico' },
  { name: 'Refbox', slug: 'refbox', tagline: 'Floating reference app for creatives', website: 'https://refbox.app', categorySlug: 'design-tools' },
  { name: 'Colorfa.me', slug: 'colorfa-me', tagline: 'Discover beautiful color palettes without the noise', website: 'https://colorfa.me', categorySlug: 'design-tools' },
  { name: 'Mobbin', slug: 'mobbin', tagline: 'Mobile & web design patterns library', website: 'https://mobbin.com', categorySlug: 'design-tools' },
  { name: 'Shots.so', slug: 'shots-so', tagline: 'Create beautiful mockups in seconds', website: 'https://shots.so', categorySlug: 'design-tools' },

  // Marketing & SEO (10)
  { name: 'Ahrefs', slug: 'ahrefs', tagline: 'SEO tools and resources to grow search traffic', website: 'https://ahrefs.com', categorySlug: 'seo-content-marketing', isVerified: true },
  { name: 'Semrush', slug: 'semrush', tagline: 'Online visibility management platform', website: 'https://semrush.com', categorySlug: 'seo-content-marketing', isVerified: true },
  { name: 'Surfer SEO', slug: 'surfer-seo', tagline: 'AI-powered SEO content optimization', website: 'https://surferseo.com', categorySlug: 'seo-content-marketing' },
  { name: 'Clearscope', slug: 'clearscope', tagline: 'AI-powered content optimization platform', website: 'https://clearscope.io', categorySlug: 'seo-content-marketing' },
  { name: 'Frase', slug: 'frase', tagline: 'AI content optimization and research tool', website: 'https://frase.io', categorySlug: 'seo-content-marketing' },
  { name: 'PainOnSocial', slug: 'painonsocial', tagline: 'Discover customer pain points from social platforms', website: 'https://painonsocial.com', categorySlug: 'marketing' },
  { name: 'SparkToro', slug: 'sparktoro', tagline: 'Audience research and intelligence tool', website: 'https://sparktoro.com', categorySlug: 'marketing' },
  { name: 'Mailchimp', slug: 'mailchimp', tagline: 'Email marketing and automation platform', website: 'https://mailchimp.com', categorySlug: 'marketing', isVerified: true },
  { name: 'ConvertKit', slug: 'convertkit', tagline: 'Email marketing for creators', website: 'https://convertkit.com', categorySlug: 'marketing' },
  { name: 'Beehiiv', slug: 'beehiiv', tagline: 'Newsletter platform built for growth', website: 'https://beehiiv.com', categorySlug: 'marketing' },

  // Social Media Tools (10)
  { name: 'Buffer', slug: 'buffer', tagline: 'Social media management for growing brands', website: 'https://buffer.com', categorySlug: 'social-media-influencer-tools', isVerified: true },
  { name: 'Hootsuite', slug: 'hootsuite', tagline: 'Social media management platform', website: 'https://hootsuite.com', categorySlug: 'social-media-influencer-tools', isVerified: true },
  { name: 'Later', slug: 'later', tagline: 'Social media scheduling and analytics', website: 'https://later.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'WoopSocial', slug: 'woopsocial', tagline: 'AI-powered social media content generator', website: 'https://woopsocial.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'Postiz', slug: 'postiz', tagline: 'Social media scheduling for multiple accounts', website: 'https://postiz.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'Typefully', slug: 'typefully', tagline: 'Write and schedule Twitter threads', website: 'https://typefully.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'Hypefury', slug: 'hypefury', tagline: 'Twitter growth and scheduling tool', website: 'https://hypefury.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'Publer', slug: 'publer', tagline: 'Social media scheduling and collaboration', website: 'https://publer.io', categorySlug: 'social-media-influencer-tools' },
  { name: 'Metricool', slug: 'metricool', tagline: 'Social media analytics and scheduling', website: 'https://metricool.com', categorySlug: 'social-media-influencer-tools' },
  { name: 'Feedhive', slug: 'feedhive', tagline: 'AI-powered social media management', website: 'https://feedhive.com', categorySlug: 'social-media-influencer-tools' },

  // Productivity (10)
  { name: 'Notion', slug: 'notion', tagline: 'All-in-one workspace for notes, docs, and collaboration', website: 'https://notion.so', categorySlug: 'productivity', isVerified: true },
  { name: 'Obsidian', slug: 'obsidian', tagline: 'Private and flexible note-taking app', website: 'https://obsidian.md', categorySlug: 'productivity', isVerified: true },
  { name: 'Logseq', slug: 'logseq', tagline: 'Open-source knowledge management', website: 'https://logseq.com', categorySlug: 'productivity' },
  { name: 'Cron', slug: 'cron', tagline: 'Next-generation calendar for professionals', website: 'https://cron.com', categorySlug: 'productivity' },
  { name: 'Amie', slug: 'amie', tagline: 'Joyful productivity with calendar and todos', website: 'https://amie.so', categorySlug: 'productivity' },
  { name: 'Akiflow', slug: 'akiflow', tagline: 'Time blocking and task management', website: 'https://akiflow.com', categorySlug: 'productivity' },
  { name: 'Reclaim.ai', slug: 'reclaim-ai', tagline: 'AI scheduling for busy teams', website: 'https://reclaim.ai', categorySlug: 'productivity' },
  { name: 'Clockwise', slug: 'clockwise', tagline: 'AI calendar assistant for focus time', website: 'https://clockwise.com', categorySlug: 'productivity' },
  { name: 'Todoist', slug: 'todoist', tagline: 'To-do list and task manager', website: 'https://todoist.com', categorySlug: 'productivity', isVerified: true },
  { name: 'Things 3', slug: 'things-3', tagline: 'Beautiful task manager for Apple devices', website: 'https://culturedcode.com/things', categorySlug: 'productivity' },

  // Automation & Workflow (5)
  { name: 'Zapier', slug: 'zapier', tagline: 'Automate workflows by connecting your apps', website: 'https://zapier.com', categorySlug: 'automation-workflow', isVerified: true },
  { name: 'Make', slug: 'make', tagline: 'Visual automation platform for workflows', website: 'https://make.com', categorySlug: 'automation-workflow', isVerified: true },
  { name: 'n8n', slug: 'n8n', tagline: 'Open-source workflow automation tool', website: 'https://n8n.io', categorySlug: 'automation-workflow' },
  { name: 'Pipedream', slug: 'pipedream', tagline: 'Connect APIs and build workflows with code', website: 'https://pipedream.com', categorySlug: 'automation-workflow' },
  { name: 'Activepieces', slug: 'activepieces', tagline: 'Open source no-code business automation', website: 'https://activepieces.com', categorySlug: 'automation-workflow' },

  // Analytics (5)
  { name: 'Plausible', slug: 'plausible', tagline: 'Simple and privacy-friendly web analytics', website: 'https://plausible.io', categorySlug: 'analytics-monitoring' },
  { name: 'PostHog', slug: 'posthog', tagline: 'Open-source product analytics platform', website: 'https://posthog.com', categorySlug: 'analytics-monitoring', isVerified: true },
  { name: 'Mixpanel', slug: 'mixpanel', tagline: 'Product analytics for mobile and web', website: 'https://mixpanel.com', categorySlug: 'analytics-monitoring', isVerified: true },
  { name: 'Amplitude', slug: 'amplitude', tagline: 'Digital analytics platform', website: 'https://amplitude.com', categorySlug: 'analytics-monitoring', isVerified: true },
  { name: 'June', slug: 'june', tagline: 'Product analytics for B2B SaaS', website: 'https://june.so', categorySlug: 'analytics-monitoring' },

  // Fintech (5)
  { name: 'Stripe', slug: 'stripe', tagline: 'Financial infrastructure for the internet', website: 'https://stripe.com', categorySlug: 'fintech', isVerified: true },
  { name: 'LemonSqueezy', slug: 'lemonsqueezy', tagline: 'Payments, tax & subscriptions for software', website: 'https://lemonsqueezy.com', categorySlug: 'fintech', isVerified: true },
  { name: 'Paddle', slug: 'paddle', tagline: 'Complete payments infrastructure for SaaS', website: 'https://paddle.com', categorySlug: 'fintech', isVerified: true },
  { name: 'Mercury', slug: 'mercury', tagline: 'Banking for startups', website: 'https://mercury.com', categorySlug: 'fintech', isVerified: true },
  { name: 'Wise', slug: 'wise', tagline: 'International money transfers', website: 'https://wise.com', categorySlug: 'fintech', isVerified: true },

  // No-Code (5)
  { name: 'Webflow', slug: 'webflow', tagline: 'Build professional websites without code', website: 'https://webflow.com', categorySlug: 'no-code-low-code', isVerified: true },
  { name: 'Bubble', slug: 'bubble', tagline: 'Build web apps without code', website: 'https://bubble.io', categorySlug: 'no-code-low-code', isVerified: true },
  { name: 'Glide', slug: 'glide', tagline: 'Build apps from spreadsheets', website: 'https://glideapps.com', categorySlug: 'no-code-low-code' },
  { name: 'Softr', slug: 'softr', tagline: 'Build apps on Airtable without code', website: 'https://softr.io', categorySlug: 'no-code-low-code' },
  { name: 'Directus', slug: 'directus', tagline: 'Open-source headless CMS and data platform', website: 'https://directus.io', categorySlug: 'no-code-low-code' },

  // Project Management (5)
  { name: 'Asana', slug: 'asana', tagline: 'Work management platform for teams', website: 'https://asana.com', categorySlug: 'project-management', isVerified: true },
  { name: 'Monday.com', slug: 'monday-com', tagline: 'Work OS for teams', website: 'https://monday.com', categorySlug: 'project-management', isVerified: true },
  { name: 'ClickUp', slug: 'clickup', tagline: 'One app to replace them all', website: 'https://clickup.com', categorySlug: 'project-management', isVerified: true },
  { name: 'TESSR', slug: 'tessr', tagline: 'Project management for creatives', website: 'https://tessr.io', categorySlug: 'project-management' },
  { name: 'Proplanum', slug: 'proplanum', tagline: 'Work scheduling and team management', website: 'https://proplanum.com', categorySlug: 'project-management' },
]

async function main() {
  console.log('🌱 Seeding database with 100 products...')

  // Clear existing data
  console.log('Clearing existing data...')
  await prisma.upvote.deleteMany()
  await prisma.comment.deleteMany()
  await prisma.product.deleteMany()
  await prisma.tag.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()

  // Create categories
  console.log('Creating 20 categories...')
  for (const category of categories) {
    await prisma.category.create({ data: category })
  }

  // Create tags
  console.log('Creating tags...')
  for (const tag of tags) {
    await prisma.tag.create({ data: tag })
  }

  // Create demo user
  console.log('Creating demo user...')
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo@openship.io',
      name: 'OpenShip Team',
      isVerified: true,
    },
  })

  // Create products
  console.log('Creating 100 products...')
  let count = 0
  for (const product of products) {
    const category = await prisma.category.findUnique({
      where: { slug: product.categorySlug },
    })

    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        tagline: product.tagline,
        website: product.website,
        logo: product.logo || null,
        isCurated: true,
        isVerified: product.isVerified || false,
        status: 'APPROVED',
        userId: demoUser.id,
        categoryId: category?.id,
        launchDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date in last 30 days
      },
    })
    count++
    if (count % 20 === 0) {
      console.log(`  Created ${count} products...`)
    }
  }

  // Add some random upvotes
  console.log('Adding random upvotes...')
  const allProducts = await prisma.product.findMany()
  
  // Create additional users for upvotes
  const upvoteUsers = []
  for (let i = 0; i < 50; i++) {
    const user = await prisma.user.create({
      data: {
        email: `user${i}@openship.io`,
        name: `User ${i}`,
      },
    })
    upvoteUsers.push(user)
  }

  // Add upvotes to products
  for (const product of allProducts) {
    const upvoteCount = Math.floor(Math.random() * 150) + 10
    const shuffledUsers = upvoteUsers.sort(() => Math.random() - 0.5).slice(0, upvoteCount)
    
    for (const user of shuffledUsers) {
      try {
        await prisma.upvote.create({
          data: {
            userId: user.id,
            productId: product.id,
          },
        })
      } catch (e) {
        // Skip duplicate upvotes
      }
    }
  }

  console.log(`✅ Seeding complete!`)
  console.log(`   - ${categories.length} categories`)
  console.log(`   - ${tags.length} tags`)
  console.log(`   - ${products.length} products`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
