const BASE_URL = import.meta.env.BASE_URL;

export const skillsData = [
    {
        title: "Frontend Engineering",
        icon: `${BASE_URL}img/Web_dev_skill_icons/SVGs/noun-computer-screen-7186220-67E8F9.svg`,
        points: [
            "Building responsive, accessible interfaces with reusable components featuring clear prop interfaces.",
            "Implementing a large variety of libraries and tools to enhance performance and UX.",
            "Setting up centralized, maintainable API logic for cleaner client-side implementation."
        ]
    },
    {
        title: "Backend Engineering",
        icon: `${BASE_URL}img/Web_dev_skill_icons/SVGs/noun-backend-7223052-67E8F9.svg`,
        points: [
            "Designing scalable backend systems using service layer architecture.",
            "Extracting, processing, and persisting data with automated pipelines.",
            "Centralizing error handling with custom error classes.",
            "Integrating AI/ML features using LangChain."

        ]
    },
    {
        title: "Database Management",
        icon: `${BASE_URL}img/Web_dev_skill_icons/SVGs/noun-database-8106131-67E8F9.svg`,
        points: [
            "Designing schemas and indexing strategies.",
            "Processing and storing vector embeddings for RAG.",
            "Optimizing interaction between backend services and data stores."

        ]
    },
    {
        title: "AI Engineering",
        icon: `${BASE_URL}img/Web_dev_skill_icons/SVGs/noun-api-7983790-67E8F9.svg`,
        points: [
            "Building custom prompts for structured data LLM responses.",
            "Setting up retreival augmented generation with grounded data sources.",
            "Building complex, performant features with prompt engineering."
        ]
    },
    {
        title: "Cloud and Infrastructure",
        icon: `${BASE_URL}img/Web_dev_skill_icons/SVGs/noun-cloud-8083021-67E8F9.svg`,
        points: [
            "Deploying optimized and secure cloud services with AWS and automated CI/CD workflows.",
            "Shipping full stack applications to production using multiple hosting services.",
            "Implementing production security measures, structured logging, and health checks."
        ]
    },
    
]