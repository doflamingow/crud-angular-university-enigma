package com.enigma.enigma_university_boot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DataNotFoundException extends RuntimeException {

    //    public DataNotFoundException(String id, String className){
//        String message = "Resource %s with ID: $s Not FOUND";
//        super(String.format(message, id, className));
//    }
    public static final String NOT_FOUND_MESSAGE = "Resource %s with ID: %s Not FOUND";

    public DataNotFoundException(String message) {
        super(message);
    }
}
