import React from 'react';

export default React.createClass({
    render() {
        const { element } = this.props;
        return (
            <div>
                <label>{element.get('title')}</label>
                <textarea placeholder={element.get('placeholder')} />
            </div>
        )
    }
});