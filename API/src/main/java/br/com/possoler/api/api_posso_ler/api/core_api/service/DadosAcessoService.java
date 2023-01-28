package br.com.possoler.api.api_posso_ler.api.core_api.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.SiteAccessDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.DadosAcesso;
import br.com.possoler.api.api_posso_ler.api.core_api.repository.DadosAcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import exceptions.ServerErrorException;

@Service
public class DadosAcessoService {
    
    @Autowired
    DadosAcessoRepository dadosAcessoRepository;

    /**
     * Insere dados de acesso no BD
     * @author thomazf
     * @param dadosAcesso
     * @return ResponseEntity
     */
    public ResponseEntity<?> insertDados(DadosAcesso dadosAcesso)
    {
        Map<String, String> response = new HashMap<>();
        try{
            dadosAcessoRepository.save(dadosAcesso);
            return ResponseEntity.status(201).body(response);
        }catch(Exception e){
            throw new ServerErrorException("falha ao salvar dado em dashboard");
        }
    }


    /**
     * Retorna todos os sites cadastrados no BD e sua respectiva quantidade de acessos pela extensão
     * @author thomazf
     * @return ResponseEntity
     */
    public ResponseEntity<List<SiteAccessDTO>> countAllSitesAccess()
    {
        List<SiteAccessDTO> sitesAccess = this.getDadosFromSites();
        return ResponseEntity.ok().body(sitesAccess);
    }


    /**
     * Retorna as infos dos sites cadastrados no BD
     * @author thomazf
     * @return List
     */
    private List<SiteAccessDTO> getDadosFromSites()
    {
        return dadosAcessoRepository.findByCodigoSite()
            .orElseThrow(() -> new ServerErrorException("Falha ao recuperar dados dos sites"));
    }
}
