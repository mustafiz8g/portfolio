
import { Link } from 'react-router-dom';
import shadow from '../src/assets/shadow.png'
import Swal from 'sweetalert2';

const Contact = () => {
    return (
        <div  className='max-w-7xl mx-auto  mt-16 mb-16'>
           <div className="">
           <form className="space-y-4">
                       <div className='flex justify-center gap-5 w-11/12 mx-auto'>
                       <div className='flex-1'>
                           
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-md border border-green-400  focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <div className='flex-1'>
                          
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md border border-green-400  focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                       </div>
                        <div className='w-8/12 mx-auto'>
                          
                            <textarea
                                placeholder="Message"
                                rows="2"
                                className="w-full p-3 rounded-md border border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                            ></textarea>
                        </div>
                      <div className='w-5/12 mx-auto'>
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
                          className="w-full p-3 rounded-md text-gray-900 font-semibold text-[18px] transition hover:opacity-90"
                          style={{
                              background: "linear-gradient(-25deg, #1fbcb9 0%, #b2bf43 100%)",
                          }}
                      >
                          Send Message
                      </button>
                       </Link>
                      </div>

                    </form>
           </div>
        </div>
    );
};

export default Contact;