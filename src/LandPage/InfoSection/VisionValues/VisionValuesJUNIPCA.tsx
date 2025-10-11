//Styles
import InfoPage from '../../../Components/InfoPages/InfoPage';
import '../infoSection.css'

export default function VisionValuesJUNIPCA() {
    return (
        <InfoPage
            title="Missão da JUNIPCA"
            subtitle="A Junior Empresa do Instituto Politécnico do Cávado e do Ave"
            lastUpdated="11 de Outubro de 2025"
            readingTime="4 min"
            showBackButton={true}
            backUrl='/'
        >
            <div className="info-section highlight">
                <h2>Sobre a JUNIPCA</h2>
                <p>
                    A JUNIPCA é a Junior Empresa do Instituto Politécnico do Cávado e do Ave, formada por estudantes empreendedores que combinam conhecimento académico com experiência prática no mercado. Atuamos como ponte entre a academia e o mundo empresarial, oferecendo soluções inovadoras em diversas áreas, desde tecnologia e engenharia até gestão e consultoria.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Missão</h2>
                <p>
                    Nossa missão é desenvolver projetos de qualidade que contribuam para o crescimento das organizações, enquanto preparamos os nossos membros para os desafios do futuro profissional. Através da prática e do trabalho em equipa, promovemos o espírito empreendedor e a formação de profissionais competentes e inovadores.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Áreas de Atuação</h2>
                <p>
                    A JUNIPCA atua em múltiplas áreas, incluindo tecnologia, engenharia, gestão, marketing e consultoria. Os projetos são desenvolvidos sob a supervisão de estudantes qualificados, garantindo soluções criativas, eficientes e alinhadas com as necessidades do mercado.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Benefícios para os Membros</h2>
                <p>
                    Ser membro da JUNIPCA permite ganhar experiência prática, desenvolver competências profissionais e fortalecer o networking com empresas reais. Esta experiência prepara os estudantes para enfrentar desafios no mundo empresarial com confiança e criatividade.
                </p>
            </div>
        </InfoPage>
    );
}
