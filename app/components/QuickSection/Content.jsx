export default function Content() {
  return (
    <div className="p-4 flex flex-col gap-4 place-self-center">
      <h1 className="text-white text-3xl font-semibold md:text-4xl lg:text-5xl">
        Ready To Get Started?
      </h1>
      <p className="text-white">
        Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
      </p>
      <button className="bg-white w-max flex items-center gap-2 px-4 py-2 rounded-md z-20">
        <p>Download App</p>
        <img src="icons/apple-icon.svg" alt="apple" className="w-5" />
      </button>
    </div>
  );
}
