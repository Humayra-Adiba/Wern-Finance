import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

const faqs = [
  {
    q: "What credit score do I need to apply for a credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How can I apply for a credit card online?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "Are there any annual fees associated with the credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How long does it take to receive the credit card once approved?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How can I check my credit card balance and transactions?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "What should I do if my credit card is lost or stolen?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "Is my credit card information secure?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
];

const FAQs = () => {
  return (
    <section >
      <h2 className="font-bold leading-tight text-center text-2xl lg:text-3xl">
        FAQs
      </h2>

      <Accordion className="max-w-screen-lg text-white mx-auto mt-5 lg:mt-10 xl:mt-[64px]">
        {faqs.map(({ a, q }, i) => (
          <AccordionItem key={i} aria-label={q} title={<span className="text-white">{q}</span>}>
            <span className="text-white">{a}</span>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQs;