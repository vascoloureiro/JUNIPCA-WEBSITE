// Components

//Styles
import InfoPage from '../../../../Componentes/InfoPages/InfoPage';
import '../infoSection.css'

export default function AboutUs() {
    return (
        <InfoPage
            title="Sobre Nós"
            subtitle="Conheça a nossa missão, visão e valores"
            readingTime="5 min"
            showBackButton={true}
            backUrl='/'
        >
            <div className="info-section highlight">
                <h2>A nossa missão?</h2>
                <p>
                    Capacitar empresas e organizações através de soluções tecnológicas 
                    inovadoras que simplificam processos complexos e promovem o crescimento 
                    sustentável.
                    Acreditamos que a tecnologia deve servir as pessoas, não o contrário.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>A nossa história</h2>
                <p>
                    Fundada em 2020, a nossa empresa nasceu da visão de criar soluções que realmente fazem a diferença na vida das pessoas e no sucesso dos negócios. Começámos como uma pequena equipa de desenvolvedores apaixonados e crescemos para uma empresa que serve centenas de clientes em todo o mundo.
                    Desde o início, mantivemos o foco na qualidade, inovação e atendimento ao cliente excecional. 
                    Cada projeto é uma oportunidade de aprender, crescer e criar algo verdadeiramente valioso.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>A nossa equipa</h2>
                <p>
                    Somos uma equipa diversificada de profissionais talentosos, unidos pela paixão por criar soluções que importam. 
                    Desde designers e desenvolvedores até especialistas em marketing e atendimento ao cliente, cada membro contribui com a sua expertise única.
                </p>
                <p>
                  Acreditamos no poder da colaboração e na importância de manter uma cultura inclusiva onde todas as vozes são ouvidas e valorizadas.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Responsabilidade social</h2>
                <p>
                   Estamos comprometidos em fazer a diferença na comunidade. Participamos ativamente em iniciativas de responsabilidade social, apoiamos organizações sem fins lucrativos e promovemos práticas sustentáveis em todas as nossas operações.
                </p>
                <p>
                    Acreditamos que o sucesso empresarial deve andar de mãos dadas com o impacto positivo na sociedade e no meio ambiente.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Contacto</h2>
                <p>
                    Se tiver alguma dúvida sobre esta política de cookies, pode contactar-nos
                    através do email: <strong>privacy@exemplo.com</strong>
                </p>
                <p>
                    Esta política pode ser atualizada periodicamente para refletir mudanças
                    nas nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
                </p>
            </div>
        </InfoPage>
    );
}