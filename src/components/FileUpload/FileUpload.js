import { Button } from '@mui/material';
import styles from './FileUpload.module.css';
import { styled } from '@mui/material/styles';

const FileUpload = ({file, handleChange}) => {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className={styles.fileUploadWrapper}>
      <div className={styles.imageWrapper}>
        { file && 
          <img 
            src={URL.createObjectURL(file)} 
            alt='file'
          />
        }
      </div>
      <div className={styles.imageContent}>
        <div>Drag image here</div>
        <div>or</div>
        <Button component="label">
          Browser image
          <VisuallyHiddenInput type="file" onChange={handleChange}/>
        </Button>
      </div>
    </div>
  )
}

export default FileUpload