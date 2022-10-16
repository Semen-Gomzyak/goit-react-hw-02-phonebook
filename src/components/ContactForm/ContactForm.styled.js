import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 10px;

  :first-child {
    margin-top: 10px;
  }
`;

export const AddButton = styled.button`
  background-color: #ff6b08;
  width: 130px;
  height: 44px;
  padding: 5px;
  font-size: 20px;
  line-height: 1.3;
  border-radius: 10px;
  margin: 0 auto;
  border-color: #ff6b08;
  color: white;

  :hover {
    background-color: #2196f3;
    border-color: #2196f3;
  }
`;

export const InfoInput = styled(Field)`
    margin-left: 20px;
    font-size: 25px;
    padding: 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    &:focus {
    border-color: #ff6b08;
    transition-property: border-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InfoForm = styled.div`
  display: grid;
`;

export const Wrapper = styled(Form)`
  position: relative;
`;

export const ErrorInfo = styled(ErrorMessage)`
  position: absolute;
  top: -9px;
  margin-left: 10px;
  font-size: 15px;
  color: red;
`;
