package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import java.util.List;
import java.util.Map;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.DadosAcessoDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.dto.SiteAccessDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.DadosAcesso;
import br.com.possoler.api.api_posso_ler.api.core_api.model.Site;
import br.com.possoler.api.api_posso_ler.api.core_api.service.DadosAcessoService;
import br.com.possoler.api.api_posso_ler.api.core_api.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class DadosAcessoController {
    
    @Autowired
    DadosAcessoService dadosAcessoService;
    @Autowired
    SiteService siteService;

    /**
     * Insere dados (codigo_site, data e horario de acesso) de site acessado pela extensão
     * @author thomazf
     * @param dto
     * @return ResponseEntity
     */
    @PostMapping("${core-api.endpoint.insertAccess}")
    private ResponseEntity<?> insertDadosAccess(@RequestBody @Valid DadosAcessoDTO dto)
    {
        Site site = siteService.getSiteEntityById(dto.getCodigo_site());
        DadosAcesso dadosAcesso = DadosAcessoDTO.parseToEntity(dto, site);
        return dadosAcessoService.insertDados(dadosAcesso);
    }


    /**
     * Retorna em ordem decrescente a quantidade total de acessos dos sites
     * @author thomazf
     * @return ResponseEntity
     */
    @GetMapping("${core-api.endpoint.count-all-sites-access}")
    private ResponseEntity<List<SiteAccessDTO>> getAllSitesAccess()
    {
        return dadosAcessoService.countAllSitesAccess();
    }
}
