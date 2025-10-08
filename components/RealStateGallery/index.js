import ImoveisCards from "@/components/ImoveisCards";

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

        <a
          href="#atibaia"
          className="text-black border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full text-base px-5 py-2.5 text-center me-3 mb-3"
        >
        Casas
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-y-16 mt-2 md:mt-5 lg:mt-9 mx-5 md:mx-8 lg:mx-12">
          <ImoveisCards
            id="ville-belle"
            title="Residencial Ville Belle"
            address="Vila Silveira - Guarulhos"
            subtitle="Pronto para morar"
            infos={["30m², 46m² e 47m²", "1 ou 2 Dorms", "Com vaga"]}
            modal1={{
              src: "/sol_belleville/01_Fachada-vista-01b-1-2.jpg",
              alt: "Fachada Residencial Belle Ville",
            }}
            modal2={{
              src: "/sol_belleville/03_Living-Tipo-01-1.jpg",
              alt: "Living Residencial Belle Ville",
            }}
            modal3={{
              src: "/sol_belleville/Piscina-1.jpg",
              alt: "Piscina Residencial Belle Ville",
            }}
          />

          <ImoveisCards
            id="connection-mooca"
            title="Sol Connection Mooca"
            address="Mooca - São Paulo"
            subtitle="Lançamento"
            infos={[
              "29m², 36m², 41m² e 56m²",
              "1 ou 2 Dorms",
              "Opção com terraço",
            ]}
            modal1={{
              src: "/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg",
              alt: "Fachada Sol Connection Mooca",
            }}
            modal2={{
              src: "/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-LIVING_02-ALTA.jpg",
              alt: "Living Sol Connection Mooca",
            }}
            modal3={{
              src: "/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-PISCINA_INFANTIL-ALTA-1.jpg",
              alt: "Piscina Sol Connection Mooca",
            }}
          />

          <ImoveisCards
            id="clube-maia"
            title="Sol Clube Maia"
            address="Cidade Maia - Guarulhos"
            subtitle="Lançamento"
            infos={[
              "41m², 46m² e 58m²",
              "2 ou 3 dorms com suíte, terraço",
              "Com 1 ou 2 vagas",
            ]}
            modal1={{
              src: "/sol_clube_maia/Fachada-noturna2-Final-2-scaled.jpg",
              alt: "Fachada Sol Clube Maia",
            }}
            modal2={{
              src: "/sol_clube_maia/LIVING-T-2-D.jpg",
              alt: "Living Sol Clube Maia",
            }}
            modal3={{
              src: "/sol_clube_maia/Piscina-Adulto-2-1.jpg",
              alt: "Piscina Sol Clube Maia",
            }}
          />

          <ImoveisCards
            id="gran-vitta"
            title="Gran Vittá Residencial"
            address="Vila Augusta - Guarulhos"
            subtitle="Pronto para morar"
            infos={["47m² e 49m²", "2 dorms (suíte)", "Com vaga"]}
            modal1={{
              src: "/sol_granvitta/Foto-Fachada-Pronto-para-Morar-GranVitta-2025-01-15-1-e1737040445370.png",
              alt: "Fachada Gran Vittá Residencial",
            }}
            modal2={{
              src: "/sol_granvitta/LIVING-01-1.jpg",
              alt: "Living Gran Vittá Residencial",
            }}
            modal3={{
              src: "/sol_granvitta/Foto-PIscina-Pronto-para-Morar-GranVitta-2025-01-15.png",
              alt: "Piscina Gran Vittá Residencial",
            }}
          />

          <ImoveisCards
            id="bonsucesso"
            title="Sol Bonsucesso"
            address="Água Chata - Guarulhos"
            subtitle="Últimas unidades"
            infos={["34m², 37m² e 38 m²", "2 dorms", "Com 1 vaga ou sem"]}
            modal1={{
              src: "/sol_bonsucesso/Fachada-ALTA-Final.jpg",
              alt: "Fachada Sol Bonsucesso",
            }}
            modal2={{
              src: "/sol_bonsucesso/Living-Tipo-1-Final.jpg",
              alt: "Living Sol Bonsucesso",
            }}
            modal3={{
              src: "/sol_bonsucesso/Piscina-Infantil-Final-1.jpg",
              alt: "Piscina Sol Bonsucesso",
            }}
          />

          <ImoveisCards
            id="bonsucesso"
            title="Sol Bosque dos Jequitibas"
            address="Água Chata - Guarulhos"
            subtitle="Em breve"
            infos={["34m², 37m² e 38 m²", "2 dorms", "Com 1 vaga ou sem"]}
            modal1={{
              src: "/sol_bonsucesso/fachada-jequitibas.jpg",
              alt: "Fachada Sol Bonsucesso",
            }}
            modal2={{
              src: "/sol_bonsucesso/interior-jequitibas.webp",
              alt: "Living Sol Bonsucesso",
            }}
            modal3={{
              src: "/sol_bonsucesso/piscina-jequitibas.webp",
              alt: "Piscina Sol Bonsucesso",
            }}
          />


          <ImoveisCards
            id="olimpo"
            title="Residencial Olimpo"
            address="Vila Fatima - Guarulhos"
            subtitle="Em obras"
            infos={[
              "35m², 47m² e 58 m²",
              "1, 2 ou 3 dorms",
              "Com 1 ou 2 vagas",
            ]}
            modal1={{
              src: "/sol_olimpo/Fachada-Final-Grande.jpg",
              alt: "Fachada Residencial Olimpo",
            }}
            modal2={{
              src: "/sol_olimpo/Living-9-F-final.jpg",
              alt: "Living Residencial Olimpo",
            }}
            modal3={{
              src: "/sol_olimpo/Piscina-vista1.jpg",
              alt: "Piscina Residencial Olimpo",
            }}
          />

          <ImoveisCards
            id="atibaia"
            title="Casa Atibaia"
            address="Atibaia - São Paulo"
            subtitle="Pronto para Morar"
            infos={[
              "área constr. 562,09m²",
              "área lote 1.366,48m²",
              "alto padrão",
            ]}
            modal1={{
              src: "/casa_atibaia/interior_casa.png",
              alt: "Frente casa alto padrão",
            }}
            modal2={{
              src: "/casa_atibaia/frente_casa.png",
              alt: "Living Residencial Olimpo",
            }}
            modal3={{
              src: "/casa_atibaia/piscina_casa.png",
              alt: "Piscina Residencial Olimpo",
            }}
          />

          <ImoveisCards
            id="atibaia"
            title="Sobrado Vila Barros"
            address="Vila Barros - Guarulhos"
            subtitle="Pronto para Morar"
            infos={[
              "vaga para carro",
              "área de 123m²",
              "3 suítes",
            ]}
            modal1={{
              src: "/sobrado_vilabarros/frente_casavb2.png",
              alt: "Frente casa Vila barros",
            }}
            modal2={{
              src: "/sobrado_vilabarros/interior_casavb.jpg",
              alt: "Interior da casa Vila Barros",
            }}
            modal3={{
              src: "/sobrado_vilabarros/tras_casavb.jpg",
              alt: "Parte de trás da casa vila barros",
            }}
          />


        </div>
      </div>
    </>
  );
}

export default RealStateGallery;
