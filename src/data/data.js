import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";
import d from "../assets/d.svg";
import bean from "../assets/bean.png";

export const beanImage = bean;

export const navContent = {
  brand: "Sunface Coffee",
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
};

export const heroContent = {
  title: "“Wake up. Shine on.”",
  subtitle:
    "“Sunface is coffee with warmth and good energy. From bold espresso to creamy matcha — start with a smile, sip with the sun.”",
  ctaText: "Explore Our Blends",
  coffeeA: a,
  coffeeB: b,
  coffeeC: c,
  coffeeD: d,
  beanImage: bean,
};

import coffeeAmericano from "../assets/coffee-americano.svg";
import coffeeMatcha from "../assets/coffee-matcha.svg";
import coffeeMocha from "../assets/coffee-mocha.svg";

export const coffeeProducts = [
  {
    id: 1,
    name: "Mocha",
    description:
      "Smooth, chocolatey comfort in a cup — rich espresso meets cocoa for a cozy indulgence.",
    imageUrl: coffeeMocha,
  },
  {
    id: 2,
    name: "Matcha Latte",
    description:
      "Earthy, creamy, and calming — a gentle blend of green tea and milk that soothes the senses.",
    imageUrl: coffeeMatcha,
  },
  {
    id: 3,
    name: "Sunface Brew",
    description:
      "Bright, balanced, and bold — our signature house blend made to lift your mood and start your day smiling.",
    imageUrl: coffeeAmericano,
  },
];


import coffeeStoryImage from "../assets/coffee-story.svg";
import coffeeShopPicture from "../assets/coffee-shop-picture.jpg";
export const aboutUsContent = {

  coffeeStoryImage: coffeeStoryImage,
  title: "The Sunface Story",
  story: "Sunface began with a simple idea — that coffee should make you feel as good as it tastes. We wanted to bring a little sunshine into every cup, a moment of warmth in the middle of busy days. Each blend is made to lift your mood, calm your mind, and remind you that even small moments can smile back.",

  visitUsMessage: "Come sip sunshine with us at our cozy corner café — where every cup feels like a smile.",
  visitUsLocation: "We are located at San Jose del Monte Quirino",

  openingScheduleMessage: "We are open daily from 7 AM to 8 PM",
  dropByMessage: "Come sip sunshine with us — where each cup is brewed with warmth, laughter, and a touch of home. Our doors (and hearts) are always open.",
  coffeeShopPicture: coffeeShopPicture,
};


import fbImage from "../assets/socials-fb.svg";
import twitterImage from "../assets/socials-twitter.svg";
import instaImage from "../assets/socials-insta.svg";
export const socialsContent = {
  title: "Got questions or just want to say hi?",
  content: "Reach us at hello@sunface.coffee or find us on @sunfacecoffee. or Check our social medias!",
  socialLinks: [
    { name: 'Instagram', href: '#', image: instaImage },
    { name: 'Facebook', href: '#', image: fbImage },
    { name: 'Twitter/X', href: '#', image: twitterImage },
  ],
  coffeePicture: c
};
