import Image from 'next/image';
import styles from "./calculator.module.css";
import { useRouter } from 'next/router';
import { useState } from 'react';


const Snake = () => {
  const handleClick = () => {
    router.push('/lounge/page'); // Replace with the correct path to the desired page
  };

  const [startGame, setStartGame] = useState(true);

  const router = useRouter();



  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.content}>
            <h1>Calculator</h1>
            {startGame && (
              <div>
                <button className={styles["neon-btn"]} onClick={() => setStartGame(!startGame)}>
                  <span className={styles.span}></span>
                  <span className={styles.txt}>START GAME</span>
                </button>

                <button className={styles["neon-btn"]} onClick={handleClick}>
                  <span className={styles.span}></span>
                  <span className={styles.txt}>BACK TO LOUNGE</span>
                </button>
              </div>
            )}

            {!startGame && (
              <div>
                <snake />
              </div>
            )}

          </div>
          <p className={styles.bottomText}>Made by Marco Spina</p>
        </div>
      </div>
    </>
  );
};

export default Snake;