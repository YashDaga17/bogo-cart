import { useState } from 'react';
import './BogoSelector.css';

interface OptionData {
    units: string;
    discount: string;
    currentPrice: number;
    originalPrice: number;
    subText?: string;
}

interface SelectionData {
    size1: string;
    color1: string;
    size2: string;
    color2: string;
}

const BogoSelector = () => {
    const [selectedUnits, setSelectedUnits] = useState<string>('2');
    const [selection, setSelection] = useState<SelectionData>({
        size1: 'S',
        color1: 'Black',
        size2: 'S',
        color2: 'Colour'
    });

    const options: OptionData[] = [
        { units: '1', discount: '10% Off', currentPrice: 10.00, originalPrice: 24.00, subText: 'Standard Price' },
        { units: '2', discount: '20% Off', currentPrice: 18.00, originalPrice: 24.00 },
        { units: '3', discount: '30% Off', currentPrice: 24.00, originalPrice: 24.00 }
    ];

    const currentPrice = options.find(opt => opt.units === selectedUnits)?.currentPrice || 18.00;

    const handleAddToCart = () => {
        if (selectedUnits === '2') {
            alert(`Added to cart!\nUnits: ${selectedUnits}\nItem 1: Size ${selection.size1}, Color ${selection.color1}\nItem 2: Size ${selection.size2}, Color ${selection.color2}\nTotal: $${currentPrice.toFixed(2)} USD`);
        } else {
            alert(`Added to cart!\nUnits: ${selectedUnits}\nTotal: $${currentPrice.toFixed(2)} USD`);
        }
    };

    return (
        <div className="container">
            <h1 className="title">YAY! It's BOGO</h1>

            {options.map((option) => (
                <div
                    key={option.units}
                    className={`option-card ${option.units === '2' ? 'popular-card' : ''}`}
                >
                    {option.units === '2' && <div className="popular-badge">MOST POPULAR</div>}

                    <label className="option-label">
                        <input
                            type="radio"
                            name="units"
                            value={option.units}
                            className="radio-input"
                            checked={selectedUnits === option.units}
                            onChange={(e) => setSelectedUnits(e.target.value)}
                        />
                        <span className="radio-custom"></span>

                        <div className="option-content">
                            <div className="option-header">
                                <div className="unit-info">
                                    <span className="unit-text">{option.units} Unit</span>
                                    <span className={`discount-badge discount-${option.units === '1' ? '10' : option.units === '2' ? '20' : '30'}`}>
                                        {option.discount}
                                    </span>
                                </div>
                                <div className="price-info">
                                    <span className="current-price">${option.currentPrice.toFixed(2)} USD</span>
                                    <span className="original-price">${option.originalPrice.toFixed(2)} USD</span>
                                </div>
                            </div>
                            {option.subText && <div className="sub-text">{option.subText}</div>}

                            {option.units === '2' && (
                                <div className={`expandable-options ${selectedUnits === '2' ? 'expanded' : ''}`}>
                                    <div className="size-color-row">
                                        <div className="size-color-group">
                                            <label className="field-label">Size</label>
                                            <label className="field-label">Colour</label>
                                        </div>
                                    </div>

                                    <div className="option-row">
                                        <span className="row-label">#1</span>
                                        <select
                                            className="select-field"
                                            value={selection.size1}
                                            onChange={(e) => setSelection({ ...selection, size1: e.target.value })}
                                        >
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <select
                                            className="select-field"
                                            value={selection.color1}
                                            onChange={(e) => setSelection({ ...selection, color1: e.target.value })}
                                        >
                                            <option>Black</option>
                                            <option>White</option>
                                            <option>Red</option>
                                            <option>Blue</option>
                                        </select>
                                    </div>

                                    <div className="option-row">
                                        <span className="row-label">#2</span>
                                        <select
                                            className="select-field"
                                            value={selection.size2}
                                            onChange={(e) => setSelection({ ...selection, size2: e.target.value })}
                                        >
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <select
                                            className="select-field"
                                            value={selection.color2}
                                            onChange={(e) => setSelection({ ...selection, color2: e.target.value })}
                                        >
                                            <option>Colour</option>
                                            <option>Black</option>
                                            <option>White</option>
                                            <option>Red</option>
                                            <option>Blue</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </label>
                </div>
            ))}

            <div className="footer">
                <span className="free-delivery">Free Delivery</span>
                <span className="total">Total : ${currentPrice.toFixed(2)} USD</span>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                + Add to Cart
            </button>

            <div className="powered-by">@ Powered by Pumper</div>
        </div>
    );
};

export default BogoSelector;
