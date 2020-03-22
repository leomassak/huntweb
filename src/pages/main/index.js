import React, { Component } from 'react';
import api from '../../services/api.js';

import './style.css';

import {Link} from 'react-router-dom';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],
            productInfo: {},
            page: 1
        };
    }
  
  componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

       
        const {docs, ...productInfo} = response.data;
        this.setState({products: docs, productInfo: productInfo, page: page});
    };

    previousPage = () =>{
        const { page } = this.state;

        if(page === 1) return

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const {page, productInfo} = this.state;

        if(page === productInfo.pages) return

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const {page, productInfo} = this.state;

        return (
            <div className="product-list">
                {this.state.products.map(product => (
                <article key={product._id}>
                   <strong>{product.title}</strong> 
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`} >Acessar</Link>
                </article>))}
                <div id="prev-next">
                    <button onClick={this.previousPage} disabled={page === 1}>Previous</button>
                    <button onClick={this.nextPage} disabled={page === productInfo.pages}>Next</button>
                </div>
            </div>
        )
    }
}
