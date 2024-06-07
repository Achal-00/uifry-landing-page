export default function SecTwo() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h3 className="text-black text-2xl font-medium">Links</h3>
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Home
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          About Us
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Bookings
        </button>
        <button className="text-black hover:text-nav-red transition-colors duration-300">
          Blog
        </button>
      </div>
    </div>
  );
}
