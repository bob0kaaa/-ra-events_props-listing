import React from 'react';
import PropTypes from 'prop-types'
import ListItem from './ListItem';



function Listing(props) {
	const { items } = props;
	return (
		<div className='item-list'>
			{items.map((item) => {
				return <ListItem item={item} key={item.listing_id} />
			})}
		</div>
	)
}

Listing.defaultProps = {
	items: []
}

Listing.propTypes = {
	items: PropTypes.array.isRequired
}


export default Listing;