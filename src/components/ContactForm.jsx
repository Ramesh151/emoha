import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section className=" bg-red-700 " id="contact">
        <div className="mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className=" ">
            <div className="grid w-full md:grid-cols-2">
              <div className="card  h-fit max-w-6xl p-5 md:p-12" id="form">
                <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="text-2xl  py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                    Connect with us
                  </div>
                  <form className="py-4 px-6" action="" method="POST">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="service"
                      >
                        Exploring Emoha for
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service"
                        name="service"
                      >
                        <option value="">My Parents</option>
                        <option value="haircut">My friend support</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="service"
                      >
                        How did you hear about us
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service"
                        name="service"
                      >
                        <option value="">Facebook</option>
                        <option value="haircut">Youtube </option>
                        <option value="coloring">Instgram</option>
                        <option value="styling">Friend refer</option>
                        <option value="facial">others</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-center mb-4">
                      <button
                        className=" bg-red-600 text-white py-2  rounded hover:bg-red-900 focus:outline-none focus:shadow-outline px-9 "
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="h-full flex justify-center items-center mx-auto">
                <ul className="mb-6 md:mb-0">
                  <li className="flex my-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="    text-white">
                        216, Ocus Quantum Plaza, Sector 51, Opposite BPTP
                        Freedom Park, Near Artemis Hospital Gurugram, Haryana
                        122003
                      </p>
                      <p className=" text-white">New York, EEUU</p>
                    </div>
                  </li>
                  <li className="flex my-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className=" text-white">
                        India Toll-Free : 1800-203-5135<br></br>International
                        Toll-Free : +1888-866-0486
                        <br />
                      </p>
                      <p className=" text-white">Mail: eldersfirst@emoha.com</p>
                    </div>
                  </li>
                  <li className="flex my-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-white">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
