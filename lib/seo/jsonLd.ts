import { siteConfig, siteUrl } from "@/lib/siteConfig";

/**
 * Returns EducationalOrganization schema.org structured data
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.shortName, "MathBridge Global"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo,
      width: "512",
      height: "512",
    },
    image: siteConfig.ogImage,
    description: siteConfig.defaultDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.tiktokUrl,
      siteConfig.telegramUrl,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: ["NG", "GB", "US", "CA", "GH"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MathBridge Academic Tutoring Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "GCSE & IGCSE Tutoring (Maths, Sciences & English)",
            description: "Personalized 1-on-1 tutoring preparing students for top grades in GCSE and IGCSE examinations.",
            provider: {
              "@type": "EducationalOrganization",
              name: siteConfig.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "WAEC & NECO Preparation Program",
            description: "Structured live classes and past question mastery for senior secondary school WAEC and NECO candidates.",
            provider: {
              "@type": "EducationalOrganization",
              name: siteConfig.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "JAMB 2027 Comprehensive Tutoring & Free Prep Group",
            description: "Step-by-step guidance, weekly mock tests, and live problem-solving sessions for JAMB candidates.",
            provider: {
              "@type": "EducationalOrganization",
              name: siteConfig.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Digital SAT Preparation",
            description: "Targeted strategies and practice modules to master the Digital SAT math and reading sections.",
            provider: {
              "@type": "EducationalOrganization",
              name: siteConfig.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "A-Level Tutoring (Mathematics, Physics, Chemistry, Biology)",
            description: "Rigorous concept derivation and exam-board specific mastery for advanced level students.",
            provider: {
              "@type": "EducationalOrganization",
              name: siteConfig.name,
            },
          },
        },
      ],
    },
  };
}

/**
 * Returns WebSite schema.org structured data
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Returns FAQPage schema.org structured data matching MathBridge's official FAQs
 */
export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What subjects does MathBridge tutor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer expert 1 on 1 tutoring in Mathematics, English Language, Physics, Biology, and Chemistry across British, Nigerian, and American curricula (WAEC, GCSE, IGCSE, A-Levels, JAMB, and SAT). We also provide expert instruction in other subjects upon request.",
        },
      },
      {
        "@type": "Question",
        name: "How does a typical session work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessions are held live via our interactive online whiteboard. Your tutor reviews your goals, walks through curriculum concepts with step by step worked examples, and guides you through practice problems with real time feedback, ensuring every minute is active and focused.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with MathBridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is straightforward. Simply reach out via our contact page. We begin with a quick diagnostic session to understand the student's current proficiency, targets, and learning style. Then we pair you with the ideal tutor and construct a personalized study roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch tutors if it is not a good fit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Student confidence and comfort come first. If you ever feel your assigned tutor is not an optimal match, our academic coordination team will arrange a smooth, seamless transition to another qualified specialist at no additional charge.",
        },
      },
      {
        "@type": "Question",
        name: "What makes MathBridge different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our educators are rigorously vetted (top 5% acceptance rate), every student receives an individualized learning plan rather than a generic lesson, and we provide transparent progress reporting to parents after sessions. We combine academic rigor with supportive mentorship.",
        },
      },
    ],
  };
}

/**
 * Returns BreadcrumbList schema.org structured data
 */
export function getBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${siteUrl}${crumb.item}`,
    })),
  };
}
