package br.com.possoler.api.api_posso_ler.site.controller;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.service.RespondeAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PagResolucaoLivroController {

    @Autowired
    private RespondeAiService respondeAiService;
    @Autowired
    private Environment environment;

    @GetMapping("${view.solvedBookExercisePage}")
    private ModelAndView pagResolucaoLivro(
        Model model,
        @RequestParam(name = "auth") String token,
        @RequestParam String exerciseId
    ) {
        ModelAndView mv = new ModelAndView();
        model.addAttribute("authorization_token", token);
        model.addAttribute("exerciseId", exerciseId);
        model.addAttribute("endpoint", this.environment.getProperty("respondeai-api.endpoint.getData"));
        mv.setViewName("pagResolucaoLivro");
        return mv;
    }
}
