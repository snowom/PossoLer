package br.com.possoler.api.api_posso_ler.site.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlocoTutorial {
    private String tituloBlocoTutorial;
    private String label1;
    private String label2;
    private String label3;
}
