/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "TK",
  title: "Hello world, C'est Tejeddinne",
  subTitle: emoji(
"Je suis l'étudiant-informaticien de l'IUT Robert Schuman, jonglant entre Laravel, C, et Java. Imaginez un magicien du code, transformant des lignes en tours de magie numérique. Avec les design patterns comme mes astuces secrètes, chaque projet devient une petite aventure amusante. Un café, un clavier, et hop, je crée de la magie informatique !"  ),
  resumeLink:
    "https://drive.google.com/file/d/1nPwm8HqG_KSdmBm41yYV7UCCk9N_k9L4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tejdin",
  linkedin: "https://www.linkedin.com/in/tejeddinne-khenissi/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR LOGICIEL PASSIONNÉ DÉSIREUX DE SE PLONGER DANS LE DÉVELOPPEMENT WEB ET MOBILE",
  skills: [
    "⚡ Développer des interfaces web interactives et conviviales utilisant les technologies web modernes",
    "⚡ Construire et maintenir des applications mobiles avec un accent sur la plateforme Android",
    "⚡ Intégration de services tiers et d'APIs pour améliorer la fonctionnalité des applications"
  ],
  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Mettre à false pour cacher cette section, par défaut à true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Universitaire de Technologie Robert Schuman",
      logo: require("./assets/images/iutrs2.jpg"),
      subHeader: "BUT INFORMATIQUE ",
      duration: "September 2023 - juin 2024",
      desc: "RÉALISATION D'APPLICATIONS : CONCEPTION,\n" +
          "DÉVELOPPEMENT, VALIDATION (2ÈME ANNÉE)",
      descBullets: [
        "Projet réalisés en PHP, Node.js , React ET JAVA",
        "introduction en developpement mobile",
        "renforcement des compétences en SQL, C, C++ et JAVA",
      ]
    },
    {
      schoolName: "Institut Universitaire de Technologie Robert Schuman",
      logo: require("./assets/images/iutrs2.jpg"),
      subHeader: "BUT INFORMATIQUE ",
      duration: "September 2022 - juin 2023",
      desc: "TRONC COMMUN (1ÈRE ANNÉE)",
      descBullets: [
        "Étude des mathématiques et de l'algorithmique.\n",
        "Apprentissage des langages de programmation (C, C++, JAVA, SQL, HTML, CSS).\n",
        "Mise en pratique des bases de données SQL.\n",
        "Initiation aux concepts des réseaux et des systèmes d'exploitation.\n",
        "Découverte de la programmation web.\n",
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Activé pour afficher la section de compétence
  experience: [
    {
      Stack: "Développement Frontend / Design", // Technologie ou pile technologique avec expérience
      progressPercentage: "75%" // Compétence relative en pourcentage
    },
    {
      Stack: "Développement Backend",
      progressPercentage: "78%"
    },
    {
      Stack: "Programmation",
      progressPercentage: "80%" // Basé sur l'expérience en Java, Android, etc.
    }
  ],
  displayCodersrank: false // Défini sur true pour afficher la section des badges codersrank, par défaut à false
};

// Work experience section

const workExperiences = {
  display: true, // Défini sur true pour afficher la section des expériences professionnelles
  experience: [
    {
      role: "Stagiaire en Développement Web",
      company: "AKR-SMART",
      companylogo:require("./assets/images/entreprise.png"), // Remplacer par le chemin réel du logo si disponible
      desc: "Création d'un site web from scratch, amélioration de l'interface utilisateur et intégration avec des services backend via API.",
      descBullets: [
        "Développement utilisant Node.js et React.js",
        "Conception et implémentation d'une interface utilisateur moderne et réactive"
      ]
    }
    // Ajouter d'autres expériences ici si disponibles
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "QUELQUES PROJETS SIGNIFICATIFS AUXQUELS J'AI CONTRIBUÉ",
  projects: [
    {
      image: require("./assets/images/laravel.jpg"), // Remplacer par le chemin réel de l'image du projet si disponible
      projectName: "MyMémo",
      projectDesc: "Développement d'un site web de gestion de mémos utilisant PHP et Laravel, permettant la mise en ligne de mémos.",
      footerLink: [
        {
          name: "Visiter le dépot github",
          url: "https://github.com/tejdin/MemoProject" // Remplacer par l'URL du projet si disponible
        }
        // Ajouter des boutons supplémentaires si nécessaire
      ]
    },
    {
      image: require("./assets/images/Plantuml_Logo.svg.png"), // Remplacer par le chemin réel de l'image du projet si disponible
      projectName: "Générateur de Graphes UML",
      projectDesc: "Création d'un outil automatique pour générer des diagrammes de classes UML en Java, simplifiant la visualisation et la compréhension des structures de code.",
      footerLink: [
        {
          name: "Visiter le dépot github",
          url: "https://github.com/tejdin/UmlGen" // Remplacer par l'URL du projet ou un lien vers plus d'informations si disponible
        }
      ]
    }
  ],
  display: true // Définir sur false pour cacher cette section, par défaut sur true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contactez-moi ☎️",
  subtitle: "Vous souhaitez discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "", // Tejeddinne n'a pas fourni de numéro de téléphone dans son CV, donc cela est laissé vide
  email_address: "tejeddinne.khenissi@etu.unistra.fr"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
