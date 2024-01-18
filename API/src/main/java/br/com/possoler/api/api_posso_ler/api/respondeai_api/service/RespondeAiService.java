package br.com.possoler.api.api_posso_ler.api.respondeai_api.service;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.constants.Request;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.*;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.model.Variables;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.ClientErrorException;
import exceptions.NotFoundException;
import exceptions.ServerErrorException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class RespondeAiService {

   /* public Object getData(String operation, ExerciseRequestDTO payload, String token)
    {
        String URI = buildURIRequest(operation, payload.getItemId());

        if((isBookData(operation))){
            httpMethod = HttpMethod.GET;
            entity = new HttpEntity<>(header);
        }else{
            httpMethod = HttpMethod.POST;
            String operationName = defineOperationName(operation);
            String query = defineQuery(operation);
            ExerciseRequestPayloadDTO bodyRequest = buildBodyRequest(operationName, query, payload.getItemId());
            entity = new HttpEntity<>(bodyRequest, header);
        }

        response = restTemplate.exchange(URI, httpMethod, entity, String.class);

        if(!response.hasBody())
            throw new NotFoundException("Não há conteúdos para exibir");

        String responseBody = response.getBody().toString();

        var responseFunction = switch (operation) {
            case Request.OPERATION_THEORY -> mountTheoryResponse(responseBody);
            case Request.OPERATION_FIXATION_EXERCISE -> mountExerciseFixationResponse(responseBody);
            case Request.OPERATION_LIST_EXERCISE -> mountListExerciseResponse(responseBody);
            default -> parseResponseToEntity(responseBody);
        };

        return responseFunction;
    } */


//    private GenericResponseDTO mountExerciseFixationResponse(String responseBody) {
//        List<VideoResponseDTO> videos = new ArrayList<>();
//        List<String> lightSolution = new ArrayList<>();
//        JSONObject jsonObject = new JSONObject(responseBody);
//        JSONArray lightSolutionResponse;
//
//        try{
//            JSONObject theoryObject = jsonObject.getJSONObject("data").getJSONObject("exercise");
//            lightSolutionResponse = theoryObject.getJSONArray("lightSolution");
//            for(int i=0; i<lightSolutionResponse.length(); i++) {
//                lightSolution.add(lightSolutionResponse.get(i).toString());
//            }
//        }catch (Exception e) {
//            throw new ServerErrorException("[Exercise fixation] - Falha ao obter objeto \"lightSolution\"");
//        }
//
//        try{
//            JSONObject theoryObject = jsonObject.getJSONObject("data").getJSONObject("exercise");
//            JSONArray videoResponse = (JSONArray) theoryObject.get("videos");
//
//            for(int i=0; i<videoResponse.length(); i++) {
//
//                var videoResponseDTO = VideoResponseDTO.builder()
//                    .providerId((String) videoResponse.getJSONObject(i).get("providerId"))
//                    .provider((String) videoResponse.getJSONObject(i).get("provider"))
//                    .typename((String) videoResponse.getJSONObject(i).get("__typename"))
//                    .build();
//
//                videos.add(videoResponseDTO);
//            }
//        }catch (Exception e) {
//            throw new ServerErrorException("[Exercise fixation] - Falha ao obter objeto \"videos\"");
//        }
//
//        return GenericResponseDTO.builder()
//            .lightSolution(lightSolution)
//            .videos(videos)
//            .build();
//    }


//    private GenericResponseDTO mountListExerciseResponse(String responseBody) {
//        List<VideoResponseDTO> videos = new ArrayList<>();
//        List<String> lightSolution = new ArrayList<>();
//        JSONObject jsonObject = new JSONObject(responseBody);
//        JSONArray lightSolutionResponse;
//
//        try{
//            JSONObject theoryObject = jsonObject.getJSONObject("data").getJSONObject("listExercise");
//            lightSolutionResponse = theoryObject.getJSONArray("lightSolution");
//            for(int i=0; i<lightSolutionResponse.length(); i++) {
//                lightSolution.add(lightSolutionResponse.get(i).toString());
//            }
//        }catch (Exception e) {
//            throw new ServerErrorException("[List exercise] - Falha ao obter objeto \"lightSolution\"");
//        }
//
//        try{
//            JSONObject theoryObject = jsonObject.getJSONObject("data").getJSONObject("listExercise");
//            JSONArray videoResponse = (JSONArray) theoryObject.get("videos");
//
//            for(int i=0; i<videoResponse.length(); i++) {
//
//                var videoResponseDto = VideoResponseDTO.builder()
//                    .providerId((String) videoResponse.getJSONObject(i).get("providerId"))
//                    .provider((String) videoResponse.getJSONObject(i).get("provider"))
//                    .typename((String) videoResponse.getJSONObject(i).get("__typename"))
//                    .build();
//
//                videos.add(videoResponseDto);
//            }
//        }catch (Exception e) {
//            throw new ServerErrorException("[List exercise] - Falha ao obter objeto \"videos\"");
//        }
//
//        return GenericResponseDTO.builder()
//            .lightSolution(lightSolution)
//            .videos(videos)
//            .build();
//    }


//    private ExerciseRequestPayloadDTO buildBodyRequest(String operationName, String query, String exerciseId) {
//        return ExerciseRequestPayloadDTO
//            .builder()
//            .operationName(operationName)
//            .query(query)
//            .variables(Variables.builder().id(exerciseId).build())
//            .build();
//    }

//    private String defineQuery(String operation) throws ClientErrorException{
//        if(operation.equalsIgnoreCase(Request.OPERATION_THEORY)){
//            return Request.THEORY_QUERY;
//        }
//        if(operation.equalsIgnoreCase(Request.OPERATION_FIXATION_EXERCISE)){
//            return Request.FIXATION_EXERCISE_QUERY;
//        }
//        if(operation.equalsIgnoreCase(Request.OPERATION_LIST_EXERCISE)){
//            return Request.LIST_EXERCISE_OPERATION_QUERY;
//        }
//        throw new ClientErrorException("Valor do parâmetro operation inválido");
//    }

//    private String defineOperationName(String operation) throws ClientErrorException{
//        if(operation.equalsIgnoreCase(Request.OPERATION_THEORY)){
//            return Request.THEORY_OPERATION_NAME;
//        }
//        if(operation.equalsIgnoreCase(Request.OPERATION_FIXATION_EXERCISE)){
//            return Request.FIXATION_EXERCISE_OPERATION_NAME;
//        }
//        if(operation.equalsIgnoreCase(Request.OPERATION_LIST_EXERCISE)){
//            return Request.LIST_EXERCISE_OPERATION_NAME;
//        }
//        throw new ClientErrorException("Valor do parâmetro operation inválido");
//    }

//    private Boolean isBookData(String operation){
//        return operation.equalsIgnoreCase(Request.OPERATION_BOOK_EXERCISE);
//    }

    /**
     * Gera URI de request para API do Responde Aí
     * @author snowon
     * @param exerciseId
     * @return String
     */
//    public String buildURIRequest(String operation, String exerciseId) throws ClientErrorException {
//
//        if(operation.equalsIgnoreCase(Request.OPERATION_BOOK_EXERCISE)){
//            return Request.DOMAIN_REQUEST + Request.BOOK_EXERCISE_ENDPOINT_REQUEST + exerciseId;
//        }
//        if(
//            operation.equalsIgnoreCase(Request.OPERATION_THEORY) ||
//            operation.equalsIgnoreCase(Request.OPERATION_FIXATION_EXERCISE) ||
//            operation.equalsIgnoreCase(Request.OPERATION_LIST_EXERCISE)
//        ){
//            return Request.DOMAIN_REQUEST + Request.THEORY_ENDPOINT;
//        }
//        throw new ClientErrorException("Valor do parâmetro operation inválido");
//    }

    /**
     * Converte resposta do request (JSON) em uma entity
     * @author snowon
     * @param response
     * @return DataBookExerciseResponseDTO
     */
//    private Object parseResponseToEntity(String response)
//    {
//        try{
//            ObjectMapper mapper = new ObjectMapper();
//            return mapper.readValue(response, Object.class);
//        }catch(IOException e){
//            throw new ServerErrorException(e.getMessage());
//        }
//    }


}
