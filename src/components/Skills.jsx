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
          <Skill name="JavaScript" icon={<JavaScriptIcon />} />
          <Skill name="React" icon={<ReactIcon />} />
          <Skill name="Tailwind" icon={<TailwindIcon />} />
          <Skill name="CSS" icon={<CSSIcon />} />
          <Skill name="TypeScript" icon={<TSIcon />} />
          <Skill name="HTML" icon={<HTMLIcon />} />
          <Skill name="SASS" icon={<SASSIcon />} />
          <Skill name="Redux" icon={<ReduxIcon />} />
        </div>
      </div>
      <div>
        <h1>Back End</h1>
        <div className={styles.skillsGrid}>
          <Skill name="Node" icon={<NodeIcon />} />
          <Skill name="MongoDB" icon={<MongoIcon />} />
          <Skill name="Next.js" icon={<NextIcon />} />
          <Skill name="Firebase" icon={<FirebaseIcon />} />
        </div>
      </div>
      <div>
        <h1>Tools</h1>
        <div className={styles.skillsGrid}>
          <Skill name="Figma" icon={<FigmaIcon />} />
          <Skill name="Git" icon={<GitIcon />} />
          <Skill name="GraphQL" icon={<GraphQLIcon />} />
          <Skill name="Shopify" icon={<ShopifyIcon />} />
        </div>
      </div>
    </aside>
  );
};

export default Skills;
