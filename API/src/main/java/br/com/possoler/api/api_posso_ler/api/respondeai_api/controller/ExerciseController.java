package br.com.possoler.api.api_posso_ler.api.respondeai_api.controller;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.ExerciseRequestDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class ExerciseController {

    private final RespondeAiConnection respondeAiConnection;

    public ExerciseController(@Qualifier("getExercise") RespondeAiConnection respondeAiConnection) {
        this.respondeAiConnection = respondeAiConnection;
    }

    @PostMapping("${respondeai-api.endpoint.getExerciseData}")
    private ResponseEntity<Object> getExerciseData(
        @RequestHeader(name = "Authorization") String token,
        @RequestBody @Valid ExerciseRequestDTO payload
    ){
        Object response = respondeAiConnection.getData(payload.getItemId(), token);
        return ResponseEntity.ok().body(response);
    }
}
