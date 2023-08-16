package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_PagAlertRespaiEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_PagAlertRespaiEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_PagAlertRespaiEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class PagRespaiService implements FactoryHTMLElements, PreventNullLanguage {

    @Override
    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("pagAlertRespai_lbl1", en_PagAlertRespaiEnum.LABEL_1.getLabel());
            model.addAttribute("pagAlertRespai_lbl2", en_PagAlertRespaiEnum.LABEL_2.getLabel());
            model.addAttribute("pagAlertRespai_lbl3", en_PagAlertRespaiEnum.LABEL_3.getLabel());
            model.addAttribute("pagAlertRespai_lbl4", en_PagAlertRespaiEnum.LABEL_4.getLabel());
            model.addAttribute("pagAlertRespai_lbl5", en_PagAlertRespaiEnum.LABEL_5.getLabel());
            model.addAttribute("pagAlertRespai_lbl6", en_PagAlertRespaiEnum.LABEL_6.getLabel());
            model.addAttribute("pagAlertRespai_lbl7", en_PagAlertRespaiEnum.LABEL_7.getLabel());
            model.addAttribute("pagAlertRespai_lbl8", en_PagAlertRespaiEnum.LABEL_8.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("pagAlertRespai_lbl1", es_PagAlertRespaiEnum.LABEL_1.getLabel());
            model.addAttribute("pagAlertRespai_lbl2", es_PagAlertRespaiEnum.LABEL_2.getLabel());
            model.addAttribute("pagAlertRespai_lbl3", es_PagAlertRespaiEnum.LABEL_3.getLabel());
            model.addAttribute("pagAlertRespai_lbl4", es_PagAlertRespaiEnum.LABEL_4.getLabel());
            model.addAttribute("pagAlertRespai_lbl5", es_PagAlertRespaiEnum.LABEL_5.getLabel());
            model.addAttribute("pagAlertRespai_lbl6", es_PagAlertRespaiEnum.LABEL_6.getLabel());
            model.addAttribute("pagAlertRespai_lbl7", es_PagAlertRespaiEnum.LABEL_7.getLabel());
            model.addAttribute("pagAlertRespai_lbl8", es_PagAlertRespaiEnum.LABEL_8.getLabel());
            return;
        }
        model.addAttribute("pagAlertRespai_lbl1", br_PagAlertRespaiEnum.LABEL_1.getLabel());
        model.addAttribute("pagAlertRespai_lbl2", br_PagAlertRespaiEnum.LABEL_2.getLabel());
        model.addAttribute("pagAlertRespai_lbl3", br_PagAlertRespaiEnum.LABEL_3.getLabel());
        model.addAttribute("pagAlertRespai_lbl4", br_PagAlertRespaiEnum.LABEL_4.getLabel());
        model.addAttribute("pagAlertRespai_lbl5", br_PagAlertRespaiEnum.LABEL_5.getLabel());
        model.addAttribute("pagAlertRespai_lbl6", br_PagAlertRespaiEnum.LABEL_6.getLabel());
        model.addAttribute("pagAlertRespai_lbl7", br_PagAlertRespaiEnum.LABEL_7.getLabel());
        model.addAttribute("pagAlertRespai_lbl8", br_PagAlertRespaiEnum.LABEL_8.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
