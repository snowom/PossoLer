package br.com.possoler.api.api_posso_ler.site.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MenuLateral {

    private String MenuLateralMenu;
    private String MenuLateralInicio;
    private String MenuLateralDownload;
    private String MenuLateralSobre;
    private String MenuLateralApoiar;
    private String MenuLateralPerguntas;
    private String MenuLateralTecnologias;
    private String MenuLateralTutoriais;
    private String MenuLateralComentarios;
    private String MenuLateralVaiUmCafe;

}
