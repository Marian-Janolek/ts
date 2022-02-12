import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { useState } from 'react';
import { addReservation } from './features/reservationSlice';
import CustomerCard from './components/CustomerCard';

const App = () => {
  const [reservationName, setReservationName] = useState('');
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);

  const handleAddReservation = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, i) => (
                <ReservationCard name={name} index={i} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
