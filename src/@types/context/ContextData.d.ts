import { UserDTO } from '@Types/DTO';

declare module '@Types/context' {
  export interface ContextData {
    user: UserDTO,
    userSignIn: (userData: SignInDTO) => Promise<UserDTO>,
    userSignUp: (userData: SignUpDTO) => Promise<UserDTO>,
    getCurrentUser: () => Promise<UserDTO>
  }
}

export interface ContextData {
  user: UserDTO,
  userSignIn: (userData: SignInDTO) => Promise<UserDTO>,
  userSignUp: (userData: SignUpDTO) => Promise<UserDTO>,
  getCurrentUser: () => Promise<UserDTO>
}
