import { SignInDTO, SignUpDTO } from "@Types/DTO";
import { USER_ROUTES } from "../../config/api";
import { API } from "../API";


export const singIn = async (data: SignInDTO) => API.post(USER_ROUTES.SIGNIN, data)
export const singUp = async (data: SignUpDTO) => API.post(USER_ROUTES.SIGNUP, data)
export const me = async () => API.post(USER_ROUTES.ME);
