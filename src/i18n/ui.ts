// ---------------------------------------------------------------------------
// All site copy, in every language, lives here.
//
// To change text on the site, edit it in this file - not in the .astro
// components. The components only decide layout and styling.
//
// RULE: `de` must have exactly the same shape as `en` - the same keys, and
// arrays of the same length (same number of bio paragraphs, jobs, bullet
// points, education entries). The check at the bottom of this file enforces
// that during `npm run build`, so a forgotten translation fails the build
// instead of silently rendering "undefined" on the live site.
//
// Things deliberately NOT translated: the name "Bhavya Jhaveri", company and
// university names, degree/module titles, and the skill tags in Skills.astro
// (PyTorch, Docker, FastAPI, ...) - those are proper nouns and stay as they
// are. Technical terms (Machine Learning, Deep Learning, Generative AI, RAG,
// Retrieval, Chunking) stay in English in the German copy too, the way German
// tech and academic job ads write them.
// ---------------------------------------------------------------------------

export const defaultLang = 'en';

export const languageNames = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const ui = {
  en: {
    meta: {
      title: 'Bhavya Jhaveri — AI & Robotics',
      description:
        'Portfolio of Bhavya Rajiv Jhaveri, Masters student in AI and Robotics at Hochschule Hof, Germany.',
    },

    nav: {
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      blog: 'Blog',
      contact: 'Contact',
      openMenu: 'Open menu',
    },

    theme: {
      toggle: 'Toggle dark/light theme',
    },

    language: {
      switch: 'Switch language',
    },

    hero: {
      greeting: 'Hi!',
      iAm: 'I am',
      photoAlt: 'Bhavya Jhaveri',
      bio: [
        'I like to solve problems in general.',
        "I graduated with bachelors in Mechanical Engineering, in 2022. Over the years of working with Dassault Systems' SOLIDWORKS in the CAD software industry, I developed a keen interest in Machine Learning and in 2025 enrolled myself for a Masters in AI & Robotics @University of Applied Sciences Hof, Germany.",
        'I have been fortunate to study and learn about Deep learning, Machine Learning, Gen AI, Advance AI Architectures, Robotic fundamentals and Predictive Maintenance during the course of my study at the university.',
        "Outside of coding, I'm a SOLIDWORKS Champion with a passion for CAD design and 3D printing.",
      ],
    },

    experience: {
      heading: 'Experience',
      sub: "Where I've worked and what I built there.",
      jobs: [
        {
          company: 'eMoveUs',
          role: 'AI / ML Engineer',
          points: [
            'Contributed to an enterprise RAG system; handled document preprocessing and chunking with Docling (hybrid and hierarchical chunking) as well as LangChain text splitters; built retrieval strategies with the LangChain Ensemble Retriever (hybrid search) over Milvus and FAISS as vector databases.',
            'Developed programs with a focus on object-oriented programming (OOP) and modern software design patterns.',
            'Implemented and integrated APIs, set up MCP servers for system communication, and researched LiteLLM as an LLM gateway/proxy solution.',
            'Built and deployed monitoring for LLM workflows with MLflow to track experiments and model versions in production.',
          ],
        },
        {
          company: 'Dassault Systèmes',
          role: 'Technical Support Engineer',
          points: [
            'Provided technical support for the 3DEXPERIENCE cloud platform to 100+ global customers and partners on issues involving IT networks, VPN, and cloud migrations; developed solutions to increase value and customer satisfaction.',
            'Performed basic data analysis with Excel and Python to identify and better understand recurring customer questions.',
            'Supported bug tracking to detect defects, improve the UI, and simplify customer processes.',
          ],
        },
      ],
    },

    education: {
      heading: 'Education',
      sub: 'Academic background.',
      courseworkLabel: 'Relevant coursework:',
      entries: [
        {
          degree: 'M.Sc. Applied AI & Robotics',
          dates: 'March 2025 – March 2027',
          institution: 'Hochschule Hof · Germany · Grade 2.3',
          coursework:
            'Applied Deep Learning, Generative AI, Data Mining and Machine Learning, Predictive Maintenance',
        },
        {
          degree: 'B.Tech. Mechanical Engineering',
          dates: 'August 2019 – August 2022',
          institution: 'K. J. Somaiya College of Engineering (KJSCE) · India · CGPA 9.0',
          coursework: null,
        },
      ],
    },

    skills: {
      heading: 'Skills',
      sub: 'Technologies and tools I work with.',
      // Keys match the `id` of each group in Skills.astro. The tags themselves
      // are product names and are not translated.
      categories: {
        ai: 'AI / ML',
        languages: 'Languages',
        tools: 'Tools & Infra',
        llm: 'LLM Platforms',
      },
    },

    blog: {
      heading: 'Blog',
      sub: "Thoughts on AI, experiments, and things I've learned.",
      empty: 'No posts yet — check back soon.',
      // Shown under the subheading only when set. Used on the German page to
      // say that the posts themselves are in English.
      langNote: null as string | null,
      back: 'Back',
    },

    contact: {
      heading: 'Get in touch',
      sub: 'Open to collaborations, research opportunities, and internships.',
    },

    // NOTE: the Projects section (Projects.astro / ProjectCard.astro /
    // src/data/projects.ts) is currently commented out of Home.astro and the
    // navbar, so its copy is not translated. If it is ever switched back on,
    // add a `projects: { heading, sub }` block here in both languages and move
    // the titles/descriptions out of src/data/projects.ts.
  },

  de: {
    meta: {
      title: 'Bhavya Jhaveri — AI & Robotics',
      description:
        'Portfolio von Bhavya Rajiv Jhaveri, Masterstudent für AI und Robotics an der Hochschule Hof, Deutschland.',
    },

    nav: {
      // Short form in the navbar so the German labels still fit on one line;
      // the section heading below uses the full "Berufserfahrung".
      experience: 'Erfahrung',
      education: 'Ausbildung',
      skills: 'Kenntnisse',
      blog: 'Blog',
      contact: 'Kontakt',
      openMenu: 'Menü öffnen',
    },

    theme: {
      toggle: 'Zwischen hellem und dunklem Design wechseln',
    },

    language: {
      switch: 'Sprache wechseln',
    },

    hero: {
      greeting: 'Hallo!',
      iAm: 'Ich bin',
      photoAlt: 'Bhavya Jhaveri',
      bio: [
        'Ich löse gerne Probleme — ganz allgemein.',
        '2022 habe ich mein Bachelorstudium im Maschinenbau abgeschlossen. Während meiner Arbeit mit SOLIDWORKS von Dassault Systèmes in der CAD-Software-Branche entwickelte ich ein starkes Interesse an Machine Learning und begann 2025 einen Master in AI & Robotics an der Hochschule Hof, Deutschland.',
        'Während meines Studiums hatte ich die Möglichkeit, mich intensiv mit Deep Learning, Machine Learning, Generative AI, fortgeschrittenen AI-Architekturen, Grundlagen der Robotik und Predictive Maintenance zu beschäftigen.',
        'Neben dem Programmieren bin ich SOLIDWORKS Champion und begeistere mich für CAD-Konstruktion und 3D-Druck.',
      ],
    },

    experience: {
      heading: 'Berufserfahrung',
      sub: 'Wo ich gearbeitet habe und was ich dort gebaut habe.',
      jobs: [
        {
          company: 'eMoveUs',
          role: 'AI-/ML-Engineer',
          points: [
            'Mitarbeit an einem Enterprise-RAG-System; verantwortlich für Dokumenten-Preprocessing und Chunking mit Docling (hybrides und hierarchisches Chunking) sowie LangChain Text Splitters; Aufbau von Retrieval-Strategien mit dem LangChain Ensemble Retriever (Hybrid Search) über Milvus und FAISS als Vektordatenbanken.',
            'Entwicklung von Programmen mit Fokus auf objektorientierte Programmierung (OOP) und moderne Software-Design-Patterns.',
            'Implementierung und Integration von APIs, Einrichtung von MCP-Servern für die Systemkommunikation sowie Evaluierung von LiteLLM als LLM-Gateway- bzw. Proxy-Lösung.',
            'Aufbau und Deployment von Monitoring für LLM-Workflows mit MLflow, um Experimente und Modellversionen im Produktivbetrieb nachzuverfolgen.',
          ],
        },
        {
          company: 'Dassault Systèmes',
          role: 'Technical Support Engineer',
          points: [
            'Technischer Support für die 3DEXPERIENCE-Cloud-Plattform für über 100 Kunden und Partner weltweit zu Themen wie IT-Netzwerke, VPN und Cloud-Migrationen; Entwicklung von Lösungen zur Steigerung von Mehrwert und Kundenzufriedenheit.',
            'Grundlegende Datenanalysen mit Excel und Python, um wiederkehrende Kundenanfragen zu identifizieren und besser zu verstehen.',
            'Unterstützung beim Bug-Tracking, um Fehler zu erkennen, die UI zu verbessern und Kundenprozesse zu vereinfachen.',
          ],
        },
      ],
    },

    education: {
      heading: 'Ausbildung',
      sub: 'Akademischer Hintergrund.',
      courseworkLabel: 'Relevante Lehrveranstaltungen:',
      entries: [
        {
          // Official programme name - kept as it appears on the certificate.
          degree: 'M.Sc. Applied AI & Robotics',
          dates: 'März 2025 – März 2027',
          institution: 'Hochschule Hof · Deutschland · Note 2,3',
          coursework:
            'Applied Deep Learning, Generative AI, Data Mining and Machine Learning, Predictive Maintenance',
        },
        {
          degree: 'B.Tech. Maschinenbau',
          dates: 'August 2019 – August 2022',
          institution: 'K. J. Somaiya College of Engineering (KJSCE) · Indien · CGPA 9,0',
          coursework: null,
        },
      ],
    },

    skills: {
      heading: 'Kenntnisse',
      sub: 'Technologien und Tools, mit denen ich arbeite.',
      categories: {
        ai: 'AI / ML',
        languages: 'Sprachen',
        tools: 'Tools & Infrastruktur',
        llm: 'LLM-Plattformen',
      },
    },

    blog: {
      heading: 'Blog',
      sub: 'Gedanken zu AI, Experimente und Dinge, die ich gelernt habe.',
      empty: 'Noch keine Beiträge — schauen Sie bald wieder vorbei.',
      langNote: 'Die Beiträge sind auf Englisch verfasst.' as string | null,
      back: 'Zurück',
    },

    contact: {
      heading: 'Kontakt',
      sub: 'Offen für Kooperationen, Forschungsmöglichkeiten und Praktika.',
    },
  },
} as const;

export type Lang = keyof typeof ui;

export const languages = Object.keys(ui) as Lang[];

// ---------------------------------------------------------------------------
// Build-time safety net.
//
// There is no `astro check` / tsconfig in this project, so TypeScript types
// alone would not catch a missing translation - it would just render as
// "undefined". This runs when the module is first imported during the build
// and throws with the exact key path that is wrong.
// ---------------------------------------------------------------------------
function assertSameShape(reference: unknown, candidate: unknown, lang: string, path = '') {
  const where = path || '(root)';

  if (Array.isArray(reference)) {
    if (!Array.isArray(candidate)) {
      throw new Error(`[i18n] ${lang}: "${where}" should be an array.`);
    }
    if (reference.length !== candidate.length) {
      throw new Error(
        `[i18n] ${lang}: "${where}" has ${candidate.length} entries but en has ` +
          `${reference.length}. Both languages need the same number of items.`
      );
    }
    reference.forEach((item, i) => assertSameShape(item, candidate[i], lang, `${where}[${i}]`));
    return;
  }

  // `null` is a real value here (blog.langNote, education coursework), so only
  // recurse into plain objects.
  if (reference !== null && typeof reference === 'object') {
    if (candidate === null || typeof candidate !== 'object' || Array.isArray(candidate)) {
      throw new Error(`[i18n] ${lang}: "${where}" should be an object.`);
    }
    for (const key of Object.keys(reference as Record<string, unknown>)) {
      const keyPath = path ? `${path}.${key}` : key;
      if (!(key in (candidate as Record<string, unknown>))) {
        throw new Error(
          `[i18n] ${lang}: missing translation for "${keyPath}". ` +
            `Add it to the "${lang}" block in src/i18n/ui.ts.`
        );
      }
      assertSameShape(
        (reference as Record<string, unknown>)[key],
        (candidate as Record<string, unknown>)[key],
        lang,
        keyPath
      );
    }
  }
}

for (const lang of languages) {
  if (lang !== defaultLang) assertSameShape(ui[defaultLang], ui[lang], lang);
}
