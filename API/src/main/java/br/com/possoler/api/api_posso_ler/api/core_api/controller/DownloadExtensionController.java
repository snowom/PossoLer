package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import br.com.possoler.api.api_posso_ler.api.core_api.service.DownloadExtensionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*")
public class DownloadExtensionController {

    @Autowired
    DownloadExtensionService downloadExtensionService;

    @GetMapping("${core-api.endpoint.download-extension}")
    public ResponseEntity<?> downloadExtension(@RequestParam String filename) throws IOException {
        downloadExtensionService.downloadExtension(filename);
        return ResponseEntity.ok().body("");
    }
}
