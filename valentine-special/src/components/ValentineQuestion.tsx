import React, { useState } from 'react';

const ValentineQuestion: React.FC = () => {
    const [noStyle, setNoStyle] = useState({});
    const [yesPressed, setYesPressed] = useState(false);
    const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; left: number; animationDuration: number }>>([]);

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        setNoStyle({
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            transition: 'all 0.2s ease',
        });
    };

    const handleYesClick = () => {
        setYesPressed(true);
        // Create hearts for animation
        const hearts = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position
            animationDuration: 2 + Math.random() * 3, // Random duration between 2-5s
        }));
        setFloatingHearts(hearts);
    };

    if (yesPressed) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#ffebee', // Soft pink background
                textAlign: 'center',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                position: 'relative',
                overflow: 'hidden',
            }}>
                <style>{`
                    @keyframes floatUp {
                        0% { transform: translateY(0) scale(0.5); opacity: 0; }
                        10% { opacity: 1; }
                        100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
                    }
                `}</style>

                {floatingHearts.map((heart) => (
                    <div
                        key={heart.id}
                        style={{
                            position: 'fixed',
                            bottom: '-50px',
                            left: `${heart.left}%`,
                            fontSize: `${1.5 + Math.random() * 2}rem`,
                            animation: `floatUp ${heart.animationDuration}s ease-out forwards`,
                            zIndex: 5,
                            pointerEvents: 'none',
                        }}
                    >
                        ❤️
                    </div>
                ))}

                <div style={{ zIndex: 1, position: 'relative' }}>
                    <img
                        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                        alt="Bear Kiss"
                        style={{ width: '300px', marginBottom: '20px', borderRadius: '15px' }}
                    />
                    <h1 style={{
                        color: '#e91e63',
                        fontSize: '3rem',
                        margin: '0',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        Yaaaay!!! I love you! ❤️
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: '#880e4f', marginTop: '10px' }}>
                        (I knew you'd say yes! 😉)
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#ffebee', // Soft pink
            textAlign: 'center',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            overflow: 'hidden', // Prevent scrollbars when button moves
        }}>
            <img
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                alt="Cute Bear"
                style={{ width: '250px', marginBottom: '20px', borderRadius: '15px' }}
            />

            <h1 style={{
                color: '#d81b60',
                fontSize: '2.5rem',
                marginBottom: '2rem',
                padding: '0 20px',
                lineHeight: '1.2'
            }}>
                Will you be my Valentine Sukshhhhhhhh? 🥺
            </h1>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <button
                    onClick={handleYesClick}
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.3rem',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'none',
                        fontWeight: 'bold',
                        boxShadow: '0 5px 15px rgba(76, 175, 80, 0.4)',
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Yes! 🥰
                </button>

                <button
                    onMouseEnter={moveButton}
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.3rem',
                        backgroundColor: '#ef5350',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'none',
                        fontWeight: 'bold',
                        boxShadow: '0 5px 15px rgba(239, 83, 80, 0.4)',
                        ...noStyle
                    }}
                >
                    No 😔
                </button>
            </div>
        </div>
    );
};

export default ValentineQuestion;
