//thuc chat  cung chi la 1 component thoi, nhiem vu ket noi voi store redux va render ra giao dien, lay du lieu tu store
import React, { Component } from 'react';
import connect from 'react-redux';
import example from '../components/example';

class Example extends Component {
    render() {
        var {products} = this.props;
        return (
            <example products={products} />
        )
    }

}

const mapStatetoProps = (state) => {
    return {
        //thuoc tinh cua state se la props cua component
        products: state.products
    }
}
export default connect(mapStatetoProps,null)(Example); // connect() la 1 ham, no se tra ve 1 ham khac, va ham do se nhan 1 component la tham so dau vao