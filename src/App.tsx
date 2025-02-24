import React, { useState } from 'react';
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    { name: 'Python', level: 80 },
    { name: 'Object Oriented Programming', level: 90 },
    { name: 'Data Structures', level: 80 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'OdooERP', level: 80 },
    { name: 'QWeb', level: 80 },
    { name: 'XML', level: 90 },
    { name: 'HTML/CSS', level: 90 },
  ];

  const projects = [
  {
    name: 'Tijaarat Developers',
    description: 'A comprehensive real estate management system with advanced property listings, client management, and automated documentation workflows.',
    github: 'https://github.com/ahsan54/Tijaarat-Developers.git',
  },
  {
    name: 'BSS Development',
    description: 'Developed and migrated multiple Odoo 16 modules for HRMS and accounting systems, including dynamic cheque numbering, custom approval workflows, salary register reports, and enhanced employee portals with features like leave requests, payslip views, and tax certificates.',
    github: 'https://github.com/ahsan54/BSS_Custom_Development.git',
  },
  {
    name: 'Payment Voucher',
    description: 'Internhip: Designed PV module to streamline payment processing with automated journal entries, featuring dynamically generated debit/credit lines linked to relevant journals. Integrated ir.sequence for different voucher and cheque numbers.',
    github: 'https://github.com/ahsan54/PaymentVoucher.git',
  },
  {
    name: 'Employee Loan Management',
    description: 'Developed an Odoo module for managing employee loans, automating loan application, approval, and installment tracking. It integrates accounting by updating journal entries, including profit JV, upon installment payments. The module also configures loan types, prevents duplicate loan applications.',
    github: 'https://github.com/ahsan54/Employee-Loan-Management.git',
  },
  {
    name: 'Fleet Fuel Tank',
    description: 'Internhip: Tracks fuel consumption and tank management with advanced validation.',
    github: 'https://github.com/ahsan54/Fleet-Fuel-Tank-.git',
  },
  {
    name: 'Hospital Management Odoo',
    description: 'Internhip: Efficiently manages patients, doctors, and appointments within Odoo.',
    github: 'https://github.com/ahsan54/Hospital-Management-Odoo.git',
  },
  {
    name: 'Diabetes Prediction System',
    description: 'FYP: Machine learning-based system for predicting diabetes risk using patient data.it aims to predict the likelihood of an individual having diabetes using logistic regression model.',
    github: 'https://ahsan54.github.io/Diabetes_FrontEnd/',
  },
  {
    name: 'Movement Detector',
    description: 'Personal: This project detects head movements using a webcam and sends a WhatsApp message via Twilio Web Api to desired number when head movement is detected.',
    github: 'https://github.com/ahsan54/Head_Movement_Detector.git',
  },
  {
    name: 'Tailor Measurements Saver',
    description: 'Personal: Digital solution for storing and managing tailor measurements efficiently.Built using Python and Flask, this app allows you to perform CRUD on measurements effortlessly.',
    github: 'https://github.com/ahsan54/Tailor-Measurements-Saver-App.git',
  },
  {
    name: 'Patient Appointment Booking',
    description: 'Personal: Project is developed to streamline the process of booking, checking available slots for specifiic doctor, and managing clinic appointments.',
    github: 'https://github.com/ahsan54/Clinic_ManageMent_Demo.git',
  },
];


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Hero Section */}
        <header className="min-h-screen relative hero-background">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl">
              <h1 className="neon-title text-5xl md:text-7xl font-bold mb-6 text-white">
                Ahsan's Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide">
                Python Developer | OdooERP | Problem Solver
              </p>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 skills-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-title text-white">
              My Skills
            </h2>
            <div className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-xl">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full rounded-full skill-progress"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


       <section id="experience" className="py-20 px-4 experience-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-title text-white">
              Professional Experience
            </h2>
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-2 text-blue-300">
                Odoo Developer
              </h3>
              <p className="text-blue-200 mb-4">
                August 2024 – Present
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Developing, customizing, and enhancing Odoo modules</li>
                <li>Integrated APIs into Odoo for seamless workflows</li>
                <li>Migrated modules to newer versions while optimizing performance</li>
                <li>Created advanced QWeb PDF and Excel reports</li>
                <li>Collaborated with team leads to deliver high-quality solutions</li>
              </ul>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 projects-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-title text-white">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="project-card"
                >
                  <div className="relative z-10 p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="enhanced-footer relative py-12 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Your Vision, My Code – Let’s Create Magic!</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a
                href="tel:03180690159"
                className="inline-flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                03180690159
              </a>
              <a
                href="mailto:ahsan.ismail0159@gmail.com"
                className="inline-flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                ahsan.ismail0159@gmail.com
              </a>
              <a
                href="https://github.com/ahsan54"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahsan-ismail-4b4763281/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
