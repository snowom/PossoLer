package br.com.possoler.api.api_posso_ler.site.controller;

import br.com.possoler.api.api_posso_ler.site.service.PagFeriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin(origins = "*")
public class PagFeriasController {

    @Autowired
    PagFeriasService pagFeriasService;

    @GetMapping("${view.vacationPage}")
    public ModelAndView pagFerias(
        Model model
    ) {
        ModelAndView mv = new ModelAndView();
        pagFeriasService.factoryElement(HomeController.homeLanguage, model);
        pagFeriasService.sortLottieAnimation(model);
        mv.setViewName("pagFerias");
        return mv;
    }
}
