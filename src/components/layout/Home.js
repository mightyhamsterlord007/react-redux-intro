import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../views/Item';

class Home extends Component {
  render () {
		const items = this.props.items.products.map((item, index) => {
			return (
				<Item item={item} key={item.id}/>
			)
		})
    return (
      <div>
        {items}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, null)(Home);
