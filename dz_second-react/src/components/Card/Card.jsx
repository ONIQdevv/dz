import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import userStyles from "./Card.module.scss"

class Card extends Component {
  
     render() {

        const {id, name, price, image, code, color} = this.props.phone

        return (
            <div className={userStyles.card}>
                <div className={userStyles.cardImg}>
                    <img 
                        className={userStyles.imagePhone}
                        src={this.props.phone.image} 
                        alt={this.props.phone.name}
                    />
                </div>
                <div className={userStyles.colorIphone}>
                    {this.props.phone.color}
                </div>
                <div className={userStyles.addToCardContainer}>
                    <span className={userStyles.price}>
                        <strong>
                            {this.props.phone.price}₴
                        </strong>
                    </span>
                    <button
                        // onClick={() => this.props.openOrClose()}
                        onClick={() => this.props.onAdd(this.props.phone)}   
                      className={userStyles.addToCard}> 
                         {this.props.btnAdd} 
                    </button>
                </div>
                <Modal
                    closeBtn={this.props.closeBtn}
                    isOpen={this.props.isOpen}
                    onCancel={this.props.onCancel}
                    onSubmit={this.props.onSubmit}
                    btnFirstText={this.props.btnFirstText}
                    btnSecText={this.props.btnSecText}
                    header={this.props.header} 
                >
                     id: {id} <br/>
                     name: {name} <br/>
                     color: {color} <br/>
                     code: {code} <br/>
                     price: {price} <br/>
                </Modal>
            </div>
        )
    }
}

Card.propTypes = {
    closeBtn: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    header: PropTypes.string,
    btnFirstText: PropTypes.string,
    btnSecText: PropTypes.string,
    btnAdd: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number
}

export default Card;