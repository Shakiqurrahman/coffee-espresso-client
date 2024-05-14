import logo from "../../assets/images/more/logo1.png";
import logoBanner from "../../assets/images/more/logo-banner.jpg";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-16 sm:h-24 w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${logoBanner})`,
      }}
    >
      <div className="flex absolute justify-center items-center gap-2 w-full">
        <img className="w-10 sm:w-14" src={logo} alt="" />
        <h1 className="text-white text-2xl sm:text-3xl rancho-font">Coffee Espresso</h1>
      </div>
    </header>
  );
};

export default Header;
