export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-gradient-to-b from-purple-800 to-purple-600 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-white">
          <a className="w-fit" href="#">
            <p className="navlink active-navlink">Explore</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Solutions</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Pricing</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Blog</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Community</p>
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <a href="#">
            <p className="underline text-white py-3.5 border border-white">
              Sign In
            </p>
          </a>
          <a href="#">
            <button className="py-3.5 border border-white w-full text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 font-medium rounded-full transition-all duration-300 ease-in">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
