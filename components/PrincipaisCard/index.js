function PrincipaisCard(props) {
  return (
    <>
      <a
        href={`https://wa.me/5511933940598?text=Ol%C3%A1,%20vim%20pelo%20site!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${props.title}`}
        className="rounded-xl bg-white shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out"
      >
        <img
          className="w-full h-100 object-cover rounded-t-xl"
          src={props.imgSrc}
        />

        <div className="p-5">
          <h2 className="text-xl font-medium">{props.title}</h2>
          <p className="font-light">{props.address}</p>
        </div>
      </a>
    </>
  );
}

export default PrincipaisCard;
