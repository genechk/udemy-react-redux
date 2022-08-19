import classNames from 'classnames';
import './Card.css';

const Card = ({ children, className }) => {
  return <div className={classNames(className, 'card')}>{children}</div>;
};

export { Card };
