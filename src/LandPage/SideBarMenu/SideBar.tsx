import { LuX } from "react-icons/lu";
import './sidebar.css'

type SocialType = {
    icon: React.ReactNode;
    titleIcon:string;
}

type SideBarType = {
    content: string[];
    imgSource: string;
    socialFooter: SocialType[];
    handleClick?: (index: any) => void;
    handleCloseSideBar: () => void;
}


export default function SideBar({
    content,
    imgSource,
    handleClick,
    handleCloseSideBar,

    socialFooter,
}: SideBarType) {


    
    return (<>
        <div className="sidebar-wrapper">
            <div className='sidebar-header'>
                <img src={imgSource} />
                <button
                    onClick={() => {handleCloseSideBar()}}
                >
                    <LuX size={18} />
                </button>
                
            </div>
            <div className="sidebar-content">
                {content.map((content, index) => (
                    <>

                        <button
                            key={index}
                            onClick={() => handleClick && handleClick(content)}

                        >
                            {content}
                            <p>{index}</p>
                        </button>
                        
                    </>
                ))}
            </div>

            <div className="sidebar-footer">
                {socialFooter.map((content, index) => (
                    <div
                        key={index}
                    >
                        <p>{content.titleIcon}</p>
                        <button>
                            {content.icon}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>)
}