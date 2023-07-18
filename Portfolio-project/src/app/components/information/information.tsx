import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span> 2023 - 2028 - Computer engineering Bachelors Degree - <a href="https://atlasuniversity.wordpress.com/" target="_blank">Atlas University</a></span>
        </div>
      </div>
    )
}