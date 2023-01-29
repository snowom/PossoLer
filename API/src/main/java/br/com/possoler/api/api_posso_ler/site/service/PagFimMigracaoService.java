package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_PagFimMigracaoEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_PagFimMigracaoEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_PagFimMigracaoEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class PagFimMigracaoService implements FactoryHTMLElements, PreventNullLanguage {

    @Override
    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("pagFimMigracao_label1", en_PagFimMigracaoEnum.LABEL_1.getLabel());
            model.addAttribute("pagFimMigracao_label2", en_PagFimMigracaoEnum.LABEL_2.getLabel());
            model.addAttribute("pagFimMigracao_label3", en_PagFimMigracaoEnum.LABEL_3.getLabel());
            model.addAttribute("pagFimMigracao_label4", en_PagFimMigracaoEnum.LABEL_4.getLabel());
            model.addAttribute("pagFimMigracao_label5", en_PagFimMigracaoEnum.LABEL_5.getLabel());
            model.addAttribute("pagFimMigracao_label6", en_PagFimMigracaoEnum.LABEL_6.getLabel());
            model.addAttribute("pagFimMigracao_label7", en_PagFimMigracaoEnum.LABEL_7.getLabel());
            model.addAttribute("pagFimMigracao_label8", en_PagFimMigracaoEnum.LABEL_8.getLabel());
            model.addAttribute("pagFimMigracao_label9", en_PagFimMigracaoEnum.LABEL_9.getLabel());
            model.addAttribute("pagFimMigracao_label10", en_PagFimMigracaoEnum.LABEL_10.getLabel());
            model.addAttribute("pagFimMigracao_label11", en_PagFimMigracaoEnum.LABEL_11.getLabel());
            model.addAttribute("pagFimMigracao_label12", en_PagFimMigracaoEnum.LABEL_12.getLabel());
            model.addAttribute("pagFimMigracao_label13", en_PagFimMigracaoEnum.LABEL_13.getLabel());
            model.addAttribute("pagFimMigracao_label14", en_PagFimMigracaoEnum.LABEL_14.getLabel());
            model.addAttribute("pagFimMigracao_label15", en_PagFimMigracaoEnum.LABEL_15.getLabel());
            model.addAttribute("pagFimMigracao_label16", en_PagFimMigracaoEnum.LABEL_16.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("pagFimMigracao_label1", es_PagFimMigracaoEnum.LABEL_1.getLabel());
            model.addAttribute("pagFimMigracao_label2", es_PagFimMigracaoEnum.LABEL_2.getLabel());
            model.addAttribute("pagFimMigracao_label3", es_PagFimMigracaoEnum.LABEL_3.getLabel());
            model.addAttribute("pagFimMigracao_label4", es_PagFimMigracaoEnum.LABEL_4.getLabel());
            model.addAttribute("pagFimMigracao_label5", es_PagFimMigracaoEnum.LABEL_5.getLabel());
            model.addAttribute("pagFimMigracao_label6", es_PagFimMigracaoEnum.LABEL_6.getLabel());
            model.addAttribute("pagFimMigracao_label7", es_PagFimMigracaoEnum.LABEL_7.getLabel());
            model.addAttribute("pagFimMigracao_label8", es_PagFimMigracaoEnum.LABEL_8.getLabel());
            model.addAttribute("pagFimMigracao_label9", es_PagFimMigracaoEnum.LABEL_9.getLabel());
            model.addAttribute("pagFimMigracao_label10", es_PagFimMigracaoEnum.LABEL_10.getLabel());
            model.addAttribute("pagFimMigracao_label11", es_PagFimMigracaoEnum.LABEL_11.getLabel());
            model.addAttribute("pagFimMigracao_label12", es_PagFimMigracaoEnum.LABEL_12.getLabel());
            model.addAttribute("pagFimMigracao_label13", es_PagFimMigracaoEnum.LABEL_13.getLabel());
            model.addAttribute("pagFimMigracao_label14", es_PagFimMigracaoEnum.LABEL_14.getLabel());
            model.addAttribute("pagFimMigracao_label15", es_PagFimMigracaoEnum.LABEL_15.getLabel());
            model.addAttribute("pagFimMigracao_label16", es_PagFimMigracaoEnum.LABEL_16.getLabel());
            return;
        }
        model.addAttribute("pagFimMigracao_label1", br_PagFimMigracaoEnum.LABEL_1.getLabel());
        model.addAttribute("pagFimMigracao_label2", br_PagFimMigracaoEnum.LABEL_2.getLabel());
        model.addAttribute("pagFimMigracao_label3", br_PagFimMigracaoEnum.LABEL_3.getLabel());
        model.addAttribute("pagFimMigracao_label4", br_PagFimMigracaoEnum.LABEL_4.getLabel());
        model.addAttribute("pagFimMigracao_label5", br_PagFimMigracaoEnum.LABEL_5.getLabel());
        model.addAttribute("pagFimMigracao_label6", br_PagFimMigracaoEnum.LABEL_6.getLabel());
        model.addAttribute("pagFimMigracao_label7", br_PagFimMigracaoEnum.LABEL_7.getLabel());
        model.addAttribute("pagFimMigracao_label8", br_PagFimMigracaoEnum.LABEL_8.getLabel());
        model.addAttribute("pagFimMigracao_label9", br_PagFimMigracaoEnum.LABEL_9.getLabel());
        model.addAttribute("pagFimMigracao_label10", br_PagFimMigracaoEnum.LABEL_10.getLabel());
        model.addAttribute("pagFimMigracao_label11", br_PagFimMigracaoEnum.LABEL_11.getLabel());
        model.addAttribute("pagFimMigracao_label12", br_PagFimMigracaoEnum.LABEL_12.getLabel());
        model.addAttribute("pagFimMigracao_label13", br_PagFimMigracaoEnum.LABEL_13.getLabel());
        model.addAttribute("pagFimMigracao_label14", br_PagFimMigracaoEnum.LABEL_14.getLabel());
        model.addAttribute("pagFimMigracao_label15", br_PagFimMigracaoEnum.LABEL_15.getLabel());
        model.addAttribute("pagFimMigracao_label16", br_PagFimMigracaoEnum.LABEL_16.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
