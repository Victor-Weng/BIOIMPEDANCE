import React, { useState, useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';
import './Parameter.css';

const Parameter = () => {
    const { fetchBio } = useContext(BioContext);
    const [isOpen, setIsOpen] = useState(true);

    const [frequency, setFrequency] = useState(50);
    const [depth, setDepth] = useState(0.1);
    const [meshSize, setMeshSize] = useState('Small');
    const [location, setLocation] = useState('Arm');
    const [condition, setCondition] = useState('Normal');

    const handleFrequencyChange = (e) => setFrequency(e.target.value);
    const handleDepthChange = (value) => setDepth(value);
    const handleMeshSizeChange = (e) => setMeshSize(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleConditionChange = (e) => setCondition(e.target.value);

    const toggleSidebar = () => setIsOpen(!isOpen);

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
                                min="10" 
                                max="100" 
                                step="10" 
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
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>

                        <div className="parameter">
                            <label>Test Location</label>
                            <select value={location} onChange={handleLocationChange}>
                                <option value="Arm">Arm</option>
                                <option value="Leg">Leg</option>
                                <option value="Chest">Chest</option>
                            </select>
                        </div>

                        <div className="parameter">
                            <label>Condition</label>
                            <select value={condition} onChange={handleConditionChange}>
                                <option value="Normal">Normal</option>
                                <option value="Dry">Dry</option>
                                <option value="Oily">Oily</option>
                            </select>
                        </div>

                        <button className="calculate-button" onClick={fetchBio}>Calculate</button>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Parameter;
