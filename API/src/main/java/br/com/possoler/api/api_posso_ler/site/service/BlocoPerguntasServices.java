package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us.en_BlocoPerguntasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.es.es_BlocoPerguntasEnum;
import br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br.br_BlocoPerguntasEnum;
import br.com.possoler.api.api_posso_ler.site.interfaces.PreventNullLanguage;
import br.com.possoler.api.api_posso_ler.site.model.BlocoPerguntasFrequentes;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

@Service
public class BlocoPerguntasServices implements PreventNullLanguage {

    public void blocoPerguntasFactory(String idioma, ModelAndView modelAndView) {

        idioma = this.preventNullLanguage(idioma);

        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_EN.getIdioma())) {
            modelAndView.addObject(
    "blocoPerguntas",
                BlocoPerguntasFrequentes.builder()
                .labelPerguntasFrequentes(en_BlocoPerguntasEnum.LABEL_PERGUNTAS_FREQUENTES.getLabel())
                .label1(en_BlocoPerguntasEnum.LABEL_1.getLabel()).label2(en_BlocoPerguntasEnum.LABEL_2.getLabel())
                .label3(en_BlocoPerguntasEnum.LABEL_3.getLabel()).label4(en_BlocoPerguntasEnum.LABEL_4.getLabel())
                .label5(en_BlocoPerguntasEnum.LABEL_5.getLabel()).label6(en_BlocoPerguntasEnum.LABEL_6.getLabel())
                .label7(en_BlocoPerguntasEnum.LABEL_7.getLabel()).label8(en_BlocoPerguntasEnum.LABEL_8.getLabel())
                .label9(en_BlocoPerguntasEnum.LABEL_9.getLabel()).label10(en_BlocoPerguntasEnum.LABEL_10.getLabel())
                .label11(en_BlocoPerguntasEnum.LABEL_11.getLabel()).label12(en_BlocoPerguntasEnum.LABEL_12.getLabel())
                .label13(en_BlocoPerguntasEnum.LABEL_13.getLabel()).label14(en_BlocoPerguntasEnum.LABEL_14.getLabel())
                .label15(en_BlocoPerguntasEnum.LABEL_15.getLabel()).label16(en_BlocoPerguntasEnum.LABEL_16.getLabel())
                .label17(en_BlocoPerguntasEnum.LABEL_17.getLabel()).label18(en_BlocoPerguntasEnum.LABEL_18.getLabel())
                .label19(en_BlocoPerguntasEnum.LABEL_19.getLabel()).label20(en_BlocoPerguntasEnum.LABEL_20.getLabel())
                .label21(en_BlocoPerguntasEnum.LABEL_21.getLabel()).label22(en_BlocoPerguntasEnum.LABEL_22.getLabel())
                .label23(en_BlocoPerguntasEnum.LABEL_23.getLabel()).label24(en_BlocoPerguntasEnum.LABEL_24.getLabel())
                .label25(en_BlocoPerguntasEnum.LABEL_25.getLabel()).label26(en_BlocoPerguntasEnum.LABEL_26.getLabel())
                .label27(en_BlocoPerguntasEnum.LABEL_27.getLabel()).label28(en_BlocoPerguntasEnum.LABEL_28.getLabel())
                .label29(en_BlocoPerguntasEnum.LABEL_29.getLabel()).label30(en_BlocoPerguntasEnum.LABEL_30.getLabel())
                .label31(en_BlocoPerguntasEnum.LABEL_31.getLabel()).label32(en_BlocoPerguntasEnum.LABEL_32.getLabel())
                .label33(en_BlocoPerguntasEnum.LABEL_33.getLabel()).label34(en_BlocoPerguntasEnum.LABEL_34.getLabel())
                .label35(en_BlocoPerguntasEnum.LABEL_35.getLabel()).label36(en_BlocoPerguntasEnum.LABEL_36.getLabel())
                .label37(en_BlocoPerguntasEnum.LABEL_37.getLabel()).label38(en_BlocoPerguntasEnum.LABEL_38.getLabel())
                .label39(en_BlocoPerguntasEnum.LABEL_39.getLabel()).label40(en_BlocoPerguntasEnum.LABEL_40.getLabel())
                .label41(en_BlocoPerguntasEnum.LABEL_41.getLabel()).label42(en_BlocoPerguntasEnum.LABEL_42.getLabel())
                .label43(en_BlocoPerguntasEnum.LABEL_43.getLabel()).label44(en_BlocoPerguntasEnum.LABEL_44.getLabel())
                .label45(en_BlocoPerguntasEnum.LABEL_45.getLabel()).label46(en_BlocoPerguntasEnum.LABEL_46.getLabel())
                .label47(en_BlocoPerguntasEnum.LABEL_47.getLabel()).label48(en_BlocoPerguntasEnum.LABEL_48.getLabel())
                .label49(en_BlocoPerguntasEnum.LABEL_49.getLabel()).label50(en_BlocoPerguntasEnum.LABEL_50.getLabel())
                .label51(en_BlocoPerguntasEnum.LABEL_51.getLabel()).label52(en_BlocoPerguntasEnum.LABEL_52.getLabel())
                .label53(en_BlocoPerguntasEnum.LABEL_53.getLabel()).label54(en_BlocoPerguntasEnum.LABEL_54.getLabel())
                .label55(en_BlocoPerguntasEnum.LABEL_55.getLabel()).label56(en_BlocoPerguntasEnum.LABEL_56.getLabel())
                .label57(en_BlocoPerguntasEnum.LABEL_57.getLabel()).label58(en_BlocoPerguntasEnum.LABEL_58.getLabel())
                .label59(en_BlocoPerguntasEnum.LABEL_59.getLabel()).label60(en_BlocoPerguntasEnum.LABEL_60.getLabel())
                .label61(en_BlocoPerguntasEnum.LABEL_61.getLabel()).label62(en_BlocoPerguntasEnum.LABEL_62.getLabel())
                .label63(en_BlocoPerguntasEnum.LABEL_63.getLabel()).label64(en_BlocoPerguntasEnum.LABEL_64.getLabel())
                .label65(en_BlocoPerguntasEnum.LABEL_65.getLabel()).label66(en_BlocoPerguntasEnum.LABEL_66.getLabel())
                .label67(en_BlocoPerguntasEnum.LABEL_67.getLabel()).label68(en_BlocoPerguntasEnum.LABEL_68.getLabel())
                .label69(en_BlocoPerguntasEnum.LABEL_69.getLabel()).label70(en_BlocoPerguntasEnum.LABEL_70.getLabel())
                .label71(en_BlocoPerguntasEnum.LABEL_71.getLabel()).label72(en_BlocoPerguntasEnum.LABEL_72.getLabel())
                .label73(en_BlocoPerguntasEnum.LABEL_73.getLabel()).label74(en_BlocoPerguntasEnum.LABEL_74.getLabel())
                .label75(en_BlocoPerguntasEnum.LABEL_75.getLabel()).label76(en_BlocoPerguntasEnum.LABEL_76.getLabel())
                .label77(en_BlocoPerguntasEnum.LABEL_77.getLabel()).label78(en_BlocoPerguntasEnum.LABEL_78.getLabel())
                .label79(en_BlocoPerguntasEnum.LABEL_79.getLabel()).label80(en_BlocoPerguntasEnum.LABEL_80.getLabel())
                .label81(en_BlocoPerguntasEnum.LABEL_81.getLabel()).label82(en_BlocoPerguntasEnum.LABEL_82.getLabel())
                .label83(en_BlocoPerguntasEnum.LABEL_83.getLabel()).label84(en_BlocoPerguntasEnum.LABEL_84.getLabel())
                .build()
            );
            return;
        }
        if(idioma.equalsIgnoreCase(ConstantsConfigs.LANG_ES.getIdioma())) {
            modelAndView.addObject(
    "blocoPerguntas",
                BlocoPerguntasFrequentes.builder()
                .labelPerguntasFrequentes(es_BlocoPerguntasEnum.LABEL_PERGUNTAS_FREQUENTES.getLabel())
                .label1(es_BlocoPerguntasEnum.LABEL_1.getLabel()).label2(es_BlocoPerguntasEnum.LABEL_2.getLabel())
                .label3(es_BlocoPerguntasEnum.LABEL_3.getLabel()).label4(es_BlocoPerguntasEnum.LABEL_4.getLabel())
                .label5(es_BlocoPerguntasEnum.LABEL_5.getLabel()).label6(es_BlocoPerguntasEnum.LABEL_6.getLabel())
                .label7(es_BlocoPerguntasEnum.LABEL_7.getLabel()).label8(es_BlocoPerguntasEnum.LABEL_8.getLabel())
                .label9(es_BlocoPerguntasEnum.LABEL_9.getLabel()).label10(es_BlocoPerguntasEnum.LABEL_10.getLabel())
                .label11(es_BlocoPerguntasEnum.LABEL_11.getLabel()).label12(es_BlocoPerguntasEnum.LABEL_12.getLabel())
                .label13(es_BlocoPerguntasEnum.LABEL_13.getLabel()).label14(es_BlocoPerguntasEnum.LABEL_14.getLabel())
                .label15(es_BlocoPerguntasEnum.LABEL_15.getLabel()).label16(es_BlocoPerguntasEnum.LABEL_16.getLabel())
                .label17(es_BlocoPerguntasEnum.LABEL_17.getLabel()).label18(es_BlocoPerguntasEnum.LABEL_18.getLabel())
                .label19(es_BlocoPerguntasEnum.LABEL_19.getLabel()).label20(es_BlocoPerguntasEnum.LABEL_20.getLabel())
                .label21(es_BlocoPerguntasEnum.LABEL_21.getLabel()).label22(es_BlocoPerguntasEnum.LABEL_22.getLabel())
                .label23(es_BlocoPerguntasEnum.LABEL_23.getLabel()).label24(es_BlocoPerguntasEnum.LABEL_24.getLabel())
                .label25(es_BlocoPerguntasEnum.LABEL_25.getLabel()).label26(es_BlocoPerguntasEnum.LABEL_26.getLabel())
                .label27(es_BlocoPerguntasEnum.LABEL_27.getLabel()).label28(es_BlocoPerguntasEnum.LABEL_28.getLabel())
                .label29(es_BlocoPerguntasEnum.LABEL_29.getLabel()).label30(es_BlocoPerguntasEnum.LABEL_30.getLabel())
                .label31(es_BlocoPerguntasEnum.LABEL_31.getLabel()).label32(es_BlocoPerguntasEnum.LABEL_32.getLabel())
                .label33(es_BlocoPerguntasEnum.LABEL_33.getLabel()).label34(es_BlocoPerguntasEnum.LABEL_34.getLabel())
                .label35(es_BlocoPerguntasEnum.LABEL_35.getLabel()).label36(es_BlocoPerguntasEnum.LABEL_36.getLabel())
                .label37(es_BlocoPerguntasEnum.LABEL_37.getLabel()).label38(es_BlocoPerguntasEnum.LABEL_38.getLabel())
                .label39(es_BlocoPerguntasEnum.LABEL_39.getLabel()).label40(es_BlocoPerguntasEnum.LABEL_40.getLabel())
                .label41(es_BlocoPerguntasEnum.LABEL_41.getLabel()).label42(es_BlocoPerguntasEnum.LABEL_42.getLabel())
                .label43(es_BlocoPerguntasEnum.LABEL_43.getLabel()).label44(es_BlocoPerguntasEnum.LABEL_44.getLabel())
                .label45(es_BlocoPerguntasEnum.LABEL_45.getLabel()).label46(es_BlocoPerguntasEnum.LABEL_46.getLabel())
                .label47(es_BlocoPerguntasEnum.LABEL_47.getLabel()).label48(es_BlocoPerguntasEnum.LABEL_48.getLabel())
                .label49(es_BlocoPerguntasEnum.LABEL_49.getLabel()).label50(es_BlocoPerguntasEnum.LABEL_50.getLabel())
                .label51(es_BlocoPerguntasEnum.LABEL_51.getLabel()).label52(es_BlocoPerguntasEnum.LABEL_52.getLabel())
                .label53(es_BlocoPerguntasEnum.LABEL_53.getLabel()).label54(es_BlocoPerguntasEnum.LABEL_54.getLabel())
                .label55(es_BlocoPerguntasEnum.LABEL_55.getLabel()).label56(es_BlocoPerguntasEnum.LABEL_56.getLabel())
                .label57(es_BlocoPerguntasEnum.LABEL_57.getLabel()).label58(es_BlocoPerguntasEnum.LABEL_58.getLabel())
                .label59(es_BlocoPerguntasEnum.LABEL_59.getLabel()).label60(es_BlocoPerguntasEnum.LABEL_60.getLabel())
                .label61(es_BlocoPerguntasEnum.LABEL_61.getLabel()).label62(es_BlocoPerguntasEnum.LABEL_62.getLabel())
                .label63(es_BlocoPerguntasEnum.LABEL_63.getLabel()).label64(es_BlocoPerguntasEnum.LABEL_64.getLabel())
                .label65(es_BlocoPerguntasEnum.LABEL_65.getLabel()).label66(es_BlocoPerguntasEnum.LABEL_66.getLabel())
                .label67(es_BlocoPerguntasEnum.LABEL_67.getLabel()).label68(es_BlocoPerguntasEnum.LABEL_68.getLabel())
                .label69(es_BlocoPerguntasEnum.LABEL_69.getLabel()).label70(es_BlocoPerguntasEnum.LABEL_70.getLabel())
                .label71(es_BlocoPerguntasEnum.LABEL_71.getLabel()).label72(es_BlocoPerguntasEnum.LABEL_72.getLabel())
                .label73(es_BlocoPerguntasEnum.LABEL_73.getLabel()).label74(es_BlocoPerguntasEnum.LABEL_74.getLabel())
                .label75(es_BlocoPerguntasEnum.LABEL_75.getLabel()).label76(es_BlocoPerguntasEnum.LABEL_76.getLabel())
                .label77(es_BlocoPerguntasEnum.LABEL_77.getLabel()).label78(es_BlocoPerguntasEnum.LABEL_78.getLabel())
                .label79(es_BlocoPerguntasEnum.LABEL_79.getLabel()).label80(es_BlocoPerguntasEnum.LABEL_80.getLabel())
                .label81(es_BlocoPerguntasEnum.LABEL_81.getLabel()).label82(es_BlocoPerguntasEnum.LABEL_82.getLabel())
                .label83(es_BlocoPerguntasEnum.LABEL_83.getLabel()).label84(es_BlocoPerguntasEnum.LABEL_84.getLabel())
                .build()
            );
            return;
        }
        modelAndView.addObject(
"blocoPerguntas",
            BlocoPerguntasFrequentes.builder()
            .labelPerguntasFrequentes(br_BlocoPerguntasEnum.LABEL_PERGUNTAS_FREQUENTES.getLabel())
            .label1(br_BlocoPerguntasEnum.LABEL_1.getLabel()).label2(br_BlocoPerguntasEnum.LABEL_2.getLabel())
            .label3(br_BlocoPerguntasEnum.LABEL_3.getLabel()).label4(br_BlocoPerguntasEnum.LABEL_4.getLabel())
            .label5(br_BlocoPerguntasEnum.LABEL_5.getLabel()).label6(br_BlocoPerguntasEnum.LABEL_6.getLabel())
            .label7(br_BlocoPerguntasEnum.LABEL_7.getLabel()).label8(br_BlocoPerguntasEnum.LABEL_8.getLabel())
            .label9(br_BlocoPerguntasEnum.LABEL_9.getLabel()).label10(br_BlocoPerguntasEnum.LABEL_10.getLabel())
            .label11(br_BlocoPerguntasEnum.LABEL_11.getLabel()).label12(br_BlocoPerguntasEnum.LABEL_12.getLabel())
            .label13(br_BlocoPerguntasEnum.LABEL_13.getLabel()).label14(br_BlocoPerguntasEnum.LABEL_14.getLabel())
            .label15(br_BlocoPerguntasEnum.LABEL_15.getLabel()).label16(br_BlocoPerguntasEnum.LABEL_16.getLabel())
            .label17(br_BlocoPerguntasEnum.LABEL_17.getLabel()).label18(br_BlocoPerguntasEnum.LABEL_18.getLabel())
            .label19(br_BlocoPerguntasEnum.LABEL_19.getLabel()).label20(br_BlocoPerguntasEnum.LABEL_20.getLabel())
            .label21(br_BlocoPerguntasEnum.LABEL_21.getLabel()).label22(br_BlocoPerguntasEnum.LABEL_22.getLabel())
            .label23(br_BlocoPerguntasEnum.LABEL_23.getLabel()).label24(br_BlocoPerguntasEnum.LABEL_24.getLabel())
            .label25(br_BlocoPerguntasEnum.LABEL_25.getLabel()).label26(br_BlocoPerguntasEnum.LABEL_26.getLabel())
            .label27(br_BlocoPerguntasEnum.LABEL_27.getLabel()).label28(br_BlocoPerguntasEnum.LABEL_28.getLabel())
            .label29(br_BlocoPerguntasEnum.LABEL_29.getLabel()).label30(br_BlocoPerguntasEnum.LABEL_30.getLabel())
            .label31(br_BlocoPerguntasEnum.LABEL_31.getLabel()).label32(br_BlocoPerguntasEnum.LABEL_32.getLabel())
            .label33(br_BlocoPerguntasEnum.LABEL_33.getLabel()).label34(br_BlocoPerguntasEnum.LABEL_34.getLabel())
            .label35(br_BlocoPerguntasEnum.LABEL_35.getLabel()).label36(br_BlocoPerguntasEnum.LABEL_36.getLabel())
            .label37(br_BlocoPerguntasEnum.LABEL_37.getLabel()).label38(br_BlocoPerguntasEnum.LABEL_38.getLabel())
            .label39(br_BlocoPerguntasEnum.LABEL_39.getLabel()).label40(br_BlocoPerguntasEnum.LABEL_40.getLabel())
            .label41(br_BlocoPerguntasEnum.LABEL_41.getLabel()).label42(br_BlocoPerguntasEnum.LABEL_42.getLabel())
            .label43(br_BlocoPerguntasEnum.LABEL_43.getLabel()).label44(br_BlocoPerguntasEnum.LABEL_44.getLabel())
            .label45(br_BlocoPerguntasEnum.LABEL_45.getLabel()).label46(br_BlocoPerguntasEnum.LABEL_46.getLabel())
            .label47(br_BlocoPerguntasEnum.LABEL_47.getLabel()).label48(br_BlocoPerguntasEnum.LABEL_48.getLabel())
            .label49(br_BlocoPerguntasEnum.LABEL_49.getLabel()).label50(br_BlocoPerguntasEnum.LABEL_50.getLabel())
            .label51(br_BlocoPerguntasEnum.LABEL_51.getLabel()).label52(br_BlocoPerguntasEnum.LABEL_52.getLabel())
            .label53(br_BlocoPerguntasEnum.LABEL_53.getLabel()).label54(br_BlocoPerguntasEnum.LABEL_54.getLabel())
            .label55(br_BlocoPerguntasEnum.LABEL_55.getLabel()).label56(br_BlocoPerguntasEnum.LABEL_56.getLabel())
            .label57(br_BlocoPerguntasEnum.LABEL_57.getLabel()).label58(br_BlocoPerguntasEnum.LABEL_58.getLabel())
            .label59(br_BlocoPerguntasEnum.LABEL_59.getLabel()).label60(br_BlocoPerguntasEnum.LABEL_60.getLabel())
            .label61(br_BlocoPerguntasEnum.LABEL_61.getLabel()).label62(br_BlocoPerguntasEnum.LABEL_62.getLabel())
            .label63(br_BlocoPerguntasEnum.LABEL_63.getLabel()).label64(br_BlocoPerguntasEnum.LABEL_64.getLabel())
            .label65(br_BlocoPerguntasEnum.LABEL_65.getLabel()).label66(br_BlocoPerguntasEnum.LABEL_66.getLabel())
            .label67(br_BlocoPerguntasEnum.LABEL_67.getLabel()).label68(br_BlocoPerguntasEnum.LABEL_68.getLabel())
            .label69(br_BlocoPerguntasEnum.LABEL_69.getLabel()).label70(br_BlocoPerguntasEnum.LABEL_70.getLabel())
            .label71(br_BlocoPerguntasEnum.LABEL_71.getLabel()).label72(br_BlocoPerguntasEnum.LABEL_72.getLabel())
            .label73(br_BlocoPerguntasEnum.LABEL_73.getLabel()).label74(br_BlocoPerguntasEnum.LABEL_74.getLabel())
            .label75(br_BlocoPerguntasEnum.LABEL_75.getLabel()).label76(br_BlocoPerguntasEnum.LABEL_76.getLabel())
            .label77(br_BlocoPerguntasEnum.LABEL_77.getLabel()).label78(br_BlocoPerguntasEnum.LABEL_78.getLabel())
            .label79(br_BlocoPerguntasEnum.LABEL_79.getLabel()).label80(br_BlocoPerguntasEnum.LABEL_80.getLabel())
            .label81(br_BlocoPerguntasEnum.LABEL_81.getLabel()).label82(br_BlocoPerguntasEnum.LABEL_82.getLabel())
            .label83(br_BlocoPerguntasEnum.LABEL_83.getLabel()).label84(br_BlocoPerguntasEnum.LABEL_84.getLabel())
            .build()
        );
    }

    @Override
    public String preventNullLanguage(String language) {
        return (language == null) ? ConstantsConfigs.LANG_BR.getIdioma() : language;
    }
}
