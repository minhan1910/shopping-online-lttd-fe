import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background-color: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  display: inline-block;
`;

export const WrapperProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
