// utils/data.js
const englishContent = {
  whatsapp: {
    link: "https://api.whatsapp.com/send?phone=5511932888434&text=Hello!%20Lucas,%20I%27m%20interested%20in%20having%20a%20website%20or%20app.%20Can%20you%20help%20me%20with%20that%3F",
    // link: "https://discord.gg/S52ujcf7",
    header: "Quinn.dev",
    description: "Request a quote on whatsapp",
  },
  navbar: {
    home: `Home`,
    about: `About`,
    services: `Services`,
    projects: `Projects`,
    testimonials: `Testimonials`,
    contact: `Contact`,
    languageButton: `English`,
  },
  hero: {
    title: `Full Stack Developer`,
    description: `Have you thought about a website, bot or application? Here you find the solution!`,
    techStack: `Tech Stack`,
    languages: `Languages`,
  },
  about: {
    title: "About me",
    title2: `Full Stack Developer
        based in Sao Paulo, Brazil 📍`,
    description1: `Hey, my name is Lucas(Love Quinn), and I'm a Full Stack Developer.
        My passion is to create and develop a clean Websites , Bots and Apps for my users, in
        order to help them in their daily life with technology, I also
        have a `,
    spanContent: `Youtube Channel`,
    description2: ` where I like to share my knoledge with the community.`,
    description3: `My main stack currently is React/Vite in combination with Tailwind CSS and TypeScript.`,
  },
  services: {
    mainText: "Services",
    highlightText: "What can I create for you?",
    cards: [
      {
        title: "Bots",
        icon: "Bot",
        classBgColor: "bots",
        content: [
          {
            title: "✅ Bots for Discord & Telegram",
            description:
              "Moderation, custom commands, API integration, and more.",
          },
          {
            title: "✅ Automation & RPA",
            description:
              "Automate repetitive tasks and gain productivity.",
          },
          {
            title: "✅ Price Alerts & Queries",
            description:
              "Monitoring of values ​​and notifications in real time.",
          },
          {
            title: "✅ Scraping & Data Extraction",
            description: "Capture important information from the web automatically.",
          },
        ],
      },
      {
        title: "Websites",
        icon: "Websites",
        classBgColor: "websites",
        content: [
          {
            title: "✅ Modern and personalized design",
            description:
              "Exclusive layouts that matches both beauty and usability.",
          },
          {
            title: "✅ Responsive Websites",
            description:
              "Adapted for desktop, tablet and mobile.",
          },
          {
            title: "✅ Optimized Landing Pages",
            description:
              "Higher conversions for your business.",
          },
          {
            title: "✅ E-commerces & Blogs",
            description: "Complete solutions for stores and content creators.",
          },
        ],
      },
      {
        title: "Android Apps",
        icon: "Apps",
        classBgColor: "apps",
        content: [
          {
            title: "✅ Modern and personalized design",
            description:
              "Exclusive layouts that matches both beauty and usability for your app.",
          },
          {
            title: "✅ Business and Commercial Apps",
            description:
              "Customer management, orders, schedule and more.",
          },
          {
            title: "✅ Integration with APIs and Databases",
            description:
              "Comunicação eficiente com sistemas externos.",
          },
        ],
      },
    ],

  },
  portfolio: {
    title: `Portfolio`,
    highlight: `Each project is a different work`,
  },
  contact: {
    title: "Contact",
    highlight: "Don't be shy! Hit me up!",
    button1Title: "Location",
    button1Description: "Sao Paulo, Brazil",
    button2Title: "Email",
    button2Description: "lovequinn.desenvolvimento@gmail.com",
    emailLink: "mailto:lovequinn.desenvolvimento@gmail.com",
  },
  testimonials: [
    {
      title: "Testimonials",
      avatar: "/images/carol_avatar.png",
      name: "Carolina Cruz",
      content:
        "Web developer with several quality projects, he helped me a lot with his skills, knowledge and experience in software development",
    },
    {
      title: "Testimonials",
      avatar: "/images/cherry.jpeg",
      name: "Jaianne Farias",
      content:
        "Lucas was fundamental to the development of projects with excellence, always demonstrating commitment and proactivity.",
    },
    {
      title: "Highly Professional",
      avatar: "/images/marcilio.jpeg",
      name: "Gabriel Marcílio",
      content:
        "He's developed robust and efficient solutions, always with a keen eye for detail and deadlines. In addition to his technical skills, Lucas is also great at collaborating and sharing knowledge.",
    },
  ],
  footer: {
    copyrightMessage: "Copyright © 2024. All rights are reserved",
  },
  socialMedia: {
    linkedin: `https://www.linkedin.com/in/love-quinn-dev`,
    youtube: `https://www.youtube.com/channel/UCWY_AGdSl6HCDUHxbNR0fgg`,
    github: `https://github.com/love-quinn`,
  },
};

const portugueseContent = {
  whatsapp: {
    link: "https://api.whatsapp.com/send?phone=5511932888434&text=Oi,%20Lucas!%20Tenho%20interesse%20em%20ter%20meu%20site%20ou%20aplicativo,%20pode%20me%20ajudar?",
    // link: "https://discord.gg/S52ujcf7",
    header: "Quinn.dev",
    description: "Solicite um orçamento no Whatsapp",
  },
  navbar: {
    home: `Início`,
    about: `Sobre`,
    services: `Serviços`,
    projects: `Projetos`,
    testimonials: `Depoimentos`,
    contact: `Contato`,
    languageButton: `Português`,
  },
  hero: {
    title: `Desenvolvedor Full Stack`,
    description: `Pensou em um site, bot ou aplicativo? Aqui você encontra a solução!`,
    techStack: `Tech Stack`,
    languages: `Idiomas`,
  },
  about: {
    title: `Sobre`,
    title2: `Desenvolvedor Full Stack
        situado em São Paulo, Brasil 📍`,
    description1: `Olá, meu nome é Lucas(Love Quinn) e sou um Desenvolvedor Full Stack.
        Minha paixão é criar e desenvolver Aplicativos, Bots e Websites com design limpos e modernos para meus usuários
        para ajudá-los no dia a dia com a tecnologia, também
        tenho um `,
    spanContent: `Canal no Youtube`,
    description2: ` onde gosto de compartilhar meus conhecimentos com a comunidade.`,
    description3: `Minha stack principal atualmente é React/Vite em conjunto com Tailwind CSS e TypeScript.`,
  },
  services: {
    mainText: "Serviços",
    highlightText: "O que posso criar para você?",
    cards: [{
    title: "Bots",
    icon: "Bot",
    classBgColor: "bots",
    content: [
      {
        title: "✅ Bots para Discord & Telegram",
        description:
          "Moderação, comandos personalizados, integração com APIs e mais.",
      },
      {
        title: "✅ Automação & RPA",
        description:
          "Automatize tarefas repetitivas e ganhe produtividade.",
      },
      {
        title: "✅ Consultas & Alertas de Preço",
        description:
          "Monitoramento de valores e notificações em tempo real.",
      },
      {
        title: "✅ Scraping & Extração de Dados",
        description: "Capture informações importantes da web automaticamente.",
      },
    ]},
    {
      title: "Websites",
      icon: "Websites",
      classBgColor: "websites",
      content: [
        {
          title: "✅ Design Moderno & Personalizado",
          description:
            "Layouts exclusivos que combinam beleza e usabilidade.",
        },
        {
          title: "✅ Sites Responsivos",
          description:
            "Adaptados para desktop, tablet e celular.",
        },
        {
          title: "✅ Landing Pages Otimizadas",
          description:
            "Conversões mais altas para o seu negócio.",
        },
        { 
          title: "✅ E-commerces & Blogs",
          description: "Soluções completas para lojas e criadores de conteúdo.",
        },
      ]},
    {
      title: "Aplicativos Android",
      icon: "Apps",
      classBgColor: "apps",
      content: [
        {
          title: "✅ Design Moderno & Personalizado",
          description:
            "Layouts exclusivos que combinam beleza e usabilidade para o seu app.",
        },
        {
          title: "✅ Apps Empresariais & Comerciais",
          description:
            "Gerenciamento de clientes, pedidos, agenda e mais.",
        },
        {
          title: "✅ Integração com APIs & Banco de Dados",
          description:
            "Comunicação eficiente com sistemas externos.",
        },
      ]},
  ]
  },
  portfolio: {
    title: `Portifólio`,
    highlight: `Cada projeto é um trabalho diferente`,
  },
  contact: {
    title: "Contato",
    highlight: "Fique a vontade! Entre em contato",
    button1Title: "Localização",
    button1Description: "São Paulo, Brasil",
    button2Title: "Email",
    button2Description: "lovequinn.desenvolvimento@gmail.com",
    emailLink: "mailto:lovequinn.desenvolvimento@gmail.com",
  },
  testimonials: [
    {
      title: "Depoimentos",
      avatar: "/images/carol_avatar.png",
      name: "Carolina Cruz",
      content:
        "Desenvolvedor web com vários projetos de qualidade, me ajudou bastante com suas habilidades, conhecimentos e experiências em desenvolvimento de software",
    },
    {
      title: "Depoimentos",
      avatar: "/images/cherry.jpeg",
      name: "Jaianne Farias",
      content:
        "Lucas foi fundamental para o desenvolvimento de projetos com excelência, sempre demonstrando comprometimento e proatividade.",
    },
    {
      title: "Depoimentos",
      avatar: "/images/marcilio.jpeg",
      name: "Gabriel Marcílio",
      content:
        "Desenvolveu soluções robustas e eficientes, sempre com um olhar atento para detalhes e prazos. Além das habilidades técnicas, Lucas também é ótimo em colaborar e compartilhar conhecimentos.",
    },
  ],
  footer: {
    copyrightMessage: "Copyright © 2024. Todos os direitos reservados",
  },
  socialMedia: {
    linkedin: `https://www.linkedin.com/in/love-quinn-dev`,
    youtube: `https://www.youtube.com/channel/UCWY_AGdSl6HCDUHxbNR0fgg`,
    github: `https://github.com/love-quinn`,
  },
};

export { englishContent, portugueseContent };
