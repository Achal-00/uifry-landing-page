export default function SecFour() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h3 className="text-black text-2xl font-medium">Product</h3>
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Take Tour
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Live Chat
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Reviews
        </button>
      </div>
    </div>
  );
}
