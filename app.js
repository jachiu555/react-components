// TODO

class GroceryListItem extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    done: false
  };
}

onListItemClick() {
  this.setState({
    done: !this.state.done
  });
}

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };
  return (
    <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.items}</li>
  );
}
}

var GroceryList = (props) => (
  <ul>
    <h2>Groceries</h2>
    {props.items.map(item =>
    <GroceryListItem items={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Bread', 'Butter']}/>, document.getElementById("app"));
