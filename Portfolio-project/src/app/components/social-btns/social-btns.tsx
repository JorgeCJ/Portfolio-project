import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/jorge-de-carvalho-j%C3%BAnior-206828159/">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/JorgeCJ">
                <GitHubIcon />
            </a>
            <a href="https://twitter.com/Jorge03237280?t=BHe7R8zTfFpG-r9sp4DdqA&s=09">
                <TwitterIcon />
            </a>
        </div>
    )
}