package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_CardChaveAcessoEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_CardChaveAcessoEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_CardChaveAcessoEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class CardChaveAcessoService implements FactoryHTMLElements, PreventNullLanguage {

    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("cardChaveAcesso_label1", en_CardChaveAcessoEnum.LABEL_1.getLabel());
            model.addAttribute("cardChaveAcesso_label2", en_CardChaveAcessoEnum.LABEL_2.getLabel());
            model.addAttribute("cardChaveAcesso_label3", en_CardChaveAcessoEnum.LABEL_3.getLabel());
            model.addAttribute("cardChaveAcesso_label4", en_CardChaveAcessoEnum.LABEL_4.getLabel());
            model.addAttribute("cardChaveAcesso_label5", en_CardChaveAcessoEnum.LABEL_5.getLabel());
            model.addAttribute("cardChaveAcesso_label6", en_CardChaveAcessoEnum.LABEL_6.getLabel());
            model.addAttribute("cardChaveAcesso_label7", en_CardChaveAcessoEnum.LABEL_7.getLabel());
            model.addAttribute("cardChaveAcesso_label8", en_CardChaveAcessoEnum.LABEL_8.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("cardChaveAcesso_label1", es_CardChaveAcessoEnum.LABEL_1.getLabel());
            model.addAttribute("cardChaveAcesso_label2", es_CardChaveAcessoEnum.LABEL_2.getLabel());
            model.addAttribute("cardChaveAcesso_label3", es_CardChaveAcessoEnum.LABEL_3.getLabel());
            model.addAttribute("cardChaveAcesso_label4", es_CardChaveAcessoEnum.LABEL_4.getLabel());
            model.addAttribute("cardChaveAcesso_label5", es_CardChaveAcessoEnum.LABEL_5.getLabel());
            model.addAttribute("cardChaveAcesso_label6", es_CardChaveAcessoEnum.LABEL_6.getLabel());
            model.addAttribute("cardChaveAcesso_label7", es_CardChaveAcessoEnum.LABEL_7.getLabel());
            model.addAttribute("cardChaveAcesso_label8", es_CardChaveAcessoEnum.LABEL_8.getLabel());
            return;
        }
        model.addAttribute("cardChaveAcesso_label1", br_CardChaveAcessoEnum.LABEL_1.getLabel());
        model.addAttribute("cardChaveAcesso_label2", br_CardChaveAcessoEnum.LABEL_2.getLabel());
        model.addAttribute("cardChaveAcesso_label3", br_CardChaveAcessoEnum.LABEL_3.getLabel());
        model.addAttribute("cardChaveAcesso_label4", br_CardChaveAcessoEnum.LABEL_4.getLabel());
        model.addAttribute("cardChaveAcesso_label5", br_CardChaveAcessoEnum.LABEL_5.getLabel());
        model.addAttribute("cardChaveAcesso_label6", br_CardChaveAcessoEnum.LABEL_6.getLabel());
        model.addAttribute("cardChaveAcesso_label7", br_CardChaveAcessoEnum.LABEL_7.getLabel());
        model.addAttribute("cardChaveAcesso_label8", br_CardChaveAcessoEnum.LABEL_8.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
