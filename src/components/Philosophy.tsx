import React from 'react';
import './Philosophy.css';

interface PhilosophyProps {
  theme?: 'default' | 'cool' | 'warm';
}

const principles = [
  {
    num: '01',
    title: 'Sound First',
    body: 'Every decision begins with sound quality. A beautifully tuned system changes everything.',
  },
  {
    num: '02',
    title: 'Atmosphere Before Hype',
    body: 'The room should feel magical before the first record is played.',
  },
  {
    num: '03',
    title: 'Community Over Crowds',
    body: "We don't want the biggest crowds. We want the right people.",
  },
  {
    num: '04',
    title: 'Authentic Underground',
    body: 'Real people. Real music. Real connection. No gimmicks.',
  },
];

export default function Philosophy({ theme = 'default' }: PhilosophyProps) {
  return (
    <section className="philosophy">
      <div className="philosophy-container">
        {principles.map((principle) => (
          <article key={principle.num} className="principle-card">
            <div className="principle-num">{principle.num}</div>
            <h3 className="principle-title">{principle.title}</h3>
            <p className="principle-body">{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
