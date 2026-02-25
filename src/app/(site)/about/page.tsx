
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Ram Singh',
}

const AboutPage = () => {
  return (
    <section className="py-24 pt-48">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-white/80">
            Dedicated BCA graduate (2025) with a strong foundation in computer science and recent practical experience as a Frontend Developer Intern. Possess hands-on experience in coding and designing user-friendly systems. passionate about full-stack development, specifically seeking opportunities to leverage skills in React.js and Node.js.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
