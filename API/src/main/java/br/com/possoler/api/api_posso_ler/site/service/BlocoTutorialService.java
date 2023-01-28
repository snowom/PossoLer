package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoTutorialEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoTutorialEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoTutorialEnum;
import br.com.possoler.api.api_posso_ler.site.model.BlocoTutorial;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoTutorialService {

    public void blocoTutorialFactory(String idioma, ModelAndView modelAndView) {

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoTutorial",
                BlocoTutorial.builder()
                .tituloBlocoTutorial(en_BlocoTutorialEnum.TITULO_BLOCO_TUTORIAL.getLabel())
                .label1(en_BlocoTutorialEnum.LABEL_1.getLabel())
                .label2(en_BlocoTutorialEnum.LABEL_2.getLabel())
                .label3(en_BlocoTutorialEnum.LABEL_3.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoTutorial",
                BlocoTutorial.builder()
                .tituloBlocoTutorial(es_BlocoTutorialEnum.TITULO_BLOCO_TUTORIAL.getLabel())
                .label1(es_BlocoTutorialEnum.LABEL_1.getLabel())
                .label2(es_BlocoTutorialEnum.LABEL_2.getLabel())
                .label3(es_BlocoTutorialEnum.LABEL_3.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"blocoTutorial",
            BlocoTutorial.builder()
            .tituloBlocoTutorial(br_BlocoTutorialEnum.TITULO_BLOCO_TUTORIAL.getLabel())
            .label1(br_BlocoTutorialEnum.LABEL_1.getLabel())
            .label2(br_BlocoTutorialEnum.LABEL_2.getLabel())
            .label3(br_BlocoTutorialEnum.LABEL_3.getLabel())
            .build()
        );
    }
}
