import { IoFilter } from "react-icons/io5";
import styles from './TableHeader.module.css';
import { Box, Button, Modal, Stack, TableCell, TableRow, Typography } from '@mui/material';
import AddInventerModal from "../../AddInventerModal/AddInventerModal";

const TableHeader = () => {

  return (
    <TableRow>
      <TableCell colSpan={1} sx={{borderBottom: 'none', fontWeight: 600}}>
        Products
      </TableCell>
      <TableCell colSpan={6} 
        align="right"
        sx={{ borderBottom: 'none'}}
      >
        <Stack spacing={1} direction="row" justifyContent='flex-end' alignItems='center'>
          <AddInventerModal/>
          <Button variant="outlined" startIcon={<IoFilter />}>
            Filter
          </Button>
          <Button variant="outlined">
            Download all
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  )
}

export default TableHeader