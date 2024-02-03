import styles from './CustomInput.module.css'
import { Box, TextField } from '@mui/material'

const CustomInput = ({label, placeholder, value, handleChange}) => {
  return (
    <Box className={styles.inputFieldWrapper}>
      <label>{label}</label>
      <TextField 
        variant="outlined"
        placeholder={placeholder}
        className={styles.inputField}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  )
}

export default CustomInput