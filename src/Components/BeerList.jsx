import { useState } from 'react';
import BeerModal from './BeerModal';

const BeerList = ({ beer, likeBeer }) => {
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
		<li className="beer-list__item">
			<h2>
				<b>{beer.name}</b>
			</h2>
			<h3>{beer.tagline}</h3>
			<p>{beer.description}</p>
			<button onClick={() => openModal(beer)}>
				<i className="fa-solid fa-eye"></i>
			</button>
			<button onClick={() => likeBeer(beer)}>
				<i className="fa-regular fa-heart"></i>
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
