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
      <div className="container mx-auto md:p-0 px-4 grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd" tar>
                Marketing
              </a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Analytics</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Commerce</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Data</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Cloud</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Pricing</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Documentation</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Guides</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">API Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">About</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Blog</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Jobs</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Press</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Claims</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Privacy</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Terms</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Data</a>
            </li>
            <li className="py-1">
              <a href="https://dev.to/isiakaabd">Cloud</a>
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
