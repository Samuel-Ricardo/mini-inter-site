import { SignInDTO, SignUpDTO } from "@Types/DTO";
import { API_ROUTES } from "../../config/api";
import { API } from "../API";


export const singIn = async (data: SignInDTO) => API.post(API_ROUTES.SIGNIN, data)
export const singUp = async (data: SignUpDTO) => API.post(API_ROUTES.SIGNUP, data)
export const me = async () => API.post(API_ROUTES.ME);
