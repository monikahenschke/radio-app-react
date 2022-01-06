import propTypes from 'prop-types';
import { func } from 'prop-types';
import { ReactComponent as IconLarge } from '../images/play-large.svg';

const Button = ({ iconOnly, size, icon, children, ...props }) => (
  <button className={'button button--' + (size ? size : 'medium')} {...props}>
    {iconOnly ? <IconLarge /> : children}
  </button>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: func.isRequired,
};

export default Button;
