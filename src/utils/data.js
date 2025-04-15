// src/utils/dataContent.js
const englishData = [
  {
    projectName: "Moviefy",
    projectImgPath: "/images/moviefy_ipad_pro_fullsize.png",
    projectImgPathSmall: "/images/moviefy_iphone_14_max.png",
    projectDescription:
      "Discover the daily-most popular movies on earth, with a beautiful responsive and modern experience, the movie list's updated hourly.",
    githubProjectUrl: `https://github.com/love-quinn/Moviefy`,
    githubButtonName: `Code`,
    projectLiveDemoUrl: {
      buttonName: "Live demo",
      projectButtonFaClass: "fa-regular fa-share-from-square",
      url: "https://love-quinn.github.io/moviefy/",
    },
    stack: ["React", "Bootstrap 5"],
    isSlideshow: false,
  },
  {
    projectName: "Nova Futura",
    projectImgPath: "/images/futura_nest_hub_max.png",
    projectImgPathSmall: "/images/futura_ipad_mini.png",
    projectDescription:
      "Nova Futura is a modern Brazilian homebroker where people can find different options to invest their money.",
    projectLiveDemoUrl: {
      buttonName: "Company website",
      projectButtonFaClass: "fa-regular fa-share-from-square",
      url: "https://www.novafutura.com.br/",
    },
    stack: ["React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    isSlideshow: false,
  },
  {
    projectName: "Gesture Volume Controller",
    projectImgPath: "/images/gesture-volume-control.jpg",
    projectDescription:
      "This project allows you to control your system's volume using hand gestures with webcam.",
    githubProjectUrl: `https://github.com/love-quinn/Moviefy`,
    githubButtonName: `Code`,
    projectLiveDemoUrl: {
      buttonName: "Live demo",
      projectButtonFaClass: "fa-brands fa-youtube",
      url: "https://www.youtube.com/shorts/qaIhsLTwghs",
    },

    stack: ["Computer Vision", "Python", "OpenCv"],
    isSlideshow: true,
    isSlideshowActive: false,
  },
  
];

const portugueseData = [
  {
    projectName: "Moviefy",
    projectImgPath: "/images/moviefy_ipad_pro_fullsize.png",
    projectImgPathSmall: "/images/moviefy_iphone_14_max.png",
    projectDescription:
      "Descubra os filmes mais populares do mundo diariamente, com uma experiência moderna e responsiva, a lista de filmes é atualizada a cada hora.",
    githubProjectUrl: `https://github.com/love-quinn/Moviefy`,
    githubButtonName: `Código`,
    projectLiveDemoUrl: {
      buttonName: "Site",
      projectButtonFaClass: "fa-regular fa-share-from-square",
      url: "https://love-quinn.github.io/moviefy/",
    },
    stack: ["React", "Bootstrap 5"],
  },
  {
    projectName: "Nova Futura",
    projectImgPath: "/images/futura_nest_hub_max.png",
    projectImgPathSmall: "/images/futura_ipad_mini.png",
    projectDescription:
      "Nova Futura é uma moderna corretora brasileira onde as pessoas podem encontrar diferentes opções para investir seu dinheiro.",
    projectLiveDemoUrl: {
      buttonName: "Site",
      projectButtonFaClass: "fa-regular fa-share-from-square",
      url: "https://www.novafutura.com.br/",
    },
    stack: ["React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
  },
  {
    projectName: "Controlador de Volume por Gestos",
    projectImgPath: "/images/gesture-volume-control.jpg",
    projectImgPathSmall: "/images/gesture-volume-control.jpg",
    projectDescription:
      "Este projeto permite controlar o volume do sistema usando sua webcam.",
    githubProjectUrl: `https://github.com/love-quinn/Moviefy`,
    githubButtonName: `Code`,
    projectLiveDemoUrl: {
      buttonName: "Demo",
      projectButtonFaClass: "fa-brands fa-youtube",
      url: "https://www.youtube.com/shorts/bqE3GCK5QGY",
    },
    stack: ["Visão Computacional", "Python", "OpenCv"],
    isSlideshow: false,
  },

];

export { englishData, portugueseData };
