package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_GlideScriptEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_GlideScriptEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_GlideScriptEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class GlideScriptService implements FactoryHTMLElements {

    public void factoryElement(String idioma, Model model) {
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("glideScriptLabel1", en_GlideScriptEnum.LABEL_1.getLabel());
            model.addAttribute("glideScriptLabel2", en_GlideScriptEnum.LABEL_2.getLabel());
            model.addAttribute("glideScriptLabel3", en_GlideScriptEnum.LABEL_3.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("glideScriptLabel1", es_GlideScriptEnum.LABEL_1.getLabel());
            model.addAttribute("glideScriptLabel2", es_GlideScriptEnum.LABEL_2.getLabel());
            model.addAttribute("glideScriptLabel3", es_GlideScriptEnum.LABEL_3.getLabel());
            return;
        }
        model.addAttribute("glideScriptLabel1", br_GlideScriptEnum.LABEL_1.getLabel());
        model.addAttribute("glideScriptLabel2", br_GlideScriptEnum.LABEL_2.getLabel());
        model.addAttribute("glideScriptLabel3", br_GlideScriptEnum.LABEL_3.getLabel());
    }
}
