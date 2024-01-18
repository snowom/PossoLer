package br.com.possoler.api.api_posso_ler.api.respondeai_api.constants;

import lombok.Getter;

public abstract class Request {
    public final static String DOMAIN_REQUEST = "https://content.respondeai.com.br";

    public final static String BOOK_EXERCISE_ENDPOINT_REQUEST = "/api/v2/books/bookExercise/";
    public final static String THEORY_ENDPOINT = "/api/v2/theories/";
    public final static String FIXATION_EXERCISE_ENDPOINT = "/api/v2/exercises/";

    public final static String LIST_EXERCISE_OPERATION_NAME = "listExercise";
    public final static String LIST_EXERCISE_OPERATION_QUERY = "query listExercise($id: ID!) {listExercise(id: $id) {id lightSolution videos {id provider providerId __typename} __typename}}";


    public final static String  OPERATION_BOOK_EXERCISE = "getBookExercise";
    public final static String  OPERATION_LIST_EXERCISE = "getListExercise";
}

