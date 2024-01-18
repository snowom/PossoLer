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
