import { useState } from 'react';
import BeerList from './BeerList';
import FavouritedBeers from './FavouritedBeers';

const BeerCataloguePage = ({ beers }) => {
	const [likedBeers, setLikedBeers] = useState([]);

	const likeBeer = (beer) => {
		setLikedBeers([...likedBeers, beer]);
	};

	return (
		<div>
			<ul className="beer-list">
				{beers.map((beer) => (
					<BeerList beer={beer} key={beer.id} likeBeer={likeBeer} />
				))}
			</ul>
			<ul className="liked-beer-list">
				{likedBeers.map((likedBeer) => (
					<FavouritedBeers likedBeer={likedBeer} key={likedBeer.id} />
				))}
			</ul>
		</div>
	);
};

export default BeerCataloguePage;
