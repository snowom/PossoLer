package br.com.possoler.api.api_posso_ler.api.core_api.service;

import br.com.possoler.api.api_posso_ler.api.core_api.model.Site;
import br.com.possoler.api.api_posso_ler.api.core_api.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import exceptions.ServerErrorException;

@Service
public class SiteService {
    
    @Autowired
    SiteRepository siteRepository;

    /**
     * Retorna Site de acordo com o id informado no parametro
     * @author thomazf
     * @param site_id
     * @return Site
     */
    public Site getSiteEntityById(Integer site_id)
    {
        return siteRepository.findById(site_id)
            .orElseThrow(() -> new ServerErrorException("Falha ao obter Site"));
    }
}
