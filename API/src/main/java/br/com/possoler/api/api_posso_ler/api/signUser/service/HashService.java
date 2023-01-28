package br.com.possoler.api.api_posso_ler.api.signUser.service;

import br.com.possoler.api.api_posso_ler.api.core_api.service.DownloadService;
import lombok.Getter;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

@Service
public class HashService {

    @Autowired
    DownloadService downloadService;

    @Getter
    private String userCode;

    public String generateHash() {
        this.userCode = this.mountUserCode();
        return DigestUtils.sha3_256Hex(this.userCode);
    }

    private String mountUserCode() {
        Integer quantidadeDownloads = this.getQuantidadeDownloads();
        String currentDate = this.getCurrentDateOrTime("dd/MM/yyyy");
        String currentTime = this.getCurrentDateOrTime("HH:mm:ss");
        Integer randomCode = this.generateRandomCode();
        return quantidadeDownloads.toString() + "~" + currentDate + "~" + currentTime + "~" + randomCode;
    }

    private Integer generateRandomCode() {
        Random random = new Random();
        return random.nextInt();
    }

    private String getCurrentDateOrTime(String pattern) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern(pattern);
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }

    private Integer getQuantidadeDownloads() {
        return downloadService.getDownloadEntity().getQtd() + 1;
    }
}
