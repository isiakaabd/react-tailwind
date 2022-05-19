import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-24 bg-slate-900 text-gray-300 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">
              <a href="#">Marketing</a>
            </li>
            <li className="py-1">
              <a href="#">Analytics</a>
            </li>
            <li className="py-1">
              <a href="#">Commerce</a>
            </li>
            <li className="py-1">
              <a href="#">Data</a>
            </li>
            <li className="py-1">
              <a href="#">Cloud</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">
              <a href="#">Pricing</a>
            </li>
            <li className="py-1">
              <a href="#">Documentation</a>
            </li>
            <li className="py-1">
              <a href="#">Guides</a>
            </li>
            <li className="py-1">
              <a href="#">API Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">
              <a href="#">About</a>
            </li>
            <li className="py-1">
              <a href="#">Blog</a>
            </li>
            <li className="py-1">
              <a href="#">Jobs</a>
            </li>
            <li className="py-1">
              <a href="#">Press</a>
            </li>
            <li className="py-1">
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">
              <a href="#">Claims</a>
            </li>
            <li className="py-1">
              <a href="#">Privacy</a>
            </li>
            <li className="py-1">
              <a href="#">Terms</a>
            </li>
            <li className="py-1">
              <a href="#">Data</a>
            </li>
            <li className="py-1">
              <a href="#">Cloud</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our Newsletter</p>
          <p className="py-4">
            The Latest news, and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className=" w-full outline-none focus:bg-slate-400 p-2 rounded-l-md mb-4"
              type="email"
            />
            <button className="p-2 mb-4 rounded-r-md rounded-l-none">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-2 py-4  max-w-[1240px] m-auto justify-between md:flex-row  md:items-center  text-center text-gray-500 ">
        <p> &copy; 2022 Remlad, All Right Reserved </p>
        <div className="flex justify-between sm:w-[300px] items-center gap-5  text-2xl">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitch />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
