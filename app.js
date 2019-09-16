// TODO

class GroceryListItem extends React.Component {
constructor(props) {
  super(props);
}
  render() {
  return (
    <li>{this.props.items}</li>
  );
}
}

//var data=['Bread', 'Butter'];

var GroceryList = (props) => (
  <ul>
    <h2>Groceries</h2>
    {props.items.map(item =>
    <GroceryListItem items={item} />
    )}
  </ul>
);



ReactDOM.render(<GroceryList items={['Bread', 'Butter']}/>, document.getElementById("app"));
