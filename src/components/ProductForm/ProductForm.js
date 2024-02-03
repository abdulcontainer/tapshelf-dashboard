import { useContext, useState } from 'react';
import styles from './ProductForm.module.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import productContext from '../../context/productContext';
import CustomInput from '../CustomInput/CustomInput';
import FileUpload from '../FileUpload/FileUpload';
import { Box, Button, MenuItem, Select } from '@mui/material';

const ProductForm = ({setOpen}) => {
  const [file, setFile] = useState('');
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [category, setCategory] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [thresholdValue, setThresholdValue] = useState('');
  const [availability, setAvailability] = useState(1);

  const ctx = useContext(productContext)
  const allProducts = ctx.allProducts

  // Form input fields
  const inputFields = [
    {label:'Product Name', placeholder:'Enter product name', value:productName, handleChange:setProductName},
    {label:'Product ID', placeholder:'Enter product ID', value:productId, handleChange:setProductId},
    {label:'Category', placeholder:'Select product category', value:category, handleChange:setCategory},
    {label:'Buying Price', placeholder:'Enter buying price', value:buyingPrice, handleChange:setBuyingPrice},
    {label:'Quantity', placeholder:'Enter product quantity', value:productQuantity, handleChange:setProductQuantity},
    {label:'Unit', placeholder:'Enter product unit', value:productUnit, handleChange:setProductUnit},
    {label:'Threshold Value', placeholder:'Enter threshold value', value:thresholdValue, handleChange:setThresholdValue}
  ]
        
  // close modal
  const handleCancel = () => {
    setOpen(false)
    setFile('')
    setProductName('')
    setProductId('')
    setCategory('')
    setBuyingPrice('')
    setProductQuantity('')
    setProductUnit('')
    setExpiryDate('')
    setThresholdValue('')
    setAvailability('')
  }

  // Add product
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName, productId, category, buyingPrice, productQuantity, productUnit, expiryDate, thresholdValue, availability
    }
    const updatedProducts = [...allProducts, newProduct];
    ctx.setAllProducts(updatedProducts);
    handleCancel();
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <FileUpload
        file={file}
        handleChange ={(e) => setFile(e.target.files[0])}
      />
      {inputFields.map((item, index) => (
        <CustomInput
          key={index}
          label = {item.label}
          placeholder = {item.placeholder}
          value = {item.value}
          handleChange = {item.handleChange}
        />
      ))}
      <Box className={styles.inputFieldWrapper}>
        <label>Expiry Date</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={expiryDate}
            onChange={(newValue) => setExpiryDate(newValue)}
          />
        </LocalizationProvider>
      </Box>

      <Box className={styles.inputFieldWrapper}>
        <label>Availability</label>
        <Select 
          className={styles.inputField}
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <MenuItem value={1}>In-stock</MenuItem>
          <MenuItem value={2}>Low stock</MenuItem>
          <MenuItem value={3}>Out of stock</MenuItem>
        </Select>
      </Box>
      <Box className={styles.formButtons}>
        <Button variant="outlined" onClick={handleCancel}>Discard</Button>
        <Button variant="contained" type='submit'>Add Product</Button>
      </Box>
    </form>
  )
}

export default ProductForm