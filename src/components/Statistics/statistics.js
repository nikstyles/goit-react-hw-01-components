import PropTypes from 'prop-types';
import css from './statistics.module.css';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : <></>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          let dotLabel = label.slice(1, label.length);
          return (
            <div className={css.item_wrap}>
              <li key={id} className={`${css.item} ${css[dotLabel]}`}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
