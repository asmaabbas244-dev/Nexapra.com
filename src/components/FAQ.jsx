import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary greatly depending on scope. A simple MVP can take 4-8 weeks, while enterprise software might take 6+ months. We will provide a detailed timeline during discovery.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Absolutely. We offer dedicated maintenance and SLA-backed support packages to ensure your product remains secure, updated, and scales seamlessly.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer both fixed-price contracts for well-defined projects and time-and-materials (T&M) engagements for agile development where requirements might evolve.'
  },
  {
    question: 'Will I own the source code?',
    answer: 'Yes, 100%. Once the project is fully paid for, all intellectual property and source code are legally transferred to you.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="section-label">FAQ</span>
        <h2 className="section-title">Common Questions</h2>
      </div>
      <div className="faq-container">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(idx)}>
              {item.question}
              <span className="faq-icon">
                <ChevronDown size={20} />
              </span>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
