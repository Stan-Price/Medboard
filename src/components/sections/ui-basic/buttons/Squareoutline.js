import React, { Component } from 'react';

class Squareoutline extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Square Outline Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-square</code> for square outline buttons</p>
                    <button type="button" className="btn btn-square btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-square btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-square btn-outline-success">Success</button>
                    <button type="button" className="btn btn-square btn-outline-danger">Danger</button>
                    <button type="button" className="btn btn-square btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-square btn-outline-info">Info</button>
                    <button type="button" className="btn btn-square btn-outline-light">Light</button>
                    <button type="button" className="btn btn-square btn-outline-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Squareoutline;