"use client";
import styles from "./page.module.scss";
import ProjectCard from "@/components/ProjectCard";
import GitHubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import { colourChanger, projectsList } from "@/utils";
import Link from "next/link";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hue, setHue] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360);
    }, 100); // Adjust the interval time as needed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => console.log(hue));

  return (
    <body
      className={inter.className}
      style={{
        background: `radial-gradient(hsl(${hue}, 68%, 6%), hsl(${
          hue + 70
        }, 68%, 8%))`,
      }}
    >
      <main className={styles.main}>
        <section className={styles.aboutMe}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.titles}>
                <h1>Micheal Hoey</h1>
                <h2>Web Developer</h2>
              </div>
              <p>
                Hi, I&apos;m Micheal, a passionate Web Developer specialising in
                creating dynamic and user-friendly web applications using React,
                JavaScript, and modern web technologies. Explore my projects and
                let&apos;s bring your vision to life!
              </p>
              <div className={styles.socials}>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/micheal-hoey/"}
                >
                  <LinkedInIcon />
                </Link>
                <Link target="_blank" href={"https://github.com/meowy8"}>
                  <GitHubIcon />
                </Link>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <Skills hue={hue} />
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          {projectsList.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              description={project.description}
              skills={project.skills}
              siteUrl={project.siteUrl}
              gitHubUrl={project.gitHubUrl}
              hue={hue}
            />
          ))}
        </section>
      </main>
    </body>
  );
}
