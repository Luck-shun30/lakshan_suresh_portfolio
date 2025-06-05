export const siteConfig = {
  name: "Lakshan",
  role: "Junior at Stevenson High School",
  description: "I'm a passionate developer who loves creating beautiful and functional web applications. I specialize in modern web technologies and enjoy solving complex problems.",
  email: "slakshan30@gmail.com",
  about: {
    title: "About Me",
    image: "/lakshan.jpg",
    content: [
      "I'm a junior at Stevenson High School with a passion for technology and innovation. I love exploring new technologies and building projects that make a difference.",
      "When I'm not coding, you can find me exploring new ideas, learning new skills, and collaborating with others to create something amazing.",
    ],
  },
  projects: [
    {
      title: 'Dynamic Dragon',
      description: 'Dynamic "Choose your Own Adventure" game using AI',
      link: 'https://github.com/Luck-shun30/FBLA_Dynamic_Dragon',
      imageSrc: '/assets/dynamic_dragon.png',
      gradientColors: {
        from: "from-purple-500/50",
        to: "to-blue-500/50",
      },
    },
    {
      title: 'Personal Portfolio',
      description: 'Personal Website to showcase my work',
      link: 'https://github.com/Luck-shun30/Personal_Portfolio',
      imageSrc: '/assets/personal_portfolio.png',
      gradientColors: {
        from: "from-green-500/50",
        to: "to-teal-500/50",
      },
    },
    {
      title: 'Class Ranking App',
      description: 'Web-app that allows students to rate school courses',
      link: 'https://github.com/yarik225/Class-Ranking-App',
      imageSrc: '',
      gradientColors: {
        from: "from-yellow-500/50",
        to: "to-red-500/50",
      },
    },
    {
      title: 'Shoora',
      description: 'A web-design agency that helps local businesses with their online presence (There are more projects inside)',
      link: 'https://shoora-services.netlify.app',
      imageSrc: '/assets/shoora.png',
      gradientColors: {
        from: "from-indigo-500/50",
        to: "to-purple-500/50",
      },
    },
    {
      title: 'Newsletter Creator',
      description: 'Automatically finds global news from different sectors and creates a HTML draft to send an email with.',
      link: 'https://github.com/Luck-shun30/newsletter_creator',
      imageSrc: '/assets/newsletter_creator.png',
      gradientColors: {
        from: "from-blue-500/50",
        to: "to-cyan-500/50",
      },
    },
  ],
  adjectives: ["developer", "entrepreneur", "problem solver", "tech enthusiast"] as string[],
  contact: {
    title: "Get in Touch",
    content: "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!",
  },
} as const; 