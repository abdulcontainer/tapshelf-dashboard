import { useState } from 'react';
import styles from './Inventery.module.css';
import Layout from '../../Layout/Layout';
import productContext from '../../context/productContext';
import OverallInventery from '../../components/OverallInventery/OverallInventery';
import InventeryTable from '../../components/InventeryTable/InventeryTable';

const Inventery = () => {
  const [ allProducts, setAllProducts ] = useState([])

  const data = { allProducts, setAllProducts}

  return (
    <Layout>
      <productContext.Provider value={data}>
        <div className={styles.inventeryOverlay}>
          <OverallInventery/>
          <InventeryTable/>
        </div>
      </productContext.Provider>
    </Layout>
  )
}

export default Inventery