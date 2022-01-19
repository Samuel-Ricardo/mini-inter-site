import styled from "styled-components";

export const HeaderContainer = styled.div`
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
