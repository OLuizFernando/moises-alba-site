function RealStateGallery() {
  return (
    <>
      <div
        id="todos"
        className="flex items-center justify-center mt-7 md:mt-10 lg:mt-14 flex-wrap"
      >
        <a
          href="#todos"
          className="text-amber-400 hover:text-white border border-amber-400 bg-white hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-100 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Todos
        </a>
        <a
          href="#ville-belle"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Ville Belle
        </a>
        <a
          href="#connection-mooca"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Connection Mooca
        </a>
        <a
          href="#clube-maia"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Clube Maia
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-y-16 mt-2 md:mt-5 lg:mt-9 mx-5 md:mx-8 lg:mx-12">
          {/* Residencial Ville Belle */}
          <div
            className="flex flex-col h-full justify-center bg-amber-400 rounded-lg p-7"
            id="ville-belle"
          >
            <div className="mb-5">
              <h1 className="text-5xl font-black text-white mb-3">
                Residencial Ville Belle
              </h1>
              <h2 className="text-2xl font-bold text-white">
                Pronto para morar
              </h2>
            </div>
            <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
            <div className="hidden md:block">
              <ul className="text-white font-bold text-lg">
                <li>30m², 46m² e 47m²</li>
                <li>1 ou 2 Dorms</li>
                <li>Com vaga</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src="/sol_belleville/01_Fachada-vista-01b-1-2.jpg"
              alt="Fachada Residencial Belle Ville"
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg mb-4"
              src="/sol_belleville/03_Living-Tipo-01-1.jpg"
              alt="Living Residencial Belle Ville"
            />
            <img
              className="max-w-full rounded-lg"
              src="/sol_belleville/Piscina-1.jpg"
              alt="Piscina Residencial Belle Ville"
            />
          </div>
          {/* Sol Connection Mooca */}
          <div
            className="flex flex-col h-full justify-center bg-amber-400 rounded-lg p-7"
            id="connection-mooca"
          >
            <div className="mb-5">
              <h1 className="text-5xl font-black text-white mb-3">
                Sol Connection Mooca
              </h1>
              <h2 className="text-2xl font-bold text-white">
                Futuro Lançamento
              </h2>
            </div>
            <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
            <div className="hidden md:block">
              <ul className="text-white font-bold text-lg">
                <li>29m² a 56m²</li>
                <li>1 ou 2 dorms</li>
                <li>Opção com terraço</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg"
              alt="Fachada Sol Connection Mooca"
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg mb-4"
              src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-LIVING_02-ALTA.jpg"
              alt="Living Sol Connection Mooca"
            />
            <img
              className="max-w-full rounded-lg"
              src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-PISCINA_INFANTIL-ALTA-1.jpg"
              alt="Piscina Sol Connection Mooca"
            />
          </div>
          {/* Sol Clube Maia */}
          <div
            className="flex flex-col h-full justify-center bg-amber-400 rounded-lg p-7"
            id="clube-maia"
          >
            <div className="mb-5">
              <h1 className="text-5xl font-black text-white mb-3">
                Sol Clube Maia
              </h1>
              <h2 className="text-2xl font-bold text-white">Lançamento</h2>
            </div>
            <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
            <div className="hidden md:block">
              <ul className="text-white font-bold text-lg">
                <li>41m², 46m² e 58m²</li>
                <li>2 ou 3 dorms com suíte, terraço</li>
                <li>Com 1 ou 2 vagas</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src="/sol_clube_maia/Fachada-noturna2-Final-2-scaled.jpg"
              alt="Fachada Sol Clube Maia"
            />
          </div>
          <div>
            <img
              className="max-w-full rounded-lg mb-4"
              src="/sol_clube_maia/LIVING-T-2-D.jpg"
              alt="Living Sol Clube Maia"
            />
            <img
              className="max-w-full rounded-lg"
              src="/sol_clube_maia/Piscina-Adulto-2-1.jpg"
              alt="Piscina Sol Clube Maia"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RealStateGallery;
