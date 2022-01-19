import { CircleContainer } from "./style";

interface UserInfo {
  initials: string;
}

const UserCircle = ({ initials }: UserInfo) => (
  <CircleContainer>
    {initials}
  </CircleContainer>
)

export default UserCircle;
