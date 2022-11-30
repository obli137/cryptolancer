import React from 'react';

// Este es el Slide unitario del Slider
// NO MODIFICAR - Para cambiar las imanges del Slider, ir al componente DECK
function Card(props) {
    return (
        <div style={styles.card} id={props.id}>
            <img style={styles.card_img} src={props.picsum} alt="ok"/> 
            <div style={{backgroundColor:"rgba(7, 9, 40, 1)", position:"absolute", width:"100vw", height:"100vh", top:"0", left:"0", zIndex:"10000", opacity:"0.4"}} />
            
            
        </div>
    )
}

const styles = {
    card: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card_img: {
        width: '100%',
        height: '100%',
        position: 'relative',
        objectFit: 'cover',
        opacity: '0.5',
        transform: 'translateY(-50%, -50%)',
    }
}

export default React.memo(Card);





