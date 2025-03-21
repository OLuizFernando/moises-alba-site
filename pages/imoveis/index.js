import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Imoveis() {
  return (
    <>
      {/* Navbar fixa no topo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Adiciona padding-top para evitar sobreposição */}
      <div className="pt-16">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            Todas residências
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Belle Ville
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Bonsucesso
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Clube Maia
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Gran Vitta
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Mooca
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Olimpo
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              {/* Belle Ville */}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_belleville/01_Fachada-vista-01b-1-2.jpg"
                  alt="Fachada Belle Ville"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_belleville/03_Living-Tipo-01-1.jpg"
                  alt="Living Belle Ville"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_belleville/Piscina-1.jpg"
                  alt="Piscina Belle Ville"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {/* Mooca */}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg"
                  alt="Fachada Mooca"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-LIVING_03-ALTA.jpg"
                  alt="Living Mooca"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_bonsucesso/Fachada-ALTA-Final.jpg"
                  alt="Fachada Bonsucesso"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {/* Clube Maia */}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_clubemaia/Fachada-noturna2-Final-2-scaled.jpg"
                  alt="Fachada Clube Maia"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_clube_maia/LIVING-T-2-D.jpg"
                  alt="Living Clube Maia"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_granvitta/Portaria.jpg"
                  alt="Portaria Gran Vitta"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {/* Gran Vitta e Olimpo */}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_granvitta/LIVING-01-1.jpg"
                  alt="Living Gran Vitta"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_olimpo/Fachada-Final-Grande.jpg"
                  alt="Fachada Olimpo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/sol_belleville/Praca-Zen-1.jpg"
                  alt="Praça Zen Belle Ville"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6"></div>{" "}
      {/* Linha cinza acima do footer */}
      <Footer />
    </>
  );
}

export default Imoveis;
