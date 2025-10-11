//Styles
import InfoPage from '../../../Components/InfoPages/InfoPage';
import '../infoSection.css'

export default function PoliticasJUNIPCA() {
    return (
        <InfoPage
            title="Políticas de Suporte da JUNIPCA"
            subtitle="Compromisso com a qualidade e acompanhamento contínuo"
            lastUpdated="11 de Outubro de 2025"
            readingTime="4 min"
            showBackButton={true}
            backUrl='/'
        >
            <div className="info-section highlight">
                <h2>Sobre o Suporte da JUNIPCA</h2>
                <p>
                    A JUNIPCA valoriza o relacionamento com parceiros, clientes e membros, garantindo um suporte técnico e administrativo eficiente. As nossas políticas de suporte visam assegurar transparência, rapidez e qualidade em todas as interações, promovendo a confiança e a satisfação mútua.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Objetivos do Suporte</h2>
                <p>
                    O principal objetivo do suporte da JUNIPCA é oferecer assistência contínua durante todas as fases dos projetos — desde o planeamento até à entrega final. Buscamos resolver problemas de forma proativa, manter uma comunicação clara e garantir que todas as expectativas sejam cumpridas.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Tipos de Suporte Oferecidos</h2>
                <p>
                    A JUNIPCA disponibiliza diferentes níveis de suporte:
                </p>
                <ul>
                    <li><strong>Suporte Técnico:</strong> Assistência em questões relacionadas a software, hardware e desenvolvimento de soluções digitais.</li>
                    <li><strong>Suporte Operacional:</strong> Acompanhamento de projetos e garantia de cumprimento de prazos e entregas.</li>
                    <li><strong>Suporte Académico:</strong> Orientação aos membros sobre boas práticas, ferramentas e metodologias aplicadas nos projetos.</li>
                </ul>
            </div>

            <div className="info-section alter-highlight">
                <h2>Tempo de Resposta</h2>
                <p>
                    Comprometemo-nos a responder a solicitações de suporte no prazo máximo de <strong>48 horas úteis</strong>. Casos urgentes ou críticos são tratados com prioridade, garantindo uma resolução rápida e eficaz.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Comunicação e Canais Oficiais</h2>
                <p>
                    Todo o suporte oficial da JUNIPCA é realizado através dos canais autorizados, como o e-mail institucional e as plataformas de gestão de projetos. Isso assegura rastreabilidade, organização e maior eficiência no acompanhamento das solicitações.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Melhoria Contínua</h2>
                <p>
                    A JUNIPCA adota uma política de melhoria contínua no suporte, recolhendo feedbacks dos clientes e membros para otimizar processos e ferramentas. O nosso compromisso é evoluir constantemente para garantir um serviço cada vez mais ágil, transparente e eficaz.
                </p>
            </div>
        </InfoPage>
    );
}
