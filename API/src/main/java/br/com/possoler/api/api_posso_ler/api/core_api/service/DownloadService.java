package br.com.possoler.api.api_posso_ler.api.core_api.service;

import br.com.possoler.api.api_posso_ler.api.core_api.model.Download;
import br.com.possoler.api.api_posso_ler.api.core_api.repository.DownloadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import exceptions.ServerErrorException;

@Service
public class DownloadService {
    
    @Autowired
    DownloadRepository downloadsRepository;

    /**
     * Pega e retorna a entidade Download
     * @author thomazf
     * @return Integer
     */
    public Download getDownloadEntity()
    {
        return downloadsRepository
            .findById(0)
            .orElseThrow(() -> new ServerErrorException("Falha ao obter download"));
    }


    /**
     * Incrementa a quantidade de downloads
     * @author thomazf
     * @return Boolean
     */
    public Boolean incrementDownload()
    {
        try{
            Download download = this.getDownloadEntity();
            download.setQtd(download.getQtd() + 1);
            downloadsRepository.save(download);
            return true;
        }catch(RuntimeException e){
            return false;
        }
    }
}
