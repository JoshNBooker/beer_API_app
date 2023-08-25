const FavouritedBeers = ({ likedBeer }) => {
	return (
		<div>
			<li>
				<p>{likedBeer.name}</p>
			</li>
		</div>
	);
};

export default FavouritedBeers;
