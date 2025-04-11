import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TeamCard({ member }) {
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "github":
        return <Github className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "dribbble":
        return <Dribbble className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card className="overflow-hidden group">
      <div className="p-4 flex flex-col items-center">
        <div className="relative h-20 w-20 rounded-full overflow-hidden mb-3 ring-2 ring-background shadow-sm">
          <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
        </div>

        <h3 className="font-medium text-base">{member.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{member.role}</p>

        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {member.expertise.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-[10px] px-2 py-0 h-4">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
          {member.social.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${member.name}'s ${link.platform}`}
            >
              {getSocialIcon(link.platform)}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  )
}
