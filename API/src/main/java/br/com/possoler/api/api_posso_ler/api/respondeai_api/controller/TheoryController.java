package br.com.possoler.api.api_posso_ler.api.respondeai_api.controller;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.request.ExerciseRequestDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class TheoryController {

    private final RespondeAiConnection respondeAiConnection;

    public TheoryController(@Qualifier("getTheory") RespondeAiConnection respondeAiConnection) {
        this.respondeAiConnection = respondeAiConnection;
    }

    @PostMapping("${respondeai-api.endpoint.getTheoryData}")
    private ResponseEntity<Object> getTheoryData(
            @RequestHeader(name = "Authorization") String token,
            @RequestBody @Valid ExerciseRequestDTO payload
    ){
        Object response = respondeAiConnection.getData(payload.getItemId(), token);
        return ResponseEntity.ok().body(response);
    }
}
