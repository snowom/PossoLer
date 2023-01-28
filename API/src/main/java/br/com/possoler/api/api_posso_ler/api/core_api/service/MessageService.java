package br.com.possoler.api.api_posso_ler.api.core_api.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.MessageDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.Message;
import br.com.possoler.api.api_posso_ler.api.core_api.model.SnackbarUpdate;
import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import br.com.possoler.api.api_posso_ler.site.constants.global.InfoExtensao;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private final String MESSAGES_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/messages/";
    private final String FILE_NAME = "messages.json";
    //private final String MESSAGES_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\messages\\";


    public MessageDTO getMessages() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(new File(this.MESSAGES_PATH + this.FILE_NAME), MessageDTO.class);
        } catch (IOException | RuntimeException e) {
            throw new NotFoundException("o arquivo de mensagens não foi encontrado");
        }
    }
}
