import { useNavigate, useSearchParams } from "react-router-dom";
import { app_images } from "../../config/app_images";
import { routes } from "../../config/routes/routes";
import { app_classes } from "../../config/style_classes";
import useAuth from "../../hooks/useAuth";
import UserCircle from "../UserCircle";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./style";

const Header = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const initials = (user.firstName.substring(0, 1) + user.lastName.substring(0, 1)).toUpperCase();

  const handleLogoff = () => { navigate(routes.LOGIN_ROUTES.LOGIN) }

  const {BOLD, PRIMARY_COLOR} = app_classes;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={app_images.Inter_logo} width={172} height={61} alt="inter logo" />
        <UserInfo>
        <UserCircle initials={initials} />
        <div>
            <p>Olá, <span className={`${PRIMARY_COLOR} ${BOLD}`}>{user.firstName} {user.lastName}</span></p>
            <strong>{user.accountNumber}-{user.accountDigit}</strong><br />
          <a href="#" onClick={handleLogoff}>Sair</a>
        </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
