package br.com.possoler.api.api_posso_ler.site.controller;

import br.com.possoler.api.api_posso_ler.site.service.PageCopyHashService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin(origins = "*")
public class PagCopyHashController {

    @Autowired
    PageCopyHashService pageCopyHashService;

    @GetMapping("${view.copyGenHashPage}")
    public ModelAndView copyHash(
        Model model,
        @RequestParam String hash
    ) {
        ModelAndView mv = new ModelAndView();
        pageCopyHashService.factoryElement(HomeController.homeLanguage, model);
        pageCopyHashService.setUserKey(model, hash);
        mv.setViewName("pagCopyHash");
        return mv;
    }
}
