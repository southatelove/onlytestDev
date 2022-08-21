import styled from "styled-components";

const StyledMainPage = styled.div`
  background-color: white;
  flex-direction: column;
  display: flex;
  height: 100vh;
  width: 1020px;
  margin: 0 auto;
`;

interface StyledInputProps {
  readonly $warn?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 640px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  border: 0;
  outline: none;
  margin: 0;
  padding: 0 20px;
  ${({ $warn }) =>
    $warn &&
    `
    border: 1px solid #E26F6F;
   `}
`;

const StyledError = styled.div`
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  width: 640px;
  height: 60px;
  padding: 20px;
  gap: 14px;
  align-items: center;
  margin-bottom: 27px;
  display: flex;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 64px;
  margin-top: 40px;
  text-align: center;
`;

export { StyledInput, StyledMainPage, StyledError, Header };
