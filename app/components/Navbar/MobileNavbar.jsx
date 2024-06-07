export default function MobileNavbar(props) {
  return (
    <div className="lg:hidden flex justify-between items-center py-4">
      <div>
        <img src="logo-only.svg" alt="logo" className="w-33 logo-icon block" />
      </div>
      <button onClick={() => props.setMenu((menu) => !menu)} className="z-50">
        <img
          src="icons/hamburger-icon.svg"
          alt="menu"
          className="w-8 menu-icon"
        />
      </button>
    </div>
  );
}
