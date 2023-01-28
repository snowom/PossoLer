package br.com.possoler.api.api_posso_ler.api.signUser.controller;

import br.com.possoler.api.api_posso_ler.api.core_api.service.DownloadService;
import br.com.possoler.api.api_posso_ler.api.signUser.dto.CheckUserDTO;
import br.com.possoler.api.api_posso_ler.api.signUser.service.HashService;
import br.com.possoler.api.api_posso_ler.api.signUser.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;
    private final HashService hashService;
    private final DownloadService downloadService;
    private HashMap<String, String> response;

    UsuarioController(
            UsuarioService usuarioService,
            HashService hashService,
            DownloadService downloadService,
            HashMap<String, String> response
    ) {
        this.usuarioService = usuarioService;
        this.hashService = hashService;
        this.downloadService = downloadService;
        this.response = response;
    }

    @PostMapping("${signuser-api.endpoint.insertHashedUser}")
    public ResponseEntity<?> insertHashedUser() {
        String userHash = this.hashService.generateHash();
        String userCode = this.hashService.getUserCode();
        usuarioService.insereUsuario(userHash, userCode);
        downloadService.incrementDownload();
        response.put("user_hash", userHash);
        return ResponseEntity.status(HttpStatus.CREATED.value()).body(response);
    }

    @PostMapping("${signuser-api.endpoint.checkUniqueUser}")
    public ResponseEntity<HashMap<String, String>> checkUniqueUser(@RequestBody @Valid CheckUserDTO checkUserDTO) {
        this.response = usuarioService.isUniqueUser(checkUserDTO.getUserHash());
        return ResponseEntity.ok().body(this.response);
    }

    @PutMapping("${signuser-api.endpoint.activeUser}")
    public ResponseEntity<HashMap<String, String>> activeUser(@RequestBody @Valid CheckUserDTO checkUserDTO) {
        this.usuarioService.activeUser(checkUserDTO.getUserHash());
        this.response.put("status", "sucesso");
        this.response.put("message", "Extensão habilitada com sucesso");
        return ResponseEntity.ok().body(this.response);
    }
}
