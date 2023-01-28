package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoSobreEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoSobreEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoSobreEnum;
import br.com.possoler.api.api_posso_ler.site.model.BlocoSobre;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoSobreService {

    public void blocoSobreFactory(String idioma, ModelAndView modelAndView) {
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoSobre",
                BlocoSobre.builder()
                .labelSobrePossoLer(en_BlocoSobreEnum.LABEL_SOBRE_POSSOLER.getLabel())
                .label1(en_BlocoSobreEnum.LABEL_1.getLabel())
                .label2(en_BlocoSobreEnum.LABEL_2.getLabel())
                .label3(en_BlocoSobreEnum.LABEL_3.getLabel())
                .label4(en_BlocoSobreEnum.LABEL_4.getLabel())
                .label5(en_BlocoSobreEnum.LABEL_5.getLabel())
                .label6(en_BlocoSobreEnum.LABEL_6.getLabel())
                .label7(en_BlocoSobreEnum.LABEL_7.getLabel())
                .label8(en_BlocoSobreEnum.LABEL_8.getLabel())
                .label9(en_BlocoSobreEnum.LABEL_9.getLabel())
                .label10(en_BlocoSobreEnum.LABEL_10.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoSobre",
                BlocoSobre.builder()
                .labelSobrePossoLer(es_BlocoSobreEnum.LABEL_SOBRE_POSSOLER.getLabel())
                .label1(es_BlocoSobreEnum.LABEL_1.getLabel())
                .label2(es_BlocoSobreEnum.LABEL_2.getLabel())
                .label3(es_BlocoSobreEnum.LABEL_3.getLabel())
                .label4(es_BlocoSobreEnum.LABEL_4.getLabel())
                .label5(es_BlocoSobreEnum.LABEL_5.getLabel())
                .label6(es_BlocoSobreEnum.LABEL_6.getLabel())
                .label7(es_BlocoSobreEnum.LABEL_7.getLabel())
                .label8(es_BlocoSobreEnum.LABEL_8.getLabel())
                .label9(es_BlocoSobreEnum.LABEL_9.getLabel())
                .label10(es_BlocoSobreEnum.LABEL_10.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"blocoSobre",
            BlocoSobre.builder()
            .labelSobrePossoLer(br_BlocoSobreEnum.LABEL_SOBRE_POSSOLER.getLabel())
            .label1(br_BlocoSobreEnum.LABEL_1.getLabel())
            .label2(br_BlocoSobreEnum.LABEL_2.getLabel())
            .label3(br_BlocoSobreEnum.LABEL_3.getLabel())
            .label4(br_BlocoSobreEnum.LABEL_4.getLabel())
            .label5(br_BlocoSobreEnum.LABEL_5.getLabel())
            .label6(br_BlocoSobreEnum.LABEL_6.getLabel())
            .label7(br_BlocoSobreEnum.LABEL_7.getLabel())
            .label8(br_BlocoSobreEnum.LABEL_8.getLabel())
            .label9(br_BlocoSobreEnum.LABEL_9.getLabel())
            .label10(br_BlocoSobreEnum.LABEL_10.getLabel())
            .build()
        );
    }
}
