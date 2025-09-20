import { FC } from "react";
import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github } from "lucide-react";

const Footer: FC = () => (
  <footer className="border-t border-white/10">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">PayMdir</span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            The new standard in online payments.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
            Product
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="#features"
                className="text-base text-gray-400 hover:text-white"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-base text-gray-400 hover:text-white"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
            Developers
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/docs/core"
                className="text-base text-gray-400 hover:text-white"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/openapi"
                className="text-base text-gray-400 hover:text-white"
              >
                API Reference
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/about"
                className="text-base text-gray-400 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-base text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PayMdir, Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Github />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
