import { useNavigate } from 'react-router-dom';
import './header.css';

import { LuFacebook, LuInstagram, LuLinkedin, LuMenu } from 'react-icons/lu';
import SideBar from '../SideBarMenu/SideBar';
import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

export default function HeaderLandPage() {

    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const navigate = useNavigate();

    const contentList = [
        'HOME',
        'ABOUT',
        'SERVICES'
    ];

    const footer = [
        {
            titleIcon: "Instagram",
            icon: <LuInstagram size={28} />,
            handleSocialClick: () => {window.open("https://www.instagram.com/junipca.je/", "_blank")}
        },
        {
            titleIcon: "Linkden",
            icon: <FaLinkedinIn size={28} />,
            handleSocialClick: () => {window.open("https://www.linkedin.com/in/junipca-j%C3%BAnior-iniciativa-ipca-7b6006387/", "_blank")}
        },
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
                   {/*  <img src="./JUNIPCA_logo-white.png" alt="JUNIPCA Logo" /> */}
                   <LuMenu size={18} color="white" />
                </div>

                <div className="right-header-container">
                    <button
                        onClick={() => { handleClick('about') }}
                    >
                        About
                    </button>
                    <button
                        onClick={() => { handleClick('services') }}
                    >
                        Serviços
                    </button>
                </div>
            </div>
        </>
    );
}