function RealStateGallery() {
  return (
    <>
      <div
        id="todos"
        className="flex items-center justify-center mt-7 md:mt-10 lg:mt-14 flex-wrap"
      >
        <a
          href="#todos"
          className="text-amber-400 hover:text-white border border-amber-400 bg-white hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Todos
        </a>
        <a
          href="#ville-belle"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Ville Belle
        </a>
        <a
          href="#connection-mooca"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Connection Mooca
        </a>
        <a
          href="#clube-maia"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Clube Maia
        </a>
        <a
          href="#gran-vitta"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Gran Vittá
        </a>
        <a
          href="#bonsucesso"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Sol Bonsucesso
        </a>
        <a
          href="#olimpo"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
          Residencial Olimpo
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-y-16 mt-2 md:mt-5 lg:mt-9 mx-5 md:mx-8 lg:mx-12">
          {/* Residencial Ville Belle */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Residencial%20Belle%20Ville"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="ville-belle"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Residencial Ville Belle
                </h1>
                <h2 className="text-2xl font-medium text-white">
                  Pronto para morar
                </h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>30m², 46m² e 47m²</li>
                  <li>1 ou 2 Dorms</li>
                  <li>Com vaga</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="/sol_belleville/01_Fachada-vista-01b-1-2.jpg">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_belleville/01_Fachada-vista-01b-1-2.jpg"
                alt="Fachada Residencial Belle Ville"
              />
            </a>
          </div>
          <div>
            <a href="/sol_belleville/03_Living-Tipo-01-1.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_belleville/03_Living-Tipo-01-1.jpg"
                alt="Living Residencial Belle Ville"
              />
            </a>
            <a href="/sol_belleville/Piscina-1.jpg">
              <img
                className="max-w-full rounded-lg"
                src="/sol_belleville/Piscina-1.jpg"
                alt="Piscina Residencial Belle Ville"
              />
            </a>
          </div>
          {/* Sol Connection Mooca */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Sol%20Connection%20Mooca"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="connection-mooca"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Sol Connection Mooca
                </h1>
                <h2 className="text-2xl font-medium text-white">
                  Futuro Lançamento
                </h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>29m² a 56m²</li>
                  <li>1 ou 2 dorms</li>
                  <li>Opção com terraço</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg"
                alt="Fachada Sol Connection Mooca"
              />
            </a>
          </div>
          <div>
            <a href="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-LIVING_02-ALTA.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-LIVING_02-ALTA.jpg"
                alt="Living Sol Connection Mooca"
              />
            </a>
            <a href="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-PISCINA_INFANTIL-ALTA-1.jpg">
              <img
                className="max-w-full rounded-lg"
                src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-PISCINA_INFANTIL-ALTA-1.jpg"
                alt="Piscina Sol Connection Mooca"
              />
            </a>
          </div>
          {/* Sol Clube Maia */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Sol%20Clube%20Maia"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="clube-maia"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Sol Clube Maia
                </h1>
                <h2 className="text-2xl font-medium text-white">Lançamento</h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>41m², 46m² e 58m²</li>
                  <li>2 ou 3 dorms com suíte, terraço</li>
                  <li>Com 1 ou 2 vagas</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="sol_clube_maia/Fachada-noturna2-Final-2-scaled.jpg">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_clube_maia/Fachada-noturna2-Final-2-scaled.jpg"
                alt="Fachada Sol Clube Maia"
              />
            </a>
          </div>
          <div>
            <a href="/sol_clube_maia/LIVING-T-2-D.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_clube_maia/LIVING-T-2-D.jpg"
                alt="Living Sol Clube Maia"
              />
            </a>
            <a href="/sol_clube_maia/Piscina-Adulto-2-1.jpg">
              <img
                className="max-w-full rounded-lg"
                src="/sol_clube_maia/Piscina-Adulto-2-1.jpg"
                alt="Piscina Sol Clube Maia"
              />
            </a>
          </div>
          {/* Gran Vittá Residencial */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Gran%20Vitt%C3%A1%20Residencial"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="gran-vitta"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Gran Vittá Residencial
                </h1>
                <h2 className="text-2xl font-medium text-white">
                  Pronto para morar
                </h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>47m² e 49m²</li>
                  <li>2 dorms (suíte)</li>
                  <li>Com vaga</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="/sol_granvitta/Foto-Fachada-Pronto-para-Morar-GranVitta-2025-01-15-1-e1737040445370.png">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_granvitta/Foto-Fachada-Pronto-para-Morar-GranVitta-2025-01-15-1-e1737040445370.png"
                alt="Fachada Gran Vittá Residencial"
              />
            </a>
          </div>
          <div>
            <a href="/sol_granvitta/LIVING-01-1.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_granvitta/LIVING-01-1.jpg"
                alt="Living Gran Vittá Residencial"
              />
            </a>
            <a href="/sol_granvitta/Foto-PIscina-Pronto-para-Morar-GranVitta-2025-01-15.png">
              <img
                className="max-w-full rounded-lg"
                src="/sol_granvitta/Foto-PIscina-Pronto-para-Morar-GranVitta-2025-01-15.png"
                alt="Piscina Gran Vittá Residencial"
              />
            </a>
          </div>
          {/* Sol Bonsucesso */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Sol%20Bonsucesso"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="bonsucesso"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Sol Bonsucesso
                </h1>
                <h2 className="text-2xl font-medium text-white">Lançamento</h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>34m², 37m² e 38 m²</li>
                  <li>2 dorms</li>
                  <li>Com 1 vaga ou sem</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="sol_bonsucesso/Fachada-ALTA-Final.jpg">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_bonsucesso/Fachada-ALTA-Final.jpg"
                alt="Fachada Sol Bonsucesso"
              />
            </a>
          </div>
          <div>
            <a href="/sol_bonsucesso/Living-Tipo-1-Final.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_bonsucesso/Living-Tipo-1-Final.jpg"
                alt="Living Sol Bonsucesso"
              />
            </a>
            <a href="/sol_bonsucesso/Piscina-Infantil-Final-1.jpg">
              <img
                className="max-w-full rounded-lg"
                src="/sol_bonsucesso/Piscina-Infantil-Final-1.jpg"
                alt="Piscina Sol Bonsucesso"
              />
            </a>
          </div>
          {/* Residencial Olimpo */}
          <a
            href="https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Residencial%20Olimpo"
            target="_blank"
          >
            <div
              className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7"
              id="olimpo"
            >
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-3">
                  Residencial Olimpo
                </h1>
                <h2 className="text-2xl font-medium text-white">Em obras</h2>
              </div>
              <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
              <div className="hidden md:block">
                <ul className="text-white font-medium text-lg">
                  <li>35m², 47m² e 58m²</li>
                  <li>1, 2 ou 3 dorms</li>
                  <li>Com 1 ou 2 vagas</li>
                </ul>
              </div>
            </div>
          </a>
          <div>
            <a href="/sol_olimpo/Fachada-Final-Grande.jpg">
              <img
                className="h-auto md:h-full max-w-full rounded-lg"
                src="/sol_olimpo/Fachada-Final-Grande.jpg"
                alt="Fachada Residencial Olimpo"
              />
            </a>
          </div>
          <div>
            <a href="/sol_olimpo/Living-9-F-final.jpg">
              <img
                className="max-w-full rounded-lg mb-4"
                src="/sol_olimpo/Living-9-F-final.jpg"
                alt="Living Residencial Olimpo"
              />
            </a>
            <a href="/sol_olimpo/Piscina-vista1.jpg">
              <img
                className="max-w-full rounded-lg"
                src="/sol_olimpo/Piscina-vista1.jpg"
                alt="Piscina Residencial Olimpo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RealStateGallery;
