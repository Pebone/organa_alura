import banner from "../../imagens/banner.png";
import "./Banner.css";

export const Banner = () => {
  return (
    <header className = 'banner'>
      <img src={banner} alt="O banner principal da página do Organo" />
    </header>
  );
}
