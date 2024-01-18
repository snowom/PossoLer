package br.com.possoler.api.api_posso_ler.api.respondeai_api.service;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.constants.Request;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.TheoryResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.VideoResponseDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.configs.RestConfigs;
import exceptions.ClientErrorException;
import exceptions.NotFoundException;
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
        TheoryResponseDTO theoryResponse = mountTheoryResponse(responseBody);

        return theoryResponse;
    }

    private void validateResponse(ResponseEntity<String> response) {
        if(response.getStatusCode() == HttpStatus.UNAUTHORIZED) {
            throw new ClientErrorException("Token de autenticação expirado");
        }
        if(response.getStatusCode().is5xxServerError()) {
            throw new ServerErrorException("Falha ao obter os dados");
        }
        if(response.getStatusCode() == HttpStatus.OK && !response.hasBody()) {
            throw new NotFoundException("Não há conteúdos para exibir");
        }
    }

    private TheoryResponseDTO mountTheoryResponse(String responseBody) {
        List<VideoResponseDTO> videos = new ArrayList<>();
        JSONObject jsonObject = new JSONObject(responseBody);
        String lightBody;

        try{
            lightBody = jsonObject.get("lightBody").toString();
        }catch (Exception e) {
            throw new ServerErrorException("[Theory] - Falha ao obter objeto \"lightBody\"");
        }

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

        return TheoryResponseDTO.builder()
            .lightBody(lightBody)
            .videos(videos)
            .build();
    }

    @Override
    public String buildURIRequest(String exerciseId) throws ClientErrorException {
        return Request.DOMAIN_REQUEST + Request.THEORY_ENDPOINT + exerciseId;
    }
}
