package br.com.possoler.api.api_posso_ler.site.interfaces;

public interface PreventNullLanguage {

    /**
     * Se language for null, então essa funcao deve retornar o valor de um idioma;
     * @param language
     * @return String
     */
    public String preventNullLanguage(String language);
}
