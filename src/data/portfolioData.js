export const personalInfo = {
  fullName: "Joyce Sameh Abdelsayed",
  role: "Software Tester | QA Engineer",
  location: "Shoubra, Cairo, Egypt",
  phone: "+20 111 271 3040",
  email: "joycesamehmorgan@gmail.com",
  linkedin: "http://www.linkedin.com/in/joyce-morgan-",
  github: "http://github.com/joycemorgan29",
  summary: "QA Engineer with hands-on experience in manual software testing and quality assurance for web applications. Skilled in requirements analysis, test case design, test execution, defect management, regression testing, retesting, and functional testing. Strong SQL knowledge with experience in validating application data and supporting database testing. Familiar with Agile methodologies and QA processes, with a strong understanding of defect lifecycle, severity, priority, and verification. Detail-oriented and analytical, with a strong ability to identify issues, assess application quality, and ensure software meets functional and business requirements.",
  heroTagline: "QA Engineer with hands-on experience in manual software testing and web application QA, with strong skills in requirements analysis, test case design, test execution, defect management, regression testing, retesting, and SQL-based database validation."
};

export const education = {
  institution: "Misr University for Science and Technology (MUST)",
  location: "Giza, Egypt",
  degree: "Bachelor of Computer Science",
  major: "Computer Science Major",
  period: "2022 – 2026",
  gpa: "3.17 / 4.00",
  keyTopics: [
    "Software Engineering",
    "Database Systems & SQL",
    "Algorithms & Data Structures",
    "Object-Oriented Programming (C++)",
    "Web Application Development"
  ]
};

export const skillCategories = [
  {
    category: "Software Testing",
    description: "Core methodologies for verification, validation, and defect detection across software modules.",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Retesting",
      "Integration Testing",
      "System Testing",
      "UI Testing",
      "Exploratory Testing"
    ]
  },
  {
    category: "Test Design & QA",
    description: "Analytical practices transforming raw specifications into verifiable, repeatable test cases.",
    skills: [
      "Test Case Design",
      "Test Scenarios",
      "Positive Testing",
      "Negative Testing",
      "Requirements Analysis",
      "SRS Analysis",
      "Requirements Validation",
      "Defect Reporting",
      "Test Execution"
    ]
  },
  {
    category: "Testing Tools",
    description: "Industry-standard platforms used for agile project management, test suite management, and browser inspection.",
    skills: [
      "Jira",
      "Zephyr",
      "Google Sheets",
      "Microsoft Excel",
      "Chrome DevTools"
    ]
  },
  {
    category: "Database",
    description: "Back-end data validation, schema inspection, and data integrity verification.",
    skills: [
      "SQL",
      "SQL Server",
      "PostgreSQL"
    ]
  },
  {
    category: "Programming",
    description: "Foundational coding skills aiding test logic comprehension, web DOM understanding, and problem solving.",
    skills: [
      "JavaScript",
      "C++"
    ]
  },
  {
    category: "Version Control",
    description: "Collaborative revision tracking and code management.",
    skills: [
      "Git",
      "GitHub"
    ]
  },
  {
    category: "Interpersonal Skills",
    description: "Crucial professional qualities driving team synchronization and meticulous bug reporting.",
    skills: [
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Critical Thinking",
      "Adaptability",
      "Time Management",
      "Attention to Detail"
    ]
  }
];

export const projects = [
  {
    id: "banking-app",
    title: "Manual Software Testing Project — Banking Web Application",
    subtitle: "End-to-End Functional, Scenario & Regression Testing",
    category: "qa",
    date: "September 2026",
    type: "Manual Software Testing Project",
    tools: ["Google Sheets", "Chrome DevTools", "SRS Analysis"],
    featured: true,
    stats: [
      { label: "Test Cases Designed", value: "60+" },
      { label: "Test Cases Executed", value: "80+" },
      { label: "Defects Identified", value: "~10" }
    ],
    description: "Comprehensive manual testing engagement for a financial web application covering transaction validation, authentication security, input boundary checks, and regression cycles.",
    contributions: [
      "Analyzed Software Requirements Specifications (SRS) and UI/UX mockups to thoroughly understand application requirements.",
      "Identified unclear requirements and prepared clarification questions to ensure specifications were specific and testable.",
      "Designed more than 60 test cases based on requirements and UI/UX specifications, covering functional scenarios, positive/negative paths, and diverse testing conditions.",
      "Executed more than 80 test cases prepared by team members and identified approximately 10 defects during test execution.",
      "Documented defects with detailed reproduction steps, expected vs. actual results, severity, priority, and supporting evidence.",
      "Performed retesting after defects were resolved to verify corrections, followed by rigorous regression testing to ensure no existing functionality was broken.",
      "Used Google Sheets to systematically organize test cases, record execution results, track bug states, and maintain test status visibility."
    ],
    testingHighlights: [
      "SRS Analysis & Clarification",
      "Positive & Negative Testing",
      "Defect Severity & Priority",
      "Retesting & Regression Testing",
      "Google Sheets Test Suite"
    ],
    sampleArtifact: {
      type: "Test Case & Defect Report",
      testCase: {
        id: "TC-BNK-024",
        title: "Verify fund transfer with amount exceeding available balance",
        priority: "High",
        type: "Negative Functional",
        preconditions: "User logged into authenticated banking portal; Account balance is $500.00.",
        steps: [
          "1. Navigate to 'Transfers' section.",
          "2. Select source account with balance $500.00.",
          "3. Enter recipient account number '987654321'.",
          "4. Enter transfer amount '$550.00'.",
          "5. Click 'Submit Transfer'."
        ],
        expectedResult: "Transfer is rejected. An inline error notification displays: 'Insufficient funds for this transaction'. Source balance remains $500.00.",
        actualResult: "System prompted error message and blocked submission. Source balance unchanged.",
        status: "Pass"
      },
      defect: {
        id: "BUG-BNK-009",
        title: "Transaction history page displays raw unformatted NaN when sorting by date descending",
        severity: "Major",
        priority: "High",
        environment: "Chrome 128 / macOS / Staging Web Build",
        steps: [
          "1. Log in with standard user credentials.",
          "2. Go to 'Account History'.",
          "3. Click the column header 'Date' to sort descending."
        ],
        expectedResult: "Transactions reorder chronologically with valid formatted dates (DD/MM/YYYY).",
        actualResult: "Dates render as 'NaN-undefined' and page pagination breaks.",
        status: "Verified & Closed after Retest"
      }
    }
  },
  {
    id: "swag-labs",
    title: "Swag Labs QA Project",
    subtitle: "Agile Test Management & Traceability in Jira & Zephyr",
    category: "qa",
    date: "August 2026",
    type: "Software Testing Project",
    tools: ["Jira", "Zephyr", "Chrome DevTools"],
    featured: true,
    stats: [
      { label: "Agile Workflow", value: "Epics & Stories" },
      { label: "Traceability", value: "100% Mapped" },
      { label: "Test Management", value: "Zephyr Cycles" }
    ],
    description: "Structured Quality Assurance cycle for the Swag Labs e-commerce platform using Atlassian Jira and Zephyr for end-to-end requirement traceability and defect tracking.",
    contributions: [
      "Analyzed and organized project requirements in Jira using Epics, Stories, Tasks, and Subtasks to structure the testing workflow.",
      "Maintained full bidirectional traceability between requirements, user stories, and testing activities.",
      "Designed and documented comprehensive test cases in Zephyr based on application requirements and expected functionality, covering diverse user scenarios and edge cases.",
      "Created structured test cycles, executed test cases systematically, recorded actual results, and maintained test execution status throughout the testing process.",
      "Reported and tracked defects through Jira, providing clear information, attachments, and logs to support engineering investigation and resolution."
    ],
    testingHighlights: [
      "Jira Epics, Stories & Subtasks",
      "Zephyr Test Cases & Cycles",
      "Requirement Traceability Matrix (RTM)",
      "Defect Lifecycle Management",
      "Test Execution Status Tracking"
    ],
    workflowSteps: [
      "Requirements Analysis in Jira",
      "Zephyr Test Case Creation",
      "Test Cycle Setup",
      "Systematic Execution",
      "Jira Defect Logging",
      "Fix Verification & Retesting"
    ]
  },
  {
    id: "aeva",
    title: "AEVA: AI Powered Event Planning and Management System",
    subtitle: "Graduation Project (MUST CS)",
    category: "dev",
    date: "2026",
    type: "Graduation Project",
    tools: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Gemini API"],
    featured: true,
    stats: [
      { label: "Architecture", value: "Full Stack AI" },
      { label: "Database", value: "PostgreSQL" },
      { label: "API Layer", value: "REST + Gemini" }
    ],
    description: "An AI-powered web platform designed to simplify and modernize the entire event planning and management process through a centralized digital platform.",
    contributions: [
      "Developed an AI-powered web platform designed to streamline event organization from initial ideation to post-event management.",
      "Integrated Gemini API to provide personalized event recommendations and an intelligent chatbot assistant for planning decisions.",
      "Implemented full event management modules including attendee tracking, digital invitations, and RSVP management.",
      "Designed back-end RESTful APIs with Node.js and Express.js connected to a relational PostgreSQL database."
    ],
    testingHighlights: [
      "RESTful API Integration",
      "Relational Database Modeling",
      "Client-Side State & Async Flow",
      "AI Prompt & Chatbot Handling",
      "Input Validation & Data Sanitization"
    ]
  },
  {
    id: "skuh-website",
    title: "SKUH Website",
    subtitle: "Hospital Healthcare Portal",
    category: "dev",
    date: "2026",
    type: "Web Development Project",
    tools: ["Angular", "TypeScript", "Tailwind CSS", "SCSS"],
    featured: false,
    stats: [
      { label: "Framework", value: "Angular" },
      { label: "Styling", value: "Tailwind + SCSS" },
      { label: "Forms", value: "Reactive Forms" }
    ],
    description: "A hospital website designed to provide patients with an accessible platform for exploring healthcare services, doctors, and medical information.",
    contributions: [
      "Built a patient-centric portal featuring appointment booking, doctor profiles, and hospital departmental directories.",
      "Engineered modular Angular components, services, and custom directives for reusable UI elements.",
      "Configured robust client-side routing, route Guards for authentication protection, and HTTP Interceptors for streamlined API requests.",
      "Utilized Reactive Forms for strict input validation, medical booking fields, and error handling with TypeScript.",
      "Styled with Tailwind CSS and SCSS for accessible, responsive medical portal pages across devices."
    ],
    testingHighlights: [
      "Reactive Forms Validation",
      "Route Guards & Security",
      "HTTP Interceptors",
      "Dependency Injection Architecture",
      "Cross-Device Responsive Testing"
    ]
  }
];

export const qaProcessSteps = [
  {
    step: 1,
    title: "Requirements Analysis",
    shortDesc: "Dissecting SRS documents and UI/UX mockups to detect ambiguities and ensure testability.",
    activities: [
      "Review Software Requirements Specifications (SRS)",
      "Analyze UI/UX wireframes and mockups",
      "Identify missing, conflicting, or untestable requirements",
      "Formulate clarification questions for Product Owners & Analysts"
    ],
    deliverables: "Requirements Clarification Log & Test Scope Definition"
  },
  {
    step: 2,
    title: "Test Scenario Design",
    shortDesc: "Mapping high-level end-to-end user journeys and functional pathways.",
    activities: [
      "Break down features into positive and negative scenarios",
      "Map user personas and typical operational workflows",
      "Establish test coverage boundaries and risk priorities",
      "Ensure alignment with business goals"
    ],
    deliverables: "High-Level Test Scenarios & Coverage Matrix"
  },
  {
    step: 3,
    title: "Test Case Design",
    shortDesc: "Authoring granular, reproducible test cases with precise preconditions and test data.",
    activities: [
      "Write step-by-step test procedures with specific test data",
      "Apply testing techniques: Equivalence Partitioning, Boundary Value Analysis",
      "Define unambiguous expected outcomes for each step",
      "Tag test cases with priority, module, and traceability links"
    ],
    deliverables: "Detailed Test Cases in Zephyr / Google Sheets"
  },
  {
    step: 4,
    title: "Test Execution",
    shortDesc: "Running tests across targeted browsers and recording exact actual results.",
    activities: [
      "Create test cycles and assign test sets",
      "Execute steps systematically in staging environments",
      "Capture screenshots, console logs, and network responses via Chrome DevTools",
      "Mark each test case status: Pass, Fail, Blocked, or Untested"
    ],
    deliverables: "Test Execution Log & Run Status Dashboard"
  },
  {
    step: 5,
    title: "Defect Reporting",
    shortDesc: "Logging high-clarity bug reports with reproduction steps, severity, and priority.",
    activities: [
      "Document defect summary, component, and affected environment",
      "Provide deterministic, minimal steps to reproduce",
      "Explicitly contrast Expected Result vs. Actual Result",
      "Assign objective Severity (impact on system) and Priority (urgency to fix)"
    ],
    deliverables: "Jira / Sheets Defect Tickets with Evidence"
  },
  {
    step: 6,
    title: "Retesting",
    shortDesc: "Validating that resolved bugs are truly fixed without unintended artifacts.",
    activities: [
      "Verify fixes against deployed bug-fix builds",
      "Follow original reproduction steps verbatim",
      "Verify edge cases surrounding the fixed area",
      "Update bug status to Closed or Reopened with rationale"
    ],
    deliverables: "Retest Verification Notes & Bug Status Update"
  },
  {
    step: 7,
    title: "Regression Testing",
    shortDesc: "Verifying that new fixes or modifications did not break existing functionality.",
    activities: [
      "Select regression test suite based on impact analysis",
      "Execute critical end-to-end paths across unmodified modules",
      "Confirm stability of core user journeys",
      "Ensure zero unexpected defect leakage"
    ],
    deliverables: "Regression Run Verification Report"
  },
  {
    step: 8,
    title: "Test Results & Documentation",
    shortDesc: "Synthesizing test execution metrics into an actionable quality summary.",
    activities: [
      "Compile test pass rate, defect count by severity, and outstanding issues",
      "Validate database state using SQL queries to ensure backend integrity",
      "Provide recommendations for release readiness",
      "Archive test suite artifacts for future sprints"
    ],
    deliverables: "Test Summary Report & Quality Sign-Off"
  }
];

export const courses = [
  {
    id: "route-testing-diploma",
    title: "Software Testing Diploma",
    provider: "Route Academy",
    focus: "Comprehensive Professional Testing Program",
    modules: [
      {
        name: "Software Testing Fundamentals",
        topics: ["SDLC", "STLC", "Manual Testing", "Test Case Design", "Testing Techniques", "Bug Reporting"]
      },
      {
        name: "Agile & QA Process",
        topics: ["Agile/Scrum", "Agile Testing Principles", "Practical workshops using Jira & Trello"]
      },
      {
        name: "Database & API Testing",
        topics: ["SQL", "Advanced SQL Queries", "RESTful APIs", "API Testing using Postman"]
      },
      {
        name: "Test Automation",
        topics: ["Introduction to Web Automation using Selenium & Cucumber", "Automation scripting best practices"]
      },
      {
        name: "Specialized Testing",
        topics: ["Mobile Testing", "Performance Testing using JMeter", "Security Testing fundamentals (OWASP Top 10)"]
      }
    ]
  },
  {
    id: "istqb-odc",
    title: "ISTQB Foundation Level Course",
    provider: "Orange Digital Center",
    focus: "Standardized Testing Methodologies & Principles",
    modules: [
      {
        name: "Core Testing Principles",
        topics: ["Software Testing Fundamentals", "Core Testing Principles", "Testing Processes", "Testing Levels & Types"]
      },
      {
        name: "Design & Defect Management",
        topics: ["Test Design & Testing Techniques", "Black-Box Testing", "White-Box Testing", "Defect Management", "Test Documentation"]
      }
    ]
  }
];

export const certificates = [
  {
    title: "ISTQB Foundation Level Course Certificate",
    issuer: "Orange Digital Center",
    category: "Software Quality Assurance",
    description: "Comprehensive training adhering strictly to ISTQB syllabus guidelines covering SDLC/STLC, black-box & white-box test design techniques, testing levels/types, and defect management."
  },
  {
    title: "DELF B1 French Language Certificate",
    issuer: "Ministère de l'Éducation Nationale (France)",
    category: "Languages & International Communication",
    description: "Official certification of proficiency in the French language at the B1 intermediate level under the Common European Framework of Reference for Languages (CEFR)."
  }
];

export const languages = [
  {
    name: "English",
    proficiency: "Fluent",
    level: "Professional Working Proficiency",
    flag: "🇺🇸"
  },
  {
    name: "French",
    proficiency: "B1, DELF Certified",
    level: "Intermediate Certified Proficiency",
    flag: "🇫🇷"
  }
];
