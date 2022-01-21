import { useNavigate } from "react-router-dom";
import { routes } from "../../config/routes";

const SignUp = () => {

  const navigate = useNavigate();

  const handleToDashboard = () => {
    navigate(routes.DASHBOARD)
  }

  return (
    <></>
  )
}

export default SignUp;
