// data.js

import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";
import d from "../assets/d.svg";
import bg from "../assets/bg.svg";
import bean from "../assets/bean.png";

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

export const coffeeProducts = [
    {
        id: 1,
        name: "Morning Ritual",
        description: "Smooth, nutty medium roast with balanced sweetness and depth.",
        image:
            "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        name: "Velvet Night",
        description: "Dark roast with bold cocoa notes and a lingering finish.",
        image:
            "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        name: "Amber Bloom",
        description: "Light roast with bright citrus aroma and floral undertones.",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    },
];

export const siteInfo = {
    brand: "Coffee Collective",
    tagline: "Crafted for clarity, focus, and calm.",
    vercelLink: "https://your-vercel-link-here.vercel.app",
};
