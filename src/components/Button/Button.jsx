import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {

renderChildren = () => {
    const { label, children} = this.props;
    if(label) {
        return label;
    }
    if(children) {
        return children;
    }
    return "Button";
};

handleBtnClick = e => {
    const { onClick} = this.props;
    onClick && onClick({e});
}

 render(){
     const {
         label,
         variant,
         size,
         onClick,
         disabled,
         disabledClassName
     } = this.props;

     const _btnClass = classNames(
         styles.btn,
         styles[variant],
         styles[size],
         {
             [styles.disabled]: disabled,
             [disabledClassName]: disabled
         }
     );
    return(
        <button className={_btnClass} onClick={this.handleBtnClick}>
            {this.renderChildren()}
        </button>
    );
 }
}

Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'primary','info','success','warning','danger','dark']),
    size: PropTypes.oneOf(["sm","md","lg"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    disabledClassName: PropTypes.string
}

Button.defaultProps = {
    label: "Button",
    variant: 'default',
    size: 'md',
    disabled: false,
    disabledClassName:""
}

export default Button;
