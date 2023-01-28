package br.com.possoler.api.api_posso_ler.api.signUser.controller;

import br.com.possoler.api.api_posso_ler.api.signUser.service.HashService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@CrossOrigin(origins = "*")
@RestController
public class HashController {

    private final HashService hashService;
    private final HashMap<String, String> response;

    HashController(HashService hashService, HashMap<String, String> response) {
        this.hashService = hashService;
        this.response = response;
    }

    @GetMapping("${signuser-api.endpoint.genHash}")
    public ResponseEntity<HashMap<String, String>> generateHash() {
        String hash = this.hashService.generateHash();
        this.response.put("user_hash", hash);
        return ResponseEntity.ok().body(this.response);
    }
}
