import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  css,
  textOnly,
  disabled,
  style = {},
  ...props
}) => {

    let defaultStyle = textOnly? 'text-button' : 'button';
    const cssClass = defaultStyle + (css ? ` ${css}` : '');
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cssClass}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  css: PropTypes.string,
  textOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;