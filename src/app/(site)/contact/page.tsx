
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact - Ram Singh',
}

const ContactPage = () => {
    return (
        <section className="py-24 pt-48">
            <div className="container">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-white">Contact Me</h1>
                    <p className="text-white/80">
                        You can reach me at <a href="mailto:ramo2june2003@gmail.com" className="text-primary hover:underline">ramo2june2003@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
