import styled from "styled-components";
import { WIDTH } from "./utils";

export type ITable = {
  title?: string | React.ReactElement;
  description: string | React.ReactElement;
}[][];

export const Table = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      table: ITable;
      isZebra?: boolean;
    }
  ) => (
    <table className={props.className}>
      {props.table.map((row, i) => (
        <tr className={props.isZebra && (i + 1) % 2 ? "even" : ""}>
          {row.map((col) => (
            <td>
              <b>{col.title}</b>
              <p>{col.description}</p>
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
)`
  display: flex;
  flex-direction: column;

  tr {
    display: flex;
    flex-direction: row;
    @media (max-width: ${WIDTH}px) {
      flex-direction: column;
    }
    padding: 8px;
    &.even {
      background: #f8f8f8;
    }

    td {
      width: 50%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      @media (max-width: ${WIDTH}px) {
        width: 100%;
      }
    }
  }
`;
