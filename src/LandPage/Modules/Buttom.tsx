import { ReactNode } from "react"

import './buttonCustom.css'

type ButtonCustom = {
    classBtn?: string
    btnTitle: string
    iconBtn?: ReactNode,
    onClickBtn?: () =>void;
}
export default function ButtonCustom({
    classBtn,
    btnTitle,
    iconBtn,
    onClickBtn
}: ButtonCustom) {

    return (<>
        <button
            className={`default-btn-style ${classBtn ?? ''}`}
            onClick={onClickBtn}
        >
            {btnTitle}
            {iconBtn && iconBtn}
        </button>
    </>)
}