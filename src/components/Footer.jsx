import React from 'react';
import { socialsContent } from '../data/data';

const primaryColor = 'bg-[#704214]';
const lightTextColor = 'text-[#F5EBDD]';

const Footer = () => {
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Menu', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const { socialLinks } = socialsContent;

    const year = new Date().getFullYear();

    return (
        <footer className={`${primaryColor} ${lightTextColor} inter-font`}>
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 lg:px-8">

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">

                    <div className="space-y-4 mb-10 xl:mb-0">
                        <h3 className="text-3xl font-extrabold text-white">
                            Sunface Coffee Co.
                        </h3>
                        <p className="text-sm leading-6 tracking-wide">
                            Crafting perfect mornings, one cup at a time.
                        </p>
                        <p className="text-sm leading-6 tracking-wide opacity-70">
                            San Jose del Monte Quirino
                        </p>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-8 mb-10 xl:col-span-2 xl:mt-0 xl:mb-0">
                        <div>
                            <h3 className="text-lg font-semibold leading-6 text-white mb-4">
                                Company
                            </h3>
                            <ul role="list" className="space-y-4">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base leading-6 hover:text-white transition duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='mt-8 md:mt-0'>
                            <h3 className="text-lg font-semibold leading-6 text-white mb-4">
                                Support
                            </h3>
                            <ul role="list" className="space-y-4">
                                <li>
                                    <a href="#" className="text-base leading-6 hover:text-white transition duration-200">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base leading-6 hover:text-white transition duration-200">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base leading-6 hover:text-white transition duration-200">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">

                    <p className="text-base leading-5 mb-4 md:mb-0">
                        &copy; {year} Made by Darwin Iquina
                    </p>

                    <div className="flex space-x-6">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:opacity-75 transition duration-200"
                                aria-label={`Follow us on ${item.name}`}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d={item.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
