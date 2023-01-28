package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import java.util.HashMap;
import java.util.Map;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.DownloadDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.Download;
import br.com.possoler.api.api_posso_ler.api.core_api.service.DownloadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class DownloadController {
    
    @Autowired
    DownloadService downloadService;

    /**
     * Retorna a quantidade total de downloads da extensão
     * @author thomazf
     * @return ResponseEntity
     */
    @GetMapping("${core-api.endpoint.get-all-downloads}")
    private ResponseEntity<DownloadDTO> getDownloads()
    {
        Download download = downloadService.getDownloadEntity();
        return ResponseEntity.ok().body(DownloadDTO.parseToDTO(download));
    }


    /**
     * Incrementa 1 na quantidade total de downloads
     * @author thomazf
     * @return ResponseEntity
     */
    @PostMapping("${core-api.endpoint.increment-download}")
    private ResponseEntity<Map<String, String>> incrementDownloads()
    {
        Map<String, String> response = new HashMap<>();
        Boolean status = downloadService.incrementDownload();
        if(status){
            response.put("status", "sucesso");
            return ResponseEntity.ok().body(response);
        }
        response.put("status", "falha");
        return ResponseEntity.internalServerError().body(response);
    }
}
