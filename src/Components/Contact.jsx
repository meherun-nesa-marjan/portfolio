import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieData from "../assets/lottie/lottie2.json";


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "2d0aac6a-2ca6-4c85-a73c-514d723a91f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitted(true);
        setIsError(false);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setIsError(true);
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-12 bg-gray-200 relative overflow-hidden">
      <Lottie
        animationData={lottieData}
        loop
        autoplay
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
      />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to get in touch with me through any of the methods below. I'm always open to new opportunities or simply connecting!
        </p>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Contact Information */}
          <div className="w-full lg:w-[40%]">
            <div className="border-2 border-green-900 rounded-lg my-5 mx-auto p-5 transition-all duration-300 hover:bg-gray-600 hover:text-white hover:border-white">
              <div className="flex justify-center items-center mb-2">
                <IoMailOutline className="text-3xl text-green-900 hover:text-white transition-colors duration-300" />
              </div>
              <a
                href="mailto:meherunnesamarjan@gmail.com"
                className="text-xl text-green-600 hover:text-white transition-colors duration-300"
              >
                meherunnesamarjan@gmail.com
              </a>
              <p className="mt-2 text-gray-600 hover:text-white transition-colors duration-300">
                Send a message
              </p>
            </div>

            <div className="border-2 border-green-900 rounded-lg my-5 mx-auto p-5">
              <div className="flex justify-center items-center mb-2">
                <FaWhatsapp className="text-3xl text-green-600" />
              </div>
              <a
                href="https://wa.me/01713525902"
                className="text-xl text-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <p className="mt-2 text-gray-600">Send a message</p>
            </div>

            <div className="border-2 border-green-900 rounded-lg my-5 mx-auto p-5">
              <div className="flex justify-center items-center mb-2">
                <FaFacebookMessenger className="text-3xl text-blue-500" />
              </div>
              <a
                href="https://m.me/meherunnesa.marjan"
                className="text-xl text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Messenger
              </a>
              <p className="mt-2 text-gray-600">Send a message</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[55%] mt-8 lg:mt-5">
            <form onSubmit={onSubmit} className="space-y-4 w-full">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  className="textarea textarea-bordered w-full"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-slate-600 text-white font-bold py-4 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>

            {/* Success/Error Feedback */}
            {isSubmitted && (
              <>
                <p className="text-green-500 mt-4">
                  Thank you! Your message has been sent successfully.
                </p>
                
              </>
            )}
            {isError && (
              <>
                <p className="text-red-500 mt-4">
                  Oops! Something went wrong. Please try again later.
                </p>
               
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
