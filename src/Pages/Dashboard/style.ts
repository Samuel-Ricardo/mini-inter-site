import styled from "styled-components";

export const DashboardBackground = styled.main`

  width: 100%;
  height: 100hv;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const BodyContainer = styled.main`

  width: 80%;
  margin-top: 40pt;

  display: flex;
  justify-content: space-between;

  > div{
    flex:1;

    & > div {
      margin-bottom: 20pt;
    }

    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const InlineTitle = styled.div`
  display: flex;
  flex: 100%;
`

export const InlineContainer = styled.div`
  display: flex;
  margin-top:20pt;
  width: 100%;

  div{
    flex: 4;
    margin-right: 20pt;
  }

  button{
    flex: 1;
  }
`;
