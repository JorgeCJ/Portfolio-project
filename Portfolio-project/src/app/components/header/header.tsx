import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I&apos;m Jorge! 👋</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
          <Image
            src="/me.jpg"
            alt="Vercel Logo"
            width={400}
            height={400}
            priority
          />
        </div>
    )
}