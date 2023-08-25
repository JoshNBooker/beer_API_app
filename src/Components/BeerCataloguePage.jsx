import BeerList from './BeerList';

const BeerCataloguePage = ({ beers }) => {
	return (
		<div>
			{beers.map((beer) => (
				<BeerList beer={beer} key={beer.id} />
			))}
		</div>
	);
};

export default BeerCataloguePage;
