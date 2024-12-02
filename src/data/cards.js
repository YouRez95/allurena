import card1_1 from "../assets/card1-1.webp";
import card1_2 from "../assets/card1-2.webp";
import card1_3 from "../assets/card1-3.webp";
import card2_1 from '../assets/card2-1.webp';
import card2_2 from '../assets/card2-2.webp';
import card2_3 from '../assets/card2-3.webp';
import card3_1 from '../assets/card3-1.webp';
import card3_2 from '../assets/card3-2.webp';
import card3_3 from '../assets/card3-3.webp';
import arc from "../assets/logos/arc.svg";
import cal from "../assets/logos/cal.svg";
import ngrok from "../assets/logos/ngrok.svg";
import reflex from "../assets/logos/reflex.svg";
import roblox from "../assets/logos/roblox.svg";
import uber from "../assets/logos/uber.svg";
import hulu from "../assets/logos/hulu.svg";
import alexandra from '../assets/alexandra.webp';
import broklinwhite from '../assets/broklinwhite.webp';
import kateTaubiks from '../assets/kateTaubiks.webp';

export const CARDS = [
  {
    background: 'bg-[#CDE9DD]/100',
    backgroundopacity: 'bg-[#CDE9DD]/80',
    text: 'skin preservation',
    heading: 'Protection',
    productImage: card1_1,
    productBackImg: card1_2,
    productType: 'Cleaners & Treatments',
    productPrice: 'from $60.00',
    largeImage: card1_3
  },
  {
    background: 'bg-[#A7D2DE]/100',
    backgroundopacity: 'bg-[#A7D2DE]/80',
    text: 'skin preservation',
    heading: 'Moisturizing',
    productImage: card2_1,
    productBackImg: card2_2,
    productType: 'Moisturisers & Sunscreens',
    productPrice: 'from $80.00',
    largeImage: card2_3
  },
  {
    background: 'bg-[#FBD1BD]/100',
    backgroundopacity: 'bg-[#FBD1BD]/80',
    text: 'support for youth',
    heading: 'Anti-aging',
    productImage: card3_1,
    productBackImg: card3_2,
    productType: 'Toners and Mists & Masks',
    productPrice: 'from $43.00',
    largeImage: card3_3
  },

]

export const LOGOS = [
  {
    id: 0,
    image: arc,
    text: 'ARC'
  },
  {
    id: 1,
    image: cal,
    text: 'CAL'
  },
  {
    id: 2,
    image: ngrok,
    text: 'NGROK'
  },
  {
    id: 3,
    image: reflex,
    text: 'REFLEX'
  },
  {
    id: 4,
    image: roblox,
    text: 'ROBLOX'
  },
  {
    id: 5,
    image: uber,
    text: 'UBER'
  },
  {
    id: 6,
    image: hulu,
    text: 'HULU'
  },
  {
    id: 7,
    image: cal,
    text: 'CAL'
  },
  {
    id: 8,
    image: reflex,
    text: 'REFLEX'
  },
  {
    id: 9,
    image: arc,
    text: 'ARC'
  },
  {
    id: 10,
    image: roblox,
    text: 'ROBLOX'
  },
]


export const TESTIMONIALS = [
  {
    id: 0,
    name: "Alexandra Nubeniuk",
    image: alexandra,
    description: `I recommend to try who has problem skin! Previously,
    I used other pharmacy products, but this one helped) The gel is economical,
    the smell is wow, it's second, after washing it is not felt, it also moisturizes the skin. The result is super!`,
    job: "Regular customer",
    rating: 4.7,
    background: '#FBD1BD'
  },
  {
    id: 1,
    image: broklinwhite,
    name: "Brooklin White",
    description: `Very cool products, I use more than a week and the effect is already there. 
    There are less rashes and not so fast new ones appear. I have problematic skin, so it helps me a lot. 
    Also for the best effect I use their face milk. I recommend it!`,
    job: "New customer",
    rating: 4.2,
    background: '#A7D2DE'
  },
  {
    id: 2,
    image: kateTaubiks,
    name: "Kate Taubiks",
    description: `This is my first experience of buying products of this brand, I am satisfied. I have been using it for less than a week, I really liked it.
    A big plus is that the cream with hyaluronic acid does not dry the skin, but gives a feeling of softness.`,
    job: "New customer",
    rating: 4.9,
    background: '#CDE9DD'
  },
]