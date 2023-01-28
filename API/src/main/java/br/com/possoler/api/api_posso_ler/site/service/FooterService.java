package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_FooterEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_FooterEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_FooterEnum;
import br.com.possoler.api.api_posso_ler.site.model.Footer;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class FooterService {

    public void footerFactory(String idioma, ModelAndView modelAndView) {
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "footer",
                Footer.builder()
                .label1(en_FooterEnum.LABEL_1.getLabel())
                .label2(en_FooterEnum.LABEL_2.getLabel())
                .label3(en_FooterEnum.LABEL_3.getLabel())
                .label4(en_FooterEnum.LABEL_4.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "footer",
                Footer.builder()
                .label1(es_FooterEnum.LABEL_1.getLabel())
                .label2(es_FooterEnum.LABEL_2.getLabel())
                .label3(es_FooterEnum.LABEL_3.getLabel())
                .label4(es_FooterEnum.LABEL_4.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"footer",
            Footer.builder()
            .label1(br_FooterEnum.LABEL_1.getLabel())
            .label2(br_FooterEnum.LABEL_2.getLabel())
            .label3(br_FooterEnum.LABEL_3.getLabel())
            .label4(br_FooterEnum.LABEL_4.getLabel())
            .build()
        );
    }
}
