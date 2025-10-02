import { LuArrowLeft, LuCalendar, LuClock } from 'react-icons/lu';
import './infoPages.css'; // adicione essa linha no topo
import { ReactNode } from 'react';

type InfoPageProps = {
    title?: string,
    subtitle?: string,
    lastUpdated?: string,
    readingTime?: string,
    showBackButton?: boolean,
    backUrl?: string;
    children: ReactNode
}

export default function InfoPage({ 
    title,
    subtitle,
    lastUpdated,
    readingTime,
    showBackButton,
    backUrl,
    children

}: InfoPageProps) {
    return (
        <div className="info-page">
            <div className="container">
                {showBackButton && (
                    <div className="back-button">
                        <a href={backUrl}>
                            <LuArrowLeft className="icon" />
                            Voltar
                        </a>
                    </div>
                )}

                <div className="card">
                    <div className="card-header">
                        <h1>{title}</h1>
                        {subtitle && <p>{subtitle}</p>}

                        {(lastUpdated || readingTime) && (
                            <div className="card-meta">
                                {lastUpdated && (
                                    <div>
                                        <LuCalendar className="icon" />
                                        <span>Última atualização: {lastUpdated}</span>
                                    </div>
                                )}
                                {readingTime && (
                                    <div>
                                        <LuClock className="icon" />
                                        <span>Tempo de leitura: {readingTime}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="card-content">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


