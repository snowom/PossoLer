function setResizedMenu()
{
    try{
        let currentWidth = window.innerWidth;
        let containerPublicacoes = document.getElementById("containerPublicacoes");

        if(currentWidth>=540 && currentWidth<992){
            containerPublicacoes.innerHTML = 
            `<div class="row mt-4">
                <div class="col-6 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.folha.uol.com.br/'><em>Folha de São Paulo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.estadao.com.br/'><em>Estadão</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.gazetadopovo.com.br/'><em>Gazeta do Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://oglobo.globo.com/'><em>O Globo</em></a></li>
                            <li class='lead'><a class='link-texto' class='link-texto' target='_blank' href='https://super.abril.com.br/'><em>Super Interessante</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://quatrorodas.abril.com.br/'><em>Quatro Rodas</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://veja.abril.com.br/'><em>Veja</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.respondeai.com.br/'><em>Responde Ai</em></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://exame.com/'><em>Exame</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://epoca.globo.com/'><em>Revista Época</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://epocanegocios.globo.com/'><em>Revista Época Negocios</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistagalileu.globo.com/'><em>Revista Galileu</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistamarieclaire.globo.com/'><em>Revista Marie Claire</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistagloborural.globo.com/'><em>Revista Globo Rural</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistapegn.globo.com/'><em>P. Empresas & G. Negócios</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jota.info/'><em>JOTA</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.nsctotal.com.br/'><em>NSC Total</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.nytimes.com/'><em>New York Times</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://brasil.elpais.com/'><em>El País</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornalvs.com.br/'><em>Jornal VS</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://valor.globo.com/'><em>Valor Econômico</em></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://gauchazh.clicrbs.com.br/'><em>GaúchaZH</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornaldocomercio.com/'><em>Jornal do Comércio</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.economist.com/'><em>The Economist</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.opopular.com.br/'><em>O Popular</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://diariosm.com.br/'><em>Diário de Santa Maria</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.otempo.com.br/'><em>O Tempo - Minas Gerais</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistaglamour.globo.com/'><em>Revista Glamour</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://invest.exame.com/'><em>Exame Invest</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://degraoemgrao.blogfolha.uol.com.br/'><em>De Grão em Grão</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://jc.ne10.uol.com.br/'><em>Jornal do Commercio</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://opovo.com.br/'><em>Jornal O Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.correio24horas.com.br/'><em>Jornal Correio 24 Horas</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornalnh.com.br/'><em>Jornal NH</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.atribuna.com.br/'><em>A Tribuna - Santos</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.umdoisesportes.com.br/'><em>Um Dois Esportes</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.correiodopovo.com.br/'><em>Correio do Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistacasaejardim.globo.com/'><em>Revista Casa e Jardim</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://saude.abril.com.br/'><em>Veja Saúde</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.gaz.com.br/'><em>GAZ - Gazeta Sta. Cruz do Sul</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.semprefamilia.com.br/'><em>Sempre Família</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://tab.uol.com.br/'><em>Tab Uol</em></a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
        } else {
            containerPublicacoes.innerHTML = 
            `<div class="row mt-4">
                <div class="col-12 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.folha.uol.com.br/'><em>Folha de São Paulo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.estadao.com.br/'><em>Estadão</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.gazetadopovo.com.br/'><em>Gazeta do Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://oglobo.globo.com/'><em>O Globo</em></a></li>
                            <li class='lead'><a class='link-texto' class='link-texto' target='_blank' href='https://super.abril.com.br/'><em>Super Interessante</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://quatrorodas.abril.com.br/'><em>Quatro Rodas</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://veja.abril.com.br/'><em>Veja</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.respondeai.com.br/'><em>Responde Ai</em></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://exame.com/'><em>Exame</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://epoca.globo.com/'><em>Revista Época</em></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://epocanegocios.globo.com/'><em>Revista Época Negocios</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistagalileu.globo.com/'><em>Revista Galileu</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistamarieclaire.globo.com/'><em>Revista Marie Claire</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistagloborural.globo.com/'><em>Revista Globo Rural</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistapegn.globo.com/'><em>P. Empresas & G. Negócios</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jota.info/'><em>JOTA</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.nsctotal.com.br/'><em>NSC Total</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.nytimes.com/'><em>New York Times</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://brasil.elpais.com/'><em>El País</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornalvs.com.br/'><em>Jornal VS</em></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://valor.globo.com/'><em>Valor Econômico</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://gauchazh.clicrbs.com.br/'><em>GaúchaZH</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornaldocomercio.com/'><em>Jornal do Comércio</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.economist.com/'><em>The Economist</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.opopular.com.br/'><em>O Popular</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://diariosm.com.br/'><em>Diário de Santa Maria</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.otempo.com.br/'><em>O Tempo - Minas Gerais</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistaglamour.globo.com/'><em>Revista Glamour</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://invest.exame.com/'><em>Exame Invest</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://degraoemgrao.blogfolha.uol.com.br/'><em>De Grão em Grão</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://jc.ne10.uol.com.br/'><em>Jornal do Commercio</em></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div>
                        <ul style='display: inline-block !important;'>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://opovo.com.br/'><em>Jornal O Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.correio24horas.com.br/'><em>Jornal Correio 24 Horas</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.jornalnh.com.br/'><em>Jornal NH</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.atribuna.com.br/'><em>A Tribuna - Santos</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.umdoisesportes.com.br/'><em>Um Dois Esportes</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.correiodopovo.com.br/'><em>Correio do Povo</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://revistacasaejardim.globo.com/'><em>Revista Casa e Jardim</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://saude.abril.com.br/'><em>Veja Saúde</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.gaz.com.br/'><em>GAZ - Gazeta Sta. Cruz do Sul</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://www.semprefamilia.com.br/'><em>Sempre Família</em></a></li>
                            <li class='lead'><a class='link-texto' target='_blank' href='https://tab.uol.com.br/'><em>Tab Uol</em></a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
        }
    }catch(erro){
        console.error("Erro ao pegar largura da tela!!!");
    }
}

window.addEventListener('resize', ()=>{
    setResizedMenu();
});

window.addEventListener('load', ()=>{
    setResizedMenu();
});