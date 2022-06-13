import { Menu } from '@headlessui/react'
import { ChevronDoubleRightIcon, MenuAlt3Icon } from '@heroicons/react/solid'

interface IProps {
  items: {
    name: string
    link: string
  }[]
}
const SideBar = ({ items }: IProps) => {
  return (
    <Menu as="div" className="absolute -top-1 right-0 bg-white">
      {({ open }) => (
        <div
          className={`p-6 ${
            open ? 'h-screen w-60 text-left' : 'h-full text-right'
          }`}
        >
          <Menu.Button>
            {!open ? (
              <MenuAlt3Icon className="w-6 h-6 ml-auto hover:text-primary cursor-pointer trnasition-colors duration-300" />
            ) : (
              <ChevronDoubleRightIcon className="w-5 h-5 hover:text-primary" />
            )}
          </Menu.Button>

          {open && (
            <Menu.Items className="mt-20 grid gap-6 text-left">
              {items.map((item) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={item.link}
                      className={`${
                        active ? 'bg-primary/30 text-primary' : 'text-black'
                      } text-sm font-medium tracking-wide cursor-pointer py-2 px-5 md:px-6 rounded-md transition-all duration-300`}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          )}
        </div>
      )}
    </Menu>
  )
}

export default SideBar