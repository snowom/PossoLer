package br.com.possoler.api.api_posso_ler.api.core_api.service;

import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Service
public class DownloadExtensionService {

    @Autowired
    private HttpServletResponse response;
    private final String EXTENSION_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/extension/";
    //private final String EXTENSION_PATH = System.getProperty("user.dir") + "\\api_posso_ler\\src\\main\\resources\\extension\\";

    public void downloadExtension(String filename) throws IOException {
        this.configServletResponse(this.response, filename);
        File file = new File(this.EXTENSION_PATH + filename);
        FileInputStream inputStream = new FileInputStream(file);
        IOUtils.copy(inputStream, this.response.getOutputStream());
        this.response.flushBuffer();
    }

    private void configServletResponse(HttpServletResponse response, String filename) {
        response.setContentType("application/octet-stream");
        response.setHeader(
                "Content-Disposition",
                "attachment;filename=" + filename
        );
    }
}