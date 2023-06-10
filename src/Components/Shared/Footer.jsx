import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillPhone, AiOutlineTwitter } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-base-200 px-5 py-3">
      <div className="footer my-auto text-base-content">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-40" />
          </Link>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <Link className="flex items-center gap-2">
            <AiFillPhone className="text-2xl hover:text-blue-500" />
            +88 034593450
          </Link>
          <Link className="flex items-center gap-2">
            <MdMarkEmailUnread className="text-3xl hover:text-red-600" /> example@gmail.com
          </Link>
          <div className="text-3xl flex  gap-3">
            <BsFacebook  className="hover:text-blue-500"/>
            <AiFillInstagram  className="hover:text-rose-500"/>
            <AiOutlineTwitter className="hover:text-blue-500"/>
          </div>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <address>
            488, South Jatrabari <br />
            Dhaka, Bangladesh
          </address>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm pt-3">
        Copyright &copy; 2023 - All right reserved by Craftopia.
      </p>
    </footer>
  );
};

export default Footer;
