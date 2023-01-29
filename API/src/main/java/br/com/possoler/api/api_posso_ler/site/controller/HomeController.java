package br.com.possoler.api.api_posso_ler.site.controller;

import br.com.possoler.api.api_posso_ler.site.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @Autowired
    MenuLateralService menuLateralService;
    @Autowired
    HeadService headService;
    @Autowired
    ConteudosService conteudosService;
    @Autowired
    BlocoDownloadService blocoDownloadService;
    @Autowired
    BlocoSobreService blocoSobreService;
    @Autowired
    BlocoDoacoesService blocoDoacoesService;
    @Autowired
    BlocoPerguntasServices blocoPerguntasServices;
    @Autowired
    BlocoTecnologiaService blocoTecnologiaService;
    @Autowired
    BlocoTutorialService blocoTutorialService;
    @Autowired
    BlocoComentarioService blocoComentarioService;
    @Autowired
    FooterService footerService;
    @Autowired
    GlideScriptService glideScriptService;
    @Autowired
    VersaoExtensaoScriptService versaoExtensaoScriptService;
    @Autowired
    InstrucoesDownloadDeskService instrucoesDownloadDeskService;
    @Autowired
    InstrucoesDownloadMobService instrucoesDownloadMobService;
    @Autowired
    CardChangelogService cardChangelogService;
    @Autowired
    CardChaveAcessoService cardChaveAcessoService;
    @Autowired
    IdiomaService idiomaService;

    public static String homeLanguage;

    @GetMapping("${view.homepage}")
    public ModelAndView indexGet(
        Model model,
        String language
    ) {
        ModelAndView mv = new ModelAndView();
        homeLanguage = idiomaService.returnValidLanguage(language);
        menuLateralService.menuLateralFactory(homeLanguage, mv);
        headService.headFactory(homeLanguage, mv);
        conteudosService.conteudoFactory(homeLanguage, mv);
        blocoDownloadService.blocoDownloadFactory(homeLanguage, mv);
        blocoSobreService.blocoSobreFactory(homeLanguage, mv);
        blocoDoacoesService.blocoDoacoesFactory(homeLanguage, mv);
        blocoPerguntasServices.blocoPerguntasFactory(homeLanguage, mv);
        blocoTecnologiaService.blocoTecnologiaFactory(homeLanguage, mv);
        blocoTutorialService.blocoTutorialFactory(homeLanguage, mv);
        blocoComentarioService.blocoComentarioFactory(homeLanguage, mv);
        footerService.footerFactory(homeLanguage, mv);
        versaoExtensaoScriptService.factoryElement(homeLanguage, model);
        glideScriptService.factoryElement(homeLanguage, model);
        instrucoesDownloadDeskService.factoryElement(homeLanguage, model);
        instrucoesDownloadMobService.factoryElement(homeLanguage, model);
        cardChangelogService.factoryElement(homeLanguage, model);
        cardChaveAcessoService.factoryElement(homeLanguage, model);

        mv.setViewName("index");
        return mv;
    }

    @PostMapping("${view.homepage}")
    public ModelAndView indexPost(
            Model model,
            String language
    ) {
        ModelAndView mv = new ModelAndView();
        homeLanguage = idiomaService.returnValidLanguage(language);
        menuLateralService.menuLateralFactory(homeLanguage, mv);
        headService.headFactory(homeLanguage, mv);
        conteudosService.conteudoFactory(homeLanguage, mv);
        blocoDownloadService.blocoDownloadFactory(homeLanguage, mv);
        blocoSobreService.blocoSobreFactory(homeLanguage, mv);
        blocoDoacoesService.blocoDoacoesFactory(homeLanguage, mv);
        blocoPerguntasServices.blocoPerguntasFactory(homeLanguage, mv);
        blocoTecnologiaService.blocoTecnologiaFactory(homeLanguage, mv);
        blocoTutorialService.blocoTutorialFactory(homeLanguage, mv);
        blocoComentarioService.blocoComentarioFactory(homeLanguage, mv);
        footerService.footerFactory(homeLanguage, mv);
        versaoExtensaoScriptService.factoryElement(homeLanguage, model);
        glideScriptService.factoryElement(homeLanguage, model);
        instrucoesDownloadDeskService.factoryElement(homeLanguage, model);
        instrucoesDownloadMobService.factoryElement(homeLanguage, model);
        cardChangelogService.factoryElement(homeLanguage, model);
        cardChaveAcessoService.factoryElement(homeLanguage, model);

        mv.setViewName("index");
        return mv;
    }
}
