package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_InstrucoesDownloadDeskEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_InstrucoesDownloadDeskEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_InstrucoesDownloadDeskEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class InstrucoesDownloadDeskService implements FactoryHTMLElements, PreventNullLanguage {

    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("instrucoesDownloadDesk_label1", en_InstrucoesDownloadDeskEnum.LABEL_1.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label2", en_InstrucoesDownloadDeskEnum.LABEL_2.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label3", en_InstrucoesDownloadDeskEnum.LABEL_3.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label4", en_InstrucoesDownloadDeskEnum.LABEL_4.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label5", en_InstrucoesDownloadDeskEnum.LABEL_5.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label6", en_InstrucoesDownloadDeskEnum.LABEL_6.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label7", en_InstrucoesDownloadDeskEnum.LABEL_7.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label8", en_InstrucoesDownloadDeskEnum.LABEL_8.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label9", en_InstrucoesDownloadDeskEnum.LABEL_9.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label10", en_InstrucoesDownloadDeskEnum.LABEL_10.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label11", en_InstrucoesDownloadDeskEnum.LABEL_11.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label12", en_InstrucoesDownloadDeskEnum.LABEL_12.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label13", en_InstrucoesDownloadDeskEnum.LABEL_13.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label14", en_InstrucoesDownloadDeskEnum.LABEL_14.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label15", en_InstrucoesDownloadDeskEnum.LABEL_15.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label16", en_InstrucoesDownloadDeskEnum.LABEL_16.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label17", en_InstrucoesDownloadDeskEnum.LABEL_17.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label18", en_InstrucoesDownloadDeskEnum.LABEL_18.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("instrucoesDownloadDesk_label1", es_InstrucoesDownloadDeskEnum.LABEL_1.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label2", es_InstrucoesDownloadDeskEnum.LABEL_2.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label3", es_InstrucoesDownloadDeskEnum.LABEL_3.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label4", es_InstrucoesDownloadDeskEnum.LABEL_4.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label5", es_InstrucoesDownloadDeskEnum.LABEL_5.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label6", es_InstrucoesDownloadDeskEnum.LABEL_6.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label7", es_InstrucoesDownloadDeskEnum.LABEL_7.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label8", es_InstrucoesDownloadDeskEnum.LABEL_8.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label9", es_InstrucoesDownloadDeskEnum.LABEL_9.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label10", es_InstrucoesDownloadDeskEnum.LABEL_10.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label11", es_InstrucoesDownloadDeskEnum.LABEL_11.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label12", es_InstrucoesDownloadDeskEnum.LABEL_12.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label13", es_InstrucoesDownloadDeskEnum.LABEL_13.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label14", es_InstrucoesDownloadDeskEnum.LABEL_14.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label15", es_InstrucoesDownloadDeskEnum.LABEL_15.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label16", es_InstrucoesDownloadDeskEnum.LABEL_16.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label17", es_InstrucoesDownloadDeskEnum.LABEL_17.getLabel());
            model.addAttribute("instrucoesDownloadDesk_label18", es_InstrucoesDownloadDeskEnum.LABEL_18.getLabel());
            return;
        }
        model.addAttribute("instrucoesDownloadDesk_label1", br_InstrucoesDownloadDeskEnum.LABEL_1.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label2", br_InstrucoesDownloadDeskEnum.LABEL_2.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label3", br_InstrucoesDownloadDeskEnum.LABEL_3.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label4", br_InstrucoesDownloadDeskEnum.LABEL_4.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label5", br_InstrucoesDownloadDeskEnum.LABEL_5.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label6", br_InstrucoesDownloadDeskEnum.LABEL_6.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label7", br_InstrucoesDownloadDeskEnum.LABEL_7.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label8", br_InstrucoesDownloadDeskEnum.LABEL_8.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label9", br_InstrucoesDownloadDeskEnum.LABEL_9.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label10", br_InstrucoesDownloadDeskEnum.LABEL_10.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label11", br_InstrucoesDownloadDeskEnum.LABEL_11.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label12", br_InstrucoesDownloadDeskEnum.LABEL_12.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label13", br_InstrucoesDownloadDeskEnum.LABEL_13.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label14", br_InstrucoesDownloadDeskEnum.LABEL_14.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label15", br_InstrucoesDownloadDeskEnum.LABEL_15.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label16", br_InstrucoesDownloadDeskEnum.LABEL_16.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label17", br_InstrucoesDownloadDeskEnum.LABEL_17.getLabel());
        model.addAttribute("instrucoesDownloadDesk_label18", br_InstrucoesDownloadDeskEnum.LABEL_18.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
