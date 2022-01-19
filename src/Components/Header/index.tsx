import { useNavigate } from "react-router-dom";
import { app_images } from "../../config/app_images";
import { routes } from "../../config/routes";
import UserCircle from "../UserCircle";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./style";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoff = () => { navigate(routes.SINGIN) }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={app_images.Inter_logo} width={172} height={61} alt="inter logo" />
        <UserInfo>
        <UserCircle initials="SR" />
        <div>
          <p>Olá, <span className="primary-color font-bold">Pablo</span></p>
          <strong>22001123-1</strong><br />
          <a href="#" onClick={handleLogoff}>Sair</a>
        </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
