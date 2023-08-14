import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>Bueno: {good}</li>
      <li className={style.item}>Medio: {neutral}</li>
      <li className={style.item}>Malo: {bad}</li>
      <li className={style.item}>Total: {total}</li>
      <li className={style.item}>
        Retroalimentación positiva: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
