package br.com.possoler.api.api_posso_ler.api.cdn.controller;

import br.com.possoler.api.api_posso_ler.api.cdn.service.CDNFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*")
public class CDNController {

    @Autowired
    private CDNFileService cdnFileService;

    @GetMapping("${cdn-api.endpoint.getcdnfile}")
    private ResponseEntity<?> getCdnFile(@RequestParam(name = "file") String file) throws IOException {
        this.cdnFileService.readCdnFile(file);
        return ResponseEntity.ok().body("");
    }
}
