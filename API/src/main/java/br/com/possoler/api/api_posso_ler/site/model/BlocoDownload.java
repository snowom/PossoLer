package br.com.possoler.api.api_posso_ler.site.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlocoDownload {
    private String labelPessoasAcesso;
    private String labelDownload;
    private String labelPlataformaDownload;
    private String labelOpcoes;
    private String labelDesktopDownload;
    private String labelMobileDownload;
}
