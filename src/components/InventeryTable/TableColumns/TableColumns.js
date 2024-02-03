import { TableCell, TableRow } from '@mui/material';

const TableColumns = ({columns}) => {
  return (
    <TableRow>
      {columns?.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          // style={{ top: 57, minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default TableColumns