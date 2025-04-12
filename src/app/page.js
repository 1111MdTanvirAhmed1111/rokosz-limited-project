'use client'; // Required for client-side interactivity (Accordion, animations)

import Image from 'next/image';
import Link from 'next/link';
import { BsMouse3 } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            AFFORDABLE WEB DESIGN
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-gray-300">
            Professional websites that drive results for your business
          </p>
          <Button
            asChild
            className="bg-white text-black my-4 sm:my-5 hover:bg-black hover:text-white border border-white transition-all text-sm sm:text-base"
          >
            <Link href="/contact">GET STARTED</Link>
          </Button>
          <div className="text-center w-full translate-y-6 sm:translate-y-8 animate-bounce">
            <BsMouse3 className="text-4xl sm:text-5xl mx-auto block" />
            <span className="block animate-caret-blink translate-y-2 sm:translate-y-3 text-sm sm:text-base">
              Scroll Down
            </span>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-8 sm:py-12">
        <Accordion type="single" collapsible className="w-[90%] sm:w-[80%] mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm sm:text-base">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm sm:text-base">Is it styled?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              Yes. It comes with default styles that match the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm sm:text-base">Is it animated?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">WHAT WE DO</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base">
          We create beautiful, responsive websites that help businesses stand out online. Our team of
          experts combine stunning design with powerful functionality to deliver websites that convert
          visitors into customers.
        </p>

        {/* Marketing Stats Cards */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">MARKETING THAT WORKS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { stat: '98%', label: 'SATISFACTION RATE' },
            { stat: '10x', label: 'RETURN ON INVESTMENT' },
            { stat: '85%', label: 'CONVERSION RATE' },
            { stat: '24/7', label: 'CUSTOMER SUPPORT' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-700 text-center transform hover:-translate-y-1"
            >
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">{item.stat}</h4>
              <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Design Work Section */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center mb-12 sm:mb-16">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">DESIGNS BUILT WITH PURPOSE</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Every pixel matters. Our custom designs are crafted to showcase your brand and convert
              visitors into loyal customers. We focus on creating intuitive user experiences that guide
              your visitors exactly where you want them to go.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              From responsive mobile designs to stunning desktop experiences, we ensure your website
              looks amazing on every device.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x400/4B4B4B/FFFFFF.png?text=Web+Design+Example"
              alt="Web Design Example"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full hover:opacity-90 transition-opacity"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-gray-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">INSIGHTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                img: 'https://placehold.co/600x300/4B4B4B/FFFFFF.png?text=SEO+Tips',
                alt: 'SEO Tips',
                title: '10 SEO STRATEGIES FOR SMALL BUSINESSES',
                desc: 'Learn how to improve your website’s visibility and attract more organic traffic with these proven SEO techniques.',
              },
              {
                img: 'https://placehold.co/600x300/4B4B4B/FFFFFF.png?text=UX+Design',
                alt: 'UX Design',
                title: 'EFFECTIVE UI/UX DESIGN PRINCIPLES',
                desc: 'Discover the key principles that can transform your website’s user experience and boost conversion rates.',
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Image
                  src={insight.img}
                  alt={insight.alt}
                  width={600}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover"
                  quality={75}
                  loading="lazy"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2">{insight.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{insight.desc}</p>
                  <Link
                    href="/insights"
                    className="mt-4 text-gray-300 font-medium hover:text-white transition-colors text-sm sm:text-base"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Design Section */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">MY RECENT DESIGNS</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
          Check out some of our recent client projects and see how we’ve helped transform their online
          presence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {[
            {
              img: 'https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+1',
              alt: 'Project 1',
              title: 'E-COMMERCE WEBSITE',
              tags: 'Fashion | Responsive | E-commerce',
            },
            {
              img: 'https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+2',
              alt: 'Project 2',
              title: 'CORPORATE WEBSITE',
              tags: 'Business | Modern | Informative',
            },
            {
              img: 'https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+3',
              alt: 'Project 3',
              title: 'RESTAURANT WEBSITE',
              tags: 'Food | Interactive | Booking',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <Link
                    href="/projects"
                    className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm sm:text-base"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base sm:text-lg">{project.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{project.tags}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-gray-300 text-gray-300 hover:bg-gray-700 hover:text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base"
          >
            <Link href="/projects">VIEW ALL PROJECTS</Link>
          </Button>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="bg-gray-900 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">OUR DESIGN PROCESS</h2>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center mb-12 sm:mb-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                <ol className="relative border-l border-gray-600 ml-3">
                  {[
                    {
                      step: 'Discovery',
                      desc: 'We learn about your business, goals, and target audience to create a strategic plan.',
                    },
                    {
                      step: 'Design',
                      desc: 'Our designers create wireframes and mockups based on your requirements.',
                    },
                    {
                      step: 'Development',
                      desc: 'We build your website with clean code, ensuring it’s responsive and fast.',
                    },
                    { step: 'Launch', desc: 'After thorough testing, we deploy your website and provide ongoing support.' },
                  ].map((item, index) => (
                    <li key={index} className="mb-6 sm:mb-8 ml-6">
                      <span className="absolute flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 bg-gray-700 rounded-full -left-3 sm:-left-4 text-white text-sm sm:text-base">
                        {index + 1}
                      </span>
                      <h3 className="font-bold text-base sm:text-lg mb-1">{item.step}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <div className="absolute inset-0 bg-gray-700 rounded flex items-center justify-center">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-4xl sm:text-5xl text-gray-400 mb-2">
                        play_circle
                      </span>
                      <p className="text-gray-400 font-medium text-sm sm:text-base">Video Presentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Solution Section */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">A TRUSTED SOLUTION</h2>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <h3 className="font-bold text-lg sm:text-xl mb-4">KEY BENEFITS:</h3>
              <ul className="space-y-3">
                {[
                  'Responsive design that works on all devices',
                  'SEO-friendly structure for better visibility',
                  'Fast loading speeds for better user experience',
                  'Easy-to-use content management system',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 sm:h-6 w-5 sm:w-6 mr-2 flex-shrink-0 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              asChild
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x400/4B4B4B/FFFFFF.png?text=Happy+Clients"
              alt="Happy Clients"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full hover:opacity-90 transition-opacity"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                initials: 'JD',
                name: 'JOHN DAVIS',
                title: 'CEO, Tech Solutions Inc.',
                quote:
                  'The website they created for us exceeded our expectations. It’s not only beautiful but also brought in a 40% increase in leads within the first month. Highly recommended!',
              },
              {
                initials: 'SM',
                name: 'SARAH MILLER',
                title: 'Marketing Director, Retail Brand',
                quote:
                  'Working with this team was a pleasure from start to finish. They listened to our needs and delivered a website that perfectly represents our brand. The results speak for themselves!',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-gray-700 flex items-center justify-center text-lg sm:text-xl font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{testimonial.quote}</p>
                <div className="mt-4 flex">
                  <span className="text-gray-300 text-sm sm:text-base">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">READY TO TRANSFORM YOUR ONLINE PRESENCE?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
            Let’s create a website that not only looks amazing but drives real business results. Contact
            us today for a free consultation.
          </p>
          <Button
            asChild
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-md text-base sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            <Link href="/contact">GET STARTED TODAY</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}