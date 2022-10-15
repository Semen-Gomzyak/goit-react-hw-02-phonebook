import styled from 'styled-components';

export const ContactInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 10px;
  pading: 5px;

  :last-child {
    margin-top: 0px;
  }
`;

export const ContactInformation = styled.p`
  margin: 0;
`;

export const DeleteButton = styled.button`
  background-color: #ff6b08;
  width: 80px;
  height: 40x;
  font-size: 20px;
  line-height: 1.3;
  border-radius: 10px;
  margin-left: 20px;
  border-color: #ff6b08;
  color: white;
  pading: 5px;

  :hover {
    background-color: #2196f3;
    border-color: #2196f3;
  }
`;
