import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import myStyles from "./CardComponent.module.scss"
import Card from '../Card/Card';

class CardComponent extends Component {
    state = {
        phones: []
    }   

    fetchSmt = () => {
      axios.get(`./content.json`)
        .then((res) => {
            this.setState({phones: res.data})
    })
        .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchSmt()
    }

     render() {
        return (
             <div className={myStyles.container}>
                {this.state.phones.map((phone) => {
                    return (
                      <Card 
                        openOrClose={this.props.openOrClose}
                        closeBtn={this.props.closeBtn}
                        isOpen={this.props.isOpen}
                        onCancel={this.props.onCancel}
                        onSubmit={this.props.onSubmit}
                        onAdd={this.props.onAdd}
                        header={this.props.header}
                        btnFirstText={this.props.btnFirstText}
                        btnSecText={this.props.btnSecText}
                        key={phone.id}
                        phone={phone}
                        btnAdd='Add to cart'
                      />
                    )
                })}  
            </div>
        )
    }
}

CardComponent.propTypes = {
  openOrClose: PropTypes.func,
  closeBtn: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  header: PropTypes.string,
  btnFirstText: PropTypes.string,
  btnSecText: PropTypes.string,
  onAdd: PropTypes.func.isRequired
}

export default CardComponent;