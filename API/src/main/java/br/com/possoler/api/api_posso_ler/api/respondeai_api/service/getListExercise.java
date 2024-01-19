package br.com.possoler.api.api_posso_ler.api.respondeai_api.service;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.configs.RestConfigs;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.constants.RequestEndpoints;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response.ExerciseResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response.VideoResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import exceptions.ServerErrorException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("getListExercise")
public class getListExercise extends RestConfigs implements RespondeAiConnection {

    @Override
    public Object getData(String itemId, String token) {
        HttpHeaders header = setHeaders(token);
        final String URI = buildURIRequest(itemId);

        httpMethod = HttpMethod.GET;
        entity = new HttpEntity<>(header);
        response = restTemplate.exchange(URI, httpMethod, entity, String.class);

        validateResponse(response);
        var responseBody = response.getBody();
        ExerciseResponseDTO exerciseResponse = buildListExerciseResponse(responseBody);

        return exerciseResponse;
    }

    private ExerciseResponseDTO buildListExerciseResponse(String responseBody) {
        JSONObject jsonObject = new JSONObject(responseBody);

        var lightAnswer = buildLightAnswerResponse(jsonObject);
        var videos = buildVideoResponse(jsonObject);
        var lightSolution = buildLightSolutionResponse(jsonObject);

        return ExerciseResponseDTO.builder()
            .lightSolution(lightSolution)
            .lightAnswer(lightAnswer)
            .videos(videos)
            .build();
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
            throw new ServerErrorException("[List Exercise] - Falha ao obter objeto \"lightSolution\"");
        }
    }

    private String buildLightAnswerResponse(JSONObject jsonObject) {
        try{
            return jsonObject.get("lightAnswer").toString();
        }catch (Exception e) {
            throw new ServerErrorException("[List Exercise] - Falha ao obter objeto \"lightAnswer\"");
        }
    }

    private List<VideoResponseDTO> buildVideoResponse(JSONObject jsonObject) {
        List<VideoResponseDTO> videos = new ArrayList<>();

        try{
            JSONArray videoResponse = (JSONArray) jsonObject.get("videos");
            for(int i=0; i<videoResponse.length(); i++) {
                videos.add(VideoResponseDTO.builder()
                .providerId((String) videoResponse.getJSONObject(i).get("providerId"))
                .provider((String) videoResponse.getJSONObject(i).get("provider"))
                .build());
            }
        }catch (Exception e) {
            throw new ServerErrorException("[List Exercise] - Falha ao obter objeto \"videos\"");
        }

        return videos;
    }

    @Override
    public String buildURIRequest(String exerciseId) {
        return RequestEndpoints.DOMAIN_REQUEST + RequestEndpoints.LIST_EXERCISE_ENDPOINT + exerciseId;
    }
}
