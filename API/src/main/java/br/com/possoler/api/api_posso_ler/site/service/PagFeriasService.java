package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_PagFeriasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_PagFeriasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_PagFeriasEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.FactoryHTMLElements;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.Random;

@Service
public class PagFeriasService implements FactoryHTMLElements, PreventNullLanguage {

    @Override
    public void factoryElement(String idioma, Model model) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            model.addAttribute("pagFerias_lbl1", en_PagFeriasEnum.LABEL_1.getLabel());
            model.addAttribute("pagFerias_lbl2", en_PagFeriasEnum.LABEL_2.getLabel());
            model.addAttribute("pagFerias_lbl3", en_PagFeriasEnum.LABEL_3.getLabel());
            model.addAttribute("pagFerias_lbl4", en_PagFeriasEnum.LABEL_4.getLabel());
            model.addAttribute("pagFerias_lbl5", en_PagFeriasEnum.LABEL_5.getLabel());
            model.addAttribute("pagFerias_lbl6", en_PagFeriasEnum.LABEL_6.getLabel());
            model.addAttribute("pagFerias_lbl7", en_PagFeriasEnum.LABEL_7.getLabel());
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            model.addAttribute("pagFerias_lbl1", es_PagFeriasEnum.LABEL_1.getLabel());
            model.addAttribute("pagFerias_lbl2", es_PagFeriasEnum.LABEL_2.getLabel());
            model.addAttribute("pagFerias_lbl3", es_PagFeriasEnum.LABEL_3.getLabel());
            model.addAttribute("pagFerias_lbl4", es_PagFeriasEnum.LABEL_4.getLabel());
            model.addAttribute("pagFerias_lbl5", es_PagFeriasEnum.LABEL_5.getLabel());
            model.addAttribute("pagFerias_lbl6", es_PagFeriasEnum.LABEL_6.getLabel());
            model.addAttribute("pagFerias_lbl7", es_PagFeriasEnum.LABEL_7.getLabel());
            return;
        }
        model.addAttribute("pagFerias_lbl1", br_PagFeriasEnum.LABEL_1.getLabel());
        model.addAttribute("pagFerias_lbl2", br_PagFeriasEnum.LABEL_2.getLabel());
        model.addAttribute("pagFerias_lbl3", br_PagFeriasEnum.LABEL_3.getLabel());
        model.addAttribute("pagFerias_lbl4", br_PagFeriasEnum.LABEL_4.getLabel());
        model.addAttribute("pagFerias_lbl5", br_PagFeriasEnum.LABEL_5.getLabel());
        model.addAttribute("pagFerias_lbl6", br_PagFeriasEnum.LABEL_6.getLabel());
        model.addAttribute("pagFerias_lbl7", br_PagFeriasEnum.LABEL_7.getLabel());
    }

    public void sortLottieAnimation(Model model) {
        String[] lottieArray = {
            "https://assets4.lottiefiles.com/packages/lf20_ak1sq2fq.json",
            "https://assets2.lottiefiles.com/private_files/lf30_vdqgavca.json",
            "https://assets10.lottiefiles.com/packages/lf20_o341z5xz.json",
            "https://assets6.lottiefiles.com/packages/lf20_VOrsVO0F1G.json",
            "https://assets6.lottiefiles.com/packages/lf20_swnrn2oy.json",
            "https://assets8.lottiefiles.com/packages/lf20_bwncrbab.json",
            "https://assets7.lottiefiles.com/private_files/lf30_ndv57uun.json"
        };

        Random random = new Random();
        String lottieAnimation = lottieArray[random.nextInt((lottieArray.length-1))];
        model.addAttribute("pagFerias_lottie", lottieAnimation);
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
