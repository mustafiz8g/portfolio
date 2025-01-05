

import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
    return (
        <div className="  py-10">
            <h2 className="text-center font-medium text-3xl mb-9">Let's Work Together</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
                {/* Left Section */}
                <div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-green-500" />
                            <span>Mymensingh, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-3">

                            <FaWhatsapp className="text-green-500" />
                            <span>01715347906</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-green-500" />
                            <span>mustafizur8g@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2  font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-md border border-green-400  focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2  font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md border border-green-400  focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2  font-medium">Message</label>
                            <textarea
                                placeholder="Message"
                                rows="2"
                                className="w-full p-3 rounded-md border border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                            ></textarea>
                        </div>
                       <Link 
                         onClick={() => Swal.fire({
                            title: " Sent Succussful ",
                            text:"Thank you" ,
                            timer: 1000,
                            icon: "success"
                        })}
                       >
                       <button
                          
                          type="submit"
                          className="w-full mt-2 p-2 rounded-md text-gray-900 font-semibold text-[18px] transition hover:opacity-90"
                          style={{
                              background: "linear-gradient(-25deg, #1fbcb9 0%, #b2bf43 100%)",
                          }}
                      >
                          Send Message
                      </button>
                       </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
