import PropTypes from "prop-types";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";
import { useTracksTable } from "@hooks/useTracksTable";
import { CaretDown } from "@assets/icons";

export const TracksTable = ({ tracks }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTracksTable(tracks);

  return (
    <TableContainer>
      <Table variant={"simple"} {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <CaretDown
                          fill="#586274"
                          transform={"rotate(180deg)"}
                          display="inline-block"
                        />
                      ) : (
                        <CaretDown fill="#586274" display="inline-block" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, rowInd) => {
            prepareRow(row);
            return (
              <Tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    key={cell.row.id}
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                    maxWidth={"300px"}
                  >
                    {cell.column.id === "index"
                      ? ++rowInd
                      : cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({ track: GlobalPropTypes.track }))
    .isRequired,
};
