/* Button.jsx */
import './Button.css'

export function Button({ text }) {

    const clicked = () => {
        console.log('clicked')
    }

    return (
        <button onClick={clicked} className='button'>
            {text}
        </button>
    )
}