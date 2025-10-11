// Components

//Styles
import InfoPage from '../../../Components/InfoPages/InfoPage';
import '../infoSection.css'

export default function InstitutionIPCA() {
    return (
        <InfoPage
            title="Instituto Politécnico do Cávado e do Ave"
            subtitle="Informações sobre a instituição, cursos e missão"
            lastUpdated="15 de Janeiro de 2024"
            readingTime="5 min"
            showBackButton={true}
            backUrl='/'
        >
            <div className="info-section highlight">
                <h2>Sobre o IPCA</h2>
                <p>
                    O Instituto Politécnico do Cávado e do Ave (IPCA) é uma instituição pública de ensino superior localizada em Barcelos, Portugal. Fundado com o objetivo de promover a educação tecnológica, científica e artística, o IPCA oferece cursos em diversas áreas, incluindo engenharia, gestão, saúde, comunicação e design.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Missão e Valores</h2>
                <p>
                    A missão do IPCA é formar profissionais competentes, inovadores e socialmente responsáveis, promovendo o desenvolvimento regional e nacional. Entre os seus valores destacam-se a excelência académica, a inovação, o espírito empreendedor e a ligação à comunidade.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Cursos e Oferta Educativa</h2>
                <p>
                    O IPCA disponibiliza uma ampla variedade de cursos de licenciatura, mestrado e pós-graduação, com forte componente prática e ligação ao mercado de trabalho. A instituição aposta também em programas de mobilidade internacional, estágios e projetos de investigação aplicada.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Infraestruturas e Serviços</h2>
                <p>
                    O campus do IPCA está equipado com laboratórios modernos, bibliotecas, centros de investigação, instalações desportivas e serviços de apoio ao estudante. Estes recursos visam proporcionar um ambiente propício à aprendizagem, à inovação e ao desenvolvimento pessoal e profissional.
                </p>
            </div>

            <div className="info-section warning">
                <h2>Contacto</h2>
                <p>
                    Para mais informações sobre o IPCA, cursos ou eventos, pode visitar o site oficial ou entrar em contacto através do email: <strong>geral@ipca.pt</strong>
                </p>
            </div>
        </InfoPage>
    );
}
