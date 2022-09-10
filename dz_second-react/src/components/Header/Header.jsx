import React, { Component } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from '../Order';
import headerStyles from './Header.module.scss'



class Header extends Component {
  
    showOrders = () => {
        return (
            <div>
                {this.props.orders.map(cartItem => (
                    <Order key={cartItem.id} cartItem={cartItem}/>
                    )
                )}  
            </div>
        )
    };


    showNothing = () => {
        return (
            <div className={headerStyles.empty}>
                <h2> The Cart is empty!!! </h2>
            </div>
        )
    }

     render() {
          
        const {orders, cartOpen} = this.props

        return (
            <div className={headerStyles.iconsContainer}>
            <FaShoppingCart
              className={this.props.cartOpen ? headerStyles.activeCartOpen : headerStyles.shopCart}
              onClick={() => this.setState({ cartOpen: !this.props.cartOpen })}
            />

            {this.props.cartOpen && (
              <div className={headerStyles.shopCartContainer}>
                {this.props.orders.length > 0 ? this.showOrders(this.props) : this.showNothing()}
              </div>
            )}

          </div>
        )
    }
}

export default Header