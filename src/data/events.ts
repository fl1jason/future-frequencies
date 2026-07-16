export interface Event {
  id: string;
  num: string;
  date: string;
  dateLabel: string;
  title: string;
  tag: string;
  desc: string;
  platform: string;
  url: string;
  artwork?: string;
}

export const events: Event[] = [
  {
    id: 'equinox',
    num: '01',
    date: '2026-09-19',
    dateLabel: '19 September',
    title: 'EQUINOX',
    tag: 'A change in energy.',
    desc: 'Celebrating the transition into autumn through deep house, immersive sound and intentional atmosphere. The first chapter sets the tone for the season ahead.',
    platform: 'Eventbrite',
    url: '#events/equinox',
    artwork: undefined,
  },
  {
    id: 'halloween',
    num: '02',
    date: '2026-10-31',
    dateLabel: '31 October',
    title: 'HALLOWEEN',
    tag: 'Fancy Dress Experience.',
    desc: 'A darker chapter featuring theatrical visuals, immersive lighting and deep underground grooves. Fancy dress encouraged — come as your underground alter ego.',
    platform: 'Skiddle',
    url: '#events/halloween',
    artwork: undefined,
  },
  {
    id: 'resonance',
    num: '03',
    date: '2026-11-28',
    dateLabel: '28 November',
    title: 'RESONANCE',
    tag: 'Immersive Sound Experience.',
    desc: 'A night dedicated to the physical feeling of music through a carefully tuned sound system, deep frequencies and immersive production. Feel the bass, not just hear it.',
    platform: 'Dice',
    url: '#events/resonance',
    artwork: undefined,
  },
  {
    id: 'convergence',
    num: '04',
    date: '2026-12-19',
    dateLabel: '19 December',
    title: 'CONVERGENCE',
    tag: 'The Closing Chapter.',
    desc: 'A celebration of the community built throughout the season, bringing together everyone who has shared the journey. The finale we\'ve all been waiting for.',
    platform: 'Eventbrite',
    url: '#events/convergence',
    artwork: undefined,
  },
];

export function getEventByIndex(index: number): Event | undefined {
  return events[index];
}

export function getNextEvent(): Event {
  return events[0]; // Equinox is the next upcoming
}

export function getEventDates(): { date: string; title: string }[] {
  return events.map((e) => ({ date: e.date, title: e.title }));
}
