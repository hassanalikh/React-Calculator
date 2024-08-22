import styles from './Input.module.css'
function Input({displayVal}) {
    return (
        
            <input type='text' className={styles.display} 
                value={displayVal}
                readOnly
            />
        )
}

export default Input