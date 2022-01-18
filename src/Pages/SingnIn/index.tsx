import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const navigate = useNavigate();

  const handleToSingIn = () => { navigate('/dashboard') };

}

export default SingIn;
