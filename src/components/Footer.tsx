import React from "react"; // Import React to use JSX syntax and create functional components
import styles from './Style.module.css'; // Import CSS module for scoped styling of the component

// Define a footer component  
const Footer: React.FC = () => {
    return (
        <>
        {/* Main container for the footer */}
        <div className={styles.footer}>
            <div className={styles.footer1}>
                <p>Comfort Wrapped in Luxury!</p>
                <hr></hr>
                <p>Experience Elegance</p>
            </div>
            <div className={styles.footer2}>
                <p>Branches</p>
                <ul className={styles.branch}>
                    <li>Paris</li>
                    <li>Italy</li>
                    <li>Greece</li>
                    <li>Belgium</li>
                    <li>India</li>
                </ul>
            </div>
            <div >
                <form className={styles.footer3}>
                <label>Register With Us Today</label><br></br>
                <input placeholder='Email'></input>
                <button>Send</button>
                </form>    
            </div>
        </div>
        </>
    )
}

export default Footer;