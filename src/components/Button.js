import propTypes, { func } from 'prop-types';
import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({
  iconOnly,
  size,
  icon: IconComponent,
  children,
  ...props
}) => {
  const iconClass = iconOnly && IconComponent ? styles.icon : undefined;
  const sizeClass = size && styles[size];

  return (
    <button className={cx(styles.button, sizeClass, iconClass)} {...props}>
      {iconOnly && IconComponent ? <IconComponent /> : children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: func.isRequired,
};

export default Button;
