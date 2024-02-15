import { useState } from 'react';
import styles from './LangSwitcher.module.css';
import { MenuItem, Select } from '@mui/material';
import i18next from 'i18next';
import UK from '../../assets/uk.png';
import PK from '../../assets/pk.png';

const langOptions = [
  { label: 'English', code: 'en', flag: UK}, 
  { label: 'Urdu', code: 'ur', flag: PK}
]

const LangSwitcher = () => {
  const [ language, setLanguage ] = useState('en')

  const handleChange = (e) => {
    setLanguage(e.target.value)
    i18next.changeLanguage(e.target.value)
  }

  return (
    <Select
      className={styles.langWrapper}
      value={language}
      onChange={handleChange}
    >
      {langOptions.map((item, index) => (
        <MenuItem key={index} value={item.code}>
          {item.label} 
        </MenuItem>
      ))}
    </Select>
  )
}

export default LangSwitcher