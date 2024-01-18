package br.com.possoler.api.api_posso_ler.api.respondeai_api.service;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.configs.RestConfigs;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.constants.Request;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.BookExerciseResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import exceptions.ClientErrorException;
import exceptions.ServerErrorException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("getBookExercise")
public class getBookExercise extends RestConfigs implements RespondeAiConnection {

    @Override
    public Object getData(String itemId, String token) {
        HttpHeaders header = setHeaders(token);
        final String URI = buildURIRequest(itemId);

        httpMethod = HttpMethod.GET;
        entity = new HttpEntity<>(header);
        response = restTemplate.exchange(URI, httpMethod, entity, String.class);

        validateResponse(response);
        var responseBody = response.getBody();
        var bookResponse = buildBookResponse(responseBody);

        return bookResponse;
    }

    private BookExerciseResponseDTO buildBookResponse(String responseBody) {
        JSONObject jsonObject = new JSONObject(responseBody);

        var lightSolution = buildLightSolutionResponse(jsonObject);
        var lightBody = buildLightBodyResponse(jsonObject);
        var lightAnswer = buildLightAnswerResponse(jsonObject);

        return BookExerciseResponseDTO.builder()
            .lightBody(lightBody)
            .lightAnswer(lightAnswer)
            .lightSolution(lightSolution)
            .build();
    }

    private String buildLightBodyResponse(JSONObject jsonObject) {
        try{
            return jsonObject.get("lightBody").toString();
        }catch (Exception e) {
            throw new ServerErrorException("[Book Exercise] - Falha ao obter objeto \"lightBody\"");
        }
    }

    private String buildLightAnswerResponse(JSONObject jsonObject) {
        try{
            return jsonObject.get("lightAnswer").toString();
        }catch (Exception e) {
            throw new ServerErrorException("[Book Exercise] - Falha ao obter objeto \"lightAnswer\"");
        }
    }

    private List<String> buildLightSolutionResponse(JSONObject jsonObject) {
        try{
            List<String> lightSolution = new ArrayList<>();
            JSONArray lightSolutionResponse = jsonObject.getJSONArray("lightSolution");

            for(int i=0; i<lightSolutionResponse.length(); i++) {
                lightSolution.add(lightSolutionResponse.get(i).toString());
            }
            return lightSolution;
        }catch (Exception e) {
            throw new ServerErrorException("[Book Exercise] - Falha ao obter objeto \"lightSolution\"");
        }
    }

    @Override
    public String buildURIRequest(String exerciseId) {
        return Request.DOMAIN_REQUEST + Request.BOOK_EXERCISE_ENDPOINT_REQUEST + exerciseId;
    }
}
