
import logo from '../src/assets/mylogo.png'
const Footer = () => {
    return (
        <footer className="footer mb-10 flex justify-center items-center p-4">
 
    <img className='w-10' src={logo} alt="" />
    <p className='text-lg font-medium'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  
 
</footer>
    );
};

export default Footer;