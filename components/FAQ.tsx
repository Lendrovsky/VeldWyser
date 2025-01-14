"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is Veld Wyser?",
    answer: <div className="space-y-2 leading-relaxed">Veld Wyser is a comprehensive digital app that enables you to understand your farm in a revolutionary new way. By combining different source of data and artificial Intelligence
    we provide you with the current state of your farm. What is the carrying capacity of your veld, how does the veld evolve over time, identify alien and invasive species before they take over the farm, assist with administration and more.
    Interested? Register now and stay up to date on the development!
    </div>,
  },
  {
    question: "On what platforms does Veld Wyser work?",
    answer: (
      <p>
        Veld Wyser is available on iOS, Android, and in the web browser on your pc, making it accessible on a wide range of devices and allowing you to log and manage your dives from anywhere.
      </p>
    ),
  },
  {
    question: "Can I use Veld Wyser offline?",
    answer: (
      <p>
        Yes, Veld Wyser allows for offline use, enabling you to go into the veld even without an internet connection. Furthermore, collected data will be available and stored offline, allowing you to access and edit your data, anywhere.
      </p>
    ),
  },
  {
    question: "How secure is my data with Veld Wyser?",
    answer: (
      <p>
        Veld Wyser will protect your data, providing peace of mind for all users. 
      </p>
    ),
  },
  {
    question: "Can I share my dashboard with others?",
    answer: (
      <p>
        Yes, Veld Wyser allows for data sharing. You choose what data you share with whom. 
      </p>
    ),
  },
  {
    question: "Can my plaas workers use the app too?",
    answer: (
      <p>
        Yes, Veld Wyser allows you to give (limited) access to your plaas workers. You choose which data collecting tools you share with whom. This allows you to delegate tasks of collecting data, such as monitoring, to others.  
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">Feel free to contact us by email or post your question on our forum.</div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
      <span
        className={`flex-1 text-base-content ${
        isOpen ? "text-custom-gold-2 font-semibold" : ""
        }`}
      >
        {item?.question}
      </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
    <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-custom-gold-2 mb-4">FAQ</p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
