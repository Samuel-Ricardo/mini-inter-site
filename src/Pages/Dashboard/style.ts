import styled from "styled-components";

export const DashboardBackground = styled.main`

  width: 100%;
  height: 100hv;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
`;
