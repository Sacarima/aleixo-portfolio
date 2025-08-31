import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const socialLinks = [
    {
        name: "Github",
        icon: <FaGithub />,
        path: "https://github.com/sacarima"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        path: "https://x.com/SacarimaAleixo"
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socialLinks.map((link) => (
            <Link
            key={link.name}
            href={link.path}
            target="_blank"
            className={` ${iconStyles}`}
            >
            {link.icon}
            </Link>
        ))}
    </div>
  )
}

export default Socials