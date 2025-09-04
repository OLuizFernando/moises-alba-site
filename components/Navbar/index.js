import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    { text: "Início", href: "/" },
    { text: "Sobre", href: "/#sobre" },
    { text: "Imóveis", href: "/imoveis" },
    { text: "Contato", href: "/#contato" },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="/sol/logo_teste.png"
              className="h-12 me-2 md:h-12 md:me-3"
              alt="Sol Construtora Logo"
            />
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">
              Moisés Alba
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              target="_blank"
              href="https://wa.me/5511933940598"
              className="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Saiba mais
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navItems.map((item) => (
                <li>
                  <a
                    href={item.href}
                    className={`
                      block py-2 px-3 rounded-sm md:p-0
                      ${pathname === item.href ? "bg-amber-400 text-white md:text-amber-400 md:bg-transparent" : "text-black hover:text-amber-400"}
                    `}
                    aria-current="page"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </>
  );
}

export default Navbar;
