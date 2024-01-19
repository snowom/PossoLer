package br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces;

public interface RespondeAiConnection {

    /**
     * Realiza Requisicao para API do Responde Ai e retorna objeto obtido na requisicao
     * @author snowom
     * @param itemId
     * @param token
     * @return DataBookExerciseResponseDTO
     */
    Object getData(String itemId, String token);

    /**
     * Gera URI de request para API do Responde Aí
     * @author snowon
     * @param exerciseId
     * @return String
     */
    String buildURIRequest(String exerciseId);
}
