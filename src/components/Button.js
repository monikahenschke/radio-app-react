import propTypes, { func } from 'prop-types';

const Button = ({
  iconOnly,
  size,
  icon: IconComponent,
  children,
  ...props
}) => (
  <button className={'button button--' + (size ?? 'medium')} {...props}>
    {iconOnly ? <IconComponent /> : children}
  </button>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: func.isRequired,
};

export default Button;
