const projects = [
    {
        id: 0,
        title: "Baye3 Marketplace",
        desc: "Online marketplace connecting buyers and sellers of a wide range of products, with a user-friendly platform. Developed with the MERN stack, the platform implements RESTful APIs that provide three levels of user permissions, and localization for both backend responses and the user interface (English andArabic). Additionally, it integrates Google Authentication and Firebase storage.",
        spec: "Full Stack",
        private: true,
        workingOn: true,
        links:{
            github: null,
            host: {
                name: 'Try',
                link: "https://baye3-frontend.onrender.com",
            },
            linkedin: null
        },
    },
    {
        id: 1,
        title: "E-Commerce RESTful API Backend",
        desc: "I created a dynamic E-Commerce RESTful API server using NodeJS and MongoDB, this RESTful API boasts admin, manager, and user permissions. Admins and managers effortlessly add products and oversee all aspects, from sales to user activity. Users enjoy curated favorites, category-based browsing, coupon integration, and the ability to leave feedback on purchases.",
        spec: "Backend",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/e-shop-backend',
            },
            host: {
                name: 'Try on Postman',
                link: 'https://app.getpostman.com/run-collection/22779401-2eb715a7-e00c-4645-bb2d-9fa99c8ebb13?action=collection%2Ffork&collection-url=entityId%3D22779401-2eb715a7-e00c-4645-bb2d-9fa99c8ebb13%26entityType%3Dcollection%26workspaceId%3D03a58a68-407e-414b-8e2d-7e389c4a559c#?env%5Be-shop%3Aprod%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwczovL2UtY29tbWVyY2UtYmFja2VuZC1wNmd6Lm9ucmVuZGVyLmNvbSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9lLWNvbW1lcmNlLWJhY2tlbmQtcDZnei5vbnJlbmRlci5jb20iLCJzZXNzaW9uSW5kZXgiOjB9XQ==',
            },
            linkedin: {
                name: 'LinkedIn Post',
                link: 'https://www.linkedin.com/posts/bassemsaid710_nodejs-nodejsdevelopment-nodejsdevelopers-activity-7054030810974142464-y8oD?utm_source=share&utm_medium=member_desktop',
            }
        },
    },
    {
        id: 2,
        title: "E-Commerce Responsive Website",
        desc: "I created an E-Commerce website using ReactJS and Redux. Seamlessly aligned with the NodeJS and MongoDB RESTful API backend, it harmonizes dynamic features with an intuitive design. Emphasizing clean architecture and precision in coding, the project ensures a smooth backend-to-frontend transition. Admins and managers retain control, users relish a curated journey, and the result is a permission-based.",
        spec: "Frontend",
        private: false,
        workingOn: true,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/e-shop-frontend',
            },
            linkedin: null
        },
    },
    {
        id: 3,
        title: "Learning Department Backend",
        desc: "I developed a versatile platform for monitoring courses from Orange's partners like Instant and Amit. This API-driven project features user roles (admin, manager, student), offering secure user management, course tracking, personalized recommendations, partner financial management, and student recognition for job opportunities.",
        spec: "Backend",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/ODC-Backend-Project',
            },
            linkedin: {
                name: 'LinkedIn Post',
                link: 'https://www.linkedin.com/posts/bassemsaid710_orange-orangedigitalcenter-backend-activity-7035657966984773632-gFKa?utm_source=share&utm_medium=member_desktop'
            }
        },
    },
    {
        id: 4,
        title: "Networking PHP Application",
        desc: `I successfully completed a project as part of my Software Engineering course (CS251) with my
        college mates. The project involved two phases: Phase 1 focused on creating comprehensive
        documentation, including UML diagrams, while Phase 2 involved building the documented project
        using HTML, CSS, PHP, and MySQL, following the MVC design pattern. In addition to the
        aforementioned phases, we also undertook the task of constructing complex queries using MySQL.`,
        spec: "Full Stack",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/Networking-PHP-Application',
            },
            host: null,
            linkedin: null,
            others: [
                {
                    name: "Phase 1",
                    link: 'https://drive.google.com/drive/folders/1J52JDqyQKuVO608IGK5tHuZVW66X0bwa?usp=drive_link',
                },
                {
                    name: "Phase 2",
                    link: 'https://drive.google.com/drive/folders/1gjCYVwcMmmDWsH7SLvNTNk5xnI82cO5a?usp=drive_link'
                }
            ]
        },
    },
    {
        id: 5,
        title: "Notes App",
        desc: "Presenting a simple responsive Notes App developed with HTML, CSS, and plain JavaScript. This intuitive application equips users with the ability to add, edit, and remove their notes, leveraging the power of local storage for data retention. Experience a user-centric approach to digital note-taking, blending simplicity and functionality seamlessly.",
        spec: "Frontend",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/Notes-App',
            },
            host: {
                name: 'Try',
                link: "https://bassem710.github.io/Notes-App/",
            },
            linkedin: {
                name: 'LinkedIn Post',
                link: 'https://www.linkedin.com/posts/bassemsaid710_html5-css3-javascript-activity-6958115450740174848-dksP?utm_source=share&utm_medium=member_desktop',
            }
        },
    },
    {
        id: 6,
        title: "Bug Tracker",
        desc: "An efficient Bug Tracking System (Java desktop application) comprising Tester, Developer, Project Manager, and Admin modules. Testers define bugs, assign tasks, and track progress and automated emails to developers. Developers update statuses, triggering notifications for testers. Project Managers assess team performance and oversee bugs, while Admins manage roles and access project-wide bug insights. Simplify bug management for enhanced collaboration and productivity.",
        spec: "Full Stack",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/Java_Bug_Tracker',
            },
            host: null,
            linkedin: null
        },
    },
    {
        id: 7,
        title: "Book Library",
        desc: "Presenting a simple Ruby RESTful API backend server project, designed to enable addition of book details by users. This project integrates user authentication and follows the Test-Driven Development (TDD) methodology for robust implementation.",
        spec: "Backend",
        private: false,
        workingOn: false,
        links:{
            github: {
                name: 'Github',
                link: 'https://github.com/bassem710/Books-Library-Ruby',
            },
            host: null,
            linkedin: null
        },
    },
];

export default projects;