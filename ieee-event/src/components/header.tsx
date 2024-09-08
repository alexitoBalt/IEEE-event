import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {BiLogoFacebookSquare, BiLogoLinkedinSquare} from "react-icons/bi";
import {FaInstagramSquare} from "react-icons/fa"

const navigation = [
  { symbol: <BiLogoFacebookSquare />, name:"FACEBOOK", href: "https://www.facebook.com" },
    { symbol: <BiLogoLinkedinSquare />, name: "LINKEDIN", href: "https://www.linkedin.com"},
    { symbol: <FaInstagramSquare />,name: "INSTAGRAM", href: "https://www.linkedin.com"}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-blue-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>

          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                {/*FALTA LOGOOOOASBBH*/}
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5f7d6e405c4cd31c5b9b8203/1606269365612-FMJEVPXQ25TQJRDL05KL/UHM+IEEE+Logo.png"
                    className="h-8 w-auto"
                />
              </div>
            </div>

              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                              item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-2xl',
                          )}
                      >
                        {item.symbol}
                      </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              href={item.href}
              as="a"

            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}