import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../views/Item';
import { addItem } from '../../actions';


class Home extends Component {

	state = {
		name: '',
		price: ''
	}

	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.addItem(this.state);	

		//event.target.reset();
	}

  render () {
    const items = this.props.items.products.map((item, index) => {
      return (
        <Item item={item} key={item.id}/>
      );
    });
    return (

      <div style={styles.divStyle}>
        <form onSubmit={this.handleSubmit}>
          <input onKeyUp={this.handleInput} name="name" />
          <br />
          <input onKeyUp={this.handleInput} name="price" />
          <br />
          <button>Submit</button>
        </form>
        {items}
      </div>
    );
  }
}

const styles = {
  divStyle: { marginLeft: 700, marginTop: 250 }
};

const mapStateToProps = state => ({
  items: state.items
});

const dispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	}
}

export default connect(mapStateToProps, dispatchToProps)(Home);
