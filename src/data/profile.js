const data = {
  name: 'Santhiya Venkatesh',
  title: 'Full Stack Developer · AI Engineer',
  summary:
    'Full-stack and AI engineer with experience across Java backends, Windows API (C++/C#), Ember.js/React frontends, and PostgreSQL/MySQL. Interested in ML-driven features, secure systems, and crafting delightful UIs.',
  hero: {
    photoUrl: 'assets/san.jpg',
    threeD1: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
    threeD2: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
  },
  contact: {
    email: 'santhiyavenkat.2000@gmail.com',
    phone: '+13202919962',
    links: {
      linkedin: 'https://www.linkedin.com/in/vsanthiya',
      github: 'https://github.com/santhiya-2000'
    }
  },
  education: [
    {
      school: 'Western Michigan University',
      location: 'Kalamazoo, Michigan',
      degree: 'Master of Science in Computer Science',
      years: 'Expected Dec 2026',
      gpa: '4.00/4.00',
      coursework: [
        'Computer Networks & Security',
        'Cryptography',
        'Data Mining',
        'Machine Learning',
        'Computer Organization & Programming'
      ]
    },
    {
      school: 'Sri Sairam Engineering College',
      location: 'Chennai, India',
      degree: 'Bachelors of Engineering in Computer Science',
      years: 'Aug 2017 - Apr 2021',
      gpa: '9.03/10.00',
      coursework: [
        'Software Engineering',
        'Programming & Development',
        'Data Structures & Algorithms',
        'Objects & Design',
        'Operating Systems',
        'Programming in C',
        'Programming in Python',
        'Programming in Java',
        'Computer Networks',
        'Theory of Computations',
        'Internet Programming',
        'Distributed Systems',
        'Compiler Design',
        'Mobile Application Development',
        'Computer Architecture',
        'Database Management Systems',
        'Object Oriented Analysis',
        'Human Computer Interaction',
        'Cloud Computing',
        'Cryptography & Network Security',
        'Software Project Management',
        'Machine Learning',
        'Artificial Intelligence',
        'Object-Oriented Programming',
        'Cybersecurity'
      ]
    }
  ],
  experience: [
    {
      company: 'Data Science & AI Club, Western Michigan University',
      location: 'Kalamazoo, MI USA',
      role: 'Research Coordinator',
      period: 'Jul – Present',
      points: [
        'Coordinating student-led research initiatives and reading groups in data science and AI.',
        'Organizing talks, workshops, and collaborations across campus labs and departments.'
      ],
      stack: ['Data Science', 'AI', 'Research', 'Academic Coordination']
    },
    {
      company: 'Zoho - ManageEngine',
      location: 'Chennai, India',
      role: 'Full Stack Development Engineer - Member Technical Staff',
      period: 'Jan 2022 – Apr 2025',
      points: [
        'Built and enhanced DataSecurity Plus to improve data visibility and security.',
        'Implemented new features and customer-requested enhancements, improving usability and functionality.',
        'Collaborated across Java backend, Windows API (C++/C#), Ember.js frontend, and PostgreSQL. '
      ],
      stack: ['Java', 'C++', 'C#', 'Ember.js', 'JavaScript', 'PostgreSQL']
    },
    {
      company: 'ZoomRx HealthCare Pvt. Ltd.',
      location: 'Chennai, India',
      role: 'Software Development Engineer',
      period: 'Feb 2021 – Dec 2021',
      points: [
        'Enhanced a data-driven survey platform and resolved customer issues.',
        'Built Ember.js projects with JavaScript, MySQL, and Java; transitioned from intern to SDE.',
        'Developed real-time survey features and product enhancements.'
      ],
      stack: ['JavaScript', 'Ember.js', 'MySQL', 'Java']
    },
    {
      company: 'Oneyes Technologies',
      location: 'Chennai, India',
      role: 'Intern',
      period: 'Dec 2019 – Dec 2019 · 1 mo',
      points: [
        'Practiced core Machine Learning algorithms and workflows.',
        'Solved programming problems and refreshed HTML fundamentals.'
      ],
      stack: ['Python', 'Machine Learning', 'HTML']
    },
    {
      company: 'RETECH SOLUTIONS PVT LTD',
      location: 'Chennai, India',
      role: 'Student Intern',
      period: 'Dec 2018 – Dec 2018 · 1 mo',
      points: [
        'Learnt introduction to .NET and related development basics.',
        'Improved problem solving and HTML fundamentals.'
      ],
      stack: ['.NET', 'C#', 'HTML']
    },
    {
      company: 'NSICLTD',
      location: 'Chennai, India',
      role: 'Student Intern — Mobile Application Developer',
      period: 'Dec 2018 – Dec 2018 · 1 mo',
      points: [
        'Interned as a mobile application developer.',
        'Learned and practiced Android app development using Android Studio.',
        'Strengthened problem solving and HTML skills.'
      ],
      stack: ['Android Studio', 'Java', 'HTML']
    }
  ],
  projects: [
    {
      title: 'Optimisation of Feature Selection for Classification of SLE',
      period: 'Dec 2019 - Apr 2020',
      summary:
        'Selected vital features to diagnose SLE using Wrapper methods and PCA for dimensionality reduction and improved classification.',
      stack: ['Python', 'PCA', 'Feature Selection']
    },
    {
      title: '3D ToDo Application',
      period: 'May 2025 - June 2025',
      summary:
        'A 3D-inspired Todo web application with journaling and reminders using React, MongoDB, and Java.',
      stack: ['React', 'MongoDB', 'Java']
    },
    {
      title: 'Mere Estimation of Autistic Spectrum Disorder',
      period: 'Dec 2020 - Apr 2021',
      summary:
        'Developed an approach to predict autism early using dimensionality reduction with PCA and Self-Organising Maps (SOM). Performed a comparative evaluation against a CNN-based method and achieved improved prediction accuracy.',
      stack: ['Python', 'PCA', 'SOM', 'CNN']
    }
  ],
  hackathons: [
    {
      title: 'FlightBrief-AI',
      hackathon: 'LocalHost AI Hackathon',
      period: '15th September',
      summary:
        'Helps sales reps input a flight number and get a brief about frequent routes, info, and last maintenance. Uses OpenSky API for flight data and LLM prompts to generate a downloadable report.',
      links: {
        github: 'https://github.com/grcodeman/localhost-flightbriefai'
      },
      stack: ['Next.js', 'OpenSky API', 'Nebius AI Studio', 'OpenAI']
    },
    {
      title: 'Cryptic lock',
      hackathon: 'Oneyes Hackathon 2019',
      period: 'July 6, 2019',
      award: 'Won The Best Team Award',
      summary:
        'Built an innovative double-encryption technique to strengthen network security so intruders cannot decrypt ciphertext. Combined a Transposition algorithm (Rail Fence Cipher) with a Substitution algorithm (Vigenère Cipher). Example: "DEFINE" with key=3 -> Rail Fence: "DNEIEF"; then Vigenère with key "ANT" -> "DAXIRY". Applicable to RFID contexts where secure identification is critical.',
      stack: ['Python', 'Rail Fence Cipher', 'Vigenère Cipher', 'Cryptography', 'RFID']
    }
  ],
  certifications: [
    { title: 'Advanced Styling with Responsive Design', file: '/My_Portfolio/certifications/Advanced Styling with Responsive Design.pdf' },
    { title: 'Android App', file: '/certifications/Android APP.pdf' },
    { title: 'Chatbot with Rasa and Python', file: '/My_Portfolio/certifications/Chatbot with Rasa and Python.pdf' },
    { title: 'Cloud Computing', file: '/My_Portfolio/certifications/Cloud_Computing.pdf' },
    { title: 'Data Analysis with Python', file: '/My_Portfolio/certifications/Data Analysis with Python.pdf' },
    { title: 'Data Visualization with Python', file: '/My_Portfolio/certifications/Data Visualization with python.pdf' },
    { title: 'Foundational Artificial Intelligence', file: '/My_Portfolio/certifications/Foundational Artificial Intelligence.pdf' },
    { title: 'Git', file: '/My_Portfolio/certifications/Git.pdf' },
    { title: 'HTML & CSS', file: '/My_Portfolio/certifications/HTML&CSS.pdf' },
    { title: 'Interactivity with JavaScript', file: '/My_Portfolio/certifications/Interactivity with JavaScript.pdf' },
    { title: 'Introduction to Big Data', file: '/My_Portfolio/certifications/Introduction to Big Data.pdf' },
    { title: 'Introduction to CSS3', file: '/My_Portfolio/certifications/Introduction to CSS3.pdf' },
    { title: 'Introduction to HTML5', file: '/My_Portfolio/certifications/Introduction to HTML5.pdf' },
    { title: 'Machine Learning for All', file: '/My_Portfolio/certifications/Machine Learning for all.pdf' },
    { title: 'Python Data Structure', file: '/My_Portfolio/certifications/Python Data Structure.pdf' },
    { title: 'Python for Data Science', file: '/My_Portfolio/certifications/Python for Datascience.pdf' },
    { title: 'Python', file: '/My_Portfolio/certifications/Python.pdf' },
    { title: 'HackerRank Problem Solving (Santhiya.V)', file: '/My_Portfolio/certifications/Santhiya.V Problem Solving - Hackerrank.pdf' },
    { title: 'HackerRank Programming in Python (Santhiya.V)', file: '/My_Portfolio/certifications/Santhiya.V Programming in Python - Hackerrank.pdf' },
    { title: 'Security', file: '/My_Portfolio/certifications/Security.pdf' },
    { title: 'The Sustainable Development Goals', file: '/My_Portfolio/certifications/The Sustainable Development Goals.pdf' }
  ],
  activities: [
    {
      title: 'Programming Tutor',
      organization: 'Sri Sairam Engineering College',
      location: 'Chennai, India',
      period: 'Apr 2020 – Jun 2020',
      points: [
        'Volunteered as a technical trainer for junior students.',
        'Taught C, Python, and C++ from basics to problem-solving techniques; ran hands-on practice sessions.'
      ]
    },
    {
      title: 'Research Coordinator',
      organization: 'Data Science & AI Club, Western Michigan University',
      location: 'Kalamazoo, Michigan',
      period: 'Aug – Present',
      points: [
        'Coordinating student-led research initiatives and reading groups in data science and AI.',
        'Organizing talks, workshops, and collaborations across campus labs and departments.'
      ]
    },
    {
      title: 'Student Chairperson',
      organization: 'Sri Sairam Engineering College',
      location: 'Chennai, India',
      period: '2021',
      points: [
        'Led a national-level hackathon with 100+ participants.',
        'Coordinated the event and headed the Debugging Competition.'
      ]
    }
  ],
  certifications: [
    {
      title: 'Advanced Styling with Responsive Design',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Advanced Styling with Responsive Design.pdf'
    },
    {
      title: 'Android App Development',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Android APP.pdf'
    },
    {
      title: 'Chatbot with Rasa and Python',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Chatbot with Rasa and Python.pdf'
    },
    {
      title: 'Cloud Computing',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Cloud_Computing.pdf'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      file: '/My_Portfolio/certifications/Data Analysis with Python.pdf'
    },
    {
      title: 'Data Visualization with Python',
      issuer: 'IBM',
      file: '/My_Portfolio/certifications/Data Visualization with python.pdf'
    },
    {
      title: 'Foundational Artificial Intelligence',
      issuer: 'IBM',
      file: '/My_Portfolio/certifications/Foundational Artificial Intelligence.pdf'
    },
    {
      title: 'Git',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Git.pdf'
    },
    {
      title: 'HTML & CSS',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/HTML&CSS.pdf'
    },
    {
      title: 'Interactivity with JavaScript',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Interactivity with JavaScript.pdf'
    },
    {
      title: 'Introduction to Big Data',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Introduction to Big Data.pdf'
    },
    {
      title: 'Introduction to CSS3',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Introduction to CSS3.pdf'
    },
    {
      title: 'Introduction to HTML5',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Introduction to HTML5.pdf'
    },
    {
      title: 'Machine Learning for All',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Machine Learning for all.pdf'
    },
    {
      title: 'Python Data Structure',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Python Data Structure.pdf'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      file: '/My_Portfolio/certifications/Python for Datascience.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Python.pdf'
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      file: '/My_Portfolio/certifications/Santhiya.V Problem Solving - Hackerrank.pdf'
    },
    {
      title: 'Programming in Python',
      issuer: 'HackerRank',
      file: '/My_Portfolio/certifications/Santhiya.V Programming in Python - Hackerrank.pdf'
    },
    {
      title: 'Security',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/Security.pdf'
    },
    {
      title: 'The Sustainable Development Goals',
      issuer: 'Coursera',
      file: '/My_Portfolio/certifications/The Sustainable Development Goals.pdf'
    }
  ],
  skills: {
    programming: [
      'Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Node.js', 'React.js', 'MATLAB', 'R', 'C++', 'C', 'C#', 'Swift (iOS)', 'MongoDB', 'PostgreSQL', 'MySQL'
    ],
    tools: [
      'VSCode', 'Android Studio', 'IntelliJ', 'R Studio', 'Eclipse', 'AWS', 'Jupyter Notebooks', 'Git', 'Bootstrap', 'Spring Boot', 'Agile', 'Power BI'
    ]
  }
};

export default data;
