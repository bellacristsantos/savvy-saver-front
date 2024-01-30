import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { MagnifyingGlass, Calendar, Coins,  X } from "@phosphor-icons/react";
import CurrencyInput from 'react-currency-input-field';
import './TimeTravel.css';
import './TimeTravel.css';

const TimeTravel = () => {
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTimeTravel = () => {
    //time travel logic
    console.log("handleTimeTravel chamada");

    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className='time-travel-container' id='time-travel'>

      <div className="time-travel-box">
        <p>
          Take a <span className="highlight">financial time travel</span>  journey to explore the 'what ifs' of financial choices and discover the amount you could earn from investments that you didn't make.
        </p>
      </div>

      <div className="time-travel-form">
        <div className="input-group">
          <MagnifyingGlass className='icon' />
          <input
            type="text"
            placeholder='Search for a company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="input-group">
          <Calendar className='icon' />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText='Select a date'
          />
        </div>

        <div className="input-group">
          <Coins className='icon' />
          <CurrencyInput
            id="investmentAmount"
            name="investmentAmount"
            placeholder="Investment amount"
            value={investmentAmount}
            onValueChange={(value) => setInvestmentAmount(value)}
            allowDecimals
            prefix="$"
          />
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleTimeTravel}>
          TIME TRAVEL
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <X className='close-icon' onClick={closeModal} />

              <p className='modal-text'>Your investment return would be:</p>

              <div className="modal-amount">
                <div className="result-container">
                  <p className="result">
                    $30,200
                  </p>
                </div>

                <div className="percentage-container">
                  <p className="percentage">
                    2.96%
                  </p>
                </div>
              </div>

              <div className="modal-button">
                <button onClick={closeModal}>
                  BACK TO REALITY
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );

};

export default TimeTravel;