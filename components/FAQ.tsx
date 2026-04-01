"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Muss ich online bezahlen?",
    answer: "Nein, Bezahlung vor Ort, Preise sind Richtwerte.",
  },
  {
    question: "Wie lange dauert das Tuning?",
    answer: "Siehe Angabe beim jeweiligen Paket.",
  },
  {
    question: "Welche Fahrzeuge werden unterstützt?",
    answer: "Die meisten Marken und Modelle, Details bei der Anfrage angeben.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-[#212121]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Häufige Fragen
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden bg-[#262626]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium text-lg text-white">
                  {item.question}
                </span>
                <span className="text-2xl font-light text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-700 text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
