package br.com.possoler.api.api_posso_ler.site.controller;

import br.com.possoler.api.api_posso_ler.site.service.PagRespaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin(origins = "*")
public class PagRespaiController {

    @Autowired
    PagRespaiService pagRespaiService;

    @GetMapping("${view.respaiAlertPage}")
    public ModelAndView pagRespai(Model model) {
        ModelAndView mv = new ModelAndView();
        pagRespaiService.factoryElement(HomeController.homeLanguage, model);
        mv.setViewName("pagRespai");
        return mv;
    }
}
