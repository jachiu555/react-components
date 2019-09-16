// TODO

var GroceryList = () => (
  <ul>
    <li>Groceries</li>
    <GroceryListItem name="test" />
  </ul>
);

var GroceryListItem = (props) => (
   <li>hello from component</li>
  )

ReactDOM.render(<GroceryList />, document.getElementById("app"));
