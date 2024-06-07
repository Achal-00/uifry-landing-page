export default function SecFive() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h3 className="text-black text-2xl font-medium">Newsletter</h3>
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <p>Stay Up To Date</p>
        <div className="grid grid-cols-2 border border-black h-12 rounded-lg w-fit">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-l-lg pl-4"
          />
          <button className="bg-black text-white rounded-r-lg hover:bg-transparent hover:text-black transition-colors duration-300 border-l hover:border-l-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
