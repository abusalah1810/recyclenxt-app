import React, { useState } from 'react';

interface WalletPageProps {}

const WalletPage: React.FC<WalletPageProps> = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tokenBalance = 215;
  
  const transactions = [
    {
      id: 1,
      title: 'Donated 20 Plastic Bottles',
      date: 'Today, 2:30 PM',
      amount: 25,
      type: 'earning'
    },
    {
      id: 2,
      title: 'Purchased Dense Backpack',
      date: 'Yesterday, 11:15 AM',
      amount: 40,
      type: 'earning'
    },
    {
      id: 3,
      title: 'Used at Checkout',
      date: 'May 25, 2025',
      amount: 50,
      type: 'redemption'
    },
    {
      id: 4,
      title: 'Donated 30 Glass Bottles',
      date: 'May 20, 2025',
      amount: 45,
      type: 'earning'
    },
    {
      id: 5,
      title: 'Purchased Tote Bag',
      date: 'May 18, 2025',
      amount: 20,
      type: 'earning'
    }
  ];

  return (
    <div className="container">
      <div className="header">
        <h1 className="page-title">TerraTokens Wallet</h1>
      </div>
      
      <div className="content">
        <div className="wallet-card" style={{
          backgroundColor: 'var(--primary-green)',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
        }}>
          <div style={{
            fontSize: '16px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            Your Balance 
            <div 
              style={{
                marginLeft: '8px',
                width: '16px',
                height: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '12px',
                cursor: 'pointer'
              }}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              i
            </div>
          </div>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            {tokenBalance}
          </div>
          <div style={{
            fontSize: '14px',
            opacity: 0.8
          }}>
            1 token = ₹1
          </div>
          <button 
            style={{
              backgroundColor: 'white',
              color: 'var(--primary-green)',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '16px',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            Use Tokens at Checkout
          </button>
        </div>
        
        {showTooltip && (
          <div style={{
            position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '14px',
            width: '100%',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '8px solid rgba(0, 0, 0, 0.8)'
            }}></div>
            TerraTokens can be used for up to 25% discount on your purchases. 1 token = ₹1 in value.
          </div>
        )}
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h3 className="section-title">Recent Activity</h3>
          <div style={{
            fontSize: '14px',
            color: 'var(--primary-green)'
          }}>
            View All
          </div>
        </div>
        
        <div className="transaction-list" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          {transactions.map(transaction => (
            <div key={transaction.id} style={{
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: transaction.id !== transactions[transactions.length - 1].id ? '1px solid var(--light-gray)' : 'none'
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  {transaction.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--medium-gray)' }}>
                  {transaction.date}
                </div>
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                color: transaction.type === 'earning' ? 'var(--primary-green)' : 'var(--dark-gray)'
              }}>
                {transaction.type === 'earning' ? '+' : '-'}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
