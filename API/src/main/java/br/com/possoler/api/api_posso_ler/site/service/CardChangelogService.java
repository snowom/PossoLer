package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_CardChangelogEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_CardChangelogEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_CardChangelogEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class CardChangelogService implements FactoryHTMLElements, PreventNullLanguage {

    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("changelog_label1", en_CardChangelogEnum.LABEL_1.getLabel());
            model.addAttribute("changelog_label2", en_CardChangelogEnum.LABEL_2.getLabel());
            model.addAttribute("changelog_label3", en_CardChangelogEnum.LABEL_3.getLabel());
            model.addAttribute("changelog_label4", en_CardChangelogEnum.LABEL_4.getLabel());
            model.addAttribute("changelog_label5", en_CardChangelogEnum.LABEL_5.getLabel());
            model.addAttribute("changelog_label6", en_CardChangelogEnum.LABEL_6.getLabel());
            model.addAttribute("changelog_label7", en_CardChangelogEnum.LABEL_7.getLabel());
            model.addAttribute("changelog_label8", en_CardChangelogEnum.LABEL_8.getLabel());
            model.addAttribute("changelog_label9", en_CardChangelogEnum.LABEL_9.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("changelog_label1", es_CardChangelogEnum.LABEL_1.getLabel());
            model.addAttribute("changelog_label2", es_CardChangelogEnum.LABEL_2.getLabel());
            model.addAttribute("changelog_label3", es_CardChangelogEnum.LABEL_3.getLabel());
            model.addAttribute("changelog_label4", es_CardChangelogEnum.LABEL_4.getLabel());
            model.addAttribute("changelog_label5", es_CardChangelogEnum.LABEL_5.getLabel());
            model.addAttribute("changelog_label6", es_CardChangelogEnum.LABEL_6.getLabel());
            model.addAttribute("changelog_label7", es_CardChangelogEnum.LABEL_7.getLabel());
            model.addAttribute("changelog_label8", es_CardChangelogEnum.LABEL_8.getLabel());
            model.addAttribute("changelog_label9", es_CardChangelogEnum.LABEL_9.getLabel());
            return;
        }
        model.addAttribute("changelog_label1", br_CardChangelogEnum.LABEL_1.getLabel());
        model.addAttribute("changelog_label2", br_CardChangelogEnum.LABEL_2.getLabel());
        model.addAttribute("changelog_label3", br_CardChangelogEnum.LABEL_3.getLabel());
        model.addAttribute("changelog_label4", br_CardChangelogEnum.LABEL_4.getLabel());
        model.addAttribute("changelog_label5", br_CardChangelogEnum.LABEL_5.getLabel());
        model.addAttribute("changelog_label6", br_CardChangelogEnum.LABEL_6.getLabel());
        model.addAttribute("changelog_label7", br_CardChangelogEnum.LABEL_7.getLabel());
        model.addAttribute("changelog_label8", br_CardChangelogEnum.LABEL_8.getLabel());
        model.addAttribute("changelog_label9", br_CardChangelogEnum.LABEL_9.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
