package br.com.possoler.api.api_posso_ler.api.core_api.model;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "conteudos")
@Data
public class Conteudo {
    
    @Id
    private Integer id;
    @Column(name = "qtdConteudo")
    private Long qtdConteudo;
}
