'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    title: 'E-Commerce Web Application',
    description: 'A full-featured e-commerce platform with a modern UI, product management, and user authentication.',
    image: '/images/portfolio/3826337.jpg',
    technologies: ['React.js', 'Node.js.js', 'Tailwind CSS', 'MongoDB'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool to help teams stay organized and productive.',
    image: '/images/portfolio/2386.jpg',
    technologies: ['Node.js', 'React.js', 'Bootstrap'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    image: '/images/portfolio/localhost_5173_.png',
    technologies: ['React.js', 'Node.js', 'JWT', 'Tailwind'],
    liveUrl: 'https://ramsingh.vercel.app/',
    sourceUrl: '#',
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col gap-4 rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-lg border border-white/20"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-md">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <span key={tech} className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <Button asChild>
          <Link href={project.liveUrl}>Live Demo</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={project.sourceUrl}>Source Code</Link>
        </Button>
      </div>    </motion.div>
  )
}

const Work = () => {
  return (
    <section className="py-20" id="work">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-medium text-white">My Personal Projects</h2>
          <p className="mt-4 text-lg text-gray-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

