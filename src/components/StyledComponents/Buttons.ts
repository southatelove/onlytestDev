import styled from "styled-components";

interface StyledButtonMainProps {
  readonly $disable: boolean;
}

const StyledButtonMain = styled.button<StyledButtonMainProps>`
  width: 640px;
  height: 60px;
  background: #4a67ff;
  border-radius: 8px;
  border-color: #4a67ff;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top: 40px;
  cursor: pointer;
  &:active {
    background: #1890ff;
    border-color: #1890ff;
  }
  ${({ $disable }) =>
    $disable &&
    `
    border:0;
    background: #99A9FF;
    border-color: #99A9FF;
  `}
`;

const StyledButtonMenu = styled.button`
  width: 200px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  background: #f5f5f5;
  color: black;
  border: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top: 40px;
  cursor: pointer;
  &:active {
    background: grey;
    border-color: #1890ff;
  }
`;
export { StyledButtonMain, StyledButtonMenu };
