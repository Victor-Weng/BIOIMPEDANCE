import React, { useEffect, useState, useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';
import './Parameter.css';

const Parameter = () => {
    const { fetchBio } = useContext(BioContext);
    const [isOpen, setIsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [frequency, setFrequency] = useState(2500000);
    const [depth, setDepth] = useState(0.1);
    const [meshSize, setMeshSize] = useState('5.00E-04');
    const [location, setLocation] = useState('Undefined');
    const [condition, setCondition] = useState('Normal');

    const handleFrequencyChange = (e) => setFrequency(e.target.value);
    const handleDepthChange = (value) => setDepth(value);
    const handleMeshSizeChange = (e) => setMeshSize(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleConditionChange = (e) => setCondition(e.target.value);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleCalculateClick = () => {
        setIsLoading(true);
        console.log("Clicked")
        fetchBio(frequency, depth, meshSize, location, condition)
        .finally(() => setIsLoading(false));
    };

    // Effect to reset GIF
    useEffect(() => {
        if (isLoading) {
            // Reset the GIF by temporarily removing and re-adding the loading overlay
            const overlay = document.querySelector('.loading-overlay');
            if (overlay) {
                overlay.classList.remove('visible');
                void overlay.offsetWidth; // Trigger reflow to reset CSS
                overlay.classList.add('visible');
            }
        }
    }, [isLoading]);

    return (
        <Fragment>
            <div>
            {isLoading && (
                <div className={`loading-overlay ${isLoading ? 'visible' : ''}`}>
                    <div className="loading-overlay"/>
                </div>
            )}
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="parameter-flex">
                    {isOpen && (
                        <div className="parameter-content">
                            <h2>Parameters</h2>

                            <div className="parameter">
                                <label>Frequency Range</label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="2500000" 
                                    step="500000" 
                                    value={frequency} 
                                    onChange={handleFrequencyChange} 
                                />
                                <span>1000 - {frequency} Hz</span>
                            </div>

                            <div className="parameter">
                                <label>Depth Setting</label>
                                <div className="depth-switch">
                                    <button 
                                        className={depth === 0.1 ? 'active' : ''} 
                                        onClick={() => handleDepthChange(0.1)}
                                    >
                                        0.1
                                    </button>
                                    <button 
                                        className={depth === 0.58 ? 'active' : ''} 
                                        onClick={() => handleDepthChange(0.58)}
                                    >
                                        0.58
                                    </button>
                                    <button 
                                        className={depth === 1 ? 'active' : ''} 
                                        onClick={() => handleDepthChange(1)}
                                    >
                                        1
                                    </button>
                                </div>
                            </div>

                            <div className="parameter">
                                <label>Mesh Size</label>
                                <select value={meshSize} onChange={handleMeshSizeChange}>
                                    <option value="1.00E-05">1.00E-05</option>
                                    <option value="1.00E-04">1.00E-04</option>
                                    <option value="5.00E-04">5.00E-04</option>
                                </select>
                            </div>

                            <div className="parameter">
                                <label>Test Location</label>
                                <select value={location} onChange={handleLocationChange}>
                                    <option value="General">General</option>
                                    <option value="Arm">Arm</option>
                                    <option value="Leg">Leg</option>
                                    <option value="Chest">Chest</option>
                                </select>
                            </div>

                            <div className="parameter">
                                <label>Condition</label>
                                <select value={condition} onChange={handleConditionChange}>
                                    <option value="Normal">Normal</option>
                                    <option value="Atopic Dermatitis">Atopic Dermatitis</option>
                                    <option value="Early Stage Melanoma">Early Stage Melanoma</option>
                                    <option value="Late Stage Melanoma">Late Stage Melanoma</option>
                                </select>
                            </div>

                            <button className="calculate-button" onClick={handleCalculateClick}>Calculate</button>
                        </div>
                    )}
                    <div className="toggle-button-wrapper">
                        <div className="toggle-button" onClick={toggleSidebar}>
                            {isOpen ? '◀' : '▶'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Parameter;
