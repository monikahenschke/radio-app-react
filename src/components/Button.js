import { func } from 'prop-types';
import { string } from 'prop-types';

function Button(props) {
  return (
    <button
      className={'button button--' + (props.size ? props.size : 'medium')}
      onClick={props.onClick}
    >
      {props.iconOnly ? (
        <img alt={props.children} src={require('../images/' + props.icon)} />
      ) : (
        props.children
      )}
    </button>
  );
}

Button.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
