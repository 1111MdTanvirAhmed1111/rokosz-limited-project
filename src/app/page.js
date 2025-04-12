'use client'; // Enable client-side rendering for interactivity

import Link from 'next/link';
import {
  MdCode,
  MdDevices,
  MdDesignServices,
  MdCloud,
  MdSecurity,
  MdPsychology,
  MdShoppingBag,
  MdSupportAgent,
  MdHealthAndSafety,
  MdPayments,
  MdShoppingCart,
  MdSchool,
  MdFactory,
  MdRealEstateAgent,
  MdSearch,
  MdEventNote,
  MdBrush,
  MdDeveloperMode,
  MdBugReport,
  MdRocketLaunch,
  MdArrowBack,
  MdArrowForward,
} from 'react-icons/md';

const HomePage = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full max-w-[1280px] mx-auto bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/5 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              Next-Gen IT Solutions
              <span className="block text-blue-400">For Tomorrow's World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Innovative digital solutions that transform businesses and drive growth in a rapidly
              evolving technological landscape.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-600 rounded-md font-medium text-white hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border border-blue-500 rounded-md font-medium text-blue-400 hover:bg-blue-500/10 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
          {/* Next: "Add animated tech particles background using canvas or svg" */}
        </section>

        {/* Services Section */}
        <section className="py-20 px-8 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Services</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
              <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                Comprehensive IT solutions tailored to elevate your business with cutting-edge
                technology and expert implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <MdCode />,
                  title: 'Custom Software',
                  desc: 'Tailored software solutions designed to address your unique business challenges.',
                },
                {
                  icon: <MdDevices />,
                  title: 'Web & Mobile Apps',
                  desc: 'Responsive applications that deliver seamless experiences across all devices.',
                },
                {
                  icon: <MdDesignServices />,
                  title: 'UI/UX Design',
                  desc: 'User-centered design that enhances engagement and satisfaction.',
                },
                {
                  icon: <MdCloud />,
                  title: 'Cloud Solutions',
                  desc: 'Scalable cloud infrastructure for optimal performance and reliability.',
                },
                {
                  icon: <MdSecurity />,
                  title: 'Cybersecurity',
                  desc: 'Robust security measures to protect your digital assets and data.',
                },
                {
                  icon: <MdPsychology />,
                  title: 'AI & Machine Learning',
                  desc: 'Intelligent systems that automate processes and provide valuable insights.',
                },
                {
                  icon: <MdShoppingBag />,
                  title: 'E-Commerce',
                  desc: 'Digital storefronts that drive conversions and enhance customer experience.',
                },
                {
                  icon: <MdSupportAgent />,
                  title: 'IT Consulting',
                  desc: 'Strategic guidance to optimize your technology investments.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group hover:-translate-y-1"
                >
                  <span className="text-4xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.desc}</p>
                  <Link
                    href="/placeholder"
                    className="text-blue-400 inline-flex items-center group-hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn more
                    <MdArrowForward className="ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Next: "Add a filter system to sort services by category" */}
        </section>

        {/* Industries Section */}
        <section className="py-20 px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-3xl rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
              <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                Our expertise spans across various sectors, providing specialized solutions for
                industry-specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: <MdHealthAndSafety />, name: 'Healthcare' },
                { icon: <MdPayments />, name: 'Fintech' },
                { icon: <MdShoppingCart />, name: 'E-Commerce' },
                { icon: <MdSchool />, name: 'Education' },
                { icon: <MdFactory />, name: 'Manufacturing' },
                { icon: <MdRealEstateAgent />, name: 'Real Estate' },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 p-6 rounded-xl text-center hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-blue-500/30 group"
                >
                  <div className="flex justify-center mb-3">
                    <span className="text-3xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {industry.icon}
                    </span>
                  </div>
                  <h3 className="font-medium">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Next: "Add case studies from each industry" */}
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
              <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                A transparent and collaborative approach to delivering successful projects.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/50 hidden md:block"></div>

              {[
                {
                  phase: 'Discovery',
                  icon: <MdSearch />,
                  desc: 'Understanding your business needs and objectives',
                },
                {
                  phase: 'Planning',
                  icon: <MdEventNote />,
                  desc: 'Defining project scope, timeline, and resources',
                },
                {
                  phase: 'Design',
                  icon: <MdBrush />,
                  desc: 'Creating intuitive and engaging user interfaces',
                },
                {
                  phase: 'Development',
                  icon: <MdDeveloperMode />,
                  desc: 'Building robust and scalable solutions',
                },
                { phase: 'Testing', icon: <MdBugReport />, desc: 'Ensuring quality and performance' },
                {
                  phase: 'Deployment',
                  icon: <MdRocketLaunch />,
                  desc: 'Launching your solution to the world',
                },
              ].map((step, index) => (
                <div key={index} className="relative mb-12 md:mb-24">
                  <div
                    className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}
                    >
                      <div
                        className={`bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1`}
                      >
                        <h3 className="text-2xl font-bold mb-2 text-blue-400">{step.phase}</h3>
                        <p className="text-gray-300">{step.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 md:flex items-center justify-center hidden">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-600/20">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Next: "Add interactive timeline with progress animation" */}
        </section>

        {/* Stats/Testimonials Section */}
        <section className="py-20 px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Impact</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { value: '200+', label: 'Clients Worldwide' },
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Years of Excellence' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 p-8 rounded-xl text-center border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 flex flex-col justify-center md:border-r md:border-gray-700 md:pr-8 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
                  <p className="text-gray-400">
                    Discover why businesses trust us with their most challenging technology
                    initiatives.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                      <MdArrowBack className="text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                      <MdArrowForward className="text-white" />
                    </button>
                  </div>
                </div>

                <div className="md:w-2/3 md:pl-8">
                  <div className="relative">
                    <span className="text-6xl text-blue-500/20 absolute top-0 left-0">"</span>
                    <p className="text-lg text-gray-300 mb-6 mt-6 pl-8">
                      Their innovative approach and technical expertise transformed our outdated
                      systems into a streamlined digital ecosystem. The team's commitment to
                      understanding our business needs and providing tailored solutions exceeded our
                      expectations.
                    </p>
                    <div className="flex items-center pl-8">
                      <div className="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
                      <div>
                        <div className="font-bold">Sarah Johnson</div>
                        <div className="text-gray-400 text-sm">CTO, InnovateTech Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Next: "Add testimonial carousel with client logos" */}
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
              Let's discuss how our innovative IT solutions can help you achieve your digital
              transformation goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-white/30"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border border-white rounded-md font-medium text-white hover:bg-white/10 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
          {/* Next: "Add a quick contact form within this section" */}
        </section>
      </div>
    </div>
  );
};

export default HomePage;