import Layout from '../../Layout/Layout'
import Comment from '../../components/HOC/Comment/Comment'
import Like from '../../components/HOC/Like/Like'
import { useTranslation } from 'react-i18next'

const HigherOrder = () => {
  const {t}= useTranslation()

  return (
    <Layout>
      <p>{t('hoc')}</p>
      <Like/>
      <Comment/>
    </Layout>
  )
}

export default HigherOrder