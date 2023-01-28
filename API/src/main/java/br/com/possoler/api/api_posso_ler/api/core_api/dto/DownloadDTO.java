package br.com.possoler.api.api_posso_ler.api.core_api.dto;

import br.com.possoler.api.api_posso_ler.api.core_api.model.Download;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DownloadDTO {
    
    private Integer qtdDownloads;

    public static DownloadDTO parseToDTO(Download download)
    {
        return DownloadDTO.builder()
            .qtdDownloads(download.getQtd())
            .build();
    }
}
