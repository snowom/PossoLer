package br.com.possoler.api.api_posso_ler.api.core_api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "downloads")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Download {
    
    @Id
    private Integer id;
    private Integer qtd;
}
