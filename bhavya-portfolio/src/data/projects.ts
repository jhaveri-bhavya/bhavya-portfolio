export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'PDF RAG Agent',
    description:
      'A fully local retrieval-augmented generation agent that lets you chat with your PDF documents. Runs entirely on-device using Ollama, LangGraph, and FAISS — no cloud API required.',
    tags: ['Python', 'LangGraph', 'Ollama', 'FAISS', 'Docker', 'Streamlit'],
    github: 'https://github.com/jhaveri-bhavya/Streamlit-Ollama-PDF-RAG-Agent',
    featured: true,
  },
  {
    title: 'Self-Healing QA Pipeline',
    description:
      'An autonomous QA microservice with a multi-agent feedback loop: one agent drafts unit tests from requirements, a second executes them in a sandbox and self-corrects errors automatically.',
    tags: ['Gemini 2.5', 'OpenTelemetry', 'Multi-Agent', 'Python'],
    github: 'https://github.com/jhaveri-bhavya/Self-Healing-QA-Agent',
    featured: true,
  },
  {
    title: 'LLM Test Generation',
    description:
      'Evaluation pipeline for measuring the quality of LLM-generated PyTest scripts. Explores prompt strategies for automated test generation and validation using large language models.',
    tags: ['Python', 'LLM', 'PyTest', 'Jupyter'],
    github: 'https://github.com/jhaveri-bhavya/Evaluating-PyTest-Script-Generation-and-Validation-Using-an-LLM',
  },
  {
    title: 'LangGraph Experiments',
    description:
      'A collection of notebooks exploring LangGraph\'s agent orchestration patterns — stateful multi-agent workflows, conditional edges, and tool-calling agents.',
    tags: ['LangGraph', 'Python', 'Jupyter', 'LangChain'],
    github: 'https://github.com/jhaveri-bhavya/LangGraph',
  },
  {
    title: 'MATLAB Simulink Internship',
    description:
      'Assignments and mini-project from an industrial internship, implementing control system simulations using MATLAB Simulink Simscape for dynamic system modeling.',
    tags: ['MATLAB', 'Simulink', 'Simscape', 'Control Systems'],
    github: 'https://github.com/jhaveri-bhavya/BRJ_assign_matint',
  },
];
