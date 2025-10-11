import { ElementType, ReactNode } from "react"

//Style
import './cards.css'
import { LuArrowRight } from "react-icons/lu";

type CardContent = {
    Icon: ElementType,
    highlight: string,
    title: string,
    description: string,
    OnClickBtn?: () => void;
}
export default function CardContent({
    Icon,
    highlight,
    title,
    description,
    OnClickBtn
}: CardContent) {

    return (<>
        <div className="custom-card group">
            <div className="icon-container">
                <Icon size={22} />
            </div>

            <div className="highlight-badge">
                {highlight}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            {/* <div className="more-info">
                <span>Saber mais</span>
                <LuArrowRight className="h-4 w-4" />
            </div> */}

        </div>

    </>)
}