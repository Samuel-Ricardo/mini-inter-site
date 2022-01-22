import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90pt;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderWrapper = styled.div`

  width: 80%;
  height: 90pt;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
