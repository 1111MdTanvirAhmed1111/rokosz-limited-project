'use client'; // Use client-side rendering for interactive components

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import {
  MdComputer,
  MdDesignServices,
  MdSmartToy,
  MdShield,
  MdCloud,
  MdSettingsSuggest,
  MdLocationOn,
  MdMail,
  MdCall,
  MdArrowForward,
} from 'react-icons/md';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const AboutPage = () => {
  // Ensure animations are applied after component mounts for client-side rendering
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[style*="animation"]');
    animatedElements.forEach((el) => {
      el.style.animation = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.animation = null;
    });
  }, []);

  return (
    <div id="webcrumbs" className="bg-black text-white font-['Poppins'] min-h-screen">
      <div className="w-full max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
            <div className="grid grid-cols-12 gap-4 opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-screen border-r border-blue-500/20"></div>
              ))}
            </div>
            <div className="absolute inset-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: 0,
                    right: 0,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-blue-300 mb-6 sm:mb-8">
                Empowering Digital Innovation
              </p>
              <div className="max-w-3xl">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  We are a team of digital visionaries committed to transforming businesses through
                  cutting-edge technology solutions. Our mission is to bridge the gap between
                  imagination and implementation, creating digital experiences that inspire, engage,
                  and deliver exceptional results.
                </p>
              </div>
            </div>

            {/* Our Journey */}
            <div className="mt-12 sm:mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2 hidden sm:block"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 relative">
                  {[
                    { year: '2015', title: 'Founded', desc: 'Started with a vision' },
                    { year: '2017', title: 'First Major Client', desc: 'Expanding our reach' },
                    { year: '2019', title: 'Product Launch', desc: 'Innovative solutions' },
                    { year: '2021', title: 'Global Expansion', desc: 'Across continents' },
                    { year: '2023', title: 'Industry Awards', desc: 'Excellence recognized' },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 sm:mb-6 relative z-10 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                        <span className="text-white font-semibold text-sm sm:text-base">{item.year}</span>
                      </div>
                      <div className="text-center p-3 sm:p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-300">{item.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-12 sm:py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Who We Are</h2>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 sm:mb-8"></div>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  We are digital architects crafting innovative solutions for businesses ready to
                  embrace the future. Our vision is to lead the technological revolution by creating
                  products that are not just functional, but transformational.
                </p>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  At our core, we value collaboration, innovation, and excellence. We approach each
                  project with fresh perspective, combining cutting-edge technology with strategic
                  thinking to solve complex problems and create exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {[
                    { stat: '98%', label: 'Client Satisfaction', color: 'blue' },
                    { stat: '150+', label: 'Projects Delivered', color: 'purple' },
                    { stat: '12', label: 'Industry Awards', color: 'green' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-${item.color}-500 transition-all duration-300 flex flex-col items-center text-center`}
                    >
                      <span className={`text-2xl sm:text-4xl font-bold text-${item.color}-400`}>{item.stat}</span>
                      <span className="text-gray-400 mt-2 text-xs sm:text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-xl border border-gray-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-300">Our Values</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Innovation', desc: "Pushing boundaries to create what's next" },
                    { title: 'Excellence', desc: 'Committed to delivering exceptional quality' },
                    { title: 'Integrity', desc: 'Building trust through honest practices' },
                    { title: 'Collaboration', desc: 'Working together to achieve greatness' },
                  ].map((value, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    >
                      <div className="text-blue-400 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 sm:h-5 w-4 sm:w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">{value.title}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{value.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-12 sm:py-16 relative">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Background"
              fill
              className="object-cover"
              quality={50}
              priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-90"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <MdComputer />,
                  title: 'Web & App Development',
                  desc: 'Creating powerful, responsive applications that deliver exceptional user experiences.',
                },
                {
                  icon: <MdDesignServices />,
                  title: 'UI/UX Design',
                  desc: 'Crafting beautiful interfaces that engage users and enhance brand perception.',
                },
                {
                  icon: <MdSmartToy />,
                  title: 'AI & Automation',
                  desc: 'Leveraging artificial intelligence to streamline processes and create intelligent solutions.',
                },
                {
                  icon: <MdShield />,
                  title: 'Cybersecurity',
                  desc: 'Protecting your digital assets with cutting-edge security protocols and practices.',
                },
                {
                  icon: <MdCloud />,
                  title: 'Cloud Infrastructure',
                  desc: 'Building scalable, reliable cloud solutions for businesses of all sizes.',
                },
                {
                  icon: <MdSettingsSuggest />,
                  title: 'DevOps & Agile',
                  desc: 'Optimizing development workflows for speed, quality, and continuous improvement.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900/70 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20 flex flex-col h-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl sm:text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-300">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base flex-grow">{service.desc}</p>
                  <div className="mt-4 sm:mt-6">
                    <Link
                      href="/placeholder"
                      className="text-blue-400 flex items-center space-x-2 group-hover:text-white transition-colors duration-300 text-sm sm:text-base"
                    >
                      <span>Learn more</span>
                      <MdArrowForward className="text-xs sm:text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-950 to-black">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  name: 'Alex Chen',
                  role: 'Chief Technology Officer',
                  bio: '10+ years building scalable systems',
                  fact: 'Competitive chess player',
                  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Creative Director',
                  bio: 'Award-winning designer with global experience',
                  fact: 'Collects vintage arcade games',
                  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
                },
                {
                  name: 'Marcus Williams',
                  role: 'Lead Developer',
                  bio: 'Full-stack expert specializing in React',
                  fact: 'Once coded for 72 hours straight',
                  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
                },
                {
                  name: 'Jessica Kim',
                  role: 'UI/UX Specialist',
                  bio: 'Creates interfaces that users love',
                  fact: 'Former professional photographer',
                  img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
                },
              ].map((member, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={774}
                    height={774}
                    className="w-full h-full object-cover aspect-square filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-300 mb-2 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3">{member.bio}</p>
                    <div className="bg-blue-900/30 p-2 sm:p-3 rounded-lg border border-blue-800/50 backdrop-blur-sm">
                      <p className="text-xs sm:text-sm text-blue-200">
                        <span className="text-blue-400 font-semibold">Fun fact:</span> {member.fact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/team"
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-block text-sm sm:text-base"
              >
                Meet The Entire Team
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 sm:py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">
              Our Tech Stack
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
              {[
                {
                  name: 'React',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                },
                {
                  name: 'Node.js',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                },
                {
                  name: 'Python',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                },
                {
                  name: 'AWS',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                },
                {
                  name: 'Docker',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                },
                {
                  name: 'Figma',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                },
                {
                  name: 'TypeScript',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                },
                {
                  name: 'MongoDB',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                },
                {
                  name: 'Redux',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
                },
                {
                  name: 'TensorFlow',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
                },
                {
                  name: 'Kubernetes',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                },
                {
                  name: 'Next.js',
                  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center group">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-900 rounded-xl p-3 sm:p-4 flex items-center justify-center mb-3 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:scale-110">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      unoptimized // For external SVGs
                      loading="lazy"
                    />
                  </div>
                  <span className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300 text-xs sm:text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute w-full h-full opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full opacity-20"
                  style={{
                    width: `${Math.random() * 200 + 50}px`,
                    height: `${Math.random() * 200 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 200 + 50)}, 0.8), transparent)`,
                    transform: `translate(-50%, -50%)`,
                    filter: 'blur(40px)',
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="bg-gray-900/80 rounded-2xl p-8 sm:p-12 border border-gray-800 backdrop-blur-sm">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Let’s Build The Future Together
                </h2>
                <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
                  Ready to transform your digital presence? Our team is excited to collaborate with
                  you on your next project.
                </p>
              </div>
              <div className="flex justify-center mt-6 sm:mt-8">
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <MdArrowForward />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                {[
                  {
                    icon: <MdLocationOn />,
                    title: 'Our Office',
                    desc: '123 Tech Street, Innovation Park\nSan Francisco, CA 94107',
                    color: 'blue',
                  },
                  {
                    icon: <MdMail />,
                    title: 'Email Us',
                    desc: 'info@techinnovators.com\nsupport@techinnovators.com',
                    color: 'purple',
                  },
                  {
                    icon: <MdCall />,
                    title: 'Call Us',
                    desc: '+1 (555) 123-4567\nMon-Fri, 9am-6pm PST',
                    color: 'green',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-${item.color}-900/50 flex items-center justify-center mb-4 group-hover:bg-${item.color}-700/50 transition-colors duration-300`}>
                      <span className={`text-${item.color}-300 text-xl sm:text-2xl`}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm whitespace-pre-line">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-10">
                {[
                  { icon: <FaTwitter />, href: '/placeholder', color: 'blue-900' },
                  { icon: <FaLinkedinIn />, href: '/placeholder', color: 'blue-800' },
                  { icon: <FaInstagram />, href: '/placeholder', color: 'purple-900' },
                  { icon: <FaYoutube />, href: '/placeholder', color: 'red-900' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-${social.color} hover:text-white transition-colors duration-300`}
                  >
                    <span className="text-lg sm:text-xl">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;