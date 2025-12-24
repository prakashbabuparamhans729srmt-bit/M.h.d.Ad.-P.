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
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Client User', email: 'client@example.com', role: 'Client', status: 'Active' },
];

export let projectList: any[] = [
    // This can be populated from Firestore now
];

// Function to add a new project to the list (for optimistic UI)
export const addProject = (project: any) => {
    projectList.unshift(project);
};

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
    quote: "VyaparSphere transformed our project management. The client portal is intuitive and keeps us updated in real-time. Their team\'s professionalism is second to none.",
    name: "Priya Patel",
    title: "CEO, InnovateNow",
    imageId: "avatar-1",
  },
  {
    quote: "The AI timeline summarization is a game-changer. I can get a quick overview of our project\'s progress without digging through documents. Highly recommended!",
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

export const projectFiles = [
  { id: 'file-01', name: 'Project Brief.pdf', type: 'PDF', size: '2.5 MB', uploaded: '2024-03-01', projectId: 'proj-001' },
  { id: 'file-02', name: 'Wireframes_v2.fig', type: 'Figma', size: '15.2 MB', uploaded: '2024-03-10', projectId: 'proj-001' },
  { id: 'file-03', name: 'Technical_Spec.docx', type: 'Word', size: '1.1 MB', uploaded: '2024-03-15', projectId: 'proj-001' },
  { id: 'file-04', name: 'Marketing_Assets.zip', type: 'ZIP', size: '58.9 MB', uploaded: '2024-04-05', projectId: 'proj-004' },
  { id: 'file-05', name: 'Final_Report.pdf', type: 'PDF', size: '10.8 MB', uploaded: '2024-02-20', projectId: 'proj-002' },
  { id: 'file-06', name: 'Initial_Mockups.png', type: 'PNG', size: '4.3 MB', uploaded: '2024-05-01', projectId: 'proj-003' },
];

export const invoices = [
  { id: 'INV-2024-001', project: 'E-commerce Platform Development', amount: '₹1,50,000', status: 'Paid', issueDate: '2024-03-01', dueDate: '2024-03-15' },
  { id: 'INV-2024-002', project: 'E-commerce Platform Development', amount: '₹2,00,000', status: 'Paid', issueDate: '2024-04-01', dueDate: '2024-04-15' },
  { id: 'INV-2024-003', project: 'E-commerce Platform Development', amount: '₹1,75,000', status: 'Pending', issueDate: '2024-05-01', dueDate: '2024-05-15' },
  { id: 'INV-2024-004', project: 'Mobile App for Healthcare', amount: '₹3,50,000', status: 'Paid', issueDate: '2024-02-10', dueDate: '2024-02-25' },
  { id: 'INV-2024-005', project: 'Marketing Campaign Landing Pages', amount: '₹75,000', status: 'Due', issueDate: '2024-04-20', dueDate: '2024-05-05' },
];
