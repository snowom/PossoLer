package br.com.possoler.api.api_posso_ler.api.respondeai_api.controller;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.ExerciseRequestDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.service.RespondeAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class RespondeAiController {

    @Autowired
    private RespondeAiService respondeAiService;

    @PostMapping("${respondeai-api.endpoint.getData}")
    private ResponseEntity<Object> getDataRespondeAi(
            @RequestParam(name = "operation", required = true) String operation,
            @RequestHeader(name = "Authorization") String token,
            @RequestBody @Valid ExerciseRequestDTO payload
    ){
        Object response = respondeAiService.getData(operation, payload, token);
        return ResponseEntity.ok().body(response);
    }
}
