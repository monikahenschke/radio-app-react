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

  if ((iconOnly || IconComponent) && (!iconOnly || !IconComponent)) {
    const errorText =
      'You cannot use iconOnly and icon separately. You have to pass these props together.';
    throw new Error(errorText);
  }
  return (
    <button className={cx(styles.button, sizeClass, iconClass)} {...props}>
      {iconOnly ? <IconComponent data-testid="buttonIcon" /> : children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: func.isRequired,
};

export default Button;
