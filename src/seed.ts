import 'dotenv/config';
import * as mongoose from 'mongoose';
import { ProjectSchema } from './domain/schema/project.schema';
import { AboutSchema } from './domain/schema/about.schema';
import { ClientSchema } from './domain/schema/client.schema';

const MONGODB_URI = process.env.MONGODB_URI;

const projectsSeedData = [
  {
    title: 'Money Counsellor Application',
    url: 'https://moneycounselor.com',
    category: 'Pension Application',
    type: 'fintech',
    img: '/images/money-councel-project.png',
    ProjectHeader: {
      title: 'Money Counsellor Home Page',
      publishDate: 'Jul 26, 2021',
      tags: 'API / Backend / Frontend',
    },
    ProjectImages: [
      { title: 'Money Counsellor Home Page', img: '/images/money-councel-project.png' },
      { title: 'WeTalk Social Application', img: '/images/money-counsel-about.png' },
      { title: 'WeTalk Social Application', img: '/images/money-counsel-compare.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        { title: 'Name', details: 'Money Counsellors Company Ltd', link: 'https://moneycounsellors.com' },
        { title: 'Services', details: 'API Development', link: '' },
        { title: 'Website', details: 'moneycounsellors.com', link: 'https://moneycounsellors.com' },
        { title: 'Phone', details: '(Manager) +44 7915 608640', link: '' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: '',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Typescript', 'NestJS', 'NodeJS', 'OAuth2', 'Passport/JWT', 'Redis', 'Docker', 'PostgreSQL', 'TypeORM', 'NextJS', 'TailwindCSS', 'Render', 'Jira', 'Confluence'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'User Account Management',
          details: [
            'Develop APIs and services for user registration, authentication, and profile management. Implement features like email verification, password hashing, and OAuth 2.0 integration for secure user authentication.',
            'Build endpoints to allow users to update their personal information, manage beneficiaries, and view their pension account details.',
            'Implement role-based access control (RBAC) to enforce permissions based on user roles, ensuring that only authorized users can access sensitive functionalities such as financial planning tools or account settings.',
          ],
        },
        {
          point: 'Financial Transaction Processing',
          details: [
            'Develop APIs and services to handle financial transactions related to pension contributions, withdrawals, and investment management.',
            'Implement validation logic to ensure the accuracy and consistency of transaction data, including verifying account balances, checking transaction limits, and enforcing transaction rules.',
            'Create adapter that integrate with all other pension institutions to securely process transactions, manage payment schedules, and reconcile account balances in real-time.',
          ],
        },
        {
          point: 'Compliance and data transparency',
          details: [
            'Implement features to ensure compliance with pension regulations and financial industry standards.',
            'Integrate with third-party compliance services or APIs to perform KYC (Know Your Customer) verification',
          ],
        },
      ],
    },
  },
  {
    title: 'Wayabank',
    url: 'staging.wayabank.ng',
    category: 'Fintech Application',
    type: 'Fintech',
    img: '/images/wayabank.png',
    ProjectHeader: {
      title: 'Waya Multilink Digital Banking',
      publishDate: 'Jul 26, 2021',
      tags: 'API / Backend / USSD',
    },
    ProjectImages: [
      { title: 'Waya Multilink Digital Banking', img: '/images/wayabank.png' },
      { title: 'Waya Multilink Digital Banking', img: '/images/wayabank-api.png' },
      { title: 'Waya Multilink Digital Banking', img: '/images/wayabank-project.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        { title: 'Name', details: 'WAYA MULTILINK COMPANY LIMITED', link: 'https://staging.wayabank.ng' },
        { title: 'Services', details: 'Web Development', link: '#' },
        { title: 'Website', details: 'wayabank.ng', link: 'https://staging.wayabank.ng' },
        { title: 'Phone', details: '(Manager) +234 816 334 9199', link: '#' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'To create a simplified digital banking system that allows users to send and receive money, pay bills and top up mobile airtime',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Spring Boot 3', 'Spring Security', 'NodeJS', 'PostgreSQL', 'USSD Africa is Talking (AITs)', 'ReactJS', 'Redis', 'Docker', 'Microservice', 'Microsoft Azure', 'Google Cloud Messaging'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'API Development and Integration',
          details: [
            "Designing and developing RESTful APIs to expose WayaBank's functionalities, allowing seamless integration with various client applications such as web, mobile, and third-party services.",
            'Implementing API documentation and versioning strategies to ensure clarity, consistency, and backward compatibility of APIs, enabling smooth communication between backend services and client applications.',
            'Integrating with external systems and services, such as payment gateways, credit bureaus, and regulatory compliance APIs, to enable features like online payments, credit scoring, and compliance with banking regulations.',
          ],
        },
        {
          point: 'USSD Implementation',
          details: [
            'Integrate third-party service (AIT) to connect to Nigeria network service providers and thereby redirecting request to the API service responsible for the operation required',
            'Use Javascript as the intermediary service for the client interfacing application which does not require client\'s data connect before carrying out operation required by client',
          ],
        },
        {
          point: 'Secure User Authentication and Authorization',
          details: [
            "Contributed to the implemention of a robust authentication and authorization mechanisms to ensure secure access to WayaBank's services. This involves integrating authentication providers such as OAuth 2.0 or OpenID Connect to enable single sign-on (SSO) and support multi-factor authentication (MFA) for enhanced security.",
            'Developing role-based access control (RBAC) mechanisms to enforce granular access permissions based on user roles and privileges. This ensures that users can only perform actions authorized for their role, such as viewing account balances, transferring funds, or managing beneficiaries.',
          ],
        },
        {
          point: 'Transaction Processing and Management',
          details: [
            'Contributed to Building transaction processing systems that facilitate seamless and secure transfer of funds between accounts, both within WayaBank and to external accounts.',
            'Implementing transaction management features to ensure data consistency and integrity, including support for atomicity, consistency, isolation, and durability (ACID) properties.',
            'Integrating fraud detection and prevention mechanisms to monitor transactions in real-time, detect suspicious activities, and trigger alerts or take preventive actions to mitigate risks.',
          ],
        },
      ],
    },
  },
  {
    title: 'WayaGram',
    url: 'app.staging.wayagram.ng',
    category: 'Social Media Application',
    type: 'Social Media',
    img: '/images/wayagram-handle.png',
    ProjectHeader: {
      title: 'Waya Multilink Social Media',
      publishDate: 'Jul 26, 2021',
      tags: 'API / Backend / Frontend',
    },
    ProjectImages: [
      { title: 'Profile Handle Page', img: '/images/wayagram-handle.png' },
      { title: 'Main Page', img: '/images/wayagram.png' },
      { title: 'Authentication Page', img: '/images/wayagram-login.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        { title: 'Name', details: 'WAYA MULTILINKS LIMITED', link: 'https://staging.wayagram.ng' },
        { title: 'Services', details: 'Web Development', link: '#' },
        { title: 'Website', details: 'wayagram.ng', link: 'https://staging.wayagram.ng' },
        { title: 'Phone', details: '(Manager) +234 816 334 9199', link: '#' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'To create a social platform for users to connect with other users, and socialize, share remarkable moments, join channels and groups, pages, and follow others.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['NodeJS', 'ExpressJS', 'Passport & JWT', 'Websocket', 'ReactJs and Redux', 'Redis', 'PostgreSQL', 'Sequelize', 'Docker', 'Microservice', 'Google Cloud Messaging', 'AWS SES', 'Microsoft Azure'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'Scalable Architecture Design',
          details: [
            'Designed and implemented a scalable backend architecture using Node.js and express which can efficiently handle the growing user base and increasing loads on the application.',
            'This involves employing techniques such as microservices architecture, and caching mechanisms with redis to ensure smooth performance even during peak usage times.',
          ],
        },
        {
          point: 'RESTful API Development',
          details: [
            'Developed a robust and well-documented RESTful APIs that serve as the communication layer between the frontend and backend of the application. These APIs would facilitate functionalities such as creating/updating of user handle, posting content, commenting, liking, following users, creating groups, group joining, and retrieving user data.',
          ],
        },
        {
          point: 'Real-time Communication',
          details: [
            'Implementing real-time communication features using technologies like WebSockets or Server-Sent Events (SSE) to enable instant messaging, also implementing push notification with google cloud instant messaging for like notification.',
          ],
        },
        {
          point: 'Data Management and Database Optimization',
          details: [
            'Designing and managing the database schema using a relational database system (PostgreSQL), whilst ensuring efficient storage and retrieval of data for various features of the application. Optimizing database queries, indexing frequently accessed fields, and implementing data caching mechanisms using redis.',
          ],
        },
        {
          point: 'Security and Privacy Measures',
          details: [
            'Implementing robust security measures to protect user data, prevent unauthorized access, and ensure user privacy within the application. This includes encryption of sensitive information, implementing secure authentication and authorization mechanisms, and regularly auditing the codebase for potential vulnerabilities.',
          ],
        },
      ],
    },
  },
  {
    title: 'Blackbox',
    url: 'https//blackboxservic.monster',
    category: 'Telematics application',
    type: 'Telematics',
    img: '/images/blackbox-project.png',
    ProjectHeader: {
      title: 'Project Management UI',
      publishDate: 'Jul 26, 2021',
      tags: 'API / Backend / Frontend',
    },
    ProjectImages: [
      { title: 'Blackbox Dashboard', img: '/images/blackbox-project.png' },
      { title: 'Blackbox Driver Page', img: '/images/blackbox-driver.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        { title: 'Name', details: 'TSARON TELEMATICS COMPANY LIMITED', link: 'https://blackboxservice.monster' },
        { title: 'Services', details: 'API Developement', link: '' },
        { title: 'Website', details: 'blackboxservice.monster', link: 'https://blackboxservice.monster' },
        { title: 'Phone', details: '(Manager) +234 802 581 4668', link: '' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'This is a telematics application that allows users to be able to monitor the life cycle of their vehicle. They will be able to monitor trip, fuel, and fault of the vehicle',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Typescript', 'NestJS', 'NodeJS', 'AWS EC2', 'AWS S3', 'Trello', 'Docker', 'CI/CD', 'ReactJs', 'VueJs', 'Traccar API services'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'Telematics Data Processing Pipeline',
          details: [
            'Designing and implementing a robust data processing pipeline to ingest, store, and analyze telematics data collected from vehicles in real-time.',
            'Developing APIs and microservices to handle the ingestion of raw telemetry data, parsing it into structured formats, and storing it in a scalable and fault-tolerant database which is MySQL.',
            'Implementing data validation and normalization processes to ensure data integrity and consistency across different types of vehicles and telemetry sources.',
          ],
        },
        {
          point: 'API Security and Access Control',
          details: [
            'Implementing robust authentication and authorization mechanisms to secure access to Blackbox APIs and data resources',
            'Enforcing HTTPS encryption, input validation, and rate limiting to protect against common security threats such as injection attacks and data breaches',
            'JSON Web Tokens (JWT) for user authentication and role-based access control (RBAC) for fine-grained authorization.',
          ],
        },
        {
          point: 'Real-time Monitoring and Alerts',
          details: [
            'Building real-time monitoring and alerting systems to provide instant insights into vehicle health, performance, and location.',
            'Implementing event-driven architecture using technologies like WebSockets or Server-Sent Events (SSE) to push real-time updates to client applications and dashboards.',
            'Developing alerting mechanisms based on predefined thresholds or anomaly detection algorithms to notify stakeholders of critical events such as accidents, engine faults, or unauthorized usage.',
          ],
        },
        {
          point: 'Geospatial Data Processing and Visualization',
          details: [
            'Developing APIs to calculate and visualize metrics such as vehicle speed, distance traveled, fuel consumption, and route deviations on interactive maps.',
            'Integrating geospatial data processing tools and libraries to analyze vehicle movement, route optimization, and geo-fencing functionalities.',
            'Integrated a third party service (traccar) to render geospatial data efficiently and provide rich visualizations for monitoring vehicle activities and optimizing fleet operations.',
          ],
        },
      ],
    },
  },
  {
    title: 'Bluerock',
    url: 'https://www.bluerocknigeria.com/',
    category: 'Booking Application',
    type: 'booking',
    img: '/images/bluerock.png',
    ProjectHeader: {
      title: 'Bluerock Nigeria Limited',
      publishDate: 'Jan 26, 2024',
      tags: 'API / Backend / Frontend',
    },
    ProjectImages: [
      { title: 'Bluerock Home Page', img: '/images/bluerock.png' },
      { title: 'Bluerock Booking Page', img: '/images/bluerock-project.png' },
      { title: 'Bluerock Book Now', img: '/images/bluerock-book.png' },
      { title: 'Bluerock Payment Page', img: '/images/bluerock-pay.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { title: 'Name', details: 'BLUEROCK NIGERIA COMPANY LIMITED', link: 'https://www.bluerocknigeria.com' },
        { title: 'Services', details: 'Web Development', link: '#' },
        { title: 'Website', details: 'bluerocknigeria.com', link: 'https://www.bluerocknigeria.com' },
        { title: 'Phone', details: '(Manager) +234 803 916 2139', link: '' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'This application is an hotel booking management platform that allows users to be able to book or reserve an apartment for the period',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Typescript', 'NestJs', 'NodeJs', 'AWS amplify', 'Docker', 'Travis CI', 'AWS EC2', 'Jira', 'NextJs', 'React Native'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'Reservation Management System',
          details: [
            'Developed a robust reservation management system that allows users to book various services offered by Bluerock, such as hotel rooms.',
            'Implemented features for users to search and browse available rooms, select booking dates and times, and confirm reservations through an intuitive and user-friendly interface',
            'Integrating with external APIs or services, such as Providus bank Payment APIs, to process bookings securely and efficiently while maintaining data consistency and integrity',
          ],
        },
        {
          point: 'User Profile',
          details: [
            'Developed APIs that allows users to update, delete, and retrieve there data',
            'Developed the feature for users to edit there location and find all available rooms in there different locations',
          ],
        },
        {
          point: 'Frontend Deployment with AWS Amplify',
          details: [
            'Utilize AWS Amplify to automate the deployment of the Bluerock frontend application',
            'Set up continuous deployment pipelines to automatically deploy changes from your Git repository to AWS Amplify',
            "Leverage Amplify's hosting service to serve the frontend application with global scalability and low latency",
            'Configure custom domains, SSL certificates, and CDN caching to optimize performance and security.',
          ],
        },
        {
          point: 'Backend Continuous Integration with Travis CI',
          details: [
            'Integrate Travis CI into the backend development workflow to automate Continuous Integration processes.',
            'Configure Travis CI to run tests, linters, and other quality checks whenever changes are pushed to the backend repository.',
            "Utilize Travis CI's build matrix feature to test the application across different environments and configurations.",
            'Incorporate code coverage analysis tools to ensure sufficient test coverage and quality assurance',
          ],
        },
        {
          point: 'Backend Deployment with Docker and EC2',
          details: [
            'Containerize the Bluerock backend application using Docker to ensure consistency and portability across different environments.',
            "Set up a Dockerfile to define the application's dependencies, environment, and runtime configuration.",
            'Utilize Docker Compose for managing multi-container environments, such as databases or caching layers.',
            'Deploy the Dockerized backend application to Amazon EC2 instances for scalable and reliable hosting.',
            'Leverage EC2 Auto Scaling to automatically adjust the number of EC2 instances based on traffic demand, ensuring high availability and cost-effectiveness.',
          ],
        },
      ],
    },
  },
  {
    title: 'School Delight',
    url: '...',
    category: 'Academic Application',
    type: 'mobile',
    img: '/images/mobile.png',
    ProjectHeader: {
      title: '',
      publishDate: 'Jul 26, 2021',
      tags: 'Mobile / Google Play Store',
    },
    ProjectImages: [
      { title: 'School Delight Student Dashboard', img: '/images/mobile.png' },
      { title: 'School Delight Login', img: '/images/mobile-2.png' },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { title: 'Name', details: 'School Delight Academic', link: '' },
        { title: 'Services', details: 'Mobile Development', link: '' },
        { title: 'Website', details: '', link: '' },
        { title: 'Phone', details: '(Manager) +234 803 916 2139', link: '' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'To create an academic application that runs on any mobile device. This allows student, parent/guidance and staff of the academic to access the school portal, and monitor academic performance of the student',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Dart', 'Flutter', 'Flutter Provider'],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          point: 'UI Design Implementation',
          details: [
            'Worked on the authentication designed screen using flutter',
            'Working on the student dashboard screen',
          ],
        },
      ],
    },
  },
];

const aboutSeedData = [
  { bio: 'Solution-driven professional excelling in a highly collaborative work environment, finding solutions to challenges and focused on customer satisfaction.', order: 0 },
  { bio: 'Proven experience developing consumer-focused products using Technology tools like NestJS, NodeJS/Express, Java (Spring Boot), SPA (ReactJS), NoSql, SQL, Microservices, AI powered app using LangchainJS, and other technologies and architectures.', order: 1 },
  { bio: 'Experience building products (like fintech, social application, pension application, vehicle tracking application, AI powered contextual app, and more) for cross-functional app, meeting highest standards for design, user experience, best practices, usability and speed.', order: 2 },
  { bio: 'My collaboration, people-centric nature, and compassion have afforded me excellent software development skills. Within the last 6+ years, I have also strengthened my development skill in Javascript, Typescript and with growth mindedness I have indulged in self development for better productivity and more development skills which include Java (Spring Boot), Generative AI and more.', order: 3 },
  { bio: 'My other achievements includes applications like loan and savings application, booking system, fintech application with customary banks like Stanbic IBTC pension app, Guarantee Trust Bank fastlane application and more.', order: 4 },
  { bio: "I respond to challenges by designing and developing solutions and building web applications aligned to customer's needs and services.", order: 5 },
  { bio: 'I translate solutions into code and working across many different APIs, third-party integrations and databases.', order: 6 },
];

const clientsSeedData = [
  { title: 'Heritage', img: '/images/brands/heritage.jpeg' },
  { title: 'Waya Multilinks', img: '/images/brands/waya.jpeg' },
  { title: 'Stanbic', img: '/images/brands/standbic.png' },
  { title: 'NowNow', img: '/images/brands/nownow.jpeg' },
];

async function seed() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not set in .env');
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  const ProjectModel = mongoose.model('Project', ProjectSchema);
  const AboutModel = mongoose.model('About', AboutSchema);
  const ClientModel = mongoose.model('Client', ClientSchema);

  // Clear existing data
  await ProjectModel.deleteMany({});
  await AboutModel.deleteMany({});
  await ClientModel.deleteMany({});
  console.log('Cleared existing data');

  // Seed data
  await ProjectModel.insertMany(projectsSeedData);
  console.log(`Seeded ${projectsSeedData.length} projects`);

  await AboutModel.insertMany(aboutSeedData);
  console.log(`Seeded ${aboutSeedData.length} about entries`);

  await ClientModel.insertMany(clientsSeedData);
  console.log(`Seeded ${clientsSeedData.length} clients`);

  await mongoose.disconnect();
  console.log('Seed completed successfully!');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
