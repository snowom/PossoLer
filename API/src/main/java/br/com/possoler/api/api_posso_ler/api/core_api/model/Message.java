package br.com.possoler.api.api_posso_ler.api.core_api.model;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    
    private String msg;
    private Integer time;
}
