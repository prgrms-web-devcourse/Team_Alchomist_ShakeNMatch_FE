import styled from '@emotion/styled';
import { COLOR } from '@utils/constants/colors';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  width: 800px;
  height: 120px;
  background-color: ${COLOR.BASIC_WHITE};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid ${COLOR.BASIC_WHITE};
  border-radius: 20px;
  margin: 20px 0px;
  cursor: pointer;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      0 3px 10px 0 rgba(0, 0, 0, 0.095);
  }

  &:active {
    transform: translateY(6px);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      0 1.5px 5px 0 rgba(0, 0, 0, 0.095);
  }
`;

const StyledImage = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
`;

const StyledTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 380px;
`;

const StyledVerticalLine = styled.div`
  border-left: 1px solid ${COLOR.LIGHT_GRAY};
  height: 100px;
`;

const StyledInfo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 220px;
`;
export {
  StyledContainer,
  StyledImage,
  StyledTitle,
  StyledVerticalLine,
  StyledInfo
};
