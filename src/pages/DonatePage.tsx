import React, { useState } from 'react';

interface DonatePage {}

const DonatePage: React.FC<DonatePage> = () => {
  const [wasteType, setWasteType] = useState('plastic');
  const [bottleCount, setBottleCount] = useState(20);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(0);
  const [address, setAddress] = useState('');
  
  const handleBottleCountChange = (increment: boolean) => {
    if (increment) {
      setBottleCount(prev => prev + 1);
    } else if (bottleCount > 20) {
      setBottleCount(prev => prev - 1);
    }
  };
  
  const handleSubmit = () => {
    console.log('Donation scheduled', {
      wasteType,
      bottleCount,
      selectedTimeSlot,
      address
    });
    // In a real app, this would submit the donation and navigate to confirmation
  };
  
  return (
    <div className="container">
      <div className="header">
        <div className="back-button">←</div>
        <h1 className="page-title">Donate Waste</h1>
      </div>
      
      <div className="content">
        <h3 className="section-title">Select Waste Type</h3>
        <div className="waste-type-selector">
          <div 
            className={`waste-type ${wasteType === 'plastic' ? 'selected' : ''}`}
            onClick={() => setWasteType('plastic')}
            style={{
              flex: 1,
              padding: '16px',
              backgroundColor: wasteType === 'plastic' ? 'var(--primary-green)' : 'var(--light-gray)',
              color: wasteType === 'plastic' ? 'white' : 'var(--dark-gray)',
              borderRadius: '12px',
              marginRight: '12px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧴</div>
            <div style={{ fontWeight: 'bold' }}>Plastic</div>
          </div>
          <div 
            className={`waste-type ${wasteType === 'glass' ? 'selected' : ''}`}
            onClick={() => setWasteType('glass')}
            style={{
              flex: 1,
              padding: '16px',
              backgroundColor: wasteType === 'glass' ? 'var(--primary-green)' : 'var(--light-gray)',
              color: wasteType === 'glass' ? 'white' : 'var(--dark-gray)',
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🍾</div>
            <div style={{ fontWeight: 'bold' }}>Glass</div>
          </div>
        </div>
        
        <h3 className="section-title">Number of Bottles</h3>
        <div className="bottle-counter" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '12px',
          marginBottom: '24px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontWeight: 'bold' }}>Bottle Count</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              onClick={() => handleBottleCountChange(false)}
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--light-gray)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >-</div>
            <div style={{ margin: '0 16px', fontWeight: 'bold', fontSize: '18px' }}>{bottleCount}</div>
            <div 
              onClick={() => handleBottleCountChange(true)}
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--light-gray)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >+</div>
          </div>
        </div>
        
        <h3 className="section-title">Upload Photos</h3>
        <div className="photo-upload" style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', marginTop: '12px' }}>
            {[0, 1, 2].map(index => (
              <div key={index} style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--light-gray)',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: index < 2 ? '12px' : '0',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
                <div style={{ fontSize: '12px', textAlign: 'center' }}>Add Photo</div>
              </div>
            ))}
          </div>
        </div>
        
        <h3 className="section-title">Pickup Details</h3>
        <div className="pickup-details" style={{ marginBottom: '24px' }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Pickup Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              marginBottom: '16px'
            }}
          />
          
          <div className="time-slots">
            {['Today, 2:00 PM - 4:00 PM', 'Today, 6:00 PM - 8:00 PM', 'Tomorrow, 10:00 AM - 12:00 PM'].map((slot, index) => (
              <div 
                key={index}
                className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
                onClick={() => setSelectedTimeSlot(index)}
                style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  border: `1px solid ${selectedTimeSlot === index ? 'var(--primary-green)' : 'var(--light-gray)'}`,
                  backgroundColor: selectedTimeSlot === index ? 'rgba(76, 175, 80, 0.1)' : 'white',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `2px solid ${selectedTimeSlot === index ? 'var(--primary-green)' : 'var(--medium-gray)'}`,
                  marginRight: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {selectedTimeSlot === index && (
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-green)'
                    }}></div>
                  )}
                </div>
                <div>{slot}</div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="btn-primary"
          onClick={handleSubmit}
          style={{
            width: '100%',
            marginTop: '24px'
          }}
        >
          Schedule Pickup
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
