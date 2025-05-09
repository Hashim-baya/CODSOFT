import React from 'react'
import Testimonials from './Testimonials'

function ProfessionalBackground() {
  return (
    <section >
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Professional Background - Front-End Developer (React & Tailwind CSS)</h3>

        <main className='mt-20 mb-10 mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80'>
            <h5 className='font-bold text-lg text-white'>Current Role</h5>
            <h6 className='font-bold text-md text-white'>🚀 Front-End Developer @ Safaricom PLC (2023–Present)</h6>
            <p className='text-[#C5C5C5] font-serif text-sm'>(Nairobi, Kenya – Hybrid)</p>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li>Collaborate with cross-functional teams to design and implement user-friendly web applications.</li>
                <li>Develop and maintain responsive, high-performance React.js applications for Safaricom’s digital products (e.g., MySafaricom App, M-Pesa Web Dashboard).</li>
                <li>Optimize UI components using Tailwind CSS for faster load times, improving user experience by 40%.</li>
                <li>Collaborate with backend developers (Node.js, Java) and UI/UX designers to implement RESTful APIs and ensure seamless integration.</li>
                <li>Lead code reviews and mentor junior developers in React best practices.</li>
            </ul>

            <h5 className='font-bold text-lg text-white mt-8'>Previous Experience</h5>
            <h6 className='font-bold text-md text-white'>💻 React Developer @ Andela (2022–2023)</h6>
            <p className='text-[#C5C5C5] font-serif text-sm'>(Remote – Contract with U.S. & African Startups)</p>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li>Built 10+ scalable web apps for international clients, including:</li>
                    <ul className='list-disc list-inside'>
                        <li className='ml-8'>A healthtech dashboard for patient data visualization (React, Chart.js, Tailwind).</li>
                        <li className='ml-8'>An e-learning platform with real-time quizzes (React, Firebase, WebSockets).</li>
                    </ul>
                    
                <li>Reduced bundle size by 30% using code-splitting and lazy loading in React.</li>
                <li>Worked in Agile (Scrum) teams with daily stand-ups and Jira task management.</li>
            </ul>

            <h6 className='font-bold text-md text-white mt-8'>🔧 Junior Front-End Developer @ CodSoft Kenya (2022–2023)</h6>
            <p className='text-[#C5C5C5] font-serif text-sm'>(Nairobi, Kenya – Internship to Full-Time)</p>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li>Developed 3+ commercial projects, including:
                    <ul className='list-disc list-inside'>
                        <li className='ml-8'>A restaurant POS system (React, Redux, Tailwind).</li>
                        <li className='ml-8'>A landing page for a fintech startup (Next.js, Framer Motion).</li>
                    </ul>
                </li>
                <li>Fixed 50+ UI bugs and improved mobile responsiveness across platforms.</li>
                <li>Gained experience in Git workflows and CI/CD pipelines (GitHub Actions).</li>
            </ul>

            <h5 className='font-bold text-lg text-white mt-8'>Technical Skills</h5>
            <h6 className='font-bold text-md text-white mt-8'>✔ Front-End:</h6>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li>React.js (Hooks, Context API, Redux Toolkit)</li>
                <li>Next.js (SSR, Static Site Generation)</li>
                <li>Tailwind CSS (+ UI libraries like DaisyUI)</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>HTML5, CSS3 (Flexbox, Grid, Animations)</li>
            </ul>

            <h6 className='font-bold text-md text-white mt-8'>✔ Tools & Practices:</h6>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li>Git/GitHub (Branching, PRs)</li>
                <li>Figma-to-React component handoff</li>
                <li>Jest, React Testing Library (Unit Testing)</li>
                <li>Agile/Scrum (Jira, Trello)</li>
            </ul>

            <h5 className='font-bold text-lg text-white mt-8'>Key Achievements</h5>
            <ul className='text-[#C5C5C5] font-serif text-sm mt-4 list-disc list-inside'>
                <li><span className='font-bold text-white'>🎓 BSc in Computer Science </span> – Egerton University (2023 - Present)</li>
                <li><span className='font-bold text-white'>📜 Certifications: </span>
                    <ul className='list-disc list-inside'>
                        <li className='ml-8'>Front-End Developer (ALX Kenya, 2024)</li>
                        <li className='ml-8'>ProDev Front-End Developer (ALX Kenya, 2025)</li>
                    </ul>
                </li>
            </ul>

        </main>

        <Testimonials />
        
    </section>
  )
}

export default ProfessionalBackground