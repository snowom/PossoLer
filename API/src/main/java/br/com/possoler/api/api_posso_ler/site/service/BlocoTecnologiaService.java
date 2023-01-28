package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoTecnologiasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoTecnologiasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoTecnologiasEnum;
import br.com.possoler.api.api_posso_ler.site.model.BlocoTecnologia;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoTecnologiaService {

    public void blocoTecnologiaFactory(String idioma, ModelAndView modelAndView) {
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoTecnologias",
                BlocoTecnologia.builder()
                .labelTecnologiasUsadas(en_BlocoTecnologiasEnum.LABEL_TECNOLOGIAS_USADAS.getLabel())
                .label1(en_BlocoTecnologiasEnum.LABEL_1.getLabel())
                .label2(en_BlocoTecnologiasEnum.LABEL_2.getLabel())
                .label3(en_BlocoTecnologiasEnum.LABEL_3.getLabel())
                .label4(en_BlocoTecnologiasEnum.LABEL_4.getLabel())
                .label5(en_BlocoTecnologiasEnum.LABEL_5.getLabel())
                .label6(en_BlocoTecnologiasEnum.LABEL_6.getLabel())
                .label7(en_BlocoTecnologiasEnum.LABEL_7.getLabel())
                .label8(en_BlocoTecnologiasEnum.LABEL_8.getLabel())
                .label9(en_BlocoTecnologiasEnum.LABEL_9.getLabel())
                .label10(en_BlocoTecnologiasEnum.LABEL_10.getLabel())
                .label11(en_BlocoTecnologiasEnum.LABEL_11.getLabel())
                .label12(en_BlocoTecnologiasEnum.LABEL_12.getLabel())
                .label13(en_BlocoTecnologiasEnum.LABEL_13.getLabel())
                .label14(en_BlocoTecnologiasEnum.LABEL_14.getLabel())
                .label15(en_BlocoTecnologiasEnum.LABEL_15.getLabel())
                .label16(en_BlocoTecnologiasEnum.LABEL_16.getLabel())
                .label17(en_BlocoTecnologiasEnum.LABEL_17.getLabel())
                .label18(en_BlocoTecnologiasEnum.LABEL_18.getLabel())
                .label19(en_BlocoTecnologiasEnum.LABEL_19.getLabel())
                .label20(en_BlocoTecnologiasEnum.LABEL_20.getLabel())
                .label21(en_BlocoTecnologiasEnum.LABEL_21.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoTecnologias",
                BlocoTecnologia.builder()
                .labelTecnologiasUsadas(es_BlocoTecnologiasEnum.LABEL_TECNOLOGIAS_USADAS.getLabel())
                .label1(es_BlocoTecnologiasEnum.LABEL_1.getLabel())
                .label2(es_BlocoTecnologiasEnum.LABEL_2.getLabel())
                .label3(es_BlocoTecnologiasEnum.LABEL_3.getLabel())
                .label4(es_BlocoTecnologiasEnum.LABEL_4.getLabel())
                .label5(es_BlocoTecnologiasEnum.LABEL_5.getLabel())
                .label6(es_BlocoTecnologiasEnum.LABEL_6.getLabel())
                .label7(es_BlocoTecnologiasEnum.LABEL_7.getLabel())
                .label8(es_BlocoTecnologiasEnum.LABEL_8.getLabel())
                .label9(es_BlocoTecnologiasEnum.LABEL_9.getLabel())
                .label10(es_BlocoTecnologiasEnum.LABEL_10.getLabel())
                .label11(es_BlocoTecnologiasEnum.LABEL_11.getLabel())
                .label12(es_BlocoTecnologiasEnum.LABEL_12.getLabel())
                .label13(es_BlocoTecnologiasEnum.LABEL_13.getLabel())
                .label14(es_BlocoTecnologiasEnum.LABEL_14.getLabel())
                .label15(es_BlocoTecnologiasEnum.LABEL_15.getLabel())
                .label16(es_BlocoTecnologiasEnum.LABEL_16.getLabel())
                .label17(es_BlocoTecnologiasEnum.LABEL_17.getLabel())
                .label18(es_BlocoTecnologiasEnum.LABEL_18.getLabel())
                .label19(es_BlocoTecnologiasEnum.LABEL_19.getLabel())
                .label20(es_BlocoTecnologiasEnum.LABEL_20.getLabel())
                .label21(es_BlocoTecnologiasEnum.LABEL_21.getLabel())
                .build());
            return;
        }
        modelAndView.addObject(
"blocoTecnologias",
            BlocoTecnologia.builder()
            .labelTecnologiasUsadas(br_BlocoTecnologiasEnum.LABEL_TECNOLOGIAS_USADAS.getLabel())
            .label1(br_BlocoTecnologiasEnum.LABEL_1.getLabel())
            .label2(br_BlocoTecnologiasEnum.LABEL_2.getLabel())
            .label3(br_BlocoTecnologiasEnum.LABEL_3.getLabel())
            .label4(br_BlocoTecnologiasEnum.LABEL_4.getLabel())
            .label5(br_BlocoTecnologiasEnum.LABEL_5.getLabel())
            .label6(br_BlocoTecnologiasEnum.LABEL_6.getLabel())
            .label7(br_BlocoTecnologiasEnum.LABEL_7.getLabel())
            .label8(br_BlocoTecnologiasEnum.LABEL_8.getLabel())
            .label9(br_BlocoTecnologiasEnum.LABEL_9.getLabel())
            .label10(br_BlocoTecnologiasEnum.LABEL_10.getLabel())
            .label11(br_BlocoTecnologiasEnum.LABEL_11.getLabel())
            .label12(br_BlocoTecnologiasEnum.LABEL_12.getLabel())
            .label13(br_BlocoTecnologiasEnum.LABEL_13.getLabel())
            .label14(br_BlocoTecnologiasEnum.LABEL_14.getLabel())
            .label15(br_BlocoTecnologiasEnum.LABEL_15.getLabel())
            .label16(br_BlocoTecnologiasEnum.LABEL_16.getLabel())
            .label17(br_BlocoTecnologiasEnum.LABEL_17.getLabel())
            .label18(br_BlocoTecnologiasEnum.LABEL_18.getLabel())
            .label19(br_BlocoTecnologiasEnum.LABEL_19.getLabel())
            .label20(br_BlocoTecnologiasEnum.LABEL_20.getLabel())
            .label21(br_BlocoTecnologiasEnum.LABEL_21.getLabel())
            .build()
        );
    }
}
