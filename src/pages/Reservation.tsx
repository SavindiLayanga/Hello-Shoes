// import React from 'react';
// import Reservation from './pages/Reservation';
//
//
// const Reservation = () => {
//     return (
//
//         <section id="reservation" className="w-full bg-gray-100 py-16">
//             <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
//                 <div className="lg:w-1/2">
//                     <img
//                         src="your-image-path.jpg"
//                         alt="Table Setup"
//                         className="rounded-lg shadow-lg w-full"
//                     />
//                 </div>
//
//                 {/*Form Section */}
//                 <div className="lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
//                     <h2 className="text-red-500 font-semibold text-lg mb-2">Reservation</h2>
//                     <h3 className="text-2xl lg:text-3xl font-bold mb-6">Book Your Table</h3>
//                     <form className="space-y-6">
//
//                         {/*Your Name*/}
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 placeholder="Enter your name"
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                             />
//                         </div>
//
//                         {/*How Many People*/}
//                         <div>
//                             <label htmlFor="people" className="block text-sm font-medium text-gray-700">How Many
//                                 People</label>
//                             <input
//                                 type="number"
//                                 id="people"
//                                 placeholder="Enter number of people"
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                             />
//                         </div>
//
//                         {/*Email and Phone*/}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your
//                                     Email</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     placeholder="Enter your email"
//                                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your
//                                     Phone</label>
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     placeholder="Enter your phone"
//                                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                                 />
//                             </div>
//                         </div>
//
//                         {/*Date and Time*/}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
//                                 <input
//                                     type="date"
//                                     id="date"
//                                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
//                                 <input
//                                     type="time"
//                                     id="time"
//                                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                                 />
//                             </div>
//                         </div>
//
//                         {/*Message*/}
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                             <textarea
//                                 id="message"
//                                 rows="4"
//                                 placeholder="Enter your message"
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
//                             ></textarea>
//                         </div>
//
//                         {/*Submit Button*/}
//                         <button
//                             type="submit"
//                             className="w-full py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition"
//                         >
//                             Reserve a Table
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//
//
//     );
// };
//
//
//
//
//
//
//
//
