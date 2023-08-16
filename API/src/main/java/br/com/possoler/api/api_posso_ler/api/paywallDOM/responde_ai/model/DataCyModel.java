package br.com.possoler.api.api_posso_ler.api.paywallDOM.responde_ai.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataCyModel {
    private List<String> format_toggle;
    private List<String> theory_text_content;
    private List<String> theory_video_content;
    private List<String> exercise_answer_button;
    private List<String> exercise_statement;
    private List<String> side_menu;
}
