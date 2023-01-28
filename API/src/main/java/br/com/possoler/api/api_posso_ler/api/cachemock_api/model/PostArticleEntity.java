package br.com.possoler.api.api_posso_ler.api.cachemock_api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostArticleEntity {

    private String key;
    private String pageSource;
}
