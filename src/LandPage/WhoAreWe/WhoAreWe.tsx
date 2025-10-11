import React from 'react';
import './whoAreWe.css';
export default function WhoAreWe() {
    return (
        <>
        <section 
            id='about'
            className="junipca-section">
                <div className="junipca-container">
                    <div className="junipca-content-wrapper">
                        <div className="junipca-text-side">
                            <div className="junipca-header">
                                <h2>JUNIPCA</h2>
                                <span className="junipca-subtitle">Junior Empresa do IPCA</span>
                            </div>
                            
                            <div className="junipca-description">
                                <p>
                                    A JUNIPCA é a Junior Empresa do Instituto Politécnico do Cávado e do Ave, 
                                    formada por estudantes empreendedores que combinam conhecimento académico 
                                    com experiência prática no mercado.
                                </p>
                                
                                <p>
                                    Atuamos como ponte entre a academia e o mundo empresarial, oferecendo 
                                    soluções inovadoras em diversas áreas, desde tecnologia e engenharia até 
                                    gestão e consultoria.
                                </p>

                                <p>
                                     Nossa missão é desenvolver projetos de qualidade 
                                    que contribuam para o crescimento das organizações, enquanto preparamos 
                                    os nossos membros para os desafios do futuro profissional.
                                </p>
                            </div>
                        </div>

                        <div className="junipca-image-side">
                            {/* Substitua 'caminho-da-sua-imagem.jpg' pelo caminho real da imagem */}
                            <img src="./IPCA.png" alt="JUNIPCA Team" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}