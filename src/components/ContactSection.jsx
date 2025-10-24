import { socialsContent } from "../data/data";


const ContactSection = () => {
    const { title, content, socialLinks, coffeePicture } = socialsContent;

    return (
        <div className="bg-[#704214] min-h-[70vh] flex items-center justify-center p-8 md:p-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                <div className="w-full md:w-1/2 flex flex-col justify-center text-left mb-10 md:mb-0">

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        {title}
                    </h2>

                    <p className="inter-font text-xl sm:text-2xl leading-relaxed tracking-wider text-[#F5EBDD] max-w-lg mb-8">
                        {content}
                    </p>

                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                aria-label={`Visit our ${link.name} page`}
                                className="transition duration-300 transform hover:scale-105"
                            >
                                <img
                                    src={link.image}
                                    alt={link.name}
                                    className="w-16 h-16 rounded-xl shadow-lg bg-white p-3 object-contain"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/ffffff/000000?text=Icon"; }} // Fallback if mock fails
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={coffeePicture}
                        alt="Dynamic Coffee Splash Illustration"
                        className="max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
