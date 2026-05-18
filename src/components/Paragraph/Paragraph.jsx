/* Paragraph.jsx */
import './Paragraph.module.css'

export function Paragraph({data, textSize, textHeigth}){
    return(
    <p className='paragraph' style={{fontSize:textSize, lineHeight:textHeigth}}>
        {data}
    </p>
    )
}