import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'search' : 'Search',
          'overallInventery' : 'Overall Inventery',
          'categories' : 'Categories',
          'totalProducts' : 'Total Products',
          'topSelling' : 'Top Selling',
          'lowStock' : 'Low Stock',
          'hoc': 'Higher Order Component'
        }
      },
      ur: {
        translation: {
          'search' : 'تلاش کریں',
          'overallInventery' : 'مجموعی انوینٹری',
          'categories' : 'اقسام',
          'totalProducts' : 'کل مصنوعات',
          'topSelling' : 'زیادہ فروخت',
          'lowStock' : 'کم اسٹاکس',
          'hoc': 'اعلی آرڈر کا جزو'
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    /* Use as placeholder to render dynamic data
      const userName = 'Test'; 
      const data = i18next.t('welcome', { name: userName });
      console.log(data)
    */

    // interpolation: {
    //   escapeValue: false
    // }
  });

export default i18n;  