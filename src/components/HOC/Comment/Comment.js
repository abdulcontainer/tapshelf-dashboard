import HOC from '../HOC'

const Comment = ({count, handleChange}) => {
  return (
    <div>
      <p>Comment: {count}</p>
      <button onClick={handleChange}>Comment</button>
    </div>
  )
}

export default HOC(Comment,3)