import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ClockIcon,
  Cog8ToothIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
 
} from "@heroicons/react/20/solid";


const products = [
  
  {
    name: "Pomodoro Next App",
    description: "Aplicación Pomodoro en Next.js: Maximiza tu productividad. Establece intervalos de trabajo y descanso con esta intuitiva app. Regístrate, inicia sesión y lleva un control semanal de las hora invertidas. ¡Optimiza tu tiempo y logra resultados excepcionales!",
    href: "https://pomodoro-next-five.vercel.app/",
    hrefCode: "https://github.com/jasnled/pomodoroNext",
    icon: ClockIcon,
  },
  {
    name: "Pomodoro API",
    description: "Es una API de backend segura y completa diseñada para la gestión de usuarios, tareas y configuraciones personalizadas. Incluye un sólido sistema de autenticación basado en Passport y JWT, y también ofrece la funcionalidad de recuperación de contraseñas a través del envío de un correo electrónico de recuperación.",
    href: "https://api-pomodoro.onrender.com/",
    hrefCode: "https://github.com/jasnled/api-pomodoro",
    icon: Cog8ToothIcon,
  },
  {
    name: "Pomodoro React App",
    description: "Aplicación Pomodoro basada en React.js: Optimiza tu productividad con esta aplicación Pomodoro diseñada en React.js. Establece intervalos de trabajo y descanso para mantener el enfoque y maximizar tu rendimiento. ¡Mejora tu gestión del tiempo y alcanza tus metas de manera eficiente!",
    href: "https://jasnled.github.io/pomodoroReact/",
    hrefCode: "https://github.com/jasnled/pomodoroReact",
    icon: ClockIcon,
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="sm:overscroll-none h-16 w-full inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
 
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only text-green-500">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <Popover.Group className=" hidden decoration-solid lg:flex lg:gap-x-12">
          <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Inicio
            </a>
            <Popover className="bg-rose-800 hover:bg-rose-600  relative px-1 rounded">
              <Popover.Button className="flex text-white items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Proyectos
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 h-80 overflow-y-scroll">
                    {products.map((item) => (
                      <div key={`project-${item.name}`} className="flex w-full">
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div key={`code-${item.name}`} className="w-40 ml-8 flex items-center justify-center hover:bg-gray-50">
                          <a
                            href={item.hrefCode}
                            className="block font-semibold text-gray-900"
                            >
                            {"code"}
                              
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="/aboutme"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Acerca de mi
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contacto <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3  border-2 border-stone-300 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    inicio
                  </a>
                  <a
                    href="/aboutme"
                    className="-mx-3 border-2 border-stone-300 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    acerca de mi
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex border-2 border-stone-300 w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          proyectos
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col mt-2 space-y-2">
                          {[...products].map((item) => ( 
                            <div key={`project-${item.name}`}>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-xs leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                            <Disclosure.Button
                              key={`code-${item.name}`}
                              as="a"
                              href={item.hrefCode}
                              className="block rounded-lg  pl-14 pr-3 text-xs leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {"code"}
                            </Disclosure.Button>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                
                </div>
                <div className="py-6">
                  <a
                    href="/contact"
                    className="-mx-3 border-2 border-stone-300 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    contacto
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
