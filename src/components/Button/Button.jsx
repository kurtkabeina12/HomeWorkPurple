/* Button.jsx */
import './Button.module.css'

export function Button({ text }) {

    return (
        <button className='button'>
            {text}
        </button>
    )
}