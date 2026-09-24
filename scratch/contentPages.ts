export interface ContentPage {
  slug: string;
  title: string;
  category?: string;
  type: 'product' | 'community' | 'teardown' | 'initiative';
  content: string;
  externalUrl: string;
  ogImage?: string;
}

// Helper function to generate slug from title
function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const contentPages: ContentPage[] = [
  {
    slug: 'e-dam-cms',
    title: 'e-DAM CMS',
    category: 'Product',
    type: 'product',
    externalUrl: 'https://nabhishek.notion.site/Aveha-Solution-Pvt-Ltd-e-DAM-CMS-21c0afeb2ea880368718c8eb5a494eae',
    content: `
      <p class="text-lg font-semibold mb-2"><strong>My Role:</strong> Founder & CEO</p>
      
      <p class="mb-6"><strong>Project Summary:</strong> As the founder of Aveha Solutions, I led the strategy and development of a comprehensive SaaS platform—the "Engineering Accelerator"—designed to revolutionize college IT infrastructure. Our mission was to solve critical administrative, academic, and operational inefficiencies for engineering colleges by providing a fully automated, end-to-end management system.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis</h2>
      
      <p><strong>Problem Definition:</strong> The core problem was the severe inefficiency within college operations due to a lack of integrated digital tools. My market research identified several key pain points:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Manual administrative processes were time-consuming and prone to error.</li>
        <li>The auditing process for necessary accreditations was entirely manual.</li>
        <li>Placement and Training exercises were improper and disconnected.</li>
        <li>Academic advancement procedures were inefficient.</li>
        <li>The management of research and innovation was also a manual process.</li>
      </ul>
      
      <p><strong>Competitive Landscape:</strong> The market was not empty. We analyzed existing CMS platforms like EducateNXT, Academic by Sersoft, and CampX. We recognized that these established players were ahead in many areas, which validated the market need. Our opportunity was to differentiate by providing deeper and more comprehensive integrations.</p>
      
      <p><strong>Target Audience:</strong> Our target customers were engineering colleges in India that were:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Seeking an efficient and affordable Management system.</li>
        <li>Looking to automate processes, specifically for accreditation.</li>
        <li>Looking for affordable and accessible placement and training solutions.</li>
      </ul>
      
      <h2>Phase 2: Strategy & Definition</h2>
      
      <p><strong>Product Vision:</strong> The vision was to create a single SaaS tool that offered a comprehensive, modularized, and automated solution for re-engineering college management. This solution would span the entire student lifecycle.</p>
      
      <p><strong>Detailed Feature Breakdown (by Stakeholder):</strong> The platform was designed with a rich feature set for all key stakeholders:</p>
      
      <p><strong>For Students:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Start-up and Research Idea Pool</li>
        <li>Portfolio Development</li>
        <li>Fee Payment Management</li>
        <li>Club Management</li>
        <li>Hostel and Transportation Management</li>
        <li>Official Documentation on Blockchain</li>
        <li>Start-up Mentorship and Resources</li>
      </ul>
      
      <p><strong>For Faculty:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Students Grade Documentation</li>
        <li>Faculty On-Boarding System</li>
        <li>Faculty Information System</li>
        <li>Accreditation Automation Report Generation and Documentation</li>
        <li>Faculty Payroll System</li>
        <li>Research Documentation</li>
        <li>Faculty Upskilling Programs</li>
        <li>Timetable Management</li>
        <li>Course Content Management</li>
      </ul>
      
      <p><strong>For Management:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>College Scheme Applications</li>
        <li>Placement and Companies Listing</li>
        <li>Examination Scheduling and Management</li>
        <li>Academic Calendar, Notification and Communication System</li>
        <li>Start-up Information and Documentation</li>
      </ul>
      
      <p><strong>Unique Selling Points (USPs):</strong> Our key strategic differentiators were:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>A total end-to-end automated management application.</li>
        <li>Direct alignment with the Accreditation System to improve college rankings.</li>
        <li>Integration with Government Grant Schemes for university IT infrastructure.</li>
        <li>A modularized platform with payments based on usage.</li>
        <li>Dedicated personal assistance for each college.</li>
        <li>Regular updates based on stakeholder requirements.</li>
      </ul>
      
      <p><strong>Business Model Canvas:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Value Proposition:</strong> Automate processes to save time, resources, and manpower; provide accessible placement and training opportunities; offer dedicated personal assistance.</li>
        <li><strong>Key Partners:</strong> National Board of Accreditation, NAAC, State University Accreditation Councils, placement and training providers, and companies.</li>
        <li><strong>Key Activities:</strong> Accreditation Process Automation, placement/training services, recruitment advancement, and data/fee management.</li>
      </ul>
      
      <h2>Phase 3: Execution</h2>
      
      <p><strong>Development Process Roadmap:</strong> I laid out a clear, 6-step business process:</p>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Market Research:</strong> Understand the current applications and pain points through in-person meetings with colleges, industrial mentors, and incubators.</li>
        <li><strong>MVP Development:</strong> Build a Minimum Viable Product for colleges to use.</li>
        <li><strong>Proof of Concept (POC):</strong> Demonstrate the solution's value proposition through colleges.</li>
        <li><strong>Beta Testing:</strong> Test the MVP with college management and students to gather user feedback and update as per their needs.</li>
        <li><strong>Initial Clients:</strong> Onboard an initial cohort of 10 colleges.</li>
        <li><strong>Full Application Development:</strong> Complete the development of all modules and begin sales.</li>
      </ol>
      
      <p><strong>Core Leadership Team:</strong> I assembled a "Super Team" with defined executive roles:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Abhishek Nagaraja - CEO:</strong> Founder of e-DAM with 2 years of experience in the engineering sector.</li>
        <li><strong>Vishnu Nadella - CTO:</strong> A technophile, autodidact, and the former AI/ML Lead for e-DAM.</li>
        <li><strong>Nayan Kanaparthi - CBO:</strong> An SIB Alumnus at Suzuki Innovation Centre and a Microsoft for Start-ups Founder.</li>
      </ul>
      
      <h2>Phase 4: Validation</h2>
      
      <p><strong>Market Validation:</strong> The existence of established competitors like CampX served as powerful market validation, proving that colleges were willing to pay for a solution to these problems.</p>
      
      <p><strong>Go-to-Market & Validation Strategy:</strong> Our GTM strategy was centered on building trust through a 6-month beta testing period to showcase use cases and demonstrate ROI before asking for a commitment. This would lead into our subscription models:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Yearly Subscription:</strong> Cost calculated based on the number of students.</li>
        <li><strong>Modularized Subscription:</strong> Cost calculated based on the specific functions required.</li>
      </ul>
      
      <h2>Phase 5: Impact & Growth</h2>
      
      <p><strong>Market Size & Business Goals:</strong> We conducted a thorough market analysis to define our growth targets:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Total Available Market (TAM):</strong> 1000 Crores/year (from 10,000 Colleges).</li>
        <li><strong>Serviceable Available Market (SAM):</strong> 500 Crores/year (from 5,000 Colleges).</li>
        <li><strong>Serviceable Obtainable Market (SOM):</strong> A target of <strong>50 Crores/year</strong> from <strong>500 colleges</strong>.</li>
      </ul>
      
      <p><strong>Monetization Strategy:</strong> The business was designed with three core revenue streams:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>A recurring Subscription Model.</li>
        <li>Community Commercialization.</li>
        <li>Fees from Placement and Training services.</li>
      </ul>
      
      <h2>Phase 6: Retrospective & Learnings</h2>
      
      <p><strong>Outcome & Strategic Decision:</strong> The decision was made not to move forward with the full-scale development and launch of the business.</p>
      
      <p><strong>Key Learning: The Necessity of In-Person Operations:</strong> The primary reason for halting the project was my relocation to the USA. I learned that a venture of this nature, which requires building deep trust with traditional institutions like colleges and navigating local funding ecosystems in Hyderabad, critically needed dedicated, in-person leadership to succeed. The required progress was not feasible to manage remotely, leading to the strategic decision to pause the initiative.</p>
    `,
  },
  {
    slug: 'mavmarket',
    title: 'MavMarket',
    category: 'Initiative',
    type: 'initiative',
    externalUrl: 'https://nabhishek.notion.site/MavMarket-1bb0afeb2ea880208a3ffd467a9d234e',
    content: `
      <p class="text-lg font-semibold mb-2"><strong>My Role:</strong> Main Organizer & Team Lead</p>
      
      <p class="mb-6"><strong>Project Summary:</strong> As a flagship initiative of the Entrepreneurship Club, I founded and organized MavMarket, a recurring, on-campus marketplace for student entrepreneurs. My role was to manage the entire event lifecycle, from initial strategy and vendor onboarding to day-of execution and post-event analysis, creating a platform that generated a significant economic and cultural impact at the University of Texas at Arlington.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis</h2>
      
      <p><strong>Problem:</strong> I identified that student creators and side-hustlers at UTA had tangible products but no dedicated, low-risk platform on campus to sell them, test market demand, and gain real-world sales experience.</p>
      
      <p><strong>Opportunity:</strong> The opportunity was to create a physical marketplace to serve as the "Build" pillar of our club's "Learn, Network, Build" framework, empowering student entrepreneurs to move beyond theory and into real-world commerce. The target audience included student vendors and the entire Arlington community as customers.</p>
      
      <h2>Phase 2: Strategy & Definition</h2>
      
      <p><strong>Event Design:</strong> The strategy was to create a high-impact, single-day marketplace event each semester, held in high-footfall locations like the Central Library and Brazos Park.</p>
      
      <p><strong>Vendor Management:</strong> We used a formal application process, opening it more than a month and a half before each event to allow for proper planning and vendor placement.</p>
      
      <p><strong>Key Differentiators:</strong> Unlike a standard fair, MavMarket was positioned as a "day for celebrating the side-hustlers or the doers of the university," creating a unique platform for all types of student-run ventures.</p>
      
      <h2>Phase 3: Execution</h2>
      
      <p><strong>Team & Planning:</strong> As the main organizer, I oversaw five key pillars: Marketing, Vendor Application, Vendor Engagement, Sponsorship, and Logistics. We collaborated with a department designer (Kara Johnson), secured sponsorships from entities like the UTA College of Business, and partnered with the Center for Entrepreneurship and Technology Development (CETD).</p>
      
      <p><strong>Logistics:</strong> My team and I managed all event logistics, from ordering and arranging tables and chairs a day in advance to implementing a numbered system for easy vendor check-in and navigation.</p>
      
      <h2>Phase 4: Validation</h2>
      
      <p><strong>Success Metrics:</strong> We validated the event's success by tracking vendor-focused metrics, including the different categories of vendors, revenue generated per vendor, and the vendor retention rate.</p>
      
      <p><strong>Feedback Loop:</strong> We established a direct feedback loop by sending a feedback form to all vendors via email after each event, allowing us to systematically collect and act on both positive and constructive feedback.</p>
      
      <h2>Phase 5: Impact & Growth</h2>
      
      <p><strong>Growth & Engagement:</strong> The event demonstrated significant growth, scaling from <strong>60 vendors</strong> in its first semester to <strong>130 vendors</strong> by its third. It also drew a large audience, achieving a peak attendance of <strong>3,000 people</strong> at a single event.</p>
      
      <p><strong>Economic Impact:</strong> MavMarket created a significant economic impact on campus. Over three semesters, the event generated a <strong>Total Estimated Revenue of $120,000</strong> for student entrepreneurs.</p>
      
      <p><strong>Impact on Campus Culture:</strong> The event's success visibly increased student entrepreneurship activity across the university, encouraging more students to sell their products and get early validation for their ideas.</p>
      
      <h2>Phase 6: Retrospective & Learnings</h2>
      
      <p><strong>Biggest Challenges:</strong> The primary challenges were operational and branding-related. It was difficult to ensure our organizing body, the Entrepreneurship Club, received brand recognition alongside the popular "MavMarket" name. We also faced logistical risks like weather for our outdoor venues and challenges in systematically collecting vendor feedback.</p>
      
      <p><strong>Key Learning: The Importance of Structured Operations.</strong> My most important personal learning was a deep understanding of what it takes to run a large, recurring event. I learned the critical importance of having a strong team with clear roles and responsibilities, proper long-term planning, maintaining a Standard Operating Procedure (SOP), and leveraging data collection and analysis for continuous improvement.</p>
      
      <p><strong>Final Outcome: Sustainable Growth.</strong> The initiative was a proven success and built to last. MavMarket is continuing under the new leadership of the Entrepreneurship Club, with a commitment to making it bigger and better every semester, solidifying its legacy as a key campus event.</p>
    `,
  },
  {
    slug: 'e-dam-spotlight',
    title: 'e-DAM Spotlight',
    category: 'Product',
    type: 'product',
    externalUrl: 'https://nabhishek.notion.site/e-DAM-Spotlight-1bb0afeb2ea880e39c4ed3d746ce20c0',
    content: `
      <h2>Initiative: The e-DAM Spotlight Podcast</h2>
      
      <p class="text-lg font-semibold mb-2"><strong>My Role:</strong> Founder & Executive Producer</p>
      
      <p class="mb-6"><strong>Project Summary:</strong> I created and produced the "e-DAM Spotlight," a podcast and YouTube series, to serve as the voice of our community and to democratize inspiration. The mission was to address the lack of relatable role models for students in non-elite institutions by showcasing authentic stories of people who overcame fear and failure to build successful careers in technology.</p>
      
      <h3>Key Accomplishments</h3>
      <ul class="list-disc ml-6 mb-6">
        <li>Produced and released a <strong>13-episode podcast season</strong> over a 3-month period.</li>
        <li>Generated over <strong>13,200 views</strong> and accumulated more than <strong>490 hours</strong> of watch time.</li>
        <li>Grew the YouTube channel by <strong>277 subscribers</strong> through targeted content.</li>
        <li>Achieved over <strong>211,500 impressions</strong>, significantly boosting brand visibility.</li>
      </ul>
      
      <h2>Phase 1: Discovery & Opportunity Analysis</h2>
      
      <p><strong>Problem:</strong> I identified a "narrative gap" where success stories from Tier-1 institutions dominated, leaving students in other colleges without relatable role models and fueling a fear of failure.</p>
      
      <p><strong>Opportunity:</strong> I saw an opportunity to create a media platform that was "for a student, by being a student," to "enlighten, educate, and inspire" by featuring authentic stories of overcoming adversity. The idea for the podcast emerged on October 7th from a conversation with Vivek about creating a podcast to spread awareness.</p>
      
      <h2>Phase 2: Strategy & Definition</h2>
      
      <p><strong>Content Strategy:</strong> The strategy focused on two key pillars:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Inspirational Journeys:</strong> Long-form interviews focusing on the human side of building a career, with themes like "From Failure to Success" and "Passion to Purpose".</li>
        <li><strong>A "Tech Line" of Podcasts:</strong> In-depth episodes on specific technologies like Data Science and Cloud Computing, featuring industry experts.</li>
      </ul>
      
      <p><strong>Channel Strategy:</strong> We chose YouTube as the primary distribution platform for our long-form video content, positioning the channel as a resource for "passionate engineers and entrepreneurs."</p>
      
      <h2>Phase 3: Execution</h2>
      
      <p><strong>Team & Roles:</strong> As Executive Producer, I assembled and managed a multifunctional team to handle all aspects of the podcast's production and promotion. The team was structured with clear roles:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Hosts:</strong> Abhishek Nagaraja, Vivekananda Gavini, Sneha, and Srikanth Reddy.</li>
        <li><strong>Management:</strong> Sujay Daniel and Nitya.</li>
        <li><strong>Design Team:</strong> E F Trisha Angeline (Head of Design), U ABHISHEK (Head of Design Department), and Hemanth Vakati.</li>
        <li><strong>Content Team:</strong> Sujay Daniel and Chandrika Barripati (Responsible for descriptions, titles, subtitles, and captions).</li>
        <li><strong>Outreach Manager:</strong> Sri Charan Lakkaraju.</li>
        <li><strong>Video Editing Team:</strong> Suhith, Hemanth, Joseph, and Sai Kumar.</li>
        <li><strong>Social Media Team:</strong> Shiva Sai Reddy Mikkili and Varshin Tej Pabba.</li>
        <li><strong>Marketing Team:</strong> Md Baber Yaseen and Sujay Daniel.</li>
      </ul>
      
      <p><strong>Guest Sourcing:</strong> The guest list was a direct result of my personal networking within the Hyderabad tech ecosystem.</p>
      
      <p><strong>Production Workflow:</strong> To maintain a consistent weekly release schedule, we used a "batch production" model, recording 4-5 episodes in a single day with iPhones and editing with Adobe Premiere Pro.</p>
      
      <p><strong>Featured Soundbite:</strong></p>
      <blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
        "Most startups fail by chasing ideas instead of solving problems. Identify a real customer problem, validate it, build your solution, and don't seek funding until you have proven traction."
        <br />
        <span class="text-sm">— From "Why Most Startups Fail and How to Avoid It?" (Ep #5)</span>
      </blockquote>
      
      <h2>Phase 4: Validation</h2>
      
      <p><strong>Defining Success:</strong> While formal growth tracking was paused, we defined success with KPIs like Views, Subscribers, creation of short-form content, and traffic redirected to the main e-DAM community platforms.</p>
      
      <p><strong>Performance Analysis:</strong> Our most popular episodes, garnering nearly 2,000 views each, featured guests who had an existing follower base and shared compelling, experience-based content.</p>
      
      <p><strong>Actionable Listener Feedback:</strong> We gathered direct feedback that provided a clear roadmap for future improvements, including investing in better audio/visual equipment and "hardening" the interview questions.</p>
      
      <h2>Phase 5: Impact & Growth</h2>
      
      <p><strong>Audience Growth & Key Metrics:</strong> The podcast successfully grew a significant audience, validating our content strategy. The channel's key performance metrics included:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Total Views:</strong> <strong>13,261</strong></li>
        <li><strong>Total Subscribers Gained:</strong> <strong>277</strong></li>
        <li><strong>Total Watch Time:</strong> Over <strong>490 hours</strong></li>
        <li><strong>Brand Reach:</strong> Over <strong>211,500 impressions</strong></li>
      </ul>
      
      <p><strong>Body of Work: Complete 13-Episode Season</strong> The primary output of this initiative was a full season of 13 episodes released between March and June 2023.</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Ep #0: Know Your Hosts</strong> - featuring The e-DAM Spotlight hosts</li>
        <li><strong>Ep #1: Career 101</strong> - featuring Narasimha Mikkilineni</li>
        <li><strong>Ep #2: How Working on Your Skills Gets You Closer to Your Dreams!</strong> - featuring Sai Krishna</li>
        <li><strong>Ep #3: How to Turn Your Passion into Profit</strong> - featuring Satya</li>
        <li><strong>Ep #4: How T‑hub Incubated "Starbuzz" is Making Waves…</strong> - featuring Krishna Priya</li>
        <li><strong>Ep #5: From Success to Failure… Why Startups Fail & Avoid It?</strong> - featuring Manoj Kumar Badagharwala</li>
        <li><strong>Ep #6: Passion to Purpose: Turning Your Interests into a Career</strong> - featuring Madhulash Babu</li>
        <li><strong>Ep #7: Connect, Collaborate, and Create: Power of Networking & Community</strong> - featuring Siv Ram Shastri Jonnalagadda</li>
        <li><strong>Ep #8: From Vardhaman College to SEARCE: The Journey...</strong> - featuring Akash Mallareddy</li>
        <li><strong>Ep #9: Mastering Full Stack Development</strong> - featuring Adnan Ali Khan</li>
        <li><strong>Ep #10: From Ideas to Execution: Navigating the Journey...</strong> - featuring Abhishek Nagaraja, Srikanth Reddy, Yuvraj</li>
        <li><strong>Ep #11: Innovating for a Smarter Future: Usha Sai's Research Journey</strong> - featuring Usha Sri Sai</li>
        <li><strong>Ep #12: Start Your Cloud Computing Journey Here</strong> - featuring Sathyajith</li>
      </ul>
      
      <h2>Phase 6: Retrospective & Learnings</h2>
      
      <p><strong>Biggest Challenge: Resource Constraints.</strong> Our primary challenge was being underfunded. This limited our ability to invest in a better recording environment and equipment, and a lack of budget for dedicated video and poster editors constrained our time to be more creative.</p>
      
      <p><strong>Key Learning: The Reality of End-to-End Production.</strong> My most important personal learning was a deep appreciation for the sheer amount of work it takes to manage a podcast from start to finish. The experience provided invaluable insight into the entire lifecycle, from ideation and guest sourcing to post-production, marketing, and distribution.</p>
      
      <p><strong>Final Outcome:</strong> The project was paused in 2023 after my relocation to the USA, as the operational requirements were best managed by an in-person team.</p>
    `,
  },
  {
    slug: 'e-dam-community',
    title: 'e-DAM Community',
    category: 'Community',
    type: 'community',
    externalUrl: 'https://nabhishek.notion.site/e-DAM-Community-1bb0afeb2ea8806689c1c3d2be95aaa9',
    content: `
      <h2>Initiative: e-DAM Community</h2>
      
      <p class="text-lg font-semibold mb-2"><strong>My Role:</strong> Founder & Product Lead</p>
      
      <p class="mb-6"><strong>Project Summary:</strong> As the founder of the e-DAM (e-Designing and Marketing) Community, I identified a critical skills gap in India's technology sector and built a comprehensive ecosystem to solve it. Our mission was to transform the engineering experience by providing students from Tier-2 and Tier-3 colleges <strong>in Hyderabad, India,</strong> with the practical skills, professional network, and real-world experience required to build successful careers.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis (The "Why")</h2>
      
      <p><strong>Problem Definition:</strong> The core problem was a severe talent gap. While industry data showed that up to 95% of engineers across India were not considered fit for IT jobs, I focused on the local ecosystem. My focus was on 2nd and 3rd-tier engineering colleges <strong>in Hyderabad</strong>, where students lacked awareness of current technologies and had limited access to real-world opportunities.</p>
      
      <p><strong>Initial Research & Validation:</strong> I conducted surveys of <strong>engineering students in Hyderabad</strong> (with 46 responses) that validated my assumptions with hard data:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Skills & Awareness Gap:</strong> 63% of local students felt their peers "need more awareness" of current technologies.</li>
        <li><strong>Experience & Opportunity Gap:</strong> A staggering 80.5% of these students reported having no previous internship experience. 60.9% felt that existing platforms were not helping them get internships directly from college.</li>
        <li><strong>Networking Gap:</strong> 87% saw a gap between student entrepreneurs and developers within their ecosystem, and nearly half (47.8%) stated they did not have a good professional network.</li>
        <li><strong>Desire for a Solution:</strong> 89.1% of surveyed students said they would like to be part of a community like e-DAM to kickstart their journey in tech.</li>
      </ul>
      
      <h2>Phase 2: Strategy & Definition (The "What")</h2>
      
      <p><strong>Product Vision & Roadmap:</strong> My vision was to create a multi-faceted ecosystem to guide a student from learning to earning. I developed a strategic roadmap to execute this vision:</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>March 2023 (e-DAM Community):</strong> The foundational step was to establish technical communities and "Technology Pools" directly within colleges across Hyderabad.</li>
        <li><strong>January 2024 (e-DAM Century):</strong> The next phase focused on upskilling community members in their chosen technology via a structured program, prototyped by our MVP.</li>
        <li><strong>April 2024 (e-DAM Space):</strong> The plan was to launch a social networking application for tech collaboration and project work.</li>
        <li><strong>June 2024 (Freelance):</strong> The final stage focused on providing guidance and traction for student-led startups.</li>
      </ul>
      
      <p><strong>The Core Solution (MVP):</strong> The <strong>#100DaysOfTechnology</strong> program was the Minimum Viable Product (MVP) for our "e-DAM Century" app concept. It provided a structured, 100-day curriculum for 9 key technology tracks.</p>
      
      <h2>Phase 3: Execution (The "How")</h2>
      
      <p><strong>Grassroots Execution:</strong> I drove growth by establishing "Technology Pools" and official e-DAM clubs within Hyderabad colleges like the Institute of Aeronautical Engineering (IARE). This direct, on-the-ground presence was supported by organizing over 50 online and offline events.</p>
      
      <p><strong>Resource Management:</strong> All learning resources and roadmaps were curated and managed in a public GitHub organization, ensuring free and easy access for all members.</p>
      
      <h2>Phase 4: Validation (The "Proof")</h2>
      
      <p><strong>Program Traction:</strong> The #100DaysOfTechnology MVP was a significant success. We successfully <strong>enrolled over 200 students</strong> across <strong>10 different colleges in the Hyderabad region</strong>.</p>
      
      <p><strong>Value Proposition Validation:</strong> Our ultimate validation came from securing <strong>40+ internships</strong> for our members. We built relationships with companies like NFC Solutions, whose CMO lauded our "excellent talent pool".</p>
      
      <p><strong>Academic Endorsement:</strong> The initiative received strong validation from academic leaders like Dr. Madhubala (HOD of CSE, IARE), who stated our approach was "what exactly is needed for engineering students".</p>
      
      <h2>Phase 5: Impact & Growth (The "Results")</h2>
      
      <p><strong>Team & Organization Structure:</strong> Building this community was only possible by recruiting and leading a large, multifunctional volunteer organization primarily composed of students and professionals <strong>from the Hyderabad area</strong>. The team included:</p>
      
      <p><strong>Executive & Management Leadership:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Vivekananda Gavini - Technical Lead</li>
        <li>Yasasvi Mandapati - Community Lead</li>
        <li>Srikanth Reddy - Marketing Lead</li>
        <li>U ABHISHEK - Head of Design Department</li>
        <li>Chandrika Barripati - Deputy Chief Technology Officer</li>
        <li>Nayan Kanaparthi - Community Manager</li>
        <li>Kausthub Samavedam - Head of Marketing</li>
        <li>MADKI SAI CHARAN - Head of Department</li>
        <li>Hemanth Naidu - Ex-President at e-DAM IARE</li>
        <li>Mythri Borra - Program Manager</li>
        <li>Vemula Rohan - Lead at e-DAM</li>
        <li>Shaik Irfan - Programming lead</li>
        <li>Yuvraj K - Human Resources Officer</li>
      </ul>
      
      <p><strong>Marketing, Public Relations & Content:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Yashraj Thakur, Lakshitha Mendikar, Ram Surya Chelluboyina - Marketing Managers</li>
        <li>Sree Praneeth Mohan Adabala - Head of Public Relations</li>
        <li>Bhashitha Bogireddy, Sabhavath Shashi, Sujay Daniel, Syed Musharaf - Public Relations</li>
        <li>Keerthi Nori - Senior Content Writer</li>
        <li>KAMATHAM SOUJANYA, Konda Tejdeep - Lead Content Writers</li>
        <li>Ammakolla Sreeja - Social Media Analyst</li>
        <li>Yagnesh Reddy Koramoni, Md Baber Yaseen - Social Media Leads</li>
      </ul>
      
      <p><strong>Technical, Design & Product Mentorship:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Varshin Tej Pabba, Shiva Sai Reddy Mikkili, Bingi Uday kumar - Cybersecurity Mentors</li>
        <li>Ajay Medidhi - Web Developer Mentor</li>
        <li>Narendra, DEVARLA BHIMESH - App Development Mentors</li>
        <li>Sarat Dantu - Lead Android Application Developer</li>
        <li>E F Trisha Angeline - Head of Design</li>
        <li>Aditya J - Senior Graphic Designer</li>
        <li>Kameswara Sai Srikar Manda - Lead User Interface Designer</li>
        <li>Franklin K, Archana Kagithapu, Pranati Tantravahi, Riktha Reddy - Designers</li>
        <li>Dindakurthi Kushal - Video Editor</li>
      </ul>
      
      <p><strong>Community & Campus Operations:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Harshika P., Asma Begum - Campus Ambassadors</li>
        <li>Anushree A, SAI ABHINAV SANDHIRI - Curators at e-DAM IARE</li>
        <li>Shreya Ravipalli - Business Analyst</li>
      </ul>
      
      <p><strong>Testimonials & Social Proof:</strong> The impact of our work is best reflected in the voices of our members and partners.</p>
      
      <blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
        "e-DAM has an excellent talent pool. Several of them have been interning directly under me for the past 6 months, and I can attest to their talent, work ethic, and ability to learn quickly. They're very driven."
        <br />
        <span class="text-sm">— Anupriya Gupta, Chief Marketing Officer, NFC Solutions USA</span>
      </blockquote>
      
      <blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
        "e-DAM initiated with a thought of community development by same community... Your dreams are came into reality and creating vibrations in thoughts, skills and outreach of student community. I belief this is a right and needed approach to create a healthy environment."
        <br />
        <span class="text-sm">— Dr. Madhubala, Head of Department of CSE, IARE</span>
      </blockquote>
      
      <blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
        "I've been working as a frontend developer for the past 5 months... All of this was made possible by Abhishek (Founder of e-DAM). He has provided me with this opportunity And Edam supported me in developing those abilities."
        <br />
        <span class="text-sm">— Shakir Farhan, Software Developer Intern</span>
      </blockquote>
      
      <blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
        "Joining e-DAM was the best decision of my life. e-DAM showed me the path to work towards my future goals and explore my strengths and interests... Can't thank you enough Abhishek for starting this club and always believing in us."
        <br />
        <span class="text-sm">— Nishnath Gosh, Software Developer Intern</span>
      </blockquote>
      
      <h2>Phase 6: Retrospective & Learnings</h2>
      
      <p><strong>Key Learning: Small Initiatives, Big Impact.</strong> My biggest lesson was that a focused, lean initiative like the #100DaysOfTechnology MVP could generate a massive impact by solving a specific, data-validated problem for our users.</p>
      
      <p><strong>Retrospective: Keep Working, Never Give Up.</strong> My primary advice to myself would be to trust the process. Building a community from the ground up presented numerous challenges, but the journey reinforced that consistent, dedicated work toward a clear purpose is the key to overcoming any obstacle.</p>
    `,
  },
  {
    slug: 'entrepreneurship-club-uta',
    title: 'Entrepreneurship Club UTA',
    category: 'Community',
    type: 'community',
    externalUrl: 'https://nabhishek.notion.site/Entrepreneurship-Club-1bb0afeb2ea880c99db1f741c10f967d',
    content: `
      <h2>Initiative: Entrepreneurship Club</h2>
      
      <p class="text-lg font-semibold mb-2"><strong>My Role:</strong> Founder & 2024 President</p>
      
      <p class="mb-6"><strong>Project Summary:</strong> As the founder of the Entrepreneurship Club at the University of Texas at Arlington, I built an on-campus ecosystem from the ground up. My mission was to create a central hub for students interested in startups and side-hustles, providing them with the community, content, and practical opportunities needed to thrive.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis</h2>
      
      <p><strong>Problem:</strong> I observed that while UTA had many ambitious students, there was no central place for those with an entrepreneurial spirit to connect, collaborate, and find resources.</p>
      
      <p><strong>Opportunity:</strong> The opportunity was to build this missing ecosystem, creating a platform that would serve as a launchpad for student-led ventures and initiatives like MavMarket and MavsThink.</p>
      
      <h2>Phase 2: Strategy & Definition</h2>
      
      <p><strong>Club Structure:</strong> I established a formal club structure with dedicated Marketing, Design, Program, and Logistics teams to execute our vision.</p>
      
      <p><strong>Core Programs:</strong> Our strategy was built on a "Learn, Network, Build" framework, which included four key programs:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>The "Where's the Funding" speaker series</li>
        <li>The MavsThink business hackathon</li>
        <li>The MavMarket student marketplace</li>
        <li>The #100DaysOfEntrepreneurship resource roadmap</li>
      </ul>
      
      <h2>Phase 3: Execution</h2>
      
      <p><strong>Marketing & Outreach:</strong> I executed a multi-channel outreach strategy by building relationships with College of Business professors, engaging the Center for Entrepreneurship and Technology Development (CETD), and partnering with other student organizations.</p>
      
      <p><strong>Operational Cadence:</strong> The club operated on a fast-paced, event-driven schedule, with weekly executive meetings focused on tactical planning for marketing, attendance, and logistics for our near-weekly events.</p>
      
      <h2>Phase 4: Validation</h2>
      
      <p><strong>Success Metrics:</strong> We measured success through a combination of engagement metrics (event attendance, social media followers) and impact metrics (number of students developing ideas, number of active student start-ups).</p>
      
      <p><strong>Key Validation:</strong> The most powerful validation was the tangible success of our flagship initiative, MavMarket, which demonstrated significant growth in vendors, attendance, and sales over three semesters.</p>
      
      <h2>Phase 5: Impact & Growth</h2>
      
      <p><strong>Community Growth:</strong> We built an open and accessible community, attracting around 25 members to our regular events and growing our Instagram presence to approximately 450 followers.</p>
      
      <p><strong>Economic Impact:</strong> Our flagship initiative, MavMarket, created a significant economic impact on campus. Over three semesters, the event grew to feature 130 vendors in a single market and generated a <strong>Total Estimated Revenue</strong> of <strong>$120,000</strong> for student entrepreneurs.</p>
      
      <h2>Phase 6: Retrospective & Learnings</h2>
      
      <p><strong>Biggest Challenge:</strong> My biggest challenge was marketing and attracting students to entrepreneurship, especially since I was a graduate student leading a team trying to engage a large undergraduate population.</p>
      
      <p><strong>Key Learning: Know and Be Your Customer.</strong> This challenge reinforced a core product principle: you must deeply understand and empathize with your target audience to effectively create products or messages that resonate with them.</p>
      
      <p><strong>Final Outcome: A Sustainable Legacy.</strong> The club's success is demonstrated by its sustainability. At the end of my presidency, the club is still active and growing with a new president and an expanded team, proving that we successfully built a durable and valuable campus institution.</p>
    `,
  },
  {
    slug: 'clash-of-clans-teardown',
    title: 'Clash of Clans Teardown',
    category: 'Product Teardown',
    type: 'teardown',
    externalUrl: 'https://nabhishek.notion.site/Clash-Of-Clans-21c0afeb2ea880d2b928ef5402141759',
    content: `
      <h2>Clash of Clans Product Teardown: Enhancing the Social Ecosystem for Engagement & Acquisition</h2>

      <h3>1.0 Introduction & Objective</h3>
      <p class="mb-4"><strong>Executive Summary:</strong> Conducted a comprehensive product teardown on Clash of Clans' social ecosystem to unlock significant growth potential, validated by primary user survey insights (<strong>n=18</strong>) showing <strong>88%</strong> interest in enhanced sharing features and <strong>83%</strong> friction in clan discovery.</p>
      <p class="mb-6"><strong>Primary Objective:</strong> Improve clan and player discovery plus external sharing of user-generated content (UGC) to increase engagement, strengthen clan cohesion, and drive organic acquisition.</p>

      <p><strong>Initial Success Metrics (KPIs):</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Clan Discovery & Onboarding:</strong> clan join rate, search-to-join rate, clan density.</li>
        <li><strong>UGC Sharing & Virality:</strong> replay/base shares to external platforms, organic UA from social shares.</li>
        <li><strong>In-Game Engagement & Retention:</strong> average session duration, D7/D30 retention, social tab usage.</li>
        <li><strong>Veteran Engagement:</strong> participation in endgame content and mentorship tools.</li>
      </ul>

      <h3>1.3 Approach & Scope</h3>
      <ol class="list-decimal ml-6 mb-6">
        <li>Product identification and scoped objective definition.</li>
        <li>Foundational market and sentiment research.</li>
        <li>Visual/functional in-game UX analysis via screenshots.</li>
        <li>Persona development (4 key segments).</li>
        <li>Primary research survey (n=18).</li>
        <li>Synthesis, insight extraction, and problem validation.</li>
        <li>Problem-to-recommendation pairing.</li>
        <li>Impact/effort prioritization and phased roadmap.</li>
      </ol>

      <h3>2.0 User Analysis</h3>
      <p class="mb-4"><strong>Primary Persona:</strong> <strong>Alex, the Aspiring Leader</strong> (TH13, growth-oriented, struggles with recruitment and social tooling).</p>
      <p class="mb-4"><strong>Secondary Persona 1:</strong> <strong>Chloe, the Cautious Solo</strong> (plays for low-pressure progress, intimidated by clan culture).</p>
      <p class="mb-4"><strong>Secondary Persona 2:</strong> <strong>Marco, the Streamer</strong> (creator workflow blocked by no native sharing or creator tooling).</p>
      <p class="mb-6"><strong>Secondary Persona 3:</strong> <strong>David, the Dedicated Veteran</strong> (long-term player seeking fresh endgame and better mentorship systems).</p>

      <p><strong>What is already working well:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Strong core gameplay loop and strategic depth.</li>
        <li>Powerful clan concept and community potential.</li>
        <li>Consistent content updates and high production quality.</li>
        <li>Deeply loyal global player base and healthy esports ecosystem.</li>
      </ul>

      <h3>3.0 Problems, Recommendations & Prioritization</h3>

      <h4>Problem 1: No Seamless External UGC Sharing</h4>
      <p class="mb-3">Players want to share attacks and bases externally, but current workflows require manual recording/editing.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li><strong>88.9%</strong> wanted to share replays externally.</li>
        <li><strong>88.9%</strong> likely to use replay social-share button.</li>
        <li><strong>83.3%</strong> likely to share base layouts via built-in button.</li>
      </ul>
      <p><strong>Recommendation:</strong> Add native share for replays and bases with direct social actions, short links, GIF generation, and high-res image export.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> stronger player satisfaction, creator enablement, and <strong>5-10%</strong> potential lift in organic acquisition via viral loops.</p>

      <h4>Problem 2: Ineffective & Intimidating Clan/Player Discovery</h4>
      <p class="mb-3">Current discovery relies on weak recommendations and exact-name/tag behavior, causing mismatch and drop-off.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li>Over <strong>83%</strong> rated clan finding as difficult/neutral.</li>
        <li>Only <strong>13.3%</strong> found clans from in-game recommendations.</li>
        <li>Non-clan players cite pressure and uncertainty about fit.</li>
      </ul>
      <p><strong>Recommendation:</strong> Smart matching with richer filters (region/time zone/playstyle), personalized suggestions, LFC/LFP posts, and clearer preview mode.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> <strong>15-20%</strong> potential increase in clan join rates, reduced mismatch churn, and lower recruitment friction.</p>

      <h4>Problem 3: Static, Low-Value Social Hub</h4>
      <p class="mb-3">Social tab acts as a static leaderboard, not a dynamic relationship or learning surface.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li><strong>72.2%</strong> visit social tab rarely or never.</li>
        <li><strong>83.3%</strong> interested in watching friend replays from profile.</li>
      </ul>
      <p><strong>Recommendation:</strong> Build a dynamic friend activity feed, richer profiles, replay viewing, and lightweight social interactions.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> stronger social stickiness, better learning loops, and <strong>20-30%</strong> potential lift in social feature usage.</p>

      <h3>3.4 Prioritization Matrix</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>High Impact / Medium Effort:</strong> Native external UGC sharing.</li>
        <li><strong>High Impact / High Effort:</strong> Discovery revamp with smart matching and personalization.</li>
        <li><strong>Medium Impact / Medium Effort:</strong> Social hub revitalization via activity feed.</li>
      </ul>

      <h3>3.5 Detailed UX Suggestions</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Clan Search Page:</strong> replace empty state with trending and personalized clan modules.</li>
        <li><strong>Location Filter:</strong> add regional drill-down and university/community tags.</li>
        <li><strong>Clan Labels:</strong> add vibe sliders and custom searchable keywords.</li>
        <li><strong>Friends Screen:</strong> convert static leaderboard into activity feed with online indicators.</li>
        <li><strong>Player Search:</strong> support partial name search, suggested friends, and social identity linking (privacy-controlled).</li>
        <li><strong>Attack Log + Base Edit:</strong> provide direct external share actions, including links/GIFs/images.</li>
      </ul>

      <h3>4.0 Competitive & Strategic Insights</h3>
      <p><strong>Direct category comparisons:</strong> RAID and Lords Mobile demonstrate that strong social/guild systems correlate with retention and monetization.</p>
      <p><strong>Best-in-class inspiration:</strong> Chess.com (frictionless gameplay sharing), Roblox/Minecraft (UGC-forward growth loops).</p>
      <p class="mb-6"><strong>Strategic implication:</strong> shift from progression-only value to connection-driven value, turning UGC into a measurable growth channel.</p>

      <h3>4.1 Market Research Dataset (Primary Survey)</h3>
      <p class="mb-4">In addition to teardown analysis, I ran a dedicated <strong>Clash of Clans social experience survey</strong> and consolidated responses in a spreadsheet dataset.</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Data Source:</strong> Primary survey responses captured via Google Forms/Sheets. <a href="https://docs.google.com/spreadsheets/d/1QJVcblqQvahkw0IUhG2P-fA69ack2RxJ/edit?usp=sharing&ouid=105876641569624523258&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View market research dataset</a>.</li>
        <li><strong>Scope:</strong> Player responses spanning multiple TH levels and playstyles (casual, growth-focused, and leadership-oriented).</li>
        <li><strong>Focus Areas:</strong> clan discovery friction, social tab engagement, replay/base sharing behavior, and veteran-player needs.</li>
      </ul>
      <p><strong>Key qualitative patterns from the dataset:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Strong demand for <strong>better recruiting and clan-fit filters</strong> (especially for casual playstyles and regional matching).</li>
        <li>Repeated interest in <strong>city/university-based discovery</strong> for real-world affinity and stronger clan bonding.</li>
        <li>Clear demand for <strong>external sharing tools</strong> for replays and base layouts to support community growth and creator workflows.</li>
        <li>Frequent requests for <strong>richer social communication</strong> (friend messaging, better chat systems, and social modes beyond clan-only interaction).</li>
        <li>Veteran segments ask for <strong>new competitive modes</strong> and more meaningful long-term challenge loops.</li>
      </ul>

      <h3>5.0 Summary & Roadmap</h3>
      <p class="mb-3"><strong>Phase 1: Quick Wins & Viral Growth</strong> — launch native external UGC sharing for immediate value and acquisition lift.</p>
      <p class="mb-3"><strong>Phase 2: Core Social Enhancement</strong> — launch social feed + friend replay interactions to increase engagement and stickiness.</p>
      <p class="mb-6"><strong>Phase 3: Foundational Discovery Overhaul</strong> — deploy smart matching and personalization to fix social onboarding and recruitment at scale.</p>

      <h3>6.0 Appendix Highlights</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Financial/Scale Context:</strong> $10B+ lifetime revenue, 500M+ lifetime downloads, and 10M-13M MAU (early 2025 estimates).</li>
        <li><strong>Survey Scope:</strong> 18 respondents across varied TH levels and player intents.</li>
        <li><strong>Qualitative Themes:</strong> better clan search, richer social connection, easier sharing workflows, stronger veteran content.</li>
      </ul>

      <p class="text-sm text-muted-foreground"><strong>Note:</strong> This teardown is an independent product strategy exercise. Clash of Clans intellectual property belongs to Supercell.</p>
    `,
  },
  {
    slug: 'google-maps-teardown',
    title: 'Google Maps Teardown',
    category: 'Product Teardown',
    type: 'teardown',
    externalUrl: 'https://nabhishek.notion.site/Google-Maps-2320afeb2ea88023bfa3dfc424175e15',
    content: `
      <h2>Project Overview</h2>
      
      <p class="mb-6">This project, titled <strong>"Google Maps – Restaurant Discovery & Menu Experience Teardown,"</strong> is designed to critically evaluate how Google Maps currently supports <strong>restaurant discovery</strong> compared to competitors like Yelp, DoorDash, and TikTok. The teardown places a special focus on the <strong>menu experience</strong> — analyzing how diners access, interpret, and trust restaurant menu information.</p>
      
      <p class="mb-6">The core of the study is to uncover <strong>gaps in the user journey</strong> (both for diners and restaurant owners), specifically around:</p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Digital menu clarity and availability</strong></li>
        <li><strong>Dietary filters and ingredient transparency</strong></li>
        <li><strong>Menu translation for travelers</strong></li>
        <li><strong>Review trust and decision confidence</strong></li>
      </ul>
      
      <h2>The Problem</h2>
      
      <p class="mb-4">Through extensive manual research, survey deployment, and secondary analysis, we found that <strong>users face significant friction when validating dietary needs and menu details within Google Maps.</strong></p>
      
      <p class="mb-4"><strong>For diners:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Users with allergies, diets, or language barriers often leave Google Maps to cross-check menus on other apps or websites.</li>
        <li>This <strong>multi-step, fragmented experience</strong> wastes time and erodes trust in Maps as a reliable source.</li>
      </ul>
      
      <p class="mb-4"><strong>For restaurant owners:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>They face the <strong>inefficiency of managing menus across multiple platforms</strong>, leading to outdated data, misinformation, and negative user perception.</li>
        <li>Outdated or unclear menus often cause <strong>poor reviews</strong> and reduce customer satisfaction.</li>
      </ul>
      
      <p class="mb-6">Thus, the project seeks to answer:</p>
      <p class="mb-6 italic text-lg">👉 <em>How can Google Maps enhance restaurant discovery and menu experiences to be more personalized, trustworthy, and efficient for both diners and restaurant owners?</em></p>
      
      <h2>My Role</h2>
      
      <p class="mb-6">My exact role in this teardown has been as a <strong>Product Teardown Specialist</strong>.</p>
      
      <p class="mb-6">I acted as the <strong>Product Lead and Research engine</strong> behind the project, responsible for gathering, synthesizing, and structuring all foundational data to guide Product Management decisions for Google Maps.</p>
      
      <h2>Key Actions & Manual Research</h2>
      
      <h3>1. User Research (Primary + Secondary)</h3>
      
      <p><strong>Primary Survey Research</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Drafted and deployed a <strong>restaurant dining experience survey</strong> to diners and restaurant owners.</li>
        <li><strong>Market Research Source:</strong> <a href="https://docs.google.com/spreadsheets/d/1EVVWVtENTlhPBBtyH5RhJvst5S9qylmG/edit?usp=sharing&ouid=105876641569624523258&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View Google Sheets dataset</a>.</li>
        <li>Collected <strong>first-hand responses</strong> on pain points with Google Maps, with specific emphasis on menus, reviews, discovery, and collaboration.</li>
        <li>From this, we extracted <strong>10 original problem statements</strong> (e.g., lack of dietary filters, generic recommendations, outdated reviews) and later added <strong>2 additional menu-specific problems</strong> (digital menus unavailable, lack of translations).</li>
      </ul>
      
      <p><strong>Secondary Research</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Conducted competitor analysis of <strong>Yelp, TikTok, Instagram, DoorDash, OpenTable, and Tabelog</strong>.</li>
        <li>Reviewed <strong>user sentiment data</strong> from forums and app reviews to capture frustrations with Google Maps.</li>
        <li>Benchmarked competitors' differentiators — e.g., TikTok's emotional "vibe-driven" discovery, Yelp's advanced filters, and DoorDash's strong menu data structure.</li>
      </ul>
      
      <h3>2. Persona & Empathy Map Creation</h3>
      
      <ul class="list-disc ml-6 mb-6">
        <li>Developed <strong>8 personas</strong> in total (4 diner-focused, 4 restaurant owner-focused).</li>
        <li>For each, mapped:
          <ul class="list-disc ml-6 mt-2">
            <li><strong>Behaviors</strong> (how they use Google Maps or competitor apps)</li>
            <li><strong>Goals</strong> (e.g., quick discovery, allergy-safe food, attracting customers)</li>
            <li><strong>Frustrations</strong> (generic results, unclear menus, poor data syncing)</li>
            <li><strong>Motivations</strong> (saving time, avoiding risk, building brand credibility)</li>
          </ul>
        </li>
        <li>Built <strong>empathy maps</strong> to visualize "Think / Feel / Say / Do" dimensions for each persona.</li>
      </ul>
      
      <h3>3. Roadmap Planning</h3>
      
      <p>Outlined a <strong>phased roadmap</strong> that covers:</p>
      <ol class="list-decimal ml-6 mb-6">
        <li><strong>Journey Mapping</strong> – documenting end-to-end user flow for diners and owners</li>
        <li><strong>Problem Identification</strong> – clustering issues into themes (trust, personalization, visual discovery, menu clarity)</li>
        <li><strong>Prioritization</strong> – ranking opportunities by impact and feasibility</li>
        <li><strong>Final Report Assembly</strong> – structured teardown document with recommendations</li>
      </ol>
      
      <h2>Key Insights from Research</h2>
      
      <p class="mb-4">From the combination of manual research and survey synthesis, we identified <strong>five key opportunity themes</strong>:</p>
      <ol class="list-decimal ml-6 mb-6">
        <li><strong>Personalization & Relevance</strong> → Users want intent-aware recommendations (diet, vibe, time, group size).</li>
        <li><strong>Review Trust & Quality</strong> → Outdated reviews and lack of contextual tags undermine credibility.</li>
        <li><strong>Visual Discovery</strong> → Lack of photo filters (food vs ambiance vs menu) and outdated imagery.</li>
        <li><strong>Social & Collaborative Discovery</strong> → No trusted friend layer or group planning tools.</li>
        <li><strong>Menu Accessibility & Translation</strong> → Missing or unclear digital menus; no structured translation support.</li>
      </ol>
      
      <h2>Solution Concepts</h2>
      
      <h3>1. Smart Menus (Menu Clarity + Structure)</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>OCR-powered capture of physical menus.</li>
        <li>Prompt restaurants and users to upload digital menus.</li>
        <li>Structured, clean formatting for readability.</li>
      </ul>
      
      <h3>2. Live Menu Translate</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Auto-translate menus into user's language.</li>
        <li>Contextual dictionary for cuisines (e.g., "paneer" remains untranslated).</li>
      </ul>
      
      <h3>3. Dietary Filters & Ingredient Visibility</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Users can filter results by dietary needs (vegan, halal, gluten-free).</li>
        <li>Ingredient-level tagging for allergy safety.</li>
      </ul>
      
      <h3>4. TrustTags & Review Signals</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Auto-structured tags for reviews (noise, seating, service, ambiance).</li>
        <li>Time-weighted reviews + sentiment trend badges.</li>
      </ul>
      
      <h3>5. Social Discovery Layer</h3>
      <ul class="list-disc ml-6 mb-6">
        <li>"Trusted Circles" to view where friends have been.</li>
        <li>Collaborative maps/lists with group voting and comments.</li>
      </ul>
      
      <h2>Prioritization of Solutions</h2>
      
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-border">
          <thead>
            <tr class="bg-muted/50">
              <th class="border border-border p-3 text-left">Solution</th>
              <th class="border border-border p-3 text-left">User Impact</th>
              <th class="border border-border p-3 text-left">Business Value</th>
              <th class="border border-border p-3 text-left">Effort</th>
              <th class="border border-border p-3 text-left">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3"><strong>Smart Menus (OCR + structure)</strong></td>
              <td class="border border-border p-3">🔴 Very High</td>
              <td class="border border-border p-3">🔴 Very High</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 1</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Live Menu Translate</strong></td>
              <td class="border border-border p-3">🔴 High (critical for travelers)</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 2</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Dietary Filters & Ingredient Tags</strong></td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">⭐ Priority 2</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>TrustTags (Review Layer)</strong></td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 3</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Social Discovery & Lists</strong></td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">⭐ Priority 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Expected Outcomes & Impact</h2>
      
      <p><strong>Improve User Trust & Engagement</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Reliable menu and dietary filters reduce drop-off to competitor apps.</li>
        <li>Users feel more confident making decisions within Maps.</li>
      </ul>
      
      <p><strong>Increase Efficiency for Owners</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Centralized menu management reduces manual update hours.</li>
        <li>Improves accuracy and consistency across Google's ecosystem.</li>
      </ul>
      
      <p><strong>Enhance Brand Perception</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Fewer negative reviews related to outdated menus.</li>
        <li>Stronger reputation for both Google Maps and partner restaurants.</li>
      </ul>
    `,
  },
  {
    slug: 'splitwise-teardown',
    title: 'Splitwise Teardown',
    category: 'Product Teardown',
    type: 'teardown',
    externalUrl: 'https://nabhishek.notion.site/Split-wiser-2340afeb2ea880318cc6dccc8f71e307',
    content: `
      <p class="mb-4"><strong>Initiative Type:</strong> AI-Driven Consumer Tool (Expense Management)</p>
      <p class="mb-6"><strong>Portfolio Status:</strong> Beta-ready case study for public portfolio (PDF-ready with visuals and workflow link). <a href="https://ai-splitwiser.vercel.app/" target="_blank" rel="noopener noreferrer">Try Splitwiser live app</a>.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis – Origins and Problem Space</h2>
      
      <p><strong>Problem:</strong> Shared expense management for roommates and group settings was consistently unfair, error-prone, and a source of tension. Existing tools like Splitwise and Excel lacked the ability to handle partial participation and itemized breakdowns, forcing users to overpay or compromise, damaging trust.</p>
      
      <p><strong>Context:</strong> As a student living in shared housing, repeated frustrations over grocery, takeout, and utility bills highlighted that current tools weren't solving for the human need: transparency and trust, not just calculation.</p>
      
      <p><strong>Research:</strong> Conducted 20+ interviews with students and young professionals:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>85% wanted automation and fairness, admitting to skipping tax/tip or rounding to avoid conflict.</li>
        <li>Most did not want another heavy app, but desired <strong>quick, chat-friendly solutions</strong>.</li>
        <li>Users trusted AI-calculated fairness over spreadsheets or manual math.</li>
      </ul>
      
      <p><strong>Opportunity:</strong> Build an AI-driven, chat-first tool that:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Automatically parses real-world bills (grocery, utilities, dining).</li>
        <li>Allows <strong>item-level toggling</strong> for precise fairness.</li>
        <li>Integrates with familiar channels (WhatsApp, Telegram) to avoid adoption friction.</li>
      </ul>
      
      <h2>Phase 2: Strategy & Definition – Shaping the Solution</h2>
      
      <p><strong>Vision:</strong> Make splitting group expenses instant, transparent, and conflict-free — acting as a neutral "roommate mediator" rather than another calculator.</p>
      
      <p><strong>Personas:</strong></p>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Student Roommate</strong> – Needs fast, fair solutions, budget-driven.</li>
        <li><strong>Young Professional</strong> – Time-sensitive, expects automation and minimal manual work.</li>
        <li><strong>Travel Organizer</strong> – Manages group trips, wants one-off bill settlement without disputes.</li>
      </ol>
      
      <p><strong>Core MVP Features:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>GPT-powered bill parser that extracts line items, tax, and tips automatically.</li>
        <li>Per-person, per-item toggling for exact shares.</li>
        <li>Proportional tax and tip distribution.</li>
        <li>Exportable summaries for group chats (WhatsApp/Telegram) without requiring signups.</li>
      </ul>
      
      <p><strong>Competitive Positioning:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Vs. Splitwise:</strong> Adds true item-level fairness, faster onboarding, no persistent account.</li>
        <li><strong>Vs. Spreadsheets:</strong> Removes error and manual work; faster to settle.</li>
        <li><strong>Vs. Venmo-style notes:</strong> Offers structured, auditable clarity with no ambiguity.</li>
      </ul>
      
      <h2>Phase 3: Execution – Bringing the MVP to Life</h2>
      
      <p><strong>MVP Build:</strong> Developed a GPT-driven parser and a lightweight web-based interface capable of creating households, adding members, scanning bills, toggling participation, and generating share breakdowns.</p>
      
      <p><strong>Testing Milestones:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Shared MVP with 20 early adopters (students and professionals) to gather structured feedback on accuracy, UI, and user trust.</li>
        <li>Next testing iteration will incorporate <strong>real-world bill formats</strong> (mixed grocery + takeout receipts, utilities) to refine parsing robustness and edge case handling.</li>
      </ul>
      
      <p><strong>Workflow Visual:</strong> A complete diagram illustrating how users upload receipts, toggle items, and receive a transparent split summary will be featured in the PDF (linked above).</p>
      
      <h2>Phase 4: Validation – Measuring Success</h2>
      
      <p><strong>Metrics to Track:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Adoption rate across early testers.</li>
        <li>Average time to finalize and settle a bill.</li>
        <li>Reduction in disputes compared to manual or Splitwise methods.</li>
      </ul>
      
      <p><strong>Feedback Channels:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>In-app satisfaction surveys.</li>
        <li>Direct user interviews.</li>
        <li>Retention tracking over recurring household cycles.</li>
      </ul>
      
      <p><strong>Iteration Priorities:</strong> Focus on features that increase trust (clear summaries, transparency) and reduce effort (fast parsing, zero-manual-entry flow).</p>
      
      <h2>Phase 5: Impact & Growth – Expanding Reach</h2>
      
      <p><strong>Launch Strategy:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Initial launch as a <strong>free-to-use web tool</strong> targeting university students and young professionals.</li>
      </ul>
      
      <p><strong>Marketing Initiatives:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Share the beta in <strong>university WhatsApp groups</strong> to drive feedback and adoption.</li>
        <li>Place <strong>posters with QR codes</strong> in <strong>grocery stores and common spaces near university housing</strong>.</li>
        <li>Collect survey data to refine product positioning and adoption strategy.</li>
      </ul>
      
      <p><strong>Expansion Roadmap:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Integrate with <strong>Telegram API</strong> to launch a Telegram bot, enabling one-click bill splitting directly in chat groups.</li>
        <li>Explore integrations with WhatsApp and Discord post-beta.</li>
        <li>Future monetization via <strong>premium features</strong> (bill history, analytics, API licensing for platforms).</li>
      </ul>
      
      <h2>Phase 6: Retrospective & Learnings – Post-Launch Goals</h2>
      
      <ul class="list-disc ml-6 mb-6">
        <li>Identify <strong>which features drive trust and adoption</strong>.</li>
        <li>Pinpoint drop-off stages in the workflow and optimize user flow.</li>
        <li>Document learnings on building and scaling AI-powered consumer tools for future iterations.</li>
      </ul>
    `,
  },
];

export function getContentPageBySlug(slug: string): ContentPage | undefined {
  return contentPages.find(page => page.slug === slug);
}

