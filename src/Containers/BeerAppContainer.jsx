import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import BeerCataloguePage from '../Components/BeerCataloguePage';

const BeerAppContainer = () => {
	const [Beers, setBeers] = useState([]);

	useEffect(() => {
		fetch('https://api.punkapi.com/v2/beers')
			.then((res) => res.json())
			.then((data) => setBeers(data));
	});

	return (
		<div>
			<Header />
			<BeerCataloguePage beers={Beers} />
		</div>
	);
};

export default BeerAppContainer;
