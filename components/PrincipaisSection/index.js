import PrincipaisCard from "@/components/PrincipaisCard";

function PrincipaisSection() {
  return (
    <>
      <div className="bg-neutral-200 flex justify-center items-center py-15">
        <div className="max-w-screen-xl flex flex-col px-5">
          <h1 className="text-3xl font-medium">Principais Lançamentos</h1>
          <div className="w-30 border-2 border-amber-400 rounded-full mt-7 mb-10"></div>
          <div className="flex flex-col md:flex-row gap-10">
            <PrincipaisCard
              imgSrc="/sol_mooca/IMA-SOL_CO_CONNECTION_MOOCA-FACHADA-DIURNA-ALTA-3.jpg"
              title="Sol Connection Mooca"
              address="Rua Hipódromo, 890"
            />
            <PrincipaisCard
              imgSrc="/sol_clube_maia/Fachada-noturna2-Final-2-scaled.jpg"
              title="Sol Clube Maia"
              address="Av. Salgado Filho, 2558"
            />
            <PrincipaisCard
              imgSrc="/sol_bonsucesso/Fachada-ALTA-Final.jpg"
              title="Sol Bonsucesso"
              address="Estr. Pres. Juscelino K., 4848"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipaisSection;
