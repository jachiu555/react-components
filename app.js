// TODO

var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <h2>Groceries</h2>
    <GroceryListItem items={['Bread', 'Butter']} />
  </div>
);



ReactDOM.render(<GroceryList />, document.getElementById("app"));
