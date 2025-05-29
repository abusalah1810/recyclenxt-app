import React, { useState } from 'react';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const [activeTab, setActiveTab] = useState('donations');
  
  const donationHistory = [
    {
      id: 1,
      title: '20 Plastic Bottles',
      date: 'Today, 2:30 PM',
      status: 'Pickup Scheduled'
    },
    {
      id: 2,
      title: '30 Glass Bottles',
      date: 'May 20, 2025',
      status: 'Completed'
    },
    {
      id: 3,
      title: '20 Plastic Bottles',
      date: 'May 10, 2025',
      status: 'Completed'
    }
  ];
  
  const orderHistory = [
    {
      id: 1,
      title: 'Dense Backpack',
      date: 'Yesterday, 11:15 AM',
      status: 'Delivered'
    },
    {
      id: 2,
      title: 'Tote Bag',
      date: 'May 18, 2025',
      status: 'Delivered'
    },
    {
      id: 3,
      title: 'Laptop Sleeve',
      date: 'May 5, 2025',
      status: 'Delivered'
    }
  ];

  return (
    <div className="container">
      <div className="header">
        <h1 className="page-title">Profile</h1>
        <div style={{ position: 'absolute', right: '16px', fontSize: '20px' }}>⚙️</div>
      </div>
      
      <div className="content">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '24px' 
        }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: 'var(--light-gray)', 
            borderRadius: '50%', 
            marginRight: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '32px'
          }}>
            👤
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              marginBottom: '4px' 
            }}>
              Rahul Sharma
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: 'var(--medium-gray)', 
              marginBottom: '8px' 
            }}>
              rahul.s@example.com
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: 'var(--primary-green)' 
            }}>
              Edit Profile
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '24px' 
        }}>
          <div style={{ 
            flex: 1, 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '16px', 
            textAlign: 'center', 
            marginRight: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '4px',
              color: 'var(--primary-green)'
            }}>
              215
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--medium-gray)' 
            }}>
              Tokens Earned
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '16px', 
            textAlign: 'center', 
            marginRight: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '4px',
              color: 'var(--primary-green)'
            }}>
              70
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--medium-gray)' 
            }}>
              Bottles Donated
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '16px', 
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '4px',
              color: 'var(--primary-green)'
            }}>
              3
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--medium-gray)' 
            }}>
              Products Bought
            </div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '16px', 
          marginBottom: '24px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 className="section-title">Your Impact</h3>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            marginBottom: '16px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🎒</div>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '4px' 
              }}>
                2
              </div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--medium-gray)' 
              }}>
                Backpacks Made
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🌱</div>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '4px' 
              }}>
                70
              </div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--medium-gray)' 
              }}>
                Bottles Recycled
              </div>
            </div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(76, 175, 80, 0.1)', 
            borderRadius: '8px', 
            padding: '12px', 
            fontSize: '14px', 
            textAlign: 'center', 
            color: 'var(--primary-green)' 
          }}>
            Your donations helped make 2 backpacks and saved 3.5 kg of plastic from landfills!
          </div>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{ 
            display: 'flex', 
            marginBottom: '16px', 
            borderBottom: '1px solid var(--light-gray)' 
          }}>
            <div 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                padding: '12px', 
                fontWeight: 'bold', 
                color: activeTab === 'donations' ? 'var(--primary-green)' : 'var(--medium-gray)', 
                borderBottom: activeTab === 'donations' ? '2px solid var(--primary-green)' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('donations')}
            >
              Donation History
            </div>
            <div 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                padding: '12px', 
                fontWeight: 'bold', 
                color: activeTab === 'orders' ? 'var(--primary-green)' : 'var(--medium-gray)', 
                borderBottom: activeTab === 'orders' ? '2px solid var(--primary-green)' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('orders')}
            >
              Past Orders
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            {activeTab === 'donations' ? (
              donationHistory.map((item, index) => (
                <div key={item.id} style={{ 
                  padding: '16px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  borderBottom: index < donationHistory.length - 1 ? '1px solid var(--light-gray)' : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--medium-gray)' }}>
                      {item.date}
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--primary-green)' }}>
                    {item.status}
                  </div>
                </div>
              ))
            ) : (
              orderHistory.map((item, index) => (
                <div key={item.id} style={{ 
                  padding: '16px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  borderBottom: index < orderHistory.length - 1 ? '1px solid var(--light-gray)' : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--medium-gray)' }}>
                      {item.date}
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--primary-green)' }}>
                    {item.status}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
