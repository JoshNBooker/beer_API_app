const BeerModal = ({ selectedBeer, modalVisible, closeModal }) => {
	return (
		<div>
			{selectedBeer && (
				<div
					className={`modal-overlay ${modalVisible ? 'active' : ''}`}
					onClick={closeModal}
				>
					<div
						className={`modal ${modalVisible ? 'active' : ''}`}
						id="modal"
					>
						<div className="modal-content">
							<header className="modal-header">
								<h1 className="modal-title">
									{selectedBeer.name}
								</h1>
								<button
									className="close-button"
									onClick={closeModal}
								>
									&times;
								</button>
							</header>
							<div className="modal-body">
								<h2>{selectedBeer.tagline}</h2>
								<article>
									<p>{selectedBeer.description}</p>
								</article>
								<p>First brewed: {selectedBeer.first_brewed}</p>
								<p>ABV: {selectedBeer.abv}%</p>
								<img
									src={selectedBeer.image_url}
									alt={selectedBeer.name}
									height="200"
									width="80"
								/>
								<p>
									<b>Brewers tips: </b>{' '}
									{selectedBeer.brewers_tips}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BeerModal;
