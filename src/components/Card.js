import { border } from "@mui/system";
import React from "react";

const Card = ({ title, paragraph, image, onRemove}) => {
    return(
        <div style={styles.cardContainer}>
            <div style={styles.removeButton} onClick={onRemove}>x</div>
            
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <p>Mon, 21 Dec 2020 14:57</p>
            <img src={image} alt={title} style={styles.image}/>
        </div>
    );
};

const styles = {
    cardContainer:{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        position: 'relative',
        width: '250px',
        textAlign: 'center',
        margin: '16px',
        background: 'white'
    },
    image:{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    removeButton: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        cursor: 'pointer',
        color: 'red',
        borderRadius: '50%',
        padding: '2px 8px',
        fontSize: '20px',
        border: 'none',
    }
};


export default Card;