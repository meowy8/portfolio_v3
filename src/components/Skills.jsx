import React from "react";
import styles from "../app/page.module.scss";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import CSSIcon from "./icons/CSSIcon";
import TSIcon from "./icons/TSIcon";
import HTMLIcon from "./icons/HTMLIcon";
import SASSIcon from "./icons/SASSIcon";
import NodeIcon from "./icons/NodeIcon";
import MongoIcon from "./icons/MongoIcon";
import NextIcon from "./icons/NextIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import FigmaIcon from "./icons/FigmaIcon";
import GitIcon from "./icons/GitIcon";
import Skill from "./Skill";
import GraphQLIcon from "./icons/GraphQLIcon";
import ShopifyIcon from "./icons/ShopifyIcon";
import ReduxIcon from "./icons/ReduxIcon";

const Skills = ({ hue }) => {
  return (
    <aside
      className={styles.skills}
      style={{ borderColor: `hsl(${hue}, 97%, 14%)` }}
    >
      <div>
        <h1>Front End</h1>
        <div className={styles.skillsGrid}>
          <Skill name="JavaScript" icon={<JavaScriptIcon />} hue={hue} />
          <Skill name="React" icon={<ReactIcon />} hue={hue} />
          <Skill name="Tailwind" icon={<TailwindIcon />} hue={hue} />
          <Skill name="CSS" icon={<CSSIcon />} hue={hue} />
          <Skill name="TypeScript" icon={<TSIcon />} hue={hue} />
          <Skill name="HTML" icon={<HTMLIcon />} hue={hue} />
          <Skill name="SASS" icon={<SASSIcon />} hue={hue} />
          <Skill name="Redux" icon={<ReduxIcon />} hue={hue} />
        </div>
      </div>
      <div>
        <h1>Back End</h1>
        <div className={styles.skillsGrid}>
          <Skill name="Node" icon={<NodeIcon />} hue={hue} />
          <Skill name="MongoDB" icon={<MongoIcon />} hue={hue} />
          <Skill name="Next.js" icon={<NextIcon />} hue={hue} />
          <Skill name="Firebase" icon={<FirebaseIcon />} hue={hue} />
        </div>
      </div>
      <div>
        <h1>Tools</h1>
        <div className={styles.skillsGrid}>
          <Skill name="Figma" icon={<FigmaIcon />} hue={hue} />
          <Skill name="Git" icon={<GitIcon />} hue={hue} />
          <Skill name="GraphQL" icon={<GraphQLIcon />} hue={hue} />
          <Skill name="Shopify" icon={<ShopifyIcon />} hue={hue} />
        </div>
      </div>
    </aside>
  );
};

export default Skills;
