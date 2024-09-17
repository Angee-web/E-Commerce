import React, { useState } from 'react'; // Import React and the useState hook for managing component state
import styles from './Style.module.css'; // Import CSS module for styling the component
import jsonData from './links.json'; // Import JSON data containing navigation links

// Define the type for a link object
type Link = {
    label: string; // Label for the link (text to be displayed)
    href: string;  // URL to navigate to when the link is clicked
};

// Extract the links array from the imported JSON data
const navLinks: Link[] = jsonData.links;

// Define the Nav component as a functional React component
const Nav: React.FC = () => {
    // State to manage whether the dropdown menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the dropdown menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the boolean state value
    };

    return (
        <nav className={styles.navbar}> {/* Main navigation container */}
            <h2 className={styles.logo}> {/* Logo section */}
                Achats <span>.</span> de <span>.</span> Luxe {/* Logo text with a styled dot */}
            </h2>
            <div className={styles.linksContainer}> {/* Container for the menu button and dropdown */}
                <button 
                    className={styles.hamburger} 
                    onClick={toggleMenu} // Set up an onClick handler to toggle the menu
                >
                    &#9776; {/* Unicode character for hamburger icon - the three lines*/}
                </button>
                {isOpen && ( /* Conditionally render the dropdown if the menu is open */
                    <div className={styles.dropdown}> {/* Dropdown container */}
                        {navLinks.map((link) => ( /* Map through each link in navLinks array */
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className={styles.link} // Apply styling from CSS module
                            >
                                {link.label} {/* Link text */}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav; // Export the Nav component for use in other parts of the application
