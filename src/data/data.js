// data.js

import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";
import d from "../assets/d.svg";
import bg from "../assets/bg.svg";
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
    subtitle: "“Sunface is coffee with warmth and good energy. From bold espresso to creamy matcha — start with a smile, sip with the sun.”",
    ctaText: "Explore Our Blends",
    coffeeA: a,
    coffeeB: b,
    coffeeC: c,
    coffeeD: d,
    coffeeBg: bg,
    beanImage: bean,
};

import coffeeAmericano from "../assets/coffee-americano.svg";
import coffeeMatcha from "../assets/coffee-matcha.svg";
import coffeeMocha from "../assets/coffee-mocha.svg";


export const coffeeProducts = [
    {
        id: 1,
        name: "Mocha",
        description: "Smooth, chocolatey comfort in a cup — rich espresso meets cocoa for a cozy indulgence.",
        imageUrl: coffeeMocha
    },
    {
        id: 2,
        name: "Matcha Latte",
        description: "Earthy, creamy, and calming — a gentle blend of green tea and milk that soothes the senses.",
        imageUrl: coffeeMatcha
    },
    {
        id: 3,
        name: "Sunface Brew",
        description: "Bright, balanced, and bold — our signature house blend made to lift your mood and start your day smiling.",
        imageUrl: coffeeAmericano
    },
];



export const siteInfo = {
    brand: "Coffee Collective",
    tagline: "Crafted for clarity, focus, and calm.",
    vercelLink: "https://your-vercel-link-here.vercel.app",
};
