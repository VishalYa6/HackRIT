import React from 'react';
import UnOrderedList2 from './UnOrderedList2';

const cardData = [
  {
    title: 'Security Focused',
    features: [
      'Reduced attack surface',
      'Compliance-ready reports',
      'Ongoing vulnerability detection',
      'Scalable security model',
    ],
  },
  {
    title: 'Powerful Tech',
    features: [
      'Real-time alerts & insights',
      'Easy-to-use dashboard',
      'Encrypted communication',
      'Analytics that matter',
    ],
  },
  {
    title: 'Trusted Hackers',
    features: [
      'Global verified talent',
      'Domain-specific expertise',
      'Adheres to responsible disclosure',
      'Transparent reward system',
    ],
  },
];

const Card = () => {
  return (
    <div className="about-container">
      <p className="about-title font-bold">Why Choose HackRIT ?</p>
      <p className='mt-5'>HackRIT combines ethical talent and robust tools to deliver unmatched security insights tailored to your needs.</p>
      <div className="flex justify-center items-start mt-6 gap-x-8 flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-96 p-6 bg-white rounded-xl shadow-2xl shadow-blue-10 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <UnOrderedList2 items={card.features} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
