package br.com.possoler.api.api_posso_ler.api.paywallDOM.responde_ai.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataCyModel {
    private String format_toggle;
    private String theory_text_content;
    private String theory_video_content;
    private String exercise_answer_button;
    private String exercise_statement;
    private String side_menu;
}
