import Image from 'next/image';
import styles from "./lounge.module.css"



const Lounge = () => {
    return (
        <>
        <div className={styles.test}>
            <h1>Welcome to the Lounge!</h1>
            <Image src="/lounge.jpg" width={500} height={500} />
        </div>
        </>
    );
}

export default Lounge;