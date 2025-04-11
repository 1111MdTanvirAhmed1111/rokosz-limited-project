import { Button } from "@/components/ui/button"
import { BsMouse3 } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Home() {
  return (
    <div>
      <div className="bg-black ">
        {/* Hero Section */}
        <div className="relative h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center text-white text-center px-4">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
              AFFORDABLE WEB DESIGN
            </h1>
            <p className="text-lg md:text-xl opacity-90  max-w-2xl mx-auto text-gray-300">
              Professional websites that drive results for your business
            </p>
            <Button className='bg-white text-black my-5 hover:bg-black hover:text-white border-1 cursor-pointer transition-all border-white' >
              GET STARTED
            </Button>
            <div className="text-center w-full translate-y-8 animate-bounce">
            <BsMouse3 className="text-5xl mx-auto block"/>
            <span className="block animate-caret-blink translate-y-3">Scroll Down</span>
            </div>
          </div>
        </div>



        <Accordion type="single" collapsible className="w-[80%] mx-auto ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

        {/* What We Do Section */}
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">WHAT WE DO</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            We create beautiful, responsive websites that help businesses stand out online. Our team of
            experts combine stunning design with powerful functionality to deliver websites that convert
            visitors into customers.
          </p>

          {/* Marketing Stats Cards */}
          <h3 className="text-2xl font-bold text-center mb-8 text-white">MARKETING THAT WORKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-700 text-center transform hover:-translate-y-1">
              <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
              <p className="text-gray-400">SATISFACTION RATE</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-700 text-center transform hover:-translate-y-1">
              <h4 className="text-3xl font-bold text-white mb-2">10x</h4>
              <p className="text-gray-400">RETURN ON INVESTMENT</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-700 text-center transform hover:-translate-y-1">
              <h4 className="text-3xl font-bold text-white mb-2">85%</h4>
              <p className="text-gray-400">CONVERSION RATE</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-700 text-center transform hover:-translate-y-1">
              <h4 className="text-3xl font-bold text-white mb-2">24/7</h4>
              <p className="text-gray-400">CUSTOMER SUPPORT</p>
            </div>
          </div>

          {/* Design Work Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-white">DESIGNS BUILT WITH PURPOSE</h3>
              <p className="text-gray-400 mb-4">
                Every pixel matters. Our custom designs are crafted to showcase your brand and convert
                visitors into loyal customers. We focus on creating intuitive user experiences that
                guide your visitors exactly where you want them to go.
              </p>
              <p className="text-gray-400">
                From responsive mobile designs to stunning desktop experiences, we ensure your website
                looks amazing on every device.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/4B4B4B/FFFFFF.png?text=Web+Design+Example"
                alt="Web Design Example"
                className="rounded-lg shadow-lg w-full hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-gray-900 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">INSIGHTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <img
                  src="https://placehold.co/600x300/4B4B4B/FFFFFF.png?text=SEO+Tips"
                  alt="SEO Tips"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">10 SEO STRATEGIES FOR SMALL BUSINESSES</h3>
                  <p className="text-gray-400">
                    Learn how to improve your website's visibility and attract more organic traffic
                    with these proven SEO techniques.
                  </p>
                  <button className="mt-4 text-gray-300 font-medium hover:text-white transition-colors">
                    READ MORE →
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <img
                  src="https://placehold.co/600x300/4B4B4B/FFFFFF.png?text=UX+Design"
                  alt="UX Design"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">EFFECTIVE UI/UX DESIGN PRINCIPLES</h3>
                  <p className="text-gray-400">
                    Discover the key principles that can transform your website's user experience
                    and boost conversion rates.
                  </p>
                  <button className="mt-4 text-gray-300 font-medium hover:text-white transition-colors">
                    READ MORE →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Design Section */}
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">MY RECENT DESIGNS</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Check out some of our recent client projects and see how we've helped transform their online
            presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+1"
                  alt="Project 1"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-white">E-COMMERCE WEBSITE</h3>
                <p className="text-gray-400 text-sm">Fashion | Responsive | E-commerce</p>
              </div>
            </div>

            <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+2"
                  alt="Project 2"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-white">CORPORATE WEBSITE</h3>
                <p className="text-gray-400 text-sm">Business | Modern | Informative</p>
              </div>
            </div>

            <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="https://placehold.co/400x300/4B4B4B/FFFFFF.png?text=Project+3"
                  alt="Project 3"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-white">RESTAURANT WEBSITE</h3>
                <p className="text-gray-400 text-sm">Food | Interactive | Booking</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="border-2 border-gray-300 text-gray-300 hover:bg-gray-700 hover:text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>

        {/* Design Process Section */}
        <div className="bg-gray-900 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">OUR DESIGN PROCESS</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <ol className="relative border-l border-gray-600 ml-3">
                    <li className="mb-8 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -left-4 text-white">
                        1
                      </span>
                      <h3 className="font-bold text-lg mb-1 text-white">Discovery</h3>
                      <p className="text-gray-400">
                        We learn about your business, goals, and target audience to create a
                        strategic plan.
                      </p>
                    </li>
                    <li className="mb-8 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -left-4 text-white">
                        2
                      </span>
                      <h3 className="font-bold text-lg mb-1 text-white">Design</h3>
                      <p className="text-gray-400">
                        Our designers create wireframes and mockups based on your requirements.
                      </p>
                    </li>
                    <li className="mb-8 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -left-4 text-white">
                        3
                      </span>
                      <h3 className="font-bold text-lg mb-1 text-white">Development</h3>
                      <p className="text-gray-400">
                        We build your website with clean code, ensuring it's responsive and
                        fast.
                      </p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -left-4 text-white">
                        4
                      </span>
                      <h3 className="font-bold text-lg mb-1 text-white">Launch</h3>
                      <p className="text-gray-400">
                        After thorough testing, we deploy your website and provide ongoing
                        support.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="relative pb-[56.25%] h-0">
                    <div className="absolute inset-0 bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-5xl text-gray-400 mb-2">
                          play_circle
                        </span>
                        <p className="text-gray-400 font-medium">Video Presentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Solution Section */}
        <div className="max-w-5xl mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">A TRUSTED SOLUTION</h2>
              <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4 text-white">KEY BENEFITS:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 flex-shrink-0 text-white"
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
                      ></path>
                    </svg>
                    <span>Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 flex-shrink-0 text-white"
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
                      ></path>
                    </svg>
                    <span>SEO-friendly structure for better visibility</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 flex-shrink-0 text-white"
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
                      ></path>
                    </svg>
                    <span>Fast loading speeds for better user experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 flex-shrink-0 text-white"
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
                      ></path>
                    </svg>
                    <span>Easy-to-use content management system</span>
                  </li>
                </ul>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
                CONTACT US
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/4B4B4B/FFFFFF.png?text=Happy+Clients"
                alt="Happy Clients"
                className="rounded-lg shadow-lg w-full hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-black text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">WHAT PEOPLE SAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold mr-4 text-white">
                    JD
                  </div>
                  <div>
                    <h3 className="font-bold text-white">JOHN DAVIS</h3>
                    <p className="text-gray-400 text-sm">CEO, Tech Solutions Inc.</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The website they created for us exceeded our expectations. It's not only beautiful
                  but also brought in a 40% increase in leads within the first month. Highly
                  recommended!"
                </p>
                <div className="mt-4 flex">
                  <span className="text-gray-300">★★★★★</span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold mr-4 text-white">
                    SM
                  </div>
                  <div>
                    <h3 className="font-bold text-white">SARAH MILLER</h3>
                    <p className="text-gray-400 text-sm">Marketing Director, Retail Brand</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Working with this team was a pleasure from start to finish. They listened to our
                  needs and delivered a website that perfectly represents our brand. The results speak
                  for themselves!"
                </p>
                <div className="mt-4 flex">
                  <span className="text-gray-300">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-24 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">READY TO TRANSFORM YOUR ONLINE PRESENCE?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Let's create a website that not only looks amazing but drives real business results. Contact
              us today for a free consultation.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-md text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              GET STARTED TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home