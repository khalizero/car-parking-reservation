import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="container mx-auto px-6 py-12 pt-32" id="about-us">
      <section className="space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-base md:text-lg ">
            At <span className="text-teal-500 font-bold">PARK BUDDY</span>, we are revolutionizing the way you park your vehicle.
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-teal-500">Who We Are</h2>
          <p className=" text-base">
            We are a team of passionate innovators dedicated to solving everyday parking challenges. With a deep understanding of the hassles of traditional parking systems, we’ve designed an intelligent automated solution to simplify the process for both drivers and administrators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-teal-500">Our Mission</h2>
          <p className=" text-base">
            To make parking smarter, faster, and more secure by leveraging the power of artificial intelligence, real-time monitoring, and automated processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-teal-500">What We Offer</h2>
          <ul className="list-disc list-inside  text-base space-y-2">
            <li>AI-Based Vehicle Recognition: A precise and reliable way to identify vehicles.</li>
            <li>Smart Parking Management: Automatic slot allocation and real-time tracking.</li>
            <li>Advance Booking: Reserve parking spots effortlessly ahead of time.</li>
            <li>Secure Payment Options: Pay with ease using banking accounts or VISA cards.</li>
            <li>Comprehensive Admin Control: Tools for monitoring, management, and reporting.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-teal-500">Why Choose Us?</h2>
          <ul className="list-disc list-inside  text-base space-y-2">
            <li>Efficiency: Spend less time finding a parking spot and more time on what matters.</li>
            <li>Security: Enhanced monitoring and secure payment systems for peace of mind.</li>
            <li>Convenience: User-friendly interface and hassle-free operations tailored to your needs.</li>
            <li>Innovation: We stay ahead by integrating the latest technology into our solutions.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-teal-500">Join Us in Shaping the Future of Parking</h2>
          <p className=" text-base mt-4">
            Whether you’re a driver looking for a smooth parking experience or an administrator aiming for streamlined operations, <span className="text-teal-500 font-bold">PARK BUDDY</span> is here to transform your vision into reality.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutUs;
