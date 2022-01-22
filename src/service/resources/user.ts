import { SignInDTO } from "@Types/DTO";
import { API_ROUTES } from "../../config/api";
import { API } from "../API";


const singIn = async (data: SignInDTO) => API.post(API_ROUTES.SIGNIN, data, )

export {};
