import { useContext } from 'react';
import styles from './InventeryTable.module.css';
import TableHeader from './TableHeader/TableHeader';
import TableColumns from './TableColumns/TableColumns';
import productContext from '../../context/productContext';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { MdOutlineDeleteOutline } from "react-icons/md";

const columns = [
  { 
    id: 'producpricets', 
    label: 'Products'
  },
  { 
    id: 'buying', 
    label: 'Buying Price'
  },
  {
    id: 'quantity',
    label: 'Quantity'
  },
  {
    id: 'threshVoldalue',
    label: 'Threshold Value'
  },
  {
    id: 'expiry',
    label: 'Expiry Date'
  },
  {
    id: 'availability',
    label: 'Availability'
  },
  {
    id: 'actions',
    label: 'Action'
  }
]

const InventeryTable = () => {
  const ctx = useContext(productContext)
  const allProducts = ctx.allProducts

  // Add product
  const handleDelete = (index) => {
    const updatedProducts = [...allProducts];
    updatedProducts.splice(index, 1);
    ctx.setAllProducts(updatedProducts);
  }
  
  return (
    <TableContainer className={styles.tableContainer}>
      <Table>
        <TableHead>
          <TableHeader/>
          <TableColumns columns={columns}/>
        </TableHead>
        <TableBody>
          {allProducts
            .map((row, index) => {
              return (
                <TableRow hover key={index}>
                  <TableCell>
                    {row.productName ? row.productName : '-'}
                  </TableCell>
                  <TableCell>
                    {row.buyingPrice ? `$ ${row.buyingPrice}` : '-'}
                  </TableCell>
                  <TableCell>
                    {row.productQuantity ? `${row.productQuantity} Packets` : '-'}
                  </TableCell>
                  <TableCell>
                    {row.thresholdValue ? `${row.thresholdValue} Packets` : '-'}
                  </TableCell>
                  <TableCell>
                    {row?.expiryDate ? row?.expiryDate?.format('DD/MM/YYYY') : '-'}
                  </TableCell>
                  <TableCell>
                    <AvailabilityStatus 
                      data={row.availability}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(index)}>
                      <MdOutlineDeleteOutline color='red'/> 
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InventeryTable

const AvailabilityStatus = (item) => {
  return(
    <span 
    style={{
      color:`${
        item.data == 1 ? 'green' 
        : item.data == 2 ? '#E39A44' 
        :'red'
      }`
    }}
    >
      {item.data == 1 ? 'In-stock' : item.data == 2 ? 'Low stock' : 'out of stock'}
    </span>
  )
}