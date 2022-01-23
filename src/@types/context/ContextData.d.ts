import { UserDTO } from "@Type/DTO";

declare module '@Type/context' {
  interface ContextData {
    user: UserDTO,
    userSignIn: (userData: SignInDTO) => Promise<UserDTO>;
    userSignUp: (userData: SignUpDTO) => Promise<UserDTO>;
    getCurrentUser: () => Promise<UserDTO>;
  }
}
