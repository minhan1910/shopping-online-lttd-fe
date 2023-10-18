import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;  
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
  white-space: nowrap;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const WrapperNumberCart = styled.div`
  position: absolute;
  content: "";
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 8px;
  font-size: 12px;
  background-color: red;
  color: #fff;
  z-index: 99999;
`;
