import { API } from "../API";
import { USER_ROUTES } from "../../config/api";

import { UserDTO } from "@Type/DTO";
import { SignInDTO, SignUpDTO } from "@Types/DTO";


export const singIn = async (data: SignInDTO) => API.post(USER_ROUTES.SIGNIN, data)
export const singUp = async (data: SignUpDTO) => API.post(USER_ROUTES.SIGNUP, data)
export const me = async () => API.get(USER_ROUTES.ME);
