import React from "react";

const Contact = () => {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto px-4 container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-extrabold text-orange-600 text-4xl">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question or want to work with us? Fill out the form below and
            we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form and Info */}
        <div className="flex lg:flex-row flex-col gap-12">
          {/* Form */}
          <form className="space-y-6 bg-white shadow-xl p-8 rounded-3xl w-full lg:w-2/3">
            <div className="flex md:flex-row flex-col gap-6">
              <div className="w-full">
                <label className="block mb-2 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us how we can help you..."
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold text-white transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6 w-full lg:w-1/3">
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h4 className="mb-2 font-semibold text-orange-500 text-xl">
                Email
              </h4>
              <p className="text-gray-600">support@paspark.com</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h4 className="mb-2 font-semibold text-orange-500 text-xl">
                Phone
              </h4>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h4 className="mb-2 font-semibold text-orange-500 text-xl">
                Address
              </h4>
              <p className="text-gray-600">
                123 Parking Lane
                <br />
                Smart City, Techland 45678
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
