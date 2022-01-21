import { useNavigate } from "react-router-dom";
import { app_images } from "../../config/app_images";
import { routes } from "../../config/routes/routes";
import { app_classes } from "../../config/style_classes";
import UserCircle from "../UserCircle";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./style";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoff = () => { navigate(routes.SIGNIN) }

  const {BOLD, PRIMARY_COLOR} = app_classes;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={app_images.Inter_logo} width={172} height={61} alt="inter logo" />
        <UserInfo>
        <UserCircle initials="SR" />
        <div>
          <p>Olá, <span className={`${PRIMARY_COLOR} ${BOLD}`}>Pablo</span></p>
          <strong>22001123-1</strong><br />
          <a href="#" onClick={handleLogoff}>Sair</a>
        </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
