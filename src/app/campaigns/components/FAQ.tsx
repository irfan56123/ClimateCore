"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What are the types of HVACs?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Behind-the-ear (BTE)</li>
          <li>In-the-ear (ITE)</li>
          <li>Completely-in-canal (CIC)</li>
        </ul>
      ),
    },
    {
      question: "What is the price of latest HVAC?",
      answer: (
        <p>
          Hearing aids are available in analog and digital form. The price
          starts from INR 18,500. You may get some great offers.
        </p>
      ),
    },
    {
      question: "What Services or warranty do you offer?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Clean and check services</li>
          <li>Service and repair</li>
          <li>Fine-tuning adjustments through software</li>
          <li>
            Warranty provided by the brand (ranges from 2 to 4 years) with a
            dedicated customer service team.
          </li>
        </ul>
      ),
    },
    {
      question: "Payment Method & Financing",
      answer: (
        <p>
          We accept almost all payment methods, both physical and digital. EMI
          facilities are available for select banks and through Bajaj Finance.
        </p>
      ),
    },
    {
      question: "What is the authenticity of your Products?",
      answer: (
        <ul className="list-disc ml-6">
          <li>
            Authorized partners of renowned HVAC companies: Signia,
            Phonak, Resound, Widex, Unitron, Starkey, Oticon, etc.
          </li>
          <li>
            Professional and qualified audiologists provide the best-in-class
            service.
          </li>
        </ul>
      ),
    },
    {
      question: "How long does the HVAC System’s Battery last?",
      answer: (
        <p>Depending on the model, the battery lasts between 7 to 20 days.</p>
      ),
    },
    {
      question: "Will HVAC Systems treat my Hearing Loss?",
      answer: (
        <p>
          Hearing aids do not restore your hearing but are the only remedy for
          certain types of hearing loss. They help improve hearing and
          communication, enhancing your quality of life.
        </p>
      ),
    },
    {
      question: "Can we use the machine without consultation?",
      answer: (
        <p>
          While it is possible to use a HVAC without consulting
          professionals, it is not recommended. Consulting an expert audiologist
          ensures proper usage and fitting.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              className="w-full text-left p-4 flex items-center justify-between text-gray-800 font-medium hover:bg-gray-100"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
