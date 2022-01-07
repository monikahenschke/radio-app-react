import propTypes, { func } from 'prop-types';

const Button = ({
  iconOnly,
  size,
  icon: IconComponent,
  children,
  ...props
}) => (
  <button
    className={
      'button ' +
      (size ? 'button--' + size : '') +
      (iconOnly && IconComponent ? ' icon' : '')
    }
    {...props}
  >
    {iconOnly && IconComponent ? <IconComponent /> : children}
  </button>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: func.isRequired,
};

export default Button;
