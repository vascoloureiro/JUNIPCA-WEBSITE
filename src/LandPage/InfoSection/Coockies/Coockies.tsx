// Components

//Styles
import InfoPage from '../../../../Componentes/InfoPages/InfoPage';
import '../infoSection.css'

export default function Coockies() {
    return (
        <InfoPage
            title="Política de Cookies"
            subtitle="Como utilizamos cookies para melhorar a sua experiência"
            lastUpdated="15 de Janeiro de 2024"
            readingTime="5 min"
            showBackButton={true}
            backUrl='/'
        >
            <div className="info-section highlight">
                <h2>O que são cookies?</h2>
                <p>
                    Os cookies são pequenos ficheiros de texto que são colocados no seu dispositivo
                    quando visita o nosso website. Estes ficheiros ajudam-nos a fornecer-lhe uma
                    experiência personalizada e a melhorar os nossos serviços.
                </p>
            </div>

            <div className="info-section alter-highlight">
                <h2>Tipos de cookies que utilizamos</h2>
                <div>
                    <div>
                        <h4>Cookies Essenciais</h4>
                        <p>
                            Estes cookies são necessários para o funcionamento básico do website.
                            Incluem cookies de autenticação e preferências de segurança.
                        </p>
                    </div>

                    <div>
                        <h4>Cookies de Performance</h4>
                        <p>
                            Ajudam-nos a entender como os visitantes interagem com o nosso website,
                            fornecendo informações sobre as páginas mais visitadas e possíveis erros.
                        </p>
                    </div>

                    <div>
                        <h4>Cookies de Funcionalidade</h4>
                        <p>
                            Permitem que o website se lembre das suas escolhas e preferências para
                            oferecer funcionalidades melhoradas e mais personalizadas.
                        </p>
                    </div>

                    <div>
                        <h4>Cookies de Marketing</h4>
                        <p>
                            Utilizados para fornecer anúncios mais relevantes para si e para medir
                            a eficácia das nossas campanhas publicitárias.
                        </p>
                    </div>
                </div>
            </div>

            <div className="info-section highlight">
                <h2>Como gerir os seus cookies</h2>
                <p>
                    Pode controlar e/ou eliminar cookies conforme desejar. Para mais detalhes,
                    consulte aboutcookies.org. Pode eliminar todos os cookies que já estão no
                    seu computador e pode configurar a maioria dos navegadores para impedir que
                    sejam colocados.
                </p>
                <p>
                    No entanto, se fizer isso, pode ter que ajustar manualmente algumas preferências
                    sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.
                </p>
            </div>

            <div className="info-section highlight">
                <h2>Cookies de terceiros</h2>
                <p>
                    Em algumas ocasiões especiais, também utilizamos cookies fornecidos por terceiros
                    de confiança. Os seguintes detalhes da secção explicam quais cookies de terceiros
                    pode encontrar através deste site.
                </p>
                <ul>
                    <li>Google Analytics para análise de tráfego</li>
                    <li>Serviços de redes sociais para partilha de conteúdo</li>
                    <li>Sistemas de chat para suporte ao cliente</li>
                </ul>
            </div>

            <div className="info-section warning">
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