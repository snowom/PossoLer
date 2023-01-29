package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.global.InfoExtensao;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_VersaoExtensaoScriptEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_VersaoExtensaoScriptEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_VersaoExtensaoScriptEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class VersaoExtensaoScriptService implements FactoryHTMLElements, PreventNullLanguage {

    @Override
    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        model.addAttribute("versaoExtensaoScript_versao", InfoExtensao.VERSAO_EXTENSAO.getLabel());
        model.addAttribute("versaoExtensaoScript_data", InfoExtensao.DATA_PUBLICACAO.getLabel());

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("versaoExtensaoScript_label1", en_VersaoExtensaoScriptEnum.LABEL_1.getLabel());
            model.addAttribute("versaoExtensaoScript_label2", en_VersaoExtensaoScriptEnum.LABEL_2.getLabel());
            model.addAttribute("versaoExtensaoScript_label3", en_VersaoExtensaoScriptEnum.LABEL_3.getLabel());
            model.addAttribute("versaoExtensaoScript_label4", en_VersaoExtensaoScriptEnum.LABEL_4.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("versaoExtensaoScript_label1", es_VersaoExtensaoScriptEnum.LABEL_1.getLabel());
            model.addAttribute("versaoExtensaoScript_label2", es_VersaoExtensaoScriptEnum.LABEL_2.getLabel());
            model.addAttribute("versaoExtensaoScript_label3", es_VersaoExtensaoScriptEnum.LABEL_3.getLabel());
            model.addAttribute("versaoExtensaoScript_label4", es_VersaoExtensaoScriptEnum.LABEL_4.getLabel());
            return;
        }
        model.addAttribute("versaoExtensaoScript_label1", br_VersaoExtensaoScriptEnum.LABEL_1.getLabel());
        model.addAttribute("versaoExtensaoScript_label2", br_VersaoExtensaoScriptEnum.LABEL_2.getLabel());
        model.addAttribute("versaoExtensaoScript_label3", br_VersaoExtensaoScriptEnum.LABEL_3.getLabel());
        model.addAttribute("versaoExtensaoScript_label4", br_VersaoExtensaoScriptEnum.LABEL_4.getLabel());
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
