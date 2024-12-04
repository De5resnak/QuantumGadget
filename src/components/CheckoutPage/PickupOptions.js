import React, { useState } from 'react';
import './PickupOptoins.css';

const PickupOptions = () => {
    const [pickup, setPickup] = useState(null);

    const pickupAddresses = [
        { id: 1, address: 'Улица 1, дом 1' },
        { id: 2, address: 'Улица 2, дом 2' },
        { id: 3, address: 'Улица 3, дом 3' }
    ];

    const handleChange = (e) => {
        setPickup(e.target.value);
    };

    return (
        <div className="pickup-options">
            <select className="pickup-select" onChange={handleChange}>
                <option value="">Выберите адрес</option>
                {pickupAddresses.map((address) => (
                    <option key={address.id} value={address.address}>
                        {address.address}
                    </option>
                ))}
            </select>
            {pickup && <p className="pickup-selected">Вы выбрали: {pickup}</p>}
        </div>
    );
};

export default PickupOptions;
