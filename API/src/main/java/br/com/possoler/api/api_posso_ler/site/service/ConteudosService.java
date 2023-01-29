package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_ConteudosEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_ConteudosEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_ConteudosEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import br.com.possoler.api.api_posso_ler.site.model.Conteudos;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class ConteudosService implements PreventNullLanguage {

    public void conteudoFactory(String idioma, ModelAndView modelAndView) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "conteudos",
                Conteudos.builder()
                .labelQuantidadeConteudos(en_ConteudosEnum.LABEL_QUANTIDADE_CONTEUDOS.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "conteudos",
                Conteudos.builder()
                .labelQuantidadeConteudos(es_ConteudosEnum.LABEL_QUANTIDADE_CONTEUDOS.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"conteudos",
            Conteudos.builder()
            .labelQuantidadeConteudos(br_ConteudosEnum.LABEL_QUANTIDADE_CONTEUDOS.getLabel())
            .build()
        );
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
