import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialFloatProps = {
    linkedin?: string;
    github?: string;
    instagram?: string;
    discord?: string;
};

export default function SocialFloat({
    linkedin = "https://www.linkedin.com/in/abhilash-balabadra-70a173325/",
    github = "https://github.com/Mintu1036",
    instagram = "https://www.instagram.com/_abhilash_141/",
    discord = "https://discord.com/users/1354092664877879337"
}: SocialFloatProps) {
    return (
        <div
            className="
                fixed bottom-4 right-4 z-40
                flex items-center gap-3
                rounded-2xl border border-white/15
                bg-black/70 px-3 py-3
                backdrop-blur-md
                "
        >
            <Link href={linkedin} target="_black" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5 text-white/80 hover:scale-110 hover:text-blue-400 transition" />
            </Link>

            <Link href={github} target="_black" aria-label="Github">
                <FaGithub className="h-5 w-5 text-white/80 hover:scale-110 hover:text-gray-200 transition" />
            </Link>

            <Link href={instagram} target="_black" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 text-white/80 hover:scale-110 hover:text-pink-400 transition" />
            </Link>

            <Link href={discord} target="_black" aria-label="Discord">
                <FaDiscord className="h-5 w-5 text-white/80 hover:scale-110 hover:text-indigo-400 transition" />
            </Link>
        </div>
    );
}