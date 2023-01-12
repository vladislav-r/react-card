import { useState } from 'react';
import Card from '../CardItem/Card';
import styles from './CardInfo.module.css';

const CardInfo = () => {
  const [cardNumberValue, setCardNumberValue] = useState(); //хуки для вывода номера, имени, даты и cvv карты на ее изображение
  const [cardNameValue, setCardNameValue] = useState();
  const [cardMonthValue, setCardMonthValue] = useState('**');
  const [cardYearValue, setCardYearValue] = useState('**');

  return (
    <>
      {/* props на изображение карты */}
      <Card
        cardNumberValue={cardNumberValue}
        cardNameValue={cardNameValue}
        cardMonthValue={cardMonthValue}
        cardYearValue={cardYearValue}
      />

      <div className={styles.cardInfo}>
        <label htmlFor="" className={styles.inputLabel}>
          Card Number
        </label>
        <input
          onChange={(e) => {
            setCardNumberValue(e.target.value);
          }}
          maxLength="16"
          type="text"
          className={styles.inputNumber}
        />
        <label htmlFor="" className={styles.inputLabel}>
          Card Holders
        </label>
        <input
          type="text"
          onChange={(e) => {
            setCardNameValue(e.target.value);
          }}
          className={styles.inputName}
        />
        <div className={styles.bottomInputsContainer}>
          <div id="date" className={styles.bottomInputs}>
            <div>
              <label htmlFor="#date">Expiration Date</label>
              <select
                onChange={(e) => setCardMonthValue(e.target.value)}
                name="Month"
                id=""
                className={styles.inputMonth}>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                onChange={(e) => setCardYearValue(e.target.value.slice(-2))}
                name="Year"
                id=""
                className={styles.inputYear}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
            <div>
              <label htmlFor="#cvv">CVV</label>
              <input type="password" id="cvv" placeholder="CVV" className={styles.inputCVV} />
            </div>
          </div>
        </div>

        <button className={styles.btnSub}>Submit</button>
      </div>
    </>
  );
};

export default CardInfo;
