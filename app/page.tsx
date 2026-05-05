"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import Image from "next/image";

const cvUrl =
  "https://drive.google.com/file/d/1xyinmpgtVQFRFUqWnVt4-8CK5LLBxaLl/view?usp=sharing";

const links = {
  linkedin: "https://www.linkedin.com/in/fadil-nugroho-788223274/",
  github: "https://github.com/hugozxcc",
  email: "mailto:fadil.nugroho124@gmail.com",
};

const projects = [
  {
    number: "01",
    title: "Test Card Management System",
    role: "Project Developer at IDEMIA",
    date: "Feb 2025 - Feb 2026",
    copy:
      "Django and PostgreSQL platform for asset inventory, card allocation, lifecycle tracking, approvals, audit reports, LDAP authentication, email alerts, and REST API synchronization with external asset systems.",
    stack: ["Django", "PostgreSQL", "REST API", "LDAP", "Jenkins"],
  },
  {
    number: "02",
    title: "Online Voting System",
    role: "Project Leader",
    date: "May 2024",
    copy:
      "Secure voting platform built with HTML, CSS, JavaScript, PHP, and SQL. Led timeline, team collaboration, implementation, and delivery for a full-stack academic project.",
    stack: ["PHP", "SQL", "JavaScript", "UI/UX"],
  },
  {
    number: "03",
    title: "AirClone",
    role: "Mobile App Developer",
    date: "Aug 2024",
    copy:
      "Swift and SwiftUI mobile app inspired by Airbnb, with authentication, search filters, reservation flows, local storage, API integration, and real-time data handling.",
    stack: ["Swift", "SwiftUI", "API", "Mobile"],
  },
  {
    number: "04",
    title: "WatchGoods",
    role: "Frontend Developer",
    date: "Jun 2023",
    copy:
      "Watch store website for a Human and Computer Interaction course, focused on responsive UI, accessibility, visual hierarchy, and a straightforward shopping experience.",
    stack: ["HTML", "CSS", "JavaScript", "HCI"],
  },
];

const experience = [
  {
    title: "Software Engineer Intern",
    org: "IDEMIA",
    date: "Feb 2025 - Feb 2026",
    copy:
      "Built production-grade backend systems, optimized PostgreSQL data models, shipped REST integrations, led internal stakeholder demos, and automated releases with Jenkins CI/CD.",
  },
  {
    title: "Computer Science",
    org: "BINUS University",
    date: "Sept 2022 - Present",
    copy:
      "Bachelor of Science candidate focused on Database Technology with a 3.44 GPA.",
  },
  {
    title: "Professional Player",
    org: "SPCE Esports",
    date: "Jan 2020 - Jul 2020",
    copy:
      "Led team strategy and in-game communication in competitive tournaments, building real-time decision-making and coordination under pressure.",
  },
];

const skills = [
  "Python",
  "Go",
  "Java",
  "SQL",
  "JavaScript",
  "Swift",
  "R",
  "Django",
  "React",
  "Node.js",
  "Docker",
  "Jenkins",
  "Git",
  "JIRA",
  "REST API",
  "Database Design",
  "CI/CD",
  "Data Analysis",
];

const certifications = [
  "Cloud Practitioner Essentials - Dicoding Indonesia",
  "Data Analytics for Business - Udemy",
  "SQL Intermediate - HackerRank",
  "Quantum Computing & Quantum Machine Learning - Udemy",
  "Introduction to Genomic Technologies - Johns Hopkins University",
  "Bioinformatics Methods I - University of Toronto",
];

function TrafficLights() {
  return (
    <div className="flex items-center gap-2" aria-label="macOS window controls">
      <span className="window-button bg-[var(--red)]" />
      <span className="window-button bg-[var(--yellow)]" />
      <span className="window-button bg-[var(--green)]" />
    </div>
  );
}

function ExternalLink({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      className="button-focus inline-flex h-14 min-w-14 items-center justify-center gap-2 rounded-full border border-black bg-[var(--brat)] px-5 py-2 text-sm font-extrabold uppercase leading-none text-black transition hover:-translate-y-px hover:bg-white hover:text-black"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function IconImage({
  src,
  alt,
  size = 18,
  className = "",
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-3 py-4 sm:px-5 sm:py-6">
      <div className="noise" />
      <div
        className="parallax-backdrop pointer-events-none fixed left-1/2 top-0 z-0 hidden -translate-x-1/2 select-none font-black uppercase leading-none text-black/10 lg:block"
        aria-hidden="true"
      >
        <div className="wordmark text-[12rem]">fadil</div>
        <div className="wordmark text-[12rem]">nugroho</div>
        <div className="wordmark text-[12rem]">engineer</div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="mac-shadow overflow-hidden rounded-[1.35rem] border border-black/25 bg-[var(--window)]">
          <div className="flex min-h-12 items-center justify-between border-b border-black/15 bg-[#ededed] px-4 sm:px-6">
            <TrafficLights />
            <div className="mini-label hidden text-black/55 sm:block">
              fadil nugroho
            </div>
            <div className="flex items-center gap-2">
              <a
                className="button-focus icon-link"
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub"
              >
                <IconImage src="/assets/icons/github.svg" alt="" size={20} />
              </a>
              <a
                className="button-focus icon-link"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn"
              >
                <IconImage
                  src="/assets/icons/linkedin.svg"
                  alt=""
                  size={20}
                  className="black-icon"
                />
              </a>
            </div>
          </div>

          <div className="scanline min-h-screen bg-[var(--paper)]">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/15 bg-[var(--paper)] px-4 py-4 sm:px-7">
              <a className="site-brand wordmark font-black" href="#top" aria-label="Fadil Nugroho home">
                
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={34}
                  height={34}
                  className="site-brand-logo"
                />
              </a>
              <nav className="flex items-center gap-1 text-sm font-bold uppercase sm:gap-3">
                <a className="button-focus nav-link" href="#work">
                  Work
                </a>
                <a className="button-focus nav-link" href="#about">
                  Info
                </a>
                <a className="button-focus nav-link" href="#contact">
                  Contact
                </a>
              </nav>
            </header>

            <section
              id="top"
              className="relative grid min-h-[calc(100vh-6rem)] place-items-center overflow-hidden px-5 py-16 sm:px-8"
            >
              <div
                className="hero-avatar absolute right-3 top-20 hidden h-44 w-44 sm:block"
                aria-hidden="true"
              >
                <Image
                  src="/assets/logo.png"
                  alt=""
                  fill
                  priority
                  sizes="176px"
                  className="object-contain"
                />
              </div>

              <div className="mx-auto max-w-4xl text-center">
                <h1 className="hero-type font-black uppercase">
                  i&apos;m fadil, computer science student and software engineer
                  based in jakarta.
                </h1>
                <p className="brat-copy mx-auto mt-8 max-w-2xl text-center">
                  I work with Django, PostgreSQL, REST APIs, CI/CD, and
                  data-heavy product workflows. Currently focused on production
                  systems, database technology, and practical full-stack
                  engineering.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <ExternalLink href={cvUrl} label="Download CV">
                    <Download size={18} />
                    
                  </ExternalLink>
                  <ExternalLink href={links.linkedin} label="Open LinkedIn">
                    <IconImage
                      src="/assets/icons/linkedin.svg"
                      alt=""
                      size={18}
                      className="black-icon"
                    />
                    
                  </ExternalLink>
                  <ExternalLink href={links.github} label="Open GitHub">
                    <IconImage
                      src="/assets/icons/github.svg"
                      alt=""
                      size={18}
                      className="action-icon"
                    />
                    
                  </ExternalLink>
                </div>
              </div>

              <a
                href="#work"
                className="button-focus scroll-pill absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2"
              >
                <ArrowDown size={17} />
                <ArrowDown size={17} />
                <ArrowDown size={17} />
              </a>
            </section>

            <section id="work" className="section-band px-5 py-14 sm:px-8">
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="mini-label mb-3 font-black text-black/55">
                    selected work
                  </p>
                  <h2 className="section-title max-w-2xl font-black uppercase">
                    systems that care about data integrity and clean operations.
                  </h2>
                </div>
                <div className="rail-chip hidden md:block">
                  1 2 3 4 ABC
                </div>
              </div>

              <div className="divide-y divide-black/15 border-y border-black/15">
                {projects.map((project) => (
                  <article key={project.title} className="project-grid py-7">
                    <div className="wordmark text-3xl font-black">
                      {project.number}
                    </div>
                    <div>
                      <h3 className="wordmark text-3xl font-black uppercase leading-none">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold uppercase text-black/55">
                        {project.role} / {project.date}
                      </p>
                    </div>
                    <div className="project-meta">
                      <p className="brat-copy max-w-2xl">
                        {project.copy}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-black/25 px-3 py-1 text-xs font-black uppercase"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="project-action justify-self-end">
                      <ArrowUpRight size={26} strokeWidth={2.3} />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="about" className="section-band grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-[28rem] overflow-hidden border-b border-black/15 bg-[var(--brat)] p-5 sm:p-8 lg:border-b-0 lg:border-r">
                <div
                  className="about-avatar absolute bottom-8 right-6 h-40 w-40 sm:h-56 sm:w-56"
                  aria-hidden="true"
                >
                  <Image
                    src="/assets/logo.png"
                    alt=""
                    fill
                    sizes="224px"
                    className="object-contain"
                  />
                </div>
                <p className="mini-label mb-4 font-black text-black/60">
                  information
                </p>
                <h2 className="section-title relative z-10 max-w-xl font-black uppercase">
                  i combine software engineering discipline with analytical
                  thinking and adaptable technical range.
                </h2>
              </div>

              <div className="divide-y divide-black/15">
                {experience.map((item) => (
                  <article key={item.title} className="p-5 sm:p-8">
                    <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row">
                      <h3 className="wordmark text-3xl font-black uppercase leading-none">
                        {item.title}
                      </h3>
                      <p className="text-sm font-black uppercase text-black/55">
                        {item.date}
                      </p>
                    </div>
                    <p className="mb-3 text-sm font-black uppercase text-black/60">
                      {item.org}
                    </p>
                    <p className="brat-copy max-w-3xl">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-band px-5 py-14 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="mini-label mb-3 font-black text-black/55">
                    stack
                  </p>
                  <h2 className="section-title font-black uppercase">
                    tools i use to ship.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black bg-[var(--paper)] px-4 py-2 text-sm font-black uppercase hover:bg-[var(--brat)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-band grid gap-0 lg:grid-cols-2">
              <div className="border-b border-black/15 p-5 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="mini-label mb-3 font-black text-black/55">
                  publication
                </p>
                <h2 className="section-title mb-6 font-black uppercase">
                  big data analytics and iot aspects in sustainability.
                </h2>
                <p className="brat-copy">
                  Authored a systematic literature review presented at the
                  2024 IEEE International Seminar on Application for Technology
                  of Information and Communication.
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <p className="mini-label mb-5 font-black text-black/55">
                  certifications
                </p>
                <ul className="divide-y divide-black/15 border-y border-black/15">
                  {certifications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-4 font-bold leading-tight"
                    >
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[var(--brat)] ring-1 ring-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              id="contact"
              className="section-band relative overflow-hidden bg-black px-5 py-16 text-[var(--brat)] sm:px-8"
            >
              <div
                className="contact-art pointer-events-none absolute -right-10 top-8 hidden opacity-25 sm:block"
                aria-hidden="true"
              >
                <Image
                  src="/assets/Space.jpg"
                  alt=""
                  width={240}
                  height={240}
                  className="rounded-2xl border border-[var(--brat)] object-cover"
                />
              </div>
              <div className="relative z-10 max-w-4xl">
                <p className="mini-label mb-4 font-black text-[var(--brat)]/70">
                  contact
                </p>
                <h2 className="section-title mb-7 font-black uppercase">
                  open to software engineering roles, backend work, and
                  data-intensive product problems.
                </h2>
                <div className="flex flex-wrap gap-3">
                  <ExternalLink href={links.email} label="Send email">
                    <Mail size={18} />
                  </ExternalLink>
                  <ExternalLink href={cvUrl} label="Download CV">
                    <Download size={18} />
                  </ExternalLink>
                  <ExternalLink href={links.linkedin} label="Open LinkedIn">
                    <IconImage
                      src="/assets/icons/linkedin.svg"
                      alt=""
                      size={18}
                      className="black-icon"
                    />
                  </ExternalLink>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
