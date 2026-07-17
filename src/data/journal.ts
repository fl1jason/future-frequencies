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
}

export const articles: Article[] = [
  {
    id: 'sound-matters',
    pillar: 'Sound System',
    title: 'Why Sound Matters More Than Volume',
    image: soundMattersImg.src,
  },
  {
    id: 'behind-booth',
    pillar: 'Behind The Scenes',
    title: 'Behind The Booth',
    image: behindBoothImg.src,
  },
  {
    id: 'building-systems',
    pillar: 'Sound System',
    title: 'Building Sound Systems That Move People',
    image: buildingSystemsImg.src,
  },
  {
    id: 'atmosphere-design',
    pillar: 'Atmosphere',
    title: 'How We Design Immersive Environments',
    image: atmosphereDesignImg.src,
  },
  {
    id: 'community-stories',
    pillar: 'Community',
    title: 'Stories From Our Community',
    image: communityStoriesImg.src,
  },
  {
    id: 'music-discovery',
    pillar: 'Music Discovery',
    title: 'Underground Gems — June Selection',
    image: undergroundGemsImg.src,
  },
];
