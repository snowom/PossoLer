package br.com.possoler.api.api_posso_ler.site.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PagManutencaoController {

    @GetMapping("${view.pagmanutencao}")
    private ModelAndView pagManutencao() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pagManutencaoPac");
        return mv;
    }
}
