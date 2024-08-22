
import styles from './buttons.module.css'
function Buttons({onButtonClick}) {

    const buttons = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
    return (
        <div className={styles.buttonContainer}>
        {buttons.map((button, index) =>
         <button key={index} 
         onClick={()=>onButtonClick(button)} 
         className={styles.buttons}>{button}</button>)}
            
        </div>
    )
}

export default Buttons