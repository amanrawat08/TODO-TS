 
const TodoBtn = ({filter,setFilter}: {filter: Filter, setFilter: (filter: Filter) => void}) => {
  return (
    <div>
      <button onClick={() => setFilter("ALL")}    >
            All
      </button>
      <button onClick={() => setFilter("PENDING")}>
            Pending
      </button>
      <button onClick={() => setFilter("COMPLETED")}>
            Completed
      </button>
    </div>
  )
}

export default TodoBtn
