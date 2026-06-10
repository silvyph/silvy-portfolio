"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { skills } from "../data/skills";
import Link from "next/link";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-purple-950 text-white relative overflow-x-hidden">

      <div
        className="
          absolute
          top-40
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
          -z-10
        "
      />

      <div
        className="
          absolute
          top-40
          right-20
          w-20
          h-20
          rounded-full
          bg-gradient-to-br
          from-pink-300
          to-purple-500
          opacity-60
        "
      />

      <div
        className="
          absolute
          top-10
          left-[-200px]
          w-[700px]
          h-[700px]
          border
          border-purple-500/20
          rounded-full
        "
      />

      <div
        className="
          absolute
          top-20
          left-[-150px]
          w-[550px]
          h-[550px]
          border
          border-purple-500/10
          rounded-full
        "
      />

      <Image
        src="/images/pixel-moon.png"
        alt="Moon"
        width={300}
        height={300}
        className="
          absolute
          top-[-25px]
          right-[-70px]
          z-10
        "
      />

      <Image
        src="/images/pixel-glitch.png"
        alt="Glitch"
        width={450}
        height={350}
        className="
          absolute
          left-[-100px]
          top-[30px]
          opacity-70
          z-0
        "
      />

      <div
        className="
          absolute
          top-24
          right-56
          w-32
          h-1
          rotate-[-25deg]
          bg-gradient-to-r
          from-cyan-300
          via-pink-400
          to-transparent
          opacity-80
          animate-pulse
        "
      />

      <div
        className="
          shooting-star
          absolute
          top-24
          right-32
          text-cyan-300
          text-3xl
        "
      >
      
      </div>

      <div className="absolute top-24 left-32 text-yellow-300 text-4xl star">✦</div>

      <div className="absolute top-40 left-[450px] text-yellow-200 text-2xl star">✦</div>

      <div className="absolute top-72 right-[450px] text-pink-300 text-3xl star">✦</div>

      <div className="absolute top-[500px] left-20 text-cyan-300 text-3xl star">✦</div>

      <div className="absolute top-[700px] right-32 text-purple-200 text-3xl star">✦</div>

      <div className="absolute top-[950px] left-[300px] text-pink-300 text-2xl star">✦</div>

      <div className="absolute top-[1200px] right-[200px] text-cyan-300 text-3xl star">✦</div>

      <div className="absolute top-20 left-20 text-yellow-300 text-4xl">
        ✦
      </div>

      <div className="absolute top-40 right-40 text-pink-300 text-3xl">
        ✦
      </div>

      <div className="absolute bottom-40 left-40 text-cyan-300 text-3xl">
        ✦
      </div>

      <div className="star absolute top-20 left-20 text-yellow-300 text-4xl">
        ✦
      </div>

      <div className="star absolute top-32 left-1/4 text-yellow-200 text-xl">✦</div>
      <div className="star absolute top-52 right-1/4 text-pink-300 text-xl">✦</div>
      <div className="star absolute top-96 left-20 text-cyan-300 text-xl">✦</div>
      <div className="star absolute top-[600px] right-32 text-purple-300 text-xl">✦</div>
      <div className="star absolute top-[850px] left-1/2 text-yellow-200 text-xl">✦</div>
      <div className="star absolute top-[1200px] right-20 text-cyan-300 text-xl">✦</div>

      <div className="comet absolute top-40 left-10">
        ☄
      </div>

      {/* Navbar */}
      <nav className="relative flex items-center px-10 py-6">

        <Image
          src="/images/character.png"
          alt="Logo"
          width={90}
          height={80}
          className="absolute left-10"
        />

        <div className="pixel-title flex gap-12 text-lg mx-auto">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#certificates">CERTIFICATES</a>
          <a href="#contact">CONTACT</a>
        </div>

      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center mt-10 px-6"
      >
      <Image
        src="/images/clouds.png"
        alt="cloud"
        width={1500}
        height={900}
        className="
          absolute
          top-[-80px]
          left-[-150px]
          opacity-70
          pointer-events-none
          -z-0
        "
      />

        <div className="flex gap-10 flex-wrap justify-center mb-8">

          <span className="pixel-badge bg-white text-purple-900 px-4 py-2 rounded-2xl">
            Informatics Engineering
          </span>

          <span className="pixel-badge bg-white text-purple-900 px-4 py-2 rounded-2xl">
            Backend Developer
          </span>

          <span className="pixel-badge bg-white text-purple-900 px-4 py-2 rounded-2xl">
            Junior Web Developer
          </span>

          <span className="pixel-badge bg-white text-purple-900 px-4 py-2 rounded-xl">
            AI Enthusiast
          </span>

        </div>

       <h1
          style={{
            fontFamily: "var(--font-pressstart)",
            color: "#ccfbfb",
            textShadow: `
              3px 0 #ff7ce5,
              -3px 0 #7df9ff
            `
          }}
          className="text-6xl md:text-7xl leading-loose"
        >
          SILVY PUTRI
        </h1>

        <h1
          style={{
            fontFamily: "var(--font-pressstart)",
            color: "#ccfbfb",
            textShadow: `
              3px 0 #ff7ce5,
              -3px 0 #7df9ff
            `
          }}
          className="text-6xl md:text-7xl leading-loose"
        >
          HANAFI
        </h1>

        <p className="text-xl text-purple-200 max-w-2xl">
          Building scalable web applications, 
          robust backend systems, 
          and AI-powered solutions.
        </p>

      </section>

      {/* About */}
      <section
        id="about"
        className="
          relative
          max-w-5xl
          mx-auto
          mt-70
          px-6
        "
      >
        <h2 className="pixel-text text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="pixel-text text-lg text-purple-200 leading-8">
          Backend Developer, Junior Web Developer, and AI Enthusiast with hands-on experience in building web applications,
          RESTful APIs, payment gateway integrations, machine learning solutions, and AI-powered systems. 
          
          Skilled in PHP, Laravel, Python, SQL, JavaScript, Data Analytics, 
          Machine Learning, and LLM technologies including Gemini API and OpenAI API.
        </p>

        <Image
          src="/images/planet-pixel.png"
          alt="planet"
          width={200}
          height={120}
          className="
            absolute
            right-[-170px]
            top-0
            opacity-80
          "
        />

        <Image
          src="/images/mountain-pixel.png"
          alt="mountain"
          width={700}
          height={250}
          className="
          absolute
          bottom-[-170px]
          left-170
          opacity-30
          z-0
        "
        />

        <Image
        src="/images/meteor-pixel.png"
        alt="meteor"
        width={180}
        height={180}
        className="
          absolute
          left-[-140px]
          bottom-20
          opacity-70
          rotate-12
        "
      />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
                bg-purple-900/70
                border border-purple-700
                rounded-2xl
                p-4
                flex
                flex-col
                items-center
                gap-3
                hover:scale-105
                transition
              "
            >

              <Image
                src={skill.icon}
                alt={skill.name}
                width={45}
                height={45}
              />

              <span className="pixel-text text-sm">
                {skill.name}
              </span>

            </div>

          ))}

        </div>
      </section>

            {/* Projects - PERBAIKAN: Pastikan section projects ditutup dengan benar */}
      <div className="absolute top-40 right-20 text-yellow-300 text-6xl animate-pulse z-50">
        ✶
      </div>

      <div
        className="absolute top-40 right-20 text-cyan-300 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        ✦
      </div>

      <div
        className="absolute bottom-20 left-1/3 text-pink-300 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        💥
      </div>

      <section
        id="projects"
        className="
          relative
          max-w-6xl
          mx-auto
          mt-40
          px-6
        "
      >
        <div
          className="
            meteor-project
            absolute
            top-0
            right-20
            text-cyan-300
            text-5xl
            pointer-events-none
          "
        >
          ☄️
        </div>

        {/* Planet */}
        <div className="absolute -top-[-70px] left-0 text-6xl rotate-slow">
          🪐
        </div>

        {/* Rocket */}
        <div className="absolute top-20 right-[-50px] text-5xl float2">
          🚀
        </div>

        {/* Moon */}
        <div className="absolute top-80 -left-40 text-5xl float1">
          🌕
        </div>

        {/* Dark Moon */}
        <div className="absolute bottom-40 right-0 text-5xl float2">
          🌑
        </div>

        {/* UFO */}
        <div className="absolute bottom-[-20px] left-1/3 text-5xl float1">
          🛸
        </div>

        {/* Meteor */}
        <div className="absolute top-10 left-1/2 text-5xl meteor-project">
          ☄️
        </div>

        <h2 className="pixel-text text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-purple-900/70
                border border-purple-700
                rounded-3xl
                overflow-hidden
                hover:scale-105
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
                transition-all
                duration-300
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="
                  w-full
                  h-52
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div className="p-6">
                <h3 className="pixel-text text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="pixel-text mt-3 text-purple-200">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-block mt-6 text-cyan-300 hover:text-cyan-200"
                >
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates - SEKARANG BERADA DI LUAR SECTION PROJECTS */}
      <section
        id="certificates"
        className="
          relative
          max-w-6xl
          mx-auto
          mt-40
          px-6
        "
      >
        <Image
          src="/images/satelit-pixel.png"
          alt="satelit"
          width={120}
          height={120}
          className="
            absolute
            right-[-80px]
            top-40
            orbit-spin
            opacity-80
          "
        />

        <Image
          src="/images/bintang-game-pixel.png"
          alt="star"
          width={100}
          height={100}
          className="
            absolute
            left-[-50px]
            top-10
            animate-pulse
          "
        />

        <Image
          src="/images/glitch.png"
          alt="glitch"
          width={200}
          height={150}
          className="
            absolute
            top-100
            left-[-190px]
            opacity-100
            z-50
          "
        />

        <Image
          src="/images/cloudsys.png"
          alt="clouds"
          width={700}
          height={500}
          className="
            absolute
            right-[-180px]
            top-[-10px]
            opacity-60
            pointer-events-none
            z-0
          "
        />
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="
          relative
          max-w-6xl
          mx-auto
          mt-40
          px-6
        "
      >
        <Image
        src="/images/satelit-pixel.png"
        alt="satelit"
        width={120}
        height={120}
        className="
          absolute
          right-[-80px]
          top-40
          orbit-spin
          opacity-80
        "
      />

      <Image
        src="/images/bintang-game-pixel.png"
        alt="star"
        width={100}
        height={100}
        className="
          absolute
          left-[-50px]
          top-10
          animate-pulse
        "
      />

      <Image
        src="/images/glitch.png"
        alt="glitch"
        width={200}
        height={150}
        className="
          absolute
          top-100
          left-[-190px]
          opacity-100
          z-50
        "
      />
      <Image
        src="/images/cloudsys.png"
        alt="clouds"
        width={700}
        height={500}
        className="
          absolute
          right-[-180px]
          top-[-10px]
          opacity-60
          pointer-events-none
          z-0
        "
      />
        <h2 className="text-4xl font-bold mb-10">
          Certificates & Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <button
            onClick={() => setSelectedCertificate("/certificates/greatedu.pdf")}
             className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/MSIB-preview.png"
              alt="MSIB"
              width={500}
              height={350}
              className="rounded-2xl"
            />
            MSIB Data Analytics
          </button>

          <button
            onClick={() => setSelectedCertificate("/certificates/data-analyst.pdf")}
                className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/data-analyst-preview.png"
              alt="IBM"
              width={500}
              height={350}
              className="rounded-2xl"
            />

            IBM Data Analysis with Python
          </button>

          <button
            onClick={() => setSelectedCertificate("/certificates/python-data-science.pdf")}
            className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/python-data-science-preview.png"
              alt="IBM"
              width={500}
              height={350}
              className="rounded-2xl"
            />
            IBM Python for Data Science
          </button>

          <button
            onClick={() => setSelectedCertificate("/certificates/python-project.pdf")}
            className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/python-project-preview.png"
              alt="IBM"
              width={500}
              height={350}
              className="rounded-2xl"
            />
            IBM Python Project
          </button>

          <button
            onClick={() => setSelectedCertificate("/certificates/gemini-api.pdf")}
            className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/gemini-api-preview.png"
              alt="IBM"
              width={500}
              height={350}
              className="rounded-2xl"
            />
            HACKTIV8 Gemini API Integration
          </button>

          <button
            onClick={() => setSelectedCertificate("/certificates/toefl.pdf")}
            className="hover:scale-105 transition"
          >
            <Image
              src="/certificates/toefl-preview.png"
              alt="MSIB"
              width={500}
              height={350}
              className="rounded-2xl"
            />
            TOEFL
          </button>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="
          relative
          max-w-6xl
          mx-auto
          mt-40
          px-6
          pb-40
          text-center
          overflow-visible
        "
      >
        {/* Gambar animasi maju mundur tepat di ATAS tulisan Contact Me */}
        <div className="absolute -top-12 left-0 right-0 flex justify-center z-20">
          <Image
            src="/images/about-pixel.png"
            alt="Contact decoration"
            width={60}
            height={60}
            className="animate-float-about"
          />
        </div>

          {/* Bintang-bintang yang kelap-kelip di sekitar Contact Me */}
          <div className="absolute -top-10 left-10 text-yellow-300 text-2xl star-twinkle">✦</div>
          <div className="absolute top-5 right-20 text-pink-300 text-xl star-twinkle" style={{ animationDelay: "0.5s" }}>✦</div>
          <div className="absolute -bottom-5 left-1/3 text-cyan-300 text-lg star-twinkle" style={{ animationDelay: "1s" }}>✦</div>
          <div className="absolute top-1/2 right-10 text-purple-300 text-2xl star-twinkle" style={{ animationDelay: "0.3s" }}>✦</div>
          
          {/* Bintang tambahan di sekitar judul */}
          <div className="absolute -top-5 left-1/4 text-yellow-200 text-sm star-twinkle" style={{ animationDelay: "0.7s" }}>✦</div>
          <div className="absolute -top-3 right-1/4 text-pink-200 text-base star-twinkle" style={{ animationDelay: "1.2s" }}>✦</div>

        <div className="absolute -top-10 left-0 right-0 flex justify-start z-20"></div>
          <Image
            src="/images/putri-pixel.png"
            alt="character"
            width={200}
            height={170}
            className="
              absolute
              left-10
              bottom-20
              float1
            "
          />

          <Image
            src="/images/ledakan-pixel.png"
            alt="effect"
            width={350}
            height={250}
            className="
              absolute
              right-[-50px]
              top-[-10px]
              animate-pulse
              opacity-80
            "
          />
          <Image
            src="/images/gameover-pixel.png"
            alt="gameover"
            width={300}
            height={250}
            className="
              absolute
              right-10
              top-0
              opacity-60
              pointer-events-none
              z-0
            "
          />

          <h2 className="text-4xl font-bold mb-8 relative z-10">
            <span className="inline-block animate-pulse-soft">📧</span> Contact Me
          </h2>

          <p className="text-purple-200 mb-8">
            Let's build something amazing together.
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="mailto:silvyputrih376@gmail.com"
              className="bg-white text-purple-900 px-5 py-3 rounded-xl"
            >
              Email
            </a>

            <a
              href="https://github.com/silvyph"
              target="_blank"
              className="border border-white px-5 py-3 rounded-xl"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/silvyputrihanafi"
              target="_blank"
              className="border border-white px-5 py-3 rounded-xl"
            >
              LinkedIn
            </a>

          </div>

        </section>

        {selectedProject?.slug === "simdisko" && (
          <div
            className="
              fixed inset-0
              bg-black/70
              backdrop-blur-sm
              flex items-center justify-center
              z-50
              p-6
            "
          >
            <div
              className="
                bg-purple-950
                border border-purple-700
                rounded-3xl
                max-w-6xl
                w-full
                max-h-[95vh]
                overflow-y-auto
                p-8
              "
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl float-right"
              >
                ✕
              </button>

              <h2 className="text-4xl pixel-text mb-6">
                {selectedProject.title}
              </h2>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={700}
                className="rounded-2xl"
              />
              {/* Problem */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Problem
                </h2>

                <ul className="space-y-3 text-purple-200">
                <li>1. Internship applicants often have difficulty
                choosing the most suitable division based on
                their skills and interests.</li>
                <li>2. The internship administration process was also
                still handled manually and scattered across
                multiple documents.</li>
              </ul>
              </section>

              {/* Solution */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Solution
                </h2>

                <p className="text-purple-200 leading-8">
                  Developed a web-based internship management
                  system integrated with a K-Nearest Neighbor
                  recommendation engine to help applicants
                  find the most suitable division.
                </p>
              </section>

              {/* Features */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-6">
                  Key Features
                </h2>

                <ul className="space-y-3 text-purple-200">
                  <li>✓ Internship Applicant Management</li>
                  <li>✓ Division Management</li>
                  <li>✓ KNN Recommendation System</li>
                  <li>✓ Internship Period Management</li>
                  <li>✓ Registration Monitoring</li>
                  <li>✓ Administrative Dashboard</li>
                </ul>
              </section>

              {/* Tech Stack */}
              <section className="mt-16">
                  <h2 className="text-3xl mb-6">
                    Tech Stack
                  </h2>
              
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Laravel
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Python
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      MySQL
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      KNN
                    </span>
                  </div>
              </section>
              
              <section className="mt-16">
                <h2 className="text-3xl mb-6">
                  Gallery
                </h2>
              
                <div className="grid md:grid-cols-2 gap-6">
              
                  <Image
                    src="/projects/login.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/rekomendasi-knn.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/dashboard.png"
                    alt="Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/kelola-peserta.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                            />
              
                </div>
              </section>

              <div className="mt-10">

                <h2 className="text-2xl mb-4">
                  Demo Video
                </h2>

                <video
                  controls
                  className="w-full rounded-2xl"
                >
                  <source
                    src="/videos/simdisko-demo.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>

              <h2 className="text-3xl mt-10 mb-4">
                Source Code
              </h2>
              <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://github.com/silvyph/internship-system-laravel"
                    target="_blank"
                    className="
                      bg-white
                      text-purple-900
                      px-5
                      py-3
                      rounded-xl
                      font-semibold
                    "
                  >
                    Laravel Repo
                  </a>

                  <a
                    href="https://github.com/silvyph/knn-api-recommendation"
                    target="_blank"
                    className="
                      border
                      border-white
                      px-5
                      py-3
                      rounded-xl
                      font-semibold
                    "
                  >
                    Python KNN Repo
                  </a>
                </div>
            </div>
          </div>
        )}

        {selectedProject?.slug === "ecommerce" && (
          <div
            className="
              fixed inset-0
              bg-black/70
              backdrop-blur-sm
              flex items-center justify-center
              z-50
              p-6
            "
          >

            <div
              className="
                bg-purple-950
                border border-purple-700
                rounded-3xl
                max-w-6xl
                w-full
                max-h-[95vh]
                overflow-y-auto
                p-8
              "
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl float-right"
              >
                ✕
              </button>

              <h2 className="text-4xl pixel-text mb-6">
                {selectedProject.title}
              </h2>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={700}
                className="rounded-2xl"
              />
              {/* Problem */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Problem
                </h2>

                <ul className="space-y-3 text-purple-200">
                <li>Customers often struggle to find suitable fabrics
                  based on their needs and preferences. Traditional
                  online catalogs provide limited guidance and require
                  manual searching.</li>
              </ul>
              </section>

              {/* Solution */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Solution
                </h2>

                <p className="text-purple-200 leading-8">
                  Developed an AI-powered e-commerce platform that
                  combines product management, payment integration,
                  and an intelligent chatbot assistant to help
                  customers discover suitable fabrics more efficiently.
                </p>
              </section>

              {/* Features */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-6">
                  Key Features
                </h2>

                <ul className="space-y-3 text-purple-200">
                  <li>✓ Product Catalog Management</li>
                  <li>✓ Shopping Cart System</li>
                  <li>✓ AI Fabric Recommendation Chatbot</li>
                  <li>✓ Google OAuth Authentication</li>
                  <li>✓ Xendit Payment Gateway</li>
                  <li>✓ Order Management</li>
                  <li>✓ Responsive User Interface</li>
                </ul>
              </section>

              {/* Tech Stack */}
              <section className="mt-16">
                  <h2 className="text-3xl mb-6">
                    Tech Stack
                  </h2>
              
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Laravel
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Bootstrap
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      MySQL
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Gemini API
                    </span>

                    <span className="bg-fuchsia-700 px-4 py-2 rounded-full">
                      Xendit
                    </span>

                    <span className="bg-fuchsia-700 px-4 py-2 rounded-full">
                      Google OAuth
                    </span>
                  </div>
              </section>
              
              <section className="mt-16">
                <h2 className="text-3xl mb-6">
                  Gallery
                </h2>
              
                <div className="grid md:grid-cols-2 gap-6">
              
                  <Image
                    src="/projects/ecommerce-1.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/ecommerce-.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/ecommerce-3.png"
                    alt="Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/ecommerce-4.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />

                  <Image
                    src="/projects/ecommerce-5.png"
                    alt="Login"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                </div>
              </section>

              <div className="mt-10">

                <h2 className="text-2xl mb-4">
                  Live Demo
                </h2>

                <a
                  href="https://lanve-silvy.alwaysdata.net/"
                  target="_blank"
                  className="
                    inline-block
                    bg-white
                    text-purple-900
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Open Website
                </a>

              </div>

              </div>
                </div>
        )}

        {selectedProject?.slug === "bike-sharing" && (
          <div
            className="
              fixed inset-0
              bg-black/70
              backdrop-blur-sm
              flex items-center justify-center
              z-50
              p-6
            "
          >

            <div
              className="
                bg-purple-950
                border border-purple-700
                rounded-3xl
                max-w-6xl
                w-full
                max-h-[95vh]
                overflow-y-auto
                p-8
              "
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl float-right"
              >
                ✕
              </button>

              <h2 className="text-4xl pixel-text mb-6">
                {selectedProject.title}
              </h2>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={700}
                className="rounded-2xl"
              />
              {/* Problem */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Problem
                </h2>

                <ul className="space-y-3 text-purple-200">
                <li> Bike-sharing operators often struggle to predict rental demand accurately. </li>
                <li> Unexpected demand spikes can lead to bike shortages and poor customer experience. </li>
                <li> Understanding weather and seasonal patterns is essential for better planning. </li>
              </ul>
              </section>

              {/* Solution */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-4">
                  The Solution
                </h2>

                <p className="text-purple-200 leading-8">
                  Developed a machine learning forecasting system to predict bike rental demand using weather and temporal features. The project combines data analysis, feature engineering, model comparison, hyperparameter tuning, and an interactive Tableau dashboard for visualization.
                </p>
              </section>

              {/* Tech Stack */}
              <section className="mt-16">
                  <h2 className="text-3xl mb-6">
                    Tech Stack
                  </h2>
              
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Python
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Pandas
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      NumPy
                    </span>
              
                    <span className="bg-purple-800 px-4 py-2 rounded-full">
                      Scikit-Learn
                    </span>

                    <span className="bg-fuchsia-700 px-4 py-2 rounded-full">
                      XGBoost
                    </span>

                    <span className="bg-fuchsia-700 px-4 py-2 rounded-full">
                      Tableau Public
                    </span>

                    <span className="bg-fuchsia-700 px-4 py-2 rounded-full">
                      Google Colab
                    </span>
                  </div>
              </section>

              {/* Model Performance */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-6">
                  Model Performance
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-purple-700 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-purple-800">
                        <th className="p-3 text-left">Model</th>
                        <th className="p-3 text-left">RMSE</th>
                        <th className="p-3 text-left">MAE</th>
                        <th className="p-3 text-left">R²</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-purple-700">
                        <td className="p-3">Random Forest</td>
                        <td className="p-3">219.67</td>
                        <td className="p-3">126.63</td>
                        <td className="p-3 text-green-400 font-bold">0.9545</td>
                      </tr>

                      <tr className="border-t border-purple-700">
                        <td className="p-3">LightGBM</td>
                        <td className="p-3">220.62</td>
                        <td className="p-3">135.05</td>
                        <td className="p-3">0.9541</td>
                      </tr>

                      <tr className="border-t border-purple-700">
                        <td className="p-3">XGBoost</td>
                        <td className="p-3">231.32</td>
                        <td className="p-3">143.59</td>
                        <td className="p-3">0.9496</td>
                      </tr>

                      <tr className="border-t border-purple-700">
                        <td className="p-3">Gradient Boosting</td>
                        <td className="p-3">398.93</td>
                        <td className="p-3">281.06</td>
                        <td className="p-3">0.8500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-green-400 font-semibold">
                  Best Model: Random Forest (R² = 0.9545)
                </p>
              </section>

              {/* Features */}
              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-6">
                  Key Insights
                </h2>

                <ul className="space-y-3 text-purple-200">
                  <li>● Summer recorded the highest rental demand. (EDA)</li>
                  <li>● Rental volume increased as temperature rose.</li>
                  <li>● Peak rental activity occurred around 08:00 and 17:00-18:00.</li>
                  <li>● Clear weather generated the highest rental volume.</li>
                </ul>
              </section>

              <section className="mt-16">
                <h2 className="pixel-text text-3xl mb-6">
                  Conclusion
                </h2>

                <p className="text-purple-200 leading-8">
                  The analysis shows that weather conditions, temperature, season, and time of day significantly influence bike rental demand. Among the evaluated machine learning models, Random Forest achieved the best performance with an R² score of 0.9545, demonstrating strong predictive capability. The forecasting results indicate that bike rental demand follows consistent temporal patterns and can be effectively predicted using environmental and historical features. These insights can support better operational planning and bike allocation strategies.
                </p>
              </section>
              
              <section className="mt-16">
                <h2 className="text-3xl mb-6">
                  Gallery
                </h2>
              
                <div className="grid md:grid-cols-2 gap-6">
              
                  <Image
                    src="/projects/model-comparison.png"
                    alt="Model"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/hourly-demand-nalysis.png"
                    alt="EDA"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
              
                  <Image
                    src="/projects/weather-analysis.png"
                    alt="EDA"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />

                  <Image
                    src="/projects/seasonal-analysis.png"
                    alt="EDA"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              </section>

              <div className="mt-10">

                <h2 className="text-2xl mb-4">
                  Interactive Dashboard
                </h2>

                <a
                  href="https://public.tableau.com/app/profile/silvy.putri.hanafi/viz/LondonBikeSharingDashboard_17809844480910/Dashboard2"
                  target="_blank"
                  className="
                    inline-block
                    bg-white
                    text-purple-900
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Open Tableau Dashboard
                </a>

              <h2 className="text-3xl mt-10 mb-4"> 
                Source Code 
              </h2> 
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                href="https://github.com/silvyph/London-Bike-Sharing-Demand-Forecasting/tree/main" 
                target="_blank" className=" 
                border border-white 
                px-5 
                py-3 
                rounded-xl 
                font-semibold 
                "
                > 
                  GitHub Repository 
                </a>
              </div>
            </div>

              </div>
                </div>
        )}

        {selectedCertificate && (
          <div
            className="
              fixed inset-0
              bg-black/80
              flex items-center
              justify-center
              z-50
              p-6
            "
          >
            <div
              className="
                bg-purple-950
                w-full
                max-w-6xl
                h-[90vh]
                rounded-3xl
                overflow-hidden
                relative
              "
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="
                  absolute
                  top-4
                  right-6
                  text-3xl
                  z-10
                "
              >
                ✕
              </button>

              <iframe
                src={selectedCertificate}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

    </main>
  );
}