import TeamCard from "./team-card"



export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      expertise: ["UI Design", "Prototyping"],
      image: "/placeholder.svg?height=200&width=200",
      social: [
        { platform: "twitter", url: "https://twitter.com/sarahjohnson" },
        { platform: "linkedin", url: "https://linkedin.com/in/sarahjohnson" },
        { platform: "dribbble", url: "https://dribbble.com/sarahjohnson" },
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full-Stack Developer",
      expertise: ["React", "Node.js"],
      image: "/placeholder.svg?height=200&width=200",
      social: [
        { platform: "github", url: "https://github.com/michaelchen" },
        { platform: "linkedin", url: "https://linkedin.com/in/michaelchen" },
      ],
    },
    {
      id: 3,
      name: "Olivia Martinez",
      role: "Digital Marketing",
      expertise: ["SEO", "Content"],
      image: "/placeholder.svg?height=200&width=200",
      social: [
        { platform: "linkedin", url: "https://linkedin.com/in/oliviamartinez" },
        { platform: "twitter", url: "https://twitter.com/oliviamartinez" },
      ],
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Project Manager",
      expertise: ["Agile", "Planning"],
      image: "/placeholder.svg?height=200&width=200",
      social: [
        { platform: "linkedin", url: "https://linkedin.com/in/davidwilson" },
        { platform: "twitter", url: "https://twitter.com/davidwilson" },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  )
}
