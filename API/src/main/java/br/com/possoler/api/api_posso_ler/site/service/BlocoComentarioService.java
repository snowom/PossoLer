package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoComentarioEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoComentarioEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoComentarioEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import br.com.possoler.api.api_posso_ler.site.model.BlocoComentario;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoComentarioService implements PreventNullLanguage {

    public void blocoComentarioFactory(String idioma, ModelAndView modelAndView) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoComentario",
                BlocoComentario.builder()
                .tituloBlocoComentario(en_BlocoComentarioEnum.TITULO_BLOCO_COMENTARIO.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoComentario",
                BlocoComentario.builder()
                .tituloBlocoComentario(es_BlocoComentarioEnum.TITULO_BLOCO_COMENTARIO.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"blocoComentario",
            BlocoComentario.builder()
            .tituloBlocoComentario(br_BlocoComentarioEnum.TITULO_BLOCO_COMENTARIO.getLabel())
            .build()
        );
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
