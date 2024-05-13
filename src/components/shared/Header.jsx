import logo from "../../assets/images/more/logo1.png";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-24 w-full flex justify-center items-center"
      style={{
        backgroundImage: 'url("/src/assets/images/more/logo-banner.jpg")',
      }}
    >
      <div className="flex absolute justify-center items-center gap-2 w-full">
        <img className="w-14" src={logo} alt="" />
        <h1 className="text-white text-3xl rancho-font">Coffee Espresso</h1>
      </div>
    </header>
  );
};

export default Header;
