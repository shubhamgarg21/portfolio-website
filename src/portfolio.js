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
  username: "Shubham Garg",
  title: "Hi, I'm Shubham",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with expertise in Generative AI, Backend Engineering, and Web Applications. Currently working at Adobe, building innovative features for Market-Leading Products."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tCmPFUq5_XVNoVkqbgvN-Qbx0CzJLmJC/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shubhamgarg21",
  linkedin: "https://www.linkedin.com/in/shubhamgarg-se",
  gmail: "shubham.garg21@outlook.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE SOFTWARE ENGINEER PASSIONATE ABOUT BACKEND ENGINEERING AND GENERATIVE AI",
  skills: [
    emoji("⚡ Develop cutting-edge Generative AI features for Adobe Illustrator"),
    emoji("⚡ Build and optimize Vector Graphics applications for web platforms"),
    emoji("⚡ Create innovative solutions for complex software engineering challenges")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JS/TS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "WebAssembly",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology, Kurukshetra",
      logo: require("./assets/images/nitkkr.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "July 2012 - May 2016",
      desc: "Graduated with First Division with Honours. Active member and leader in technical clubs.",
      descBullets: [
        "President of Embedded Systems & Robotics Club",
        "Co-Convener at TechSpardha'16, National Level Technical Fest",
        "6th rank in Freescale Cup 2015, India",
        "1st rank in Texas Instruments India Analog Maker Competition 2014",
        "Awarded Central Sector Scheme of Scholarship (CSSS) 2012"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Generative AI & Computer Vision & ML",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "System Design & Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Technologies",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Computer Scientist - II",
      company: "Adobe Inc.",
      companylogo: require("./assets/images/adobe.png"),
      date: "Oct 2021 – Present",
      desc: "Leading Generative AI innovations in Adobe Illustrator",
      descBullets: [
        "Delivered 'Generative Recolor' & 'Text2Vector' in Adobe Illustrator, showcased at Adobe MAX 2023",
        "Created Text2Icon Generative AI model for enhanced icon generation with strokes and fills",
        "Led successful public beta release of Illustrator on Web with key features like Type On Path and Live Blends"
      ]
    },
    {
      role: "R&D Engineer, Sr I",
      company: "Synopsys Inc.",
      companylogo: require("./assets/images/synopsys.png"),
      date: "May 2019 – Oct 2021",
      desc: "Led projects in DFT IP development and optimization",
      descBullets: [
        "Designed USB feature using OOAD with Factory & Singleton Patterns",
        "Optimized Testbench size by 45% & enhanced debug capabilities for complex DFT IPs",
        "Led team development through training and mentorship"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "HCL Technologies Ltd.",
      companylogo: require("./assets/images/hcl.jpg"),
      date: "July 2017 – May 2019",
      desc: "Led development of EXACTO Framework",
      descBullets: [
        "Developed Text Localization algorithm with ~95% accuracy using ResNet architecture",
        "Led end-to-end development of the EXACTO Cheque solution",
        "Designed cloud APIs and Android app for EXACTO service on Azure",
      ]
    },
    {
      role: "Embedded Software Engineer",
      company: "Exicom Tele-Systems Ltd.",
      companylogo: require("./assets/images/exicom.png"),
      date: "July 2016 – July 2017",
      desc: "Led development of WCBMS product",
      descBullets: [
        "Reduced production cost by 30% through hardware redesign",
        "Decreased memory usage by 88% through algorithmic improvements",
        "Implemented USB 2.0, WiFi capabilities, and Android app integration"
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Awards, and Certifications that showcase my journey",
  achievementsCards: [
    {
      title: "Adobe Special Contribution Award",
      subtitle: "Awarded for successful delivery of Generative AI features in Adobe Illustrator",
      image: require("./assets/images/adobe.png"),
      footerLink: [
        {
          name: "Generative Recolor Demo",
          url: "https://youtu.be/6anR6nFUafU"
        },
        {
          name: "Text2Vector Demo",
          url: "https://youtu.be/1tbrJNP5Cjk?t=3397"
        }
      ]
    },
    {
      title: "Adobe Spot Bonus",
      subtitle: "Awarded for implementing complex technologies in Illustrator on the web",
      image: require("./assets/images/adobe.png"),
      footerLink: [
        {
          name: "Illustrator on Web",
          url: "https://illustrator.adobe.com/"
        }
      ]
    },
    {
      title: "Adobe Certified Professional",
      subtitle: "ACP in Graphic Design & Illustration",
      image: require("./assets/images/adobe.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/go/32nG0dNJ"
        }
      ]
    },
    {
      title: "Software Security Practitioner",
      subtitle: "Defending C++ - Security Compass",
      image: require("./assets/images/security.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/2b8b5910-0132-4311-a127-d368871f62b6/public_url"
        }
      ]
    },
    {
      title: "C++ Programming Professional Certificate",
      subtitle: "OpenEDG C++ Institute",
      image: require("./assets/images/cpp.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/8d4f020f0204bc8f2d5e5c5ee6231a30f09032f013460f3995bff8b2869b2d5f"
        }
      ]
    },
    {
      title: "Python Programming Professional Certificate",
      subtitle: "OpenEDG Python Institute",
      image: require("./assets/images/python.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/1e5ffc710e4d53436d0360e73afb18f914e6c4bff0d92a6c0f3dd61ebd587b33"
        }
      ]
    },
    {
      title: "JavaScript Foundations Professional Certificate",
      subtitle: "Mozilla.org",
      image: require("./assets/images/mozilla.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/a6028a8159a249f7f5be05edda411609e24780d7c173e7d4dbd1b3b5fee60da1"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI",
      image: require("./assets/images/deeplearning.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/AJVTB5DTK9KE"
        }
      ]
    },
    {
      title: "Cloud Computing Concepts",
      subtitle: "University of Illinois",
      image: require("./assets/images/Illinois.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/7UHX7N4YXQG9"
        }
      ]
    },
    {
      title: "Vector Databases Professional Certificate",
      subtitle: "Weaviate",
      image: require("./assets/images/weaviate.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/f37eb5206b25a78ba00ded153f13ef0859d58905e9ca063abd405a8623734393"
        }
      ]
    },
    {
      title: "Docker Foundations Professional Certificate",
      subtitle: "Docker Inc.",
      image: require("./assets/images/docker.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/6009901304aba41d1348ec87ee5900911c83a3f8bf83fbf086085c391ef5878f"
        }
      ]
    }
  ],
  display: true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "shubham.garg21@gmail.com",
  bio : "Computer Scientist @Adobe Inc. | Mentor",
  location: "Noida, Uttar Pradesh, India",
  profilepic: require("./assets/images/me.jpeg"),
  name: "Shubham Garg",
  hireable: "Yes" // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
