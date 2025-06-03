function ImoveisCards(props) {
  const idPrefix = props.title.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <a
        href={`https://wa.me/5511933940598?text=Olá, vim pelo site! Gostaria de saber mais sobre o ${props.title}`}
        target="_blank"
      >
        <div className="flex flex-col h-full justify-center bg-amber-400 hover:bg-amber-300 rounded-lg p-7">
          <div className="mb-5">
            <h1 className="text-5xl font-bold text-white mb-3">
              {props.title}
            </h1>
            <h2 className="text-2xl font-medium text-white">
              {props.subtitle}
            </h2>
          </div>
          <div className="hidden md:block border-t border-white border-2 rounded-full w-1/3 mb-5"></div>
          <div className="hidden md:block">
            <ul className="text-white font-medium text-lg">
              {props.infos.map((info) => (
                <li>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </a>

      {/* Modal 1 */}
      <div className="h-full">
        <label htmlFor={`${idPrefix}-modal-1`} className="cursor-pointer">
          <img
            src={props.modal1.src}
            alt={props.modal1.alt}
            className="h-auto md:h-full rounded shadow-lg hover:opacity-80 transition"
          />
        </label>
        <input
          type="checkbox"
          id={`${idPrefix}-modal-1`}
          className="peer fixed appearance-none opacity-0"
        />
        <label
          htmlFor={`${idPrefix}-modal-1`}
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-black/50 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
        >
          <label
            className="max-h-[calc(100vh-5em)] h-fit max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white text-black shadow-2xl transition"
            htmlFor={`${idPrefix}-modal-1`}
          >
            <p className="bg-white p-4 rounded-lg max-w-7xl w-full">
              <img
                className="max-w-full rounded-lg"
                src={props.modal1.src}
                alt={props.modal1.alt}
              />
            </p>
          </label>
        </label>
      </div>

      <div>
        {/* Modal 2 */}
        <div className="mb-4">
        <label htmlFor={`${idPrefix}-modal-2`} className="cursor-pointer">
          <img
            className="max-w-full rounded-lg shadow-lg hover:opacity-80 transition"
            src={props.modal2.src}
            alt={props.modal2.alt}
          />
        </label>
        <input
          type="checkbox"
          id={`${idPrefix}-modal-2`}
          className="peer fixed appearance-none opacity-0"
        />
        <label
          htmlFor={`${idPrefix}-modal-2`}
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-black/50 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
        >
          <label
            className="max-h-[calc(100vh-5em)] h-fit max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white text-black shadow-2xl transition"
            htmlFor={`${idPrefix}-modal-2`}
          >
            <p className="bg-white p-4 rounded-lg max-w-7xl w-full">
              <img
                className="max-w-full rounded-lg"
                src={props.modal2.src}
                alt={props.modal2.alt}
              />
            </p>
          </label>
        </label>
      </div>

        {/* Modal 3 */}
        <div>
        <label htmlFor={`${idPrefix}-modal-3`} className="cursor-pointer">
          <img
            className="max-w-full rounded-lg shadow-lg hover:opacity-80 transition"
            src={props.modal3.src}
            alt={props.modal3.alt}
          />
        </label>
        <input
          type="checkbox"
          id={`${idPrefix}-modal-3`}
          className="peer fixed appearance-none opacity-0"
        />
        <label
          htmlFor={`${idPrefix}-modal-3`}
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-black/50 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
        >
          <label
            className="max-h-[calc(100vh-5em)] h-fit max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white text-black shadow-2xl transition"
            htmlFor={`${idPrefix}-modal-3`}
          >
            <p className="bg-white p-4 rounded-lg max-w-7xl w-full">
              <img
                className="max-w-full rounded-lg"
                src={props.modal3.src}
                alt={props.modal3.alt}
              />
            </p>
          </label>
        </label>
      </div>
      </div>
    </>
  );
}

export default ImoveisCards;
