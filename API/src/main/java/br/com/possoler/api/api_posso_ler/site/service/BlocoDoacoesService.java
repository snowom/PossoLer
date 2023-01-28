package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoDoacoesEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoDoacoesEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoDoacoesEnum;
import br.com.possoler.api.api_posso_ler.site.model.BlocoDoacoes;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoDoacoesService {

    public void blocoDoacoesFactory(String idioma, ModelAndView modelAndView) {
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoDoacoes",
                BlocoDoacoes.builder()
                .tituloBlocoDoacoes(en_BlocoDoacoesEnum.TITULO_BLOCO_DOACOES.getLabel())
                .label1(en_BlocoDoacoesEnum.LABEL_1.getLabel())
                .label2(en_BlocoDoacoesEnum.LABEL_2.getLabel())
                .label3(en_BlocoDoacoesEnum.LABEL_3.getLabel())
                .label4(en_BlocoDoacoesEnum.LABEL_4.getLabel())
                .label5(en_BlocoDoacoesEnum.LABEL_5.getLabel())
                .label6(en_BlocoDoacoesEnum.LABEL_6.getLabel())
                .label7(en_BlocoDoacoesEnum.LABEL_7.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoDoacoes",
                BlocoDoacoes.builder()
                .tituloBlocoDoacoes(es_BlocoDoacoesEnum.TITULO_BLOCO_DOACOES.getLabel())
                .label1(es_BlocoDoacoesEnum.LABEL_1.getLabel())
                .label2(es_BlocoDoacoesEnum.LABEL_2.getLabel())
                .label3(es_BlocoDoacoesEnum.LABEL_3.getLabel())
                .label4(es_BlocoDoacoesEnum.LABEL_4.getLabel())
                .label5(es_BlocoDoacoesEnum.LABEL_5.getLabel())
                .label6(es_BlocoDoacoesEnum.LABEL_6.getLabel())
                .label7(es_BlocoDoacoesEnum.LABEL_7.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"blocoDoacoes",
            BlocoDoacoes.builder()
            .tituloBlocoDoacoes(br_BlocoDoacoesEnum.TITULO_BLOCO_DOACOES.getLabel())
            .label1(br_BlocoDoacoesEnum.LABEL_1.getLabel())
            .label2(br_BlocoDoacoesEnum.LABEL_2.getLabel())
            .label3(br_BlocoDoacoesEnum.LABEL_3.getLabel())
            .label4(br_BlocoDoacoesEnum.LABEL_4.getLabel())
            .label5(br_BlocoDoacoesEnum.LABEL_5.getLabel())
            .label6(br_BlocoDoacoesEnum.LABEL_6.getLabel())
            .label7(br_BlocoDoacoesEnum.LABEL_7.getLabel())
            .build()
        );
    }
}
