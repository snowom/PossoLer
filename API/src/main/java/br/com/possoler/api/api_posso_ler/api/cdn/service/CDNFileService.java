package br.com.possoler.api.api_posso_ler.api.cdn.service;

import br.com.possoler.api.api_posso_ler.api.cdn.constants.CDNEnum;
import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import exceptions.NotFoundException;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@Service
public class CDNFileService {

    @Autowired
    private HttpServletResponse response;
    private final String CDN_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/CDN/";
    //private final String CDN_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\CDN\\";

    public void readCdnFile(String fileParamName) throws IOException, NotFoundException {
        String filename = this.getFileName(fileParamName);
        File file = new File(this.CDN_PATH + filename);
        FileInputStream inputStream = new FileInputStream(file);
        IOUtils.copy(inputStream, this.response.getOutputStream());
        this.response.flushBuffer();
    }

    private String getFileName(String file) {
        if(file.equalsIgnoreCase(CDNEnum.BLOCK_CORE_PAYWALL.getFileParamName())) {
            return CDNEnum.BLOCK_CORE_PAYWALL.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.SNACKBAR_JS.getFileParamName())) {
            return CDNEnum.SNACKBAR_JS.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.SNACKBAR_CSS.getFileParamName())) {
            return CDNEnum.SNACKBAR_CSS.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.POSSOLER_LOGO.getFileParamName())) {
            return CDNEnum.POSSOLER_LOGO.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.AXIOS_LOGO.getFileParamName())) {
            return CDNEnum.AXIOS_LOGO.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.MAVEN_LOGO.getFileParamName())) {
            return CDNEnum.MAVEN_LOGO.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.LOMBOK_LOGO.getFileParamName())) {
            return CDNEnum.LOMBOK_LOGO.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.SPRING_LOGO.getFileParamName())) {
            return CDNEnum.SPRING_LOGO.getFilename();
        }
        if(file.equalsIgnoreCase(CDNEnum.RESPONDE_AI_LOGO.getFileParamName())) {
            return CDNEnum.RESPONDE_AI_LOGO.getFilename();
        }
        throw new NotFoundException("Arquivo CDN não encontrado");
    }
}