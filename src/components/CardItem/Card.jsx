import styles from './Card.module.css';
const Card = ({ cardNumberValue, cardNameValue, cardMonthValue, cardYearValue }) => {
  // function randomImg(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  return (
    <div className={styles.cardItem}>
      <div style={{ display: 'none' }} className={styles.selectionFrame}></div>

      <img
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/13.jpeg"
        alt="card-img"
      />
      <input
        defaultValue={'#### #### #### ####'}
        value={cardNumberValue}
        type="text"
        className={styles.cardNumber}
        placeholder="#### #### #### ####"
      />
      <input
        id="cardName"
        type="text"
        value={cardNameValue}
        placeholder="Name Surname"
        className={styles.cardName}
        readOnly
      />

      <input
        type="text"
        value={cardMonthValue + '/' + cardYearValue}
        placeholder="Date"
        className={styles.cardDate}
        readOnly
      />
    </div>
  );
};

export default Card;
