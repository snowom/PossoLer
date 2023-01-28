package br.com.possoler.api.api_posso_ler.site.service;

import br.com.possoler.api.api_posso_ler.site.constants.configs.ConstantsConfigs;
import org.springframework.stereotype.Service;

@Service
public class IdiomaService {

    public String returnValidLanguage(String language) {
        return language != null
            ? language
            : ConstantsConfigs.LANG_BR.getIdioma();
    }
}
