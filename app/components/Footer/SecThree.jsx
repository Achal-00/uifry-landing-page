export default function SecThree() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h3 className="text-black text-2xl font-medium">Legal</h3>
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Terms Of Use
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Privacy Policy
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Cookie Policy
        </button>
      </div>
    </div>
  );
}
