package br.com.possoler.api.api_posso_ler.api.cachemock_api.service;

import br.com.possoler.api.api_posso_ler.api.cachemock_api.dto.PostModelDTO;
import br.com.possoler.api.api_posso_ler.api.cachemock_api.model.PostArticleEntity;
import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.ClientErrorException;
import exceptions.NotFoundException;
import exceptions.ServerErrorException;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class CachemockService {

    @Autowired
    private Environment env;
    @Autowired
    private ObjectMapper objectMapper;
    private final String RESOURCES_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/cachemock/jsonFiles/";
    //private final String RESOURCES_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\cachemock\\jsonFiles\\";

    /**
     * Cria arquivo JSON com conteudo da pagina desbloqueada
     * @author thomazf
     * @param postModel
     * @return Boolean
     */
    public Boolean createUnlockedFile(PostArticleEntity postModel)
    {
        try {
            if(!checkPostBodyParameters(postModel)){
                return false;
            }
            objectMapper.writeValue(new File(this.RESOURCES_PATH + postModel.getKey()), PostModelDTO.parseToDTO(postModel));
            return true;
        } catch (IOException | ClientErrorException e) {
            throw new RuntimeException(e);
        }
    }


    /**
     * Verifica se os campos do payload esta correto
     * @author thomazf
     * @param postModel
     * @return Boolean
     * @throws ClientErrorException
     */
    private Boolean checkPostBodyParameters(PostArticleEntity postModel) throws ClientErrorException {
        if(postModel.getKey() == null || postModel.getKey().length() == 0)
            throw new ClientErrorException("O parâmetro \"key\" não pode ser nulo ou vazio");
        if(postModel.getPageSource() == null || postModel.getPageSource().length() == 0)
            throw new ClientErrorException("O parâmetro \"pageSource\" não pode ser nulo ou vazio");
        return true;
    }


    /**
     * Retorna JSON do arquivo solicitado
     * @author thomazf
     * @param key
     * @return PostModelDTO
     */
    public PostModelDTO getUnlockedFileContent(String key) {
        try {
            return objectMapper.readValue(new File(this.RESOURCES_PATH + key), PostModelDTO.class);
        } catch (IOException | RuntimeException e) {
            throw new NotFoundException("o arquivo solicitado não foi encontrado em cache");
        }
    }

    /**
     * Valida payload
     * @author thomazf
     * @param key
     * @return Boolean
     */
    public void checkValidKey(String key)
    {
        if(key.length() == 0)
            throw new ClientErrorException("O parâmetro \"key\" não pode ser nulo ou vazio");
    }


    /**
     * Retorna a quantidade de arquivos desbloqueados
     * @author thomazf
     * @return Integer
     */
    public Integer getUnlockedFilesQuantity()
    {
        try{
            return new File(this.RESOURCES_PATH).listFiles().length;
        }catch(NullPointerException e){
            throw new ServerErrorException(e.getMessage());
        }
    }


    /**
     * Deleta todos arquivos desbloqueados
     * @author thomazf
     */
    public void clearUnlockedFiles()
    {
        try{
            File[] files = new File(this.RESOURCES_PATH).listFiles();
            for(File f : files){
                if(f.getName().equals(".gitkeep")) continue;
                f.delete();
            }
        }catch(RuntimeException e){
            throw new ServerErrorException(e.getMessage());
        }
    }


    public Boolean isValidAuthorizationHeader(String authHeader) {
        return authHeader.equals(DigestUtils.sha3_256Hex(this.env.getProperty("cachemock-api.header-auth-private-key")));
    }
}