
import styles from "./Button.module.css"

export function Button({ label, onClick }) {


    return (<>

        <div data-testId="button" onClick={onClick} className="btn btn-outline-primary">
            {label}
        </div>
    </>)
}