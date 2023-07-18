import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>I don&apos;t have proven experience in any company, but I have experience working autonomously and carrying out my own projects.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={3} years="1 year"/>
            <Skill image="/ts.png" measure={3} years="1 year"/>
            <Skill image="/js.png" measure={3} years="1 year"/>
            <Skill image="/java.png" measure={1} years="less than 1 year"/>
          </div>
        </div>
    )
}