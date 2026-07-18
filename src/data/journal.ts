import soundMattersImg from '../assets/images/WhySoundMattersMoreThanVolume.png';
import behindBoothImg from '../assets/images/BehindTheBooth.png';
import buildingSystemsImg from '../assets/images/BuildingSoundSystemsThatMovePeople.png';
import atmosphereDesignImg from '../assets/images/HowWeDesignImmersiveEnvironments.png';
import communityStoriesImg from '../assets/images/HowWeBuildAtmosphere.png';
import undergroundGemsImg from '../assets/images/UndergroundGemsJuneSelection.png';

export interface Article {
  id: string;
  pillar: string;
  title: string;
  image?: string;
  excerpt?: string;
  content?: string;
  date?: string;
}

// Fallback articles (used when markdown files are not available)
// In a real setup, these would be loaded from src/content/journal/*.md files
const fallbackArticles: Article[] = [
  {
    id: 'sound-matters',
    pillar: 'Sound System',
    title: 'Why Sound Matters More Than Volume',
    image: soundMattersImg.src,
    date: 'Jul 17, 2026',
    excerpt: 'Exploring the philosophy and practice behind creating immersive deep house experiences that transcend the ordinary.',
  },
  {
    id: 'behind-booth',
    pillar: 'Behind The Scenes',
    title: 'Behind The Booth',
    image: behindBoothImg.src,
    date: 'Jul 16, 2026',
    excerpt: 'A glimpse into the craft and intention that goes into every resonance event.',
  },
  {
    id: 'building-systems',
    pillar: 'Sound System',
    title: 'Building Sound Systems That Move People',
    image: buildingSystemsImg.src,
    date: 'Jul 15, 2026',
    excerpt: 'The science and art of designing sound systems for deep house venues.',
  },
  {
    id: 'atmosphere-design',
    pillar: 'Atmosphere',
    title: 'How We Design Immersive Environments',
    image: atmosphereDesignImg.src,
    date: 'Jul 14, 2026',
    excerpt: 'Creating spaces where sound, light, and community converge.',
  },
  {
    id: 'community-stories',
    pillar: 'Community',
    title: 'Stories From Our Community',
    image: communityStoriesImg.src,
    date: 'Jul 13, 2026',
    excerpt: 'Why community is at the heart of everything we do.',
  },
  {
    id: 'music-discovery',
    pillar: 'Music Discovery',
    title: 'Underground Gems — June Selection',
    image: undergroundGemsImg.src,
    date: 'Jul 12, 2026',
    excerpt: 'Our favorite discoveries from June—emerging artists pushing the boundaries of deep house.',
  },
];

export const articles: Article[] = fallbackArticles;
