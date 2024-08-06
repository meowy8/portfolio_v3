"use client";
import React, { useState } from "react";
import styles from "../app/page.module.scss";
import Image from "next/image";
import { Project } from "../utils";
import Link from "next/link";
import LinkIcon from "./icons/LinkIcon";

const ProjectCard = ({
  name,
  image,
  description,
  skills,
  siteUrl,
  gitHubUrl,
  hue,
}: Project) => {
  const [projectsTransition, setProjectTransition] = useState({
    opacity: 0,
    borderColor: "transparent",
  });
  const [hovered, setHovered] = useState(false);

  const triggerProjectTransition = () => {
    setTimeout(
      () =>
        setProjectTransition({
          opacity: 1,
          borderColor: `hsl(${hue}, 32%, 22%)`,
        }),
      1000
    );
  };

  return (
    <Link target="_blank" href={siteUrl}>
      <div
        className={styles.projectCard}
        style={{
          ...projectsTransition,
          borderColor: hovered ? `hsl(${hue}, 97%, 14%)` : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.projectImageContainer}>
          <Image
            src={image}
            width={200}
            height={200}
            alt={name}
            onLoad={triggerProjectTransition}
            style={{ borderColor: `hsl(${hue}, 32%, 22%)` }}
          />
        </div>
        <div className={styles.content}>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.icon}>
                {skill.icon}
              </div>
            ))}
          </div>
          <div className={styles.linkIcon}>
            <LinkIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
