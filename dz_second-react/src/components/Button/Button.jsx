import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

class Button extends Component {
     render() {
        return (
            <div className={styles.linkContainer}>
                <a 
                    style={{backgroundColor: `${this.props.backgroundColor}`}}
                    className={styles.link}
                    onClick={this.props.onClick}> 
                        {this.props.text} 
                </a>
            </div>
        )
    }
}

Button.propTypes  = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string
}

export default Button;  