import classes from './MainButton.module.css';

export default function MainButton({ textContent, width }) {
    return (
        <button className={classes.checkout} style={width ? { width } : {}}>{textContent}</button>
    )
}