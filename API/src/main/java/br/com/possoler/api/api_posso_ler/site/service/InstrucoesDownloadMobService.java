package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_InstrucoesDownloadMobileEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_InstrucoesDownloadMobileEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_InstrucoesDownloadMobileEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class InstrucoesDownloadMobService implements FactoryHTMLElements, PreventNullLanguage {

    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("instrucoesDownloadMobile_label1", en_InstrucoesDownloadMobileEnum.LABEL_1.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label2", en_InstrucoesDownloadMobileEnum.LABEL_2.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label3", en_InstrucoesDownloadMobileEnum.LABEL_3.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label4", en_InstrucoesDownloadMobileEnum.LABEL_4.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label5", en_InstrucoesDownloadMobileEnum.LABEL_5.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label6", en_InstrucoesDownloadMobileEnum.LABEL_6.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label7", en_InstrucoesDownloadMobileEnum.LABEL_7.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label8", en_InstrucoesDownloadMobileEnum.LABEL_8.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label9", en_InstrucoesDownloadMobileEnum.LABEL_9.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label10", en_InstrucoesDownloadMobileEnum.LABEL_10.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label11", en_InstrucoesDownloadMobileEnum.LABEL_11.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label12", en_InstrucoesDownloadMobileEnum.LABEL_12.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label13", en_InstrucoesDownloadMobileEnum.LABEL_13.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label14", en_InstrucoesDownloadMobileEnum.LABEL_14.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label15", en_InstrucoesDownloadMobileEnum.LABEL_15.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label16", en_InstrucoesDownloadMobileEnum.LABEL_16.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label17", en_InstrucoesDownloadMobileEnum.LABEL_17.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("instrucoesDownloadMobile_label1", es_InstrucoesDownloadMobileEnum.LABEL_1.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label2", es_InstrucoesDownloadMobileEnum.LABEL_2.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label3", es_InstrucoesDownloadMobileEnum.LABEL_3.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label4", es_InstrucoesDownloadMobileEnum.LABEL_4.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label5", es_InstrucoesDownloadMobileEnum.LABEL_5.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label6", es_InstrucoesDownloadMobileEnum.LABEL_6.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label7", es_InstrucoesDownloadMobileEnum.LABEL_7.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label8", es_InstrucoesDownloadMobileEnum.LABEL_8.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label9", es_InstrucoesDownloadMobileEnum.LABEL_9.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label10", es_InstrucoesDownloadMobileEnum.LABEL_10.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label11", es_InstrucoesDownloadMobileEnum.LABEL_11.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label12", es_InstrucoesDownloadMobileEnum.LABEL_12.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label13", es_InstrucoesDownloadMobileEnum.LABEL_13.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label14", es_InstrucoesDownloadMobileEnum.LABEL_14.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label15", es_InstrucoesDownloadMobileEnum.LABEL_15.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label16", es_InstrucoesDownloadMobileEnum.LABEL_16.getLabel());
            model.addAttribute("instrucoesDownloadMobile_label17", es_InstrucoesDownloadMobileEnum.LABEL_17.getLabel());
            return;
        }
        model.addAttribute("instrucoesDownloadMobile_label1", br_InstrucoesDownloadMobileEnum.LABEL_1.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label2", br_InstrucoesDownloadMobileEnum.LABEL_2.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label3", br_InstrucoesDownloadMobileEnum.LABEL_3.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label4", br_InstrucoesDownloadMobileEnum.LABEL_4.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label5", br_InstrucoesDownloadMobileEnum.LABEL_5.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label6", br_InstrucoesDownloadMobileEnum.LABEL_6.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label7", br_InstrucoesDownloadMobileEnum.LABEL_7.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label8", br_InstrucoesDownloadMobileEnum.LABEL_8.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label9", br_InstrucoesDownloadMobileEnum.LABEL_9.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label10", br_InstrucoesDownloadMobileEnum.LABEL_10.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label11", br_InstrucoesDownloadMobileEnum.LABEL_11.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label12", br_InstrucoesDownloadMobileEnum.LABEL_12.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label13", br_InstrucoesDownloadMobileEnum.LABEL_13.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label14", br_InstrucoesDownloadMobileEnum.LABEL_14.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label15", br_InstrucoesDownloadMobileEnum.LABEL_15.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label16", br_InstrucoesDownloadMobileEnum.LABEL_16.getLabel());
        model.addAttribute("instrucoesDownloadMobile_label17", br_InstrucoesDownloadMobileEnum.LABEL_17.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
