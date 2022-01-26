import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ArchiveIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import logoIcon from "../public/logo-saint-mary-services-icon.png";
import logo from "../public/logo-saint-mary-services.png";
import mobileImage from "../public/mobile.png";
import deliverer from "../public/men.jpeg";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Services", href: "#services", current: false },
  { name: "Where we deliver", href: "#where-deliver", current: true },
  { name: "Contacts", href: "#contact", current: false },
];

const features = [
  {
    name: "Medicines",
    description:
      "We deliver safely and quickly medicines for your most diverse needs.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Bank documents",
    description:
      "Documents are very important goods, that's why we guarantee total security in our deliveries.",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Small products in general",
    description:
      "Your deliveries are valuable, no matter how big they are. Therefore, we are agile in the delivery of each good.",
    icon: ArchiveIcon,
  },
];

export default function Home() {
  const site = "https://www.stsmary.com";
  const canonicalURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <title>Saint Mary Services</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <header className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#" className="mt-5">
                        <span className="sr-only">Saint Mary Services</span>
                        <img
                          src={logo}
                          width={70}
                          height={80}
                          alt="Brand of Saint Mary Service"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Your delivery with </span>{" "}
                  <span className="block text-blue-600 xl:inline">
                    safety, quality and on time.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  With our specialized team, we guarantee the maximum quality in
                  your deliveries.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Our services
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={deliverer}
            alt=""
          />
        </div>
      </header>
      <main>
        <div id="services" className="py-12 bg-white md:mt-20 md:mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-20">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Our services
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What do you want to delivery?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our company is specialized in low and high added value
                deliveries
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lime-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div id="where-deliver" className="py-12 bg-white md:mt-20 md:mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-2 md:gap-x-10">
              <div>
                <img src={mobileImage} alt="Mobile Illustration" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="mb-20">
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl my-auto">
                    Where we deliver?
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We deliver throughout the state of Nevada and some areas of
                    California.
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Do you need our delivery services? Click the button below
                    and contact us right now.
                  </p>
                  <div className="rounded-md mt-10">
                    <a
                      href="https://api.whatsapp.com/send?phone=16572620027"
                      className="w-full md:w-80 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 md:py-4 md:text-md md:px-10"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ width: 18, marginRight: 5 }}
                      />
                      Contact us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="py-12 bg-white md:mt-20 md:mb-20 text-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-20">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Contact us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Need more informations?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We are at your disposal to answer your questions.
              </p>
            </div>

            <div className="mt-10 text-center  md:text-2xl sm:text-xl">
              <div className="md:grid md:grid-cols-2">
                <a href="mailto:customerservice@stsmary.com">
                  <div className="md:flex justify-center mb-5">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ width: 18, marginRight: 5 }}
                      className="hidden md:block"
                    />{" "}
                    customerservice@stsmary.com
                  </div>
                </a>
                <a href="tel:16572620027">
                  <div className="md:flex justify-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ width: 18, marginRight: 5 }}
                      className="hidden md:block"
                    />{" "}
                    +1 (657) 262-0027
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center mb-10">
        <p>
          © {new Date().getFullYear()} Saint Mary Services. All rights reserved.
        </p>
      </footer>
    </>
  );
}
