import { useState } from 'react';
import BeerModal from './BeerModal';

const BeerList = ({ beer }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedBeer, setSelectedBeer] = useState(null);

	const openModal = (beer) => {
		setSelectedBeer(beer);
		setModalVisible(true);
	};

	const closeModal = () => {
		setSelectedBeer(null);
		setModalVisible(false);
	};
	return (
		<li>
			<h2>
				<b>{beer.name}</b>
			</h2>
			<h3>{beer.tagline}</h3>
			<p>{beer.description}</p>
			<button onClick={() => openModal(beer)}>
				Interested? Click here
			</button>
			<BeerModal
				selectedBeer={selectedBeer}
				modalVisible={modalVisible}
				closeModal={closeModal}
			/>
		</li>
	);
};

export default BeerList;
