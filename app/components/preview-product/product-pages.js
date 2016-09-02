import React from 'react';
import ProductPage from './product-page';
export default React.createClass({
    propTypes: {
        pages: React.PropTypes.object,
        nextPage: React.PropTypes.func,
        isLastPage: React.PropTypes.bool
    },

    render() {
        const { pages, selectedPageIndex, nextPage, isLastPage } = this.props;
        const page = pages.get(selectedPageIndex);

        return (
            <div className="preview-product__pages">
                <ProductPage
                    page={page}
                    isLastPage={isLastPage}
                    nextPage={nextPage}
                />
            </div>
        );
    }
});