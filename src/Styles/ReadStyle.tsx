import { createGlobalStyle, styled } from "styled-components";

const ReadStyle = createGlobalStyle`
  body {
    background-color: #917a95;
    display: flex;
    align-items: center;
    justify-content: center;
  };
`
const Table = styled.table`
  background-color: ${({theme})=>theme.colors.backgroundPrimary};
  padding: 1.5rem;
  border-radius: 1rem;
  height: fit-content;
  width: 25rem;
`;
const TableRow = styled.tr`
`;

const TableData = styled.td`
  color: #313131;
  background-color: #cacaca;
  min-width: 10rem;
  padding: 1rem;
  text-align: center;
`;

const TableTitleData = styled.td`
  color: white;
  background-color: #9d9d9d;
  min-width: 10rem;
  padding: 1rem;
  text-align: center;
`;

export { ReadStyle, Table, TableRow, TableTitleData, TableData };