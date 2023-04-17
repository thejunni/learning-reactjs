const myButton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Ini Button</button>
    </div>
  )
}

export default myButton;