import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <Header />
        {/* Background Image */}
        <div className="-z-10 absolute inset-0">
          <Image
            src="/images/slider-bg.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority // optional: improves performance for above-the-fold images
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Slider Section */}
        <section className="relative py-20 pt-44 h-screen">
          <div className="mx-auto px-4 container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h1 className="mb-4 font-bold text-white text-4xl md:text-5xl">
                Finding Parking Lots Made Easy
              </h1>
              <p className="text-white text-lg">
                Necessitatibus non ducimus hic dolor? Maiores itaque vitae sit
                blanditiis porro, a expedita ex. Totam vel sed obcaecati.
                Placeat maxime asperiores deleniti tenetur officiis laboriosam
                laborum a nihil quisquam quis!
              </p>
            </div>

            <div className="bg-white shadow-lg mx-auto p-6 rounded-lg max-w-4xl">
              <form>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-6">
                  <div>
                    <label className="block mb-2 text-gray-700">
                      Select Parking
                    </label>
                    <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                      <option data-display="Highway Park">Highway Park</option>
                      <option value="1">Highway Park</option>
                      <option value="2">Highway Park</option>
                      <option value="3">Highway Park</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      placeholder="John doe"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">
                      Your Mobile Number
                    </label>
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      placeholder="01 2345678910"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold text-white transition duration-300"
                  >
                    Search Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl">About Us</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-8">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/about-img.jpg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="mb-4 font-bold text-2xl">We Are Here For Help</h3>
              <p className="mb-4 text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage to be
                sure there isn't anything the middle of text.
              </p>
              <p className="mb-6 text-gray-600">
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </p>
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 font-bold text-3xl">Why Choose Us</h2>
            <p className="text-gray-600">
              Eaque nostrum quis ad aliquam autem odio assumenda accusamus,
              consequuntur, iste voluptate voluptates quia non dicta hic
              repellendus similique a facere earum omnis? Repellendus nemo,
              aspernatur ullam est deserunt officiis.
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-20 h-20">
                <Image
                  src="/images/w1.png"
                  alt="No Booking Fees"
                  width={80}
                  height={80}
                />
              </div>
              <h4 className="mb-3 font-bold text-xl">No Booking Fees</h4>
              <p className="text-gray-600">
                Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas?
                Omnis error culpa illo nihil consequatur consectetur tenetur
                harum modi, quae libero ducimus reiciendis voluptat excepturi.
                Cum ducimus nesciunt dicta tenetur ducimus perferendis.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-20 h-20">
                <Image
                  src="/images/w2.png"
                  alt="Online Payments"
                  width={80}
                  height={80}
                />
              </div>
              <h4 className="mb-3 font-bold text-xl">Online Payments</h4>
              <p className="text-gray-600">
                Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas?
                Omnis error culpa illo nihil consequatur consectetur tenetur
                harum modi, quae libero ducimus reiciendis voluptat excepturi.
                Cum ducimus nesciunt dicta tenetur ducimus perferendis.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="mx-auto mb-4 w-20 h-20">
                <Image
                  src="/images/w3.png"
                  alt="Simple Booking Process"
                  width={80}
                  height={80}
                />
              </div>
              <h4 className="mb-3 font-bold text-xl">Simple Booking Process</h4>
              <p className="text-gray-600">
                Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas?
                Omnis error culpa illo nihil consequatur consectetur tenetur
                harum modi, quae libero ducimus reiciendis voluptat excepturi.
                Cum ducimus nesciunt dicta tenetur ducimus perferendis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="-z-10 absolute inset-0">
          <Image
            src="/images/pricing-bg.jpg"
            alt="Pricing Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative mx-auto px-4 container">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-white text-3xl">Our Pricing</h2>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h4 className="mb-2 font-bold text-3xl text-center">$10</h4>
                <h5 className="mb-6 font-semibold text-xl text-center">
                  Basic
                </h5>
                <p className="mb-6 text-gray-600">
                  Consequuntur iure, quam vero quidem minima obcaecati veniam,
                  praesentium impedit quod repudiandae tempora amet deserunt
                  rerum accusamus. Commodi qui, illum ad ipsa porro ipsum
                  nostrum magni minus.
                </p>
                <a
                  href="#"
                  className="flex justify-center items-center font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
              <div className="bg-blue-600 shadow-lg p-8 rounded-lg text-white md:-translate-y-4 transform">
                <h4 className="mb-2 font-bold text-3xl text-center">$30</h4>
                <h5 className="mb-6 font-semibold text-xl text-center">
                  Premium
                </h5>
                <p className="mb-6">
                  Consequuntur iure, quam vero quidem minima obcaecati veniam,
                  praesentium impedit quod repudiandae tempora amet deserunt
                  rerum accusamus. Commodi qui, illum ad ipsa porro ipsum
                  nostrum magni minus.
                </p>
                <a
                  href="#"
                  className="flex justify-center items-center font-semibold hover:text-gray-200"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h4 className="mb-2 font-bold text-3xl text-center">$20</h4>
                <h5 className="mb-6 font-semibold text-xl text-center">
                  Standard
                </h5>
                <p className="mb-6 text-gray-600">
                  Consequuntur iure, quam vero quidem minima obcaecati veniam,
                  praesentium impedit quod repudiandae tempora amet deserunt
                  rerum accusamus. Commodi qui, illum ad ipsa porro ipsum
                  nostrum magni minus.
                </p>
                <a
                  href="#"
                  className="flex justify-center items-center font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl">
              What Says Our <span className="text-blue-600">Client</span>
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      src="/images/c1.jpg"
                      alt="Lisa Adams"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="font-bold">Lisa Adams</h6>
                    <p className="text-gray-500">Magna</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      src="/images/c2.jpg"
                      alt="Michel Trout"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="font-bold">Michel Trout</h6>
                    <p className="text-gray-500">Magna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-800 py-12 text-white">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 font-bold text-xl">Stay Connected</h4>
              <form className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="mb-2 px-4 py-2 rounded-lg w-full text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white transition duration-300"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-xl">About Us</h4>
              <p className="text-gray-300">
                Necessitatibus, culpa, totam quod neque cum officiis odio,
                excepturi magnam incidunt voluptates sed voluptate id expedita
                sint! Cum veritatis iusto molestiae reiciendis deserunt vel odio
                incidunt, tenetur itaque. Ullam, iste!
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-xl">Online Booking</h4>
              <p className="text-gray-300">
                Accusantium quis architecto, necessitatibus libero nemo facere
                perferendis obcaecati pariatur magni quod praesentium provident
                nisi impedit nobis omnis. Assumenda vero impedit dolorum
                perspiciatis, ipsa quasi corrupti numquam.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-xl">Contact us</h4>
              <p className="mb-4 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="space-y-3">
                <a href="#" className="flex items-center hover:text-blue-400">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Location</span>
                </a>
                <a href="#" className="flex items-center hover:text-blue-400">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call : +01 123455678990</span>
                </a>
                <a href="#" className="flex items-center hover:text-blue-400">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email : demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
