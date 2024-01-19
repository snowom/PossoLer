package br.com.possoler.api.api_posso_ler.api.respondeai_api.service;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.constants.RequestEndpoints;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response.TheoryResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response.VideoResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.configs.RestConfigs;
import exceptions.ClientErrorException;
import exceptions.ServerErrorException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("getTheory")
public class getTheory extends RestConfigs implements RespondeAiConnection {

    @Override
    public Object getData(String itemId, String token) {
        HttpHeaders header = setHeaders(token);
        final String URI = buildURIRequest(itemId);

        httpMethod = HttpMethod.GET;
        entity = new HttpEntity<>(header);
        response = restTemplate.exchange(URI, httpMethod, entity, String.class);

        validateResponse(response);
        var responseBody = response.getBody();
        TheoryResponseDTO theoryResponse = buildTheoryResponse(responseBody);

        return theoryResponse;
    }

    private TheoryResponseDTO buildTheoryResponse(String responseBody) {
        var jsonObject = new JSONObject(responseBody);
        var lightBody = buildLightBodyResponse(jsonObject);
        var videos = buildVideoResponse(jsonObject);

        return TheoryResponseDTO.builder()
            .lightBody(lightBody)
            .videos(videos)
            .build();
    }

    private String buildLightBodyResponse(JSONObject jsonObject) {
        try{
            return jsonObject.get("lightBody").toString();
        }catch (Exception e) {
            throw new ServerErrorException("[Theory] - Falha ao obter objeto \"lightBody\"");
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
            throw new ServerErrorException("[Theory] - Falha ao obter objeto \"videos\"");
        }

        return videos;
    }

    @Override
    public String buildURIRequest(String exerciseId) throws ClientErrorException {
        return RequestEndpoints.DOMAIN_REQUEST + RequestEndpoints.THEORY_ENDPOINT + exerciseId;
    }
}
