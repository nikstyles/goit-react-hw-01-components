import PropTypes from 'prop-types';
import css from './transactions.module.css';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_head}>
        <tr>
          <th className={css.first_th}>TYPE</th>
          <th className={css.first_th}>AMOUNT</th>
          <th className={css.first_th}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.second_td}>{type}</td>
              <td className={css.second_td}>{amount}</td>
              <td className={css.second_td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
