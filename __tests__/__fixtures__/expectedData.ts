import type {
  AchievementSection,
  Career,
  Data,
  KnowledgeSection,
} from "../../types/data";

const currentYear = new Date().getFullYear();

export const expectedData: Data = {
  languages: [
    { title: "English", flag: "🇬🇧", proeficiency: "Fluent" },
    { title: "Spanish", flag: "🇪🇸", proeficiency: "Native" },
    { title: "Swedish", flag: "🇸🇪", proeficiency: "Elementary" },
  ],
  summary: [
    "Originally from Colombia, I am Guillermo Rodas, a seasoned Senior Full-stack JavaScript Engineer now residing in Sweden. My professional journey is fueled by a passion for empowering fellow developers, guiding them in skill enhancement, and ensuring the delivery of top-notch products.",
    "Beyond my role as a developer, I actively contribute to the tech community as the coordinator for CSS Community Dev and CSS Conf Colombia, showcasing my leadership and organizational skills in community-building initiatives.",
    "My expertise and contributions have earned me the prestigious titles of Google Developer Expert, Auth0 Ambassador, and Twitch Partner, reflecting my influence and impact within the tech industry.",
  ],
  expertises: [
    {
      title: "JavaScript",
      subtitle: `${currentYear - 2012} years of experience`,
      items: [
        "Skilled in JavaScript (ES2015+) and TypeScript, with experience in various JavaScript MV* frameworks for dynamic and efficient web development",
      ],
    },
    {
      title: "React",
      subtitle: `${currentYear - 2015} years of experience`,
      items: [
        "Proficient in React, including Hooks and various libraries, with expertise in global state management using Redux and Zustand for robust application architectures",
      ],
    },
    {
      title: "Node.js",
      subtitle: `${currentYear - 2016} years of experience`,
      items: [
        "Experienced with Node.js, using Express and diverse third-party middlewares. Also familiar with Hapi.js and plugins like Joi and Boom for scalable server-side solutions",
      ],
    },
  ],
  stack: [
    {
      title: "GraphQL",
      text: "Implemented GraphQL with Apollo and leveraged The Guild's ecosystem, including GraphQL Mesh, for optimized data retrieval and more efficient APIs.",
    },
    {
      title: "MySQL, Postgres & BigQuery",
      text: "Managed MySQL, Postgres, and BigQuery databases, providing comprehensive data solutions for complex datasets and query requirements.",
    },
    {
      title: "MongoDB",
      text: "Developed MongoDB systems using Mongoose and Mongo Atlas, focusing on scalable NoSQL database solutions for high-demand applications.",
    },
    {
      title: "OAuth & OIDC",
      text: "Integrated OAuth and OIDC protocols with various services including Auth0, Google, Meta, Spotify, and X (formerly Twitter), among others, effectively enhancing user authentication and access management.",
    },
    {
      title: "Firebase",
      text: "Implemented Firebase solutions, including Firestore and Authentication, to create secure, real-time, data-driven applications.",
    },
    {
      title: "Kafka",
      text: "Utilized Kafka for real-time data streaming and scalable processing, handling data flows across millions of records efficiently.",
    },
    {
      title: "ElasticSearch",
      text: "Developed and optimized ElasticSearch implementations for handling and querying multi-million record datasets, enhancing search efficiency and data analysis.",
    },
    {
      title: "Docker & Kubernetes",
      text: "Utilized Docker and Kubernetes to orchestrate multiple services, including distinct front-end and back-end systems, ensuring efficient containerization and system scalability.",
    },
    {
      title: "Apache & NGINX",
      text: "Configured Apache and NGINX servers to ensure optimal performance and enhanced security, supporting high-traffic web applications.",
    },
    {
      title: "AWS & Google Cloud Platform",
      text: "Utilized AWS services including S3, EC2, SQS, and DynamoDB, alongside GCP offerings like CloudRun, CloudBuild, Kubernetes, BigQuery, and BigTable, to develop scalable and reliable cloud-based applications.",
    },
    {
      title: "Linux OS",
      text: "Managed Linux OS, including CentOS and Debian, with a focus on security configurations, bash scripting, and remote administration via SSH for production environments.",
    },
    {
      title: "Agile Methodologies",
      text: "Employed Agile methodologies, including Scrum, Kanban, Scrumban, and Lean, to streamline development processes and enhance team collaboration and productivity.",
    },
  ],
  frameworks: [
    {
      title: "Next.js",
      text: "Utilized Next.js for building SSR React applications, leveraging React Server Components, App Router, and Server Actions with Vercel for enhanced performance.",
    },
    {
      title: "Meteor",
      text: "Developed with Meteor, focusing on its reactive programming capabilities, including mobile application development.",
    },
    {
      title: "Jest, Vitest and Playwright",
      text: "Applied Jest, Vitest, and Playwright for comprehensive testing, ensuring robust and reliable software solutions.",
    },
    {
      title: "Storybook",
      text: "Employed Storybook for developing and testing UI components, enhancing interface design and consistency.",
    },
    {
      title: "Design Tokens",
      text: "Implemented Design Tokens to maintain consistent design and branding across applications.",
    },
    {
      title: "Material Design, Ant Design & Tailwind CSS",
      text: "Skilled in applying UI frameworks like Material Design, Ant Design, and Tailwind CSS for diverse and adaptable UI solutions.",
    },
    {
      title: "Webpack & Vite",
      text: "Experienced with Webpack and Vite, optimizing production setups with various plugins for enhanced application performance.",
    },
    {
      title: "NPM, NPM scripts & Yarn",
      text: "Worked with NPM, NPM scripts, and Yarn, including managing monorepos using Yarn workspaces, for efficient project management.",
    },
  ],
};

export const expectedCareers: Career[] = [
  {
    date: null,
    startDate: "August 2021",
    endDate: null,
    company: "EQT Group",
    url: "www.eqtgroup.com",
    logo: "eqt",
    about:
      "EQT is a private equity firm that invests in companies and regions where there is an industrial approach.",
    functions: "Senior Full-stack Engineer.",
    achievements: [
      "Involved in an in-house project that leverages AI to enhance the efficiency of deal professionals, streamlining tasks, and finding investment opportunities.",
      "Assisted in establishing the foundations of a Design System, incorporating scaffolding to refine our automated component tests.",
      "Additionally, led a series of self-improvement meetings for the team, exploring new technologies and addressing our tech debt.",
    ],
  },
  {
    date: "2019",
    startDate: "September 2019",
    endDate: "August 2021",
    company: "Klarna",
    url: "www.klarna.com",
    logo: "klarna",
    about:
      "Klarna is an e-commerce payment solutions platform for merchants and shoppers.",
    functions: "Engineer",
    achievements: [
      "As a member of the foundations team, my role involved creating the main user interface pacakges,employing microfrontends,that were used by various teams.",
      "Additionally, Iworked on improving and expanding the continuous delivery process, which wasa crucial aspect of our team's work.",
    ],
  },
  {
    date: "2016",
    startDate: "October 2016",
    endDate: "September 2019",
    company: "Auth0",
    url: "www.auth0.com",
    logo: "auth0",
    about:
      "Auth0 is a cloud identity management SAAS application for the web, mobile, IoT, and internal software.",
    functions: "Engineer",
    achievements: [
      "I was involved in the development of several internal products utilizing Hapi.js, MongoDB, React, and Redux technologies.",
      "Additionally, I enhanced our team's development process by integrating tools such as Storybook and Snapshot testing.",
    ],
  },
  {
    date: "2015",
    startDate: "May 2015",
    endDate: "October 2016",
    company: "Huge",
    url: "www.huge.com",
    logo: "huge",
    about:
      "Huge redefines what's possible for the world's most ambitious brands.",
    functions: "Web Engineer",
    achievements: [
      "I contributed to the development of a Fintech web app, harnessing the power of React and Redux. This app was finely tuned for compatibility across various browsers and mobile devices.",
      "I crafted web applications with Vanilla JavaScript, ensuring they seamlessly worked across diverse browsers and devices,including the likes of IE10 on Windows and Safari on the iPhone 4S.",
      "In another key role, I took the lead as the front-end developer, focusing on a web app optimized for stellar performanceon mobile platforms.",
      "Beyond development, I facilitated multiple technical training sessions, bolstering the skills of both the Front-end and Quality Assurance teams.",
    ],
  },
  {
    date: "2012",
    startDate: "August 2012",
    endDate: "May 2015",
    company: "Komet Sales",
    url: "www.kometsales.com",
    logo: "komet",
    about:
      "Komet is floral industry SaaS that gives you the tools to automate processes while connecting with your key business partners.",
    functions: "Full-stack Developer",
    achievements: [
      "Played a pivotal role in numerous corporate projects, tapping into MySQL and Java frameworks like Spring and Hibernate.",
      "Took the lead in shaping the Front-end architecture and defining the tech stack for our company's products.",
      "Further, I drove improvements in development practices, notably shifting from SVN to Git and championing the adoption of Scrum.",
    ],
  },
];

export const expectedKnowledge: KnowledgeSection[] = [
  {
    title: "Education",
    items: [
      {
        title: "UX Designer Upskill",
        text: "Hyper Island",
        footer: "October 2023 — May 2024",
      },
      {
        title: "Technical assistant in Digital Graphic Design",
        text: "CENSA",
        footer: "October 2017 — June 2018",
      },
      {
        title: "Systems engineering (undergraduate)",
        text: "Universidad Nacional de Colombia",
        footer: "January 2007 — January 2010",
      },
    ],
  },
  {
    title: "Courses",
    items: [
      {
        title: "Platzi",
        text: [
          ["JavaScript Backend Career", "80 Hours, March 2019"],
          ["English Career", "80 Hours, March 2019"],
          ["Frontend Architect Career", "80 Hours, December 2018"],
        ],
      },
      {
        title: "Actívate",
        text: "Google Analytics Course",
        footer: "40 Hours, December 2017",
      },
      {
        title: "Coursera",
        text: [
          ["Swift: programming for iOS", "30 Hours, March 2016"],
          [
            "Web Application Development with JavaScript and MongoDB",
            "8 Hours, March 2016",
          ],
          ["Introduction to Meteor.js development", "12 Hours, February 2016"],
        ],
      },
      {
        title: "Mejorando.la",
        text: [
          ["Professional Backend Course", "12 Hours, February 2014"],
          ["Professional Frontend Course", "12 Hours, July 2013"],
          ["HTML5 Course", "20 Hours, July 2012"],
        ],
      },
      {
        title: "Amazon Web Services",
        text: "AWS Business Professional Accreditation",
        footer: "10 Hours, June 2014",
      },
      {
        title: "SENA",
        text: [
          ["Database Design in SQL", "40 Hours, November 2010"],
          ["Variables and structures of control in POO: JAVA", "40 Hours, November 2010"],
        ],
      },
      {
        title: "Universidad Nacional de Colombia",
        text: "Web programming with PHP and MySQL",
        footer: "50 Hours, July 2010",
      },
      {
        title: "Institución Educativa Concejo de Medellín",
        text: "Middle Technical in Multimedia production and Software Design",
        footer: "280 Hours, December 2007",
      },
    ],
  },
  {
    title: "Seminars",
    items: [
      {
        title: "Agiles.org",
        text: "VII Latin American Workshops on Agile Methodologies",
        footer: "24 Hours, October 2014",
      },
      {
        title: "Campus Party Colombia",
        text: [
          ["Campus Party 7 Colombia", "300 Hours, June 2014"],
          ["Campus Party 6 Colombia", "250 Hours, October 2013"],
          ["Campus Party 4 Colombia", "521 Hours, July 2011"],
        ],
      },
      {
        title: "Google",
        text: "Google Developer Bus Bogota",
        footer: "36 Hours, November 2013",
      },
    ],
  },
];

export const expectedAchievements: AchievementSection[] = [
  {
    title: "Speaking",
    items: [
      {
        title: "WebAuthn & Passkeys: The Future of Authentication",
        text: [
          ["DevFest Singapore, EpicHey!", "November 2023"],
          ["DevFest Zagreb", "October 2023"],
        ],
      },
      {
        title: "Why everyone should do streaming live coding?",
        text: [
          ["DevFest Stockholm", "December 2022"],
          ["Nerdearla", "August 2022"],
        ],
      },
    ],
  },
  {
    title: "Mentorship",
    items: [
      {
        title: "Online Teacher",
        text: [
          ["Platzi", "December 2018, July 2019, March 2023"],
          ["Código Facilito", "September 2023"],
        ],
      },
      {
        title: "Mentor",
        text: [
          ["Women Developer Academy Europe", "October 2021, October 2023"],
          ["Hyper Island", "March 2021"],
          ["The Konferense", "September 2020"],
          ["Techstars Startup Weekend", "June 2019"],
        ],
      },
      {
        title: "Bootcamp Instructor",
        text: [
          ["Código Facilito", "October 2022, February 2023, March 2024"],
          ["Undefined Academy", "March 2023 - October 2023"],
          ["Platzi Master", "November 2020 - September 2022"],
          ["World Tech Makers", "June 2017 - August 2017"],
        ],
      },
      {
        title: "Organizer",
        text: [
          ["CSS Conf Colombia", "April 2021 - December 2023"],
          ["CSS Community Dev", "June 2018 - December 2023"],
          ["Medellín Java", "December 2014 - November 2016"],
        ],
      },
    ],
  },
  {
    title: "Podcasts",
    items: [
      {
        title: "AI and Humans: Invincible Innovation",
        text: "Staying Ahead in AI: Practical Insights for Developers",
        footer: "April 2025",
      },
      {
        title: "freeCodeCamp en Español",
        text: "From Java to JavaScript",
        footer: "December 2023",
      },
      {
        title: "Humans of Platzi",
        text: "The power of English and networking",
        footer: "July 2023",
      },
      {
        title: "EnPixeles",
        text: "Creating communities in post-pandemic",
        footer: "December 2021",
      },
      {
        title: "24H24L",
        text: "I already know how to code, what's next?",
        footer: "December 2021",
      },
      {
        title: "La liga del código",
        text: "Security in the Front-end",
        footer: "August 2020",
      },
    ],
  },
  {
    title: "Meetups",
    items: [
      {
        title: "Laravel Dev & Vue",
        text: "Handling Security in the Front-end",
        footer: "June 2020",
      },
      {
        title: "Magenta Codes",
        text: "How to succeed as a Full-Stack Engineer",
        footer: "April 2020",
      },
      {
        title: "Medellin CSS",
        text: [
          ["Don't use a pre-processor anymore", "August 2020"],
          ["Tips for giving a talk", "June 2019"],
          ["CSS Layout", "June 2018"],
          ["How to scale CSS in Design Systems", "October 2018"],
        ],
      },
      {
        title: "Pioneras Developers",
        text: [["How do you scale a web application?", "July 2020"]],
      },
      {
        title: "Women Techmakers Costa Rica",
        text: [["Security in the Front-end", "August 2019"]],
      },
      {
        title: "Womcy",
        text: [["How to be a Frontend Security Engineer", "July 2019"]],
      },
      {
        title: "Colombia Dev",
        text: [
          [
            "BFFs: How to authenticate on multiple platforms and multiple devices",
            "May 2019",
          ],
          ["Testing libraries with WebdriverIO", "June 2018"],
        ],
      },
      {
        title: "Pioneras Developers Medellín",
        text: [
          ["What's new in ES6?", "October 2017"],
          ["Learning React.js by building an application", "August 2017"],
        ],
      },
      {
        title: "MedellínJS",
        text: [["How to succeed as a Front-end Engineer?", "May 2017"]],
      },
      {
        title: "JavaScript Minuto",
        text: [
          ["Authentication with JavaScript", "November 2016"],
          ["What you should know about Angular 2?", "July 2016"],
          ["The power of Web components", "April 2016"],
          ["Meteor, building apps in a faster way", "July 2015"],
        ],
      },
      {
        title: "IoT Medellín",
        text: [["Learning React.js by building an application", "June 2016"]],
      },
      {
        title: "MedellínPHP",
        text: [["Introduction to Laravel", "September 2015"]],
      },
      {
        title: "Node.co Medellín",
        text: [["Websockets, the cool way to interact with your users", "June 2015"]],
      },
      {
        title: "Node.co Bogotá",
        text: [["Mongo DB in action", "March 2015"]],
      },
    ],
  },
  {
    title: "Publications",
    items: [
      {
        title: "Google Developers Blog",
        text: "The Beginning of the Passkeys Revolution",
        footer: "July 2024",
      },
    ],
  },
  {
    title: "Teaching",
    items: [
      {
        title: "Universidad Pontificia Bolivariana",
        text: [
          ["2D animation and multimedia production", "40 Hours, May 2015"],
          ["Design of animation for the web with Flash", "40 Hours, February 2015"],
          ["Foundations of multimedia production", "40 Hours, December 2014"],
          ["3D Animation with 3D Max Studio", "40 Hours, October 2014"],
          ["Variables and structures of control in POO: JAVA", "40 Hours, November 2010"],
        ],
      },
      {
        title: "Universidad Nacional de Colombia",
        text: "Web programming with PHP and MySQL",
        footer: "50 Hours, July 2010",
      },
      {
        title: "Institución Educativa Concejo de Medellín",
        text: "Middle Technical in Multimedia production and Software Design",
        footer: "280 Hours, December 2007",
      },
    ],
  },
  {
    title: "Seminars",
    items: [
      {
        title: "Agiles.org",
        text: "VII Latin American Workshops on Agile Methodologies",
        footer: "24 Hours, October 2014",
      },
      {
        title: "Campus Party Colombia",
        text: [
          ["Campus Party 7 Colombia", "300 Hours, June 2014"],
          ["Campus Party 6 Colombia", "250 Hours, October 2013"],
          ["Campus Party 4 Colombia", "521 Hours, July 2011"],
        ],
      },
      {
        title: "Google",
        text: "Google Developer Bus Bogota",
        footer: "36 Hours, November 2013",
      },
    ],
  },
];
