import React, { useState, useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';
import './Parameter.css';

const Parameter = () => {
    const { fetchBio } = useContext(BioContext);
    const [isOpen, setIsOpen] = useState(true);

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
        console.log("Clicked")
        fetchBio(frequency, depth, meshSize, location, condition);
    };

    return (
        <Fragment>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isOpen ? '◀' : '▶'}
                </div>
                {isOpen && (
                    <div className="parameter-content">
                        <h2>Parameter List</h2>

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
                            <span>{frequency} Hz</span>
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
                                <option value="Undefined">Undefined</option>
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
                                <option value="Melanoma">Melanoma</option>
                            </select>
                        </div>

                        <button className="calculate-button" onClick={handleCalculateClick}>Calculate</button>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Parameter;
