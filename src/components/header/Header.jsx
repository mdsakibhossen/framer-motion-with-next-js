import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50 top-0 left-0 py-5 shadow">
      <div className="container mx-auto px-3">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
