// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shashankmsanap', // Your GitHub org/user name. (This is the only required config)
          },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Shashank_Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shashank Sanap',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/shashank-s-640557188/',
    stackoverflow: '',
    website: 'Coming Soon',
    phone: '+353 899736722',
    email: 'shankhsanap99@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1DZql2fp9ATFeV-eCwK9Q8gsaR5Hg6qBZ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'DevOps',
    'Python',
    'Core Java',
    'Docker',
    'Ansible',
    'Terraform',
    'MySQL',
    'PostgreSQL',
    'GitLab',
    'SQL',
    'HTML',
    'CSS',
    'Kubernetes',
    'Azure',
  ],
  experiences: [
    {
      company: 'Bincom Global UK',
      position: 'DevOps Intern',
      from: 'February 2025',
      to: 'Present',
      companyLink: 'https://bincom.co.uk/about-us/',
    },
    {
      company: 'Brain Vision Technology',
      position: 'DevOps Intern',
      from: 'February 2024',
      to: 'January 2025',
      companyLink: 'https://brainvisiontechnology.com/',
    },
    {
      company: 'HCL Technologies Pvt Ltd',
      position: 'Software Engineer',
      from: 'July 2021',
      to: 'August 2022',
      companyLink: 'https://www.hcltech.com/',
    },
    {
      company: 'Winsoft Technologies India Pvt Ltd',
      position: 'Cloud Support Engineer',
      from: 'December 2019',
      to: 'July 2021',
      companyLink: 'https://winsoftech.com/',
    },
  
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Atlantic Technological University, Letterkenny, Ireland.',
      degree: 'MSc In DevOps',
      from: 'September 2022',
      to: 'May 2024',
    },
    {
      institution: 'Prof Ram Meghe Institute of Technology and Research, Badnera, Amravati.',
      degree: 'BE in Electronics and Telecommunications',
      from: 'September 2016',
      to: 'June 2019',
    },
  ],
  publications: [
    {
      title: 'Security Deployment Challanges in Microservices Architecture',
      journalName: 'Research Paper',
      authors: 'Shashank Sanap',
      link: 'https://drive.google.com/file/d/1smG3tcfX86JDhZ4monSlh_l6QIYqJOj5/view?usp=sharing',
      description:
        'This research explores security challenges in deploying microservices within DevOps environments. It emphasizes continuous deployment practices, secure pipeline design, and addressing gaps in team awareness and infrastructure. Key factors like testing, transparency, and design principles are identified to enhance reliability and security, providing a foundation to improve scalability and adaptability in microservices-based systems.',
    },
    {
      title: 'Automating Threat Models as Code in a DevOps Pipeline',
      journalName: 'Dessertation',
      authors: 'Shashank Sanap',
      link: 'https://drive.google.com/file/d/1MM_3bmuAnUdnfc794Gr4c8E2-si31Khu/view?usp=sharing',
      description:
        'This research focuses on automating threat modelling in DevOps to address cybersecurity risks in cloud-based applications. By integrating threat analysis early in development, it ensures secure, faster software delivery, reducing vulnerabilities in dynamic cloud environments.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
