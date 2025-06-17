function Footer() {
  return (
    <>
      <footer id="contato" className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="/sol/sol_logo.png"
                  className="h-7 me-2 md:h-8 md:me-3"
                  alt="Sol Construtora Logo"
                />
                <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">
                  Moisés Alba
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Informações
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">Guarulhos - SP</li>
                  <li>CRECI: 299158</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Contato
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://instagram.com/moisesalba.jr"
                      target="_blank"
                    >
                      Instagram:{" "}
                      <span className="hover:underline">@moisesalba.jr</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/5511933940598" target="_blank">
                      Telefone:{" "}
                      <span className="hover:underline">
                        +55 (11) 9 3394-0598
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025 Moisés Alba Jr.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
