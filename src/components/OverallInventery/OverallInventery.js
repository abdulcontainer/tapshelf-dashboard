import { useContext } from 'react';
import styles from './OverallInventery.module.css';
import productContext from '../../context/productContext';

const OverallInventery = () => {
  const ctx = useContext(productContext)
  const allProducts = ctx.allProducts

  // get no stock data
  const notStock = allProducts.filter((item) => item.availability === 3)

  const data = [
    { title: 'Categories', titleColor: '#054aab', firstValue: 14, firstValueLable: 'Last 7 days'},
    { title: 'Total Products', titleColor: '#E39A44', firstValue: allProducts?.length, firstValueLable: 'Last 7 days', secondValue: '$25000', secondValueLable: 'Revenue'},
    { title: 'Top Selling', titleColor: '#8D6AC1', firstValue: 5, firstValueLable: 'Last 7 days', secondValue: '$2500', secondValueLable: 'Cost'},
    { title: 'Low Stocks', titleColor: '#F46F66', firstValue: 12, firstValueLable: 'Ordered', secondValue: notStock?.length, secondValueLable: 'Not in stock'},
  ]

  return (
    <div className={styles.overallInventeryOverlay}>
      <h3>Overall Inventery</h3>
      <div className={styles.overallList}>
        {data.map((item, index) => (
          <div className={styles.overallItem} key={index}>
            <h5 style={{color: `${item.titleColor}`}}>{item.title}</h5>
            <div className={styles.itemContent}>
              <div className={styles.valueLabel}>
                <div>{item.firstValue}</div>
                <div>{item.firstValueLable}</div>
              </div>
              {(item.secondValue || item.secondValue == 0) &&  
                <div className={`${styles.valueLabel} ${styles.secondValueLabel}`}>
                  <div>{item.secondValue}</div>
                  <div>{item.secondValueLable}</div>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverallInventery