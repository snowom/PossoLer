package br.com.possoler.api.api_posso_ler.api.respondeai_api.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConnectionConfig {

    @Bean
    public void allowRestrictedHeaders() {
        System.setProperty("sun.net.http.allowRestrictedHeaders", "true");
    }
}
