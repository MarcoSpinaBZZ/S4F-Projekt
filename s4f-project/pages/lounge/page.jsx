import Image from 'next/image';
import styles from "./lounge.module.css";
import {useRouter} from 'next/router';

const Lounge = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const router = useRouter();

  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <h1>Welcome to the Lounge!</h1>
          <p>Here you can relax and play games</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleClick}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Snake.png"
                  alt="Button Image"
                  width={300}
                  height={300}
                  onClick={() => router.push('/snake/page')}
                />
              </div>
            </button>
            <button className={styles.button} onClick={handleClick}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Tetris.png"
                  alt="Button Image"
                  width={300}
                  height={300}
                  onClick={() => router.push('/tetris/page')}
                />
              </div>
            </button>
            <button className={styles.button} onClick={handleClick}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Tic-Tac-Toe.png"
                  alt="Button Image"
                  width={300}
                  height={300}
                  onClick={() => router.push('/tic-tac-toe/page')}
                />
              </div>
            </button>
            <button className={styles.button} onClick={handleClick}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Calculator.png"
                  alt="Button Image"
                  width={300}
                  height={300}
                  onClick={() => router.push('/calculator/page')}
                />
              </div>
            </button>
          </div>
          <p className={styles.bottomText}>Made by Marco Spina</p>
        </div>
      </div>
    </>
  );
};

export default Lounge;