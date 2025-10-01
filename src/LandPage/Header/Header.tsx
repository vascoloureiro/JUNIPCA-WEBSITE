import { useNavigate } from 'react-router-dom';
import './header.css';

import { LuFacebook, LuInstagram, LuLinkedin, LuMenu, LuX } from 'react-icons/lu';
import SideBar from '../../SideBarMenu/SideBar';
import { useState } from 'react';

export default function HeaderLandPage() {

    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const navigate = useNavigate();

    const contentList = [
        'HOME',
        'ABOUT',
        'SERVICES',
        'TEAM',
    ];

    const footer = [
        {
            titleIcon: "Instagram",
            icon: <LuInstagram size={28} />
        },
        {
            titleIcon: "Linkden",
            icon: <LuLinkedin size={28} />
        },
        {
            titleIcon: "Facebook",
            icon: <LuFacebook size={28} />
        }
    ];

    const handleCloseSideBar = () => {
        setOpenSideBar(false);
    };


    const handleClick = (section: string) => {
        if (!document) return;
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

    }


    return (
        <>
            {openSideBar && (
                <>
                    <div
                        className="sidebar-overlay"
                        onClick={handleCloseSideBar}
                    />
                    <SideBar
                        content={contentList}
                        imgSource='/JUNIPCA_logo.png'
                        socialFooter={footer}
                        handleCloseSideBar={handleCloseSideBar}
                        handleClick={(content) => handleClick(content)}
                    />
                </>
            )}



            <div className="header-main-container">
                <div
                    className="left-header-container"
                    onClick={() => setOpenSideBar(true)}
                >
                    <img src="./JUNIPCA_logo.png" alt="JUNIPCA Logo" />
                </div>

                <div className="right-header-container">
                    <button
                        onClick={() => { handleClick('about') }}
                    >
                        About
                    </button>
                    <button
                        onClick={() => { handleClick('team') }}
                    >
                        Team
                    </button>
                </div>
            </div>
        </>
    );
}