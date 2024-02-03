import { useState } from 'react';
import styles from './AddInventerModal.module.css';
import { Box, Button, Modal, Typography } from '@mui/material';

import ProductForm from '../ProductForm/ProductForm';

const AddInventerModal = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Box>
      <Button variant='contained' onClick={() => setOpen(true)}>Add Product</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={styles.modalOverlay}
      >
        <Box className={styles.modalWrapper}>
          <Typography variant="h6">
            New Product
          </Typography>
          <ProductForm setOpen={setOpen}/>
        </Box>
      </Modal>
    </Box>
  )
}

export default AddInventerModal