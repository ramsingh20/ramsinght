"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { faqData } from "@/app/api/data";

const Faq = () => {
  return (
    <section id="faq" className="py-16 text-white">
      <div className="container">
        <div className="mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary uppercase text-sm">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 mt-2">
              Here are some of the most common questions I get.
            </p>
          </div>
          <Accordion type="single" className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/10 rounded-lg border border-white/20 backdrop-blur-lg"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 px-6">
                  {item.title}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base px-6 pb-4">
                  {item.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;

