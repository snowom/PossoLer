package br.com.possoler.api.api_posso_ler.api.core_api.service;

import br.com.possoler.api.api_posso_ler.api.cachemock_api.dto.PostModelDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.SnackbarUpdate;
import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import br.com.possoler.api.api_posso_ler.site.constants.global.InfoExtensao;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.NotFoundException;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class SnackbarUpdateService {

    private final String MESSAGES_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/messages/";
    private final String FILE_NAME = "messageUpdate.json";
    //private final String MESSAGES_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\messages\\";


    public SnackbarUpdate getSnackUpdateMessage() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            SnackbarUpdate snackbarUpdate = mapper.readValue(new File(this.MESSAGES_PATH + this.FILE_NAME), SnackbarUpdate.class);
            snackbarUpdate.setCurrentVersion(InfoExtensao.VERSAO_EXTENSAO.getLabel());
            return snackbarUpdate;
        } catch (IOException | RuntimeException e) {
            throw new NotFoundException("o arquivo de mensagem de atualizacao não foi encontrado");
        }
    }
}
