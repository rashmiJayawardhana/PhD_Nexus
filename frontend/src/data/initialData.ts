// data/initialData.ts
import type { AppData } from "@/types/data";

export const initialData = {
  profile: {
    name: "Dr. Sarah Chen",
    title: "PhD in Human-Computer Interaction",
    subtitle: "A people-centric researcher and designer from the innovation hub.",
    bio: "Hello! I am Dr. Chen. I am powered by research and innovation, big or small. My superpower is connecting theories, methodologies and people. I believe in the power of iterative process improvements and diversity in collaborations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    contact: {
      email: "sarah.chen@university.edu",
      linkedin: "linkedin.com/in/sarahchen",
      twitter: "@drsarahchen"
    },
    institution: "MIT Media Lab",
    yearsActive: "2015-present"
  },
  projects: [
    {
      id: 1,
      title: "AI Ethics Framework for Healthcare",
      category: "Research",
      tags: ["Research", "AI Ethics", "Healthcare"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      description: "Comprehensive framework for ethical AI implementation",
      client: "WHO",
      featured: true
    },
    {
      id: 2,
      title: "Educational VR Platform",
      category: "UX Design",
      tags: ["UX Design", "Education", "VR"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop",
      description: "Immersive learning environments for STEM education",
      client: "Stanford University",
      featured: true
    },
    {
      id: 3,
      title: "Accessibility in AR Interfaces",
      category: "Research",
      tags: ["Research", "Accessibility", "AR"],
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      description: "Making augmented reality accessible to all users",
      client: "Microsoft Research",
      featured: true
    }
  ],
  testimonials: [
    {
      id: 1,
      text: "Dr. Chen's innovative research methodology brought unprecedented insights to our AI ethics initiative. Her ability to bridge technical complexity with human-centered design principles has been transformative for our team.",
      author: "Prof. James Wilson",
      role: "Director of AI Ethics, Stanford"
    },
    {
      id: 2,
      text: "Working with Dr. Chen elevated our understanding of accessibility in emerging technologies. Her research rigor combined with practical design thinking created solutions that are both theoretically sound and immediately applicable.",
      author: "Maria Garcia",
      role: "Head of Innovation, Microsoft"
    }
  ],
  books: [
    {
      id: 1,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      type: "Book Review",
      status: "completed",
      rating: 5
    },
    {
      id: 2,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      type: "Book Summary",
      status: "completed",
      rating: 5
    },
    {
      id: 3,
      title: "How to Read a Paper",
      author: "S. Keshav",
      type: "Book Review",
      status: "in-progress",
      rating: 4
    }
  ],
  archives: [
    {
      id: 1,
      title: "Workshop: Design Thinking for PhDs",
      tags: ["Workshop", "Education", "Design Thinking"]
    },
    {
      id: 2,
      title: "Conference Talk: Ethics in AI Research",
      tags: ["Conference", "AI Ethics", "Research"]
    }
  ]
} satisfies AppData;