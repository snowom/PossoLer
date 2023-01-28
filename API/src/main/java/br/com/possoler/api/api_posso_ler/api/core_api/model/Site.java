package br.com.possoler.api.api_posso_ler.api.core_api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "sites")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Site {
    
    @Id
    private Integer id;
    @Column
    private String nome;
    @Column
    private String corTema;
}
