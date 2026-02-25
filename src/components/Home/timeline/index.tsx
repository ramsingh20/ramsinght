'use client'
import Image from 'next/image'
import { journeyData } from '@/app/api/data'
import { motion } from 'framer-motion'

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isOdd ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative mb-8 flex w-full items-center ${isOdd ? 'justify-start' : 'justify-end'
        }`}
    >
      <div className={`w-1/2 ${isOdd ? 'pr-8 text-left' : 'pl-8 text-right'}`}>
        <div className="rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-lg border border-white/20">
          <div className='flex items-center gap-4'>
            <div className="bg-primary/15 p-3 rounded-full">
              <Image src={item.icon} alt={item.title} width={32} height={32} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-4 w-4 rounded-full border-2 border-primary bg-gray-800"></div>
      </div>
    </motion.div>
  );
};


const TimeLine = () => {
  return (
    <section className="py-20" id="development">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-white">My Journey</h2>
          <p className="mt-4 text-lg text-gray-300">
            My Educational and Professional Journey
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-white/20"></div>
          {journeyData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimeLine
