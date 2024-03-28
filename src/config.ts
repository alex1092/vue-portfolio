import portfolioImage from "./assets/images/portfolio-image.png"
import ethereumHomePageImage from "./assets/images/Home-ethereum-org.png"
import wisesheetsImage from "./assets/images/wisesheets-home-page.png"
import ladbrokesMockup from './assets/images/ladbrokes-mockup-mobile.png'
import nedsMockup from './assets/images/neds-mobile-mockup.png'
export const config = {
  homePage: {
    title: "Welcome to my portfolio",
    subtitle: "My name is Alex & I am a full stack developer"
  },

  socials: {
    github: "https://github.com/alex1092",
    linkedin: "https://www.linkedin.com/in/alex-little-5772b51a0/",
    twitter: "https://twitter.com/alittle1092"
  },
  avatar: "./assets/images/avatar.jpeg",

  portfolio: {
    projects: [
      {
        title: "This Portfolio",
        siteUrl: "https://alex-portfolio-vue.netlify.app/",
        description: "Built with Vue3",
        longDescription: "I built this portfolio using vue 3, just for fun and to learn vue",
        image: portfolioImage,
        gitHubUrl: "https://github.com/alex1092/vue-portfolio",
        alt: "This Portfolio"
      },
      {
        title: "Ladbrokes Australia",
        siteUrl: "https://apps.apple.com/au/app/ladbrokes-online-betting/id710375963",
        description: "Native Core Develoer",
        longDescription:
          "Ladbrokes is one of Australia's largest betting platforms, I spearheaded the development and creation of their design system, essentially creating a white label betting solution and making it possible for us to create multiple brands under one codebase",
        image: ladbrokesMockup,
        alt: "Ladbrokes Australia"
      },
      {
        title: "Neds",
        siteUrl: "https://apps.apple.com/au/app/neds-online-betting/id1263814273",
        description: "Native Core Develoer",
        longDescription:
          "Neds is a mobile app that allows users to bet on their favourite sports. I worked on the core team and had major influence over the app and its future",
        image: nedsMockup,
        alt: "Neds"
      },
      {
        title: "Tab New Zealand",
        siteUrl: "https://www.tab.co.nz/",
        description: "Native Core Develoer",
        longDescription:
          "I lead the merger of Tab New Zealand into our codebase and managed to create a white label betting solution for my company",
        image:
          "https://images.unsplash.com/photo-1591462906397-6d3b692f92a5?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Tab New Zealand"
      },
      {
        title: "Ethereum Org",
        siteUrl: "https://ethereum.org/en/",
        gitHubUrl: "https://github.com/ethereum/ethereum-org-website",
        description: "Open Source Contributor",
        longDescription: `As an Open Source Contributor to the Ethereum website, I had the privilege of working on the front-end codebase. My contributions involved implementing cutting-edge features, resolving complex bugs, and spearheading the migration to the powerful Chakra UI library. This migration not only enhanced the website's performance and user experience but also streamlined the development workflow.\n Throughout my involvement, I demonstrated a deep understanding of React, JavaScript, and modern web development practices, ensuring the delivery of high-quality, maintainable code that adhered to industry best practices.`,
        image: ethereumHomePageImage,
        alt: "Ethereum Org"
      },
      {
        title: "Wise sheets",
        siteUrl: "https://www.wisesheets.io/",
        description: "Full stack developer",
        longDescription:
          "Wisesheets is a powerful spreadsheet add-on that provides instant access to comprehensive financial data and stock metrics across global exchanges. It enables custom stock screening, model population with real-time data, and effortless comparison of thousands of stocks, streamlining financial analysis for investors within their familiar spreadsheet environment.",
        image: wisesheetsImage,
        alt: "Wise sheets"
      }
    ]
  }
}
