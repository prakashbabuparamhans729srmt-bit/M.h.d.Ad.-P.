export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export const userList = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Priya Patel', email: 'priya.patel@example.com', role: 'Client', status: 'Active' },
  { id: 3, name: 'Rohan Gupta', email: 'rohan.gupta@example.com', role: 'Client', status: 'Inactive' },
  { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Vikram Singh', email: 'vikram.singh@example.com', role: 'Client', status: 'Active' },
];

export const projectList = [
    {
        id: 'proj-001',
        name: 'E-commerce Platform Development',
        client: 'Priya Patel',
        status: 'In Progress',
        progress: 65,
        startDate: '2023-01-15',
        endDate: '2023-08-30',
        timeline: `Phase 1: Discovery & Planning (Jan 15 - Feb 10, 2023) - Completed. Initial meetings held, project scope defined, and technology stack finalized. Key deliverables: Project brief, wireframes, and technical specification document.
Phase 2: UI/UX Design (Feb 11 - Mar 20, 2023) - Completed. Created high-fidelity mockups for all pages, designed the mobile and desktop user experience, and established a complete design system in Figma.
Phase 3: Frontend Development (Mar 21 - May 30, 2023) - Completed. Developed all client-facing pages using Next.js and Tailwind CSS. Integrated state management and connected to placeholder APIs.
Phase 4: Backend Development (Jun 1 - Aug 10, 2023) - In Progress. Currently building out the database schema, developing RESTful APIs for products, users, and orders. Authentication endpoint is complete. Payment gateway integration is next on the list.
Phase 5: Testing & QA (Aug 11 - Aug 25, 2023) - Not Started.
Phase 6: Deployment & Launch (Aug 26 - Aug 30, 2023) - Not Started.`
    },
    { id: 'proj-002', name: 'Mobile App for Healthcare', client: 'Rohan Gupta', status: 'Completed', progress: 100 },
    { id: 'proj-003', name: 'Corporate Website Redesign', client: 'Vikram Singh', status: 'On Hold', progress: 30 },
    { id: 'proj-004', name: 'Marketing Campaign Landing Pages', client: 'Priya Patel', status: 'Planning', progress: 10 },
];

export const blogPosts = [
  {
    slug: 'navigating-digital-transformation',
    title: 'Navigating the Digital Transformation',
    author: 'Aarav Sharma',
    date: '2024-05-15',
    imageId: 'blog-post-1',
    excerpt: 'Digital transformation is more than just a buzzword. It\'s a fundamental change in how you operate and deliver value to your customers. In this post, we explore the key pillars of a successful digital strategy.',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>'
  },
  {
    slug: 'unlocking-new-markets',
    title: 'Strategies for Unlocking New Markets',
    author: 'Sneha Reddy',
    date: '2024-04-22',
    imageId: 'blog-post-2',
    excerpt: 'Expanding your business into new markets can be daunting. We\'ve compiled effective strategies for market analysis, localization, and entry that can help you succeed globally.',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>'
  },
  {
    slug: 'power-of-client-collaboration',
    title: 'The Power of Effective Client Collaboration',
    author: 'Aarav Sharma',
    date: '2024-03-10',
    imageId: 'blog-post-3',
    excerpt: 'True partnership with clients leads to better outcomes. Discover how our collaborative approach, powered by our dedicated client portal, ensures project success and transparency.',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>'
  },
];

export const testimonials = [
  {
    quote: "VyaparSphere transformed our project management. The client portal is intuitive and keeps us updated in real-time. Their team's professionalism is second to none.",
    name: "Priya Patel",
    title: "CEO, InnovateNow",
    imageId: "avatar-1",
  },
  {
    quote: "The AI timeline summarization is a game-changer. I can get a quick overview of our project's progress without digging through documents. Highly recommended!",
    name: "Rohan Gupta",
    title: "Founder, HealthFirst",
    imageId: "avatar-2",
  },
  {
    quote: "From the initial consultation to the final delivery, the experience with VyaparSphere has been seamless. They truly understand our business needs and deliver exceptional results.",
    name: "Vikram Singh",
    title: "Marketing Director, Global Exports",
    imageId: "avatar-3",
  },
];
