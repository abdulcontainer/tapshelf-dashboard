import HOC from "../HOC"

const Like = ({count, handleChange}) => {
  return (
    <div>
      <p>Like: {count}</p>
      <button onClick={handleChange}>Like</button>
    </div>
  )
}

export default HOC(Like, 32)