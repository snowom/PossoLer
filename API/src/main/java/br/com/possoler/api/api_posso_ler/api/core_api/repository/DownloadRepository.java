package br.com.possoler.api.api_posso_ler.api.core_api.repository;

import br.com.possoler.api.api_posso_ler.api.core_api.model.Download;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DownloadRepository extends JpaRepository<Download, Integer> {
    
}
