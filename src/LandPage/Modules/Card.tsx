import { ReactNode } from "react"

//Style
import './cards.css'

type Cards = {
    children: ReactNode
}

export default function Cards ({children} : Cards){

    return(<>
        <div>
            {children}

        </div>
    </>)
}