const FavouritedBeers = ({ likedBeer }) => {
	return (
		<li>
			<p>{likedBeer.name}</p>
		</li>
	);
};

export default FavouritedBeers;
