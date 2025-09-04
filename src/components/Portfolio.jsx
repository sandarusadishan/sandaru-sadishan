/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// src/components/Portfolio.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Twitter,
  ExternalLink,
  Menu,
  X,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  ArrowRight,
  Clock,
  BriefcaseBusiness,
  Sparkles,
  Code,
  Facebook,
  MessageSquare,
  Youtube,
  Instagram,
  Sun,
  Moon,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTypewriter } from "../hooks/useTypewriter";
import { useTilt } from "../hooks/useTilt";
import {
  PROFILE,
  SERVICES,
  TECHNOLOGIES,
  PROJECTS,
  TIMELINE,
} from "../data/constants";

import { Button } from "./Button";
import { CustomStyles } from "./CustomStyles";
import { BackgroundEffects } from "./BackgroundEffects";
import { ProjectCard } from "./ProjectCard";
import { SkillCard } from "./SkillCard";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export const GITHUB = {
  // ... other profile data
  github: "https://github.com/sandarusadishan", // Make sure this line exists and has the correct URL
  // ...
};

export const LINKEDIN = {
  // ... other profile data
  linkedin: "https://www.linkedin.com/in/sandaru-sadishan-123405296/", // Make sure this line exists and has the correct URL
  // ...
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef();
  const typed = useTypewriter(PROFILE.headlineRoles);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return (
        savedMode === "true" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const ids = [
        "home",
        "services",
        "about",
        "skills",
        "projects",
        "timeline",
        "contact",
      ];
      const y = window.scrollY + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending message...");

    const serviceID = "YOUR_SERVICE_ID"; // Replace with your service ID
    const templateIDToCompany = "YOUR_TEMPLATE_ID_COMPANY"; // Replace with your company template ID
    const templateIDToCustomer = "YOUR_TEMPLATE_ID_CUSTOMER"; // Replace with your customer template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your public key

    try {
      await Promise.all([
        emailjs.sendForm(
          serviceID,
          templateIDToCompany,
          formRef.current,
          publicKey
        ),
        emailjs.sendForm(
          serviceID,
          templateIDToCustomer,
          formRef.current,
          publicKey
        ),
      ]);

      setStatusMessage("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    }
  };

  const IconMap = {
    Globe,
    Palette,
    Server,
    Smartphone,
    Database,
    BriefcaseBusiness,
    Code,
  };

  return (
    <div
      className={`relative min-h-screen ${
        darkMode ? "dark" : ""
      } bg-[linear-gradient(135deg,#f1f5f9_0%,#e2e8f0_100%)] dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_100%)] text-slate-800 dark:text-gray-100 selection:bg-indigo-500/40`}
    >
      <CustomStyles />
      <BackgroundEffects />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 mb-3 glass rounded-2xl px-4 h-14 flex items-center justify-between">
            <button
              onClick={() => scrollTo("home")}
              className="font-bold tracking-tight text-lg"
            >
              <span className="text-slate-900 dark:text-white">
                {PROFILE.name}
              </span>
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/10 dark:bg-white/10 px-2 py-0.5 text-xs text-slate-900 dark:text-white/80">
                <Sparkles size={14} /> Portfolio
              </span>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              {[
                "home",
                "services",
                "about",
                "skills",
                "projects",
                "timeline",
                "contact",
              ].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`capitalize text-sm transition hover:text-slate-900 dark:hover:text-white ${
                    activeSection === id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-white/70"
                  }`}
                >
                  {id}
                </button>
              ))}
              <Button
                onClick={toggleDarkMode}
                variant="icon"
                size="sm"
                className="w-9 h-9"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              <Button
                onClick={toggleDarkMode}
                variant="icon"
                size="sm"
                className="w-9 h-9"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              {/* FIXED: Added text-slate-900 and dark:text-white to the menu button icons */}
              <button
                className="p-2 text-slate-900 dark:text-white"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden glass mx-2 rounded-2xl overflow-hidden"
              >
                <div className="px-4 py-4 grid grid-cols-2 gap-3">
                  {[
                    "home",
                    "services",
                    "about",
                    "skills",
                    "projects",
                    "timeline",
                    "contact",
                  ].map((id) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      // FIXED: Added dark:text-white to the text color
                      className={`text-left capitalize rounded-xl px-4 py-3 hover:bg-white/10 transition ${
                        activeSection === id
                          ? "bg-white/10 text-white"
                          : "text-white/80 dark:text-white/80"
                      }`}
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <main className="relative">
        {/* Hero */}
        <section
          id="home"
          className="min-h-[92vh] flex items-center justify-center px-4 pt-28"
        >
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <p className="text-slate-500 dark:text-white/70">Hello, I'm</p>
              <h1 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {PROFILE.name}
              </h1>
              <div className="mt-3 text-xl sm:text-2xl text-white/90 h-[2.2em]">
                <span className="text-slate-500 dark:text-white/70">I am </span>
                <span className="text-slate-900 dark:text-white font-semibold">
                  {typed}
                </span>
                <span className="animate-pulse">▍</span>
              </div>
              <p className="mt-5 text-slate-600 dark:text-white/70 max-w-prose">
                As a Software Engineer, I craft high-performance web
                applications that are both beautiful and intuitive. I'm
                passionate about building scalable, clean code and thrive on
                solving complex challenges in a collaborative, team-oriented
                environment. My goal is to deliver polished, impactful
                experiences that exceed user expectations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollTo("projects")}
                >
                  See Projects <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href={LINKEDIN.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href={GITHUB.github} target="_blank">
                    <Github className="mr-2" size={18} />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-grid opacity-40" />
                <img
                  src="/public/my.jpg"
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-3xl border border-slate-200 dark:border-white/10"
                />
                <motion.div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 to-sky-400/10 blur-2xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                />
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              What I Do
            </motion.h2>
            <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              {SERVICES.map((s) => {
                const Icon = IconMap[s.icon];
                return (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    className="glass rounded-2xl p-6 transition border-slate-200 hover:bg-slate-200/50 dark:border-white/10 dark:hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Icon && (
                      <Icon className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
                    )}
                    <h3 className="mt-4 font-semibold text-lg text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                      {s.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
        {/* About */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10 items-center">
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                About Me
              </h2>
              <p className="mt-4 text-slate-600 dark:text-white/80 leading-relaxed">
                I'm a passionate engineer with a strong foundation in modern web
                technologies. I turn complex problems into simple, beautiful,
                and intuitive experiences.
              </p>
              <p className="mt-4 text-slate-500 dark:text-white/70">
                I care about performance, accessibility, and clean architecture.
                Outside work, I explore open source, write, and prototype ideas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-6 border-slate-200 dark:border-white/10">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Quick Facts
                </h3>
                <ul className="mt-3 space-y-2 text-slate-600 dark:text-white/80 text-sm">
                  <li>• Based on the web 🌍</li>
                  <li>• Product‑minded & detail‑oriented</li>
                  <li>• Love design systems & patterns</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Skills */}
        <section id="skills" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Technical Skills
            </motion.h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {Object.entries(TECHNOLOGIES).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-bold capitalize text-slate-900 dark:text-white">
                    {category.replace(/_/g, " ")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((s, i) => (
                      <SkillCard key={s.name} skill={s} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              {PROJECTS.map((p, index) => (
                <ProjectCard key={index} project={p} />
              ))}
            </motion.div>
          </div>
        </section>
        {/* Timeline */}
        <section id="timeline" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Professional Timeline
            </motion.h2>
            <div className="mt-12 relative">
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />
              <div className="space-y-10">
                {TIMELINE.map((e, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className={`sm:grid sm:grid-cols-2 gap-8 ${
                        idx % 2 ? "sm:direction-rtl" : ""
                      }`}
                    >
                      <div
                        className={`sm:text-right ${
                          idx % 2 ? "sm:order-2" : ""
                        }`}
                      >
                        <p className="text-indigo-500 dark:text-indigo-300 font-medium flex items-center gap-2 sm:justify-end">
                          <Clock size={16} /> {e.year}
                        </p>
                        <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
                          {e.title}
                        </h3>
                        <p className="text-slate-600 dark:text-white/70 text-sm">
                          {e.company}
                        </p>
                      </div>
                      <div className={`${idx % 2 ? "sm:order-1" : ""}`}>
                        <div className="glass rounded-2xl p-5 border-slate-200 dark:border-white/10">
                          <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                            {e.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="absolute left-3.5 sm:left-1/2 sm:-translate-x-1/2 top-2 inline-block w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 ring-4 ring-indigo-500/20 dark:ring-indigo-400/20" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="mt-4 text-slate-600 dark:text-white/80 max-w-prose mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              I'm open to new opportunities, collaborations, or a friendly chat.
              Fill out the form below to get in touch.
            </motion.p>
            <motion.div
              className="mt-10 glass rounded-2xl p-6 max-w-lg mx-auto border-slate-200 dark:border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <form
                ref={formRef}
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-slate-800 dark:text-white/80 mb-1 text-left"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full rounded-lg bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-800 dark:text-white/80 mb-1 text-left"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pNumber"
                    className="block text-sm font-medium text-slate-800 dark:text-white/80 mb-1 text-left"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="pNumber"
                    name="pNumber"
                    required
                    className="w-full rounded-lg bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-800 dark:text-white/80 mb-1 text-left"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full rounded-lg bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="text-right">
                  <Button type="submit" variant="hero" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
              <AnimatePresence>
                {statusMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 text-center text-sm font-medium ${
                      statusMessage.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-12 px-4 glass rounded-t-2xl footer-shadow">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={PROFILE.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href={PROFILE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href={PROFILE.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <MessageSquare size={24} />
              </a>
              <a
                href={PROFILE.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Youtube size={24} />
              </a>
              <a
                href={PROFILE.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-white/50 text-center md:text-right">
              © {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
