package br.com.possoler.api.api_posso_ler.api.core_api.repository;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.SiteAccessDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.DadosAcesso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DadosAcessoRepository extends JpaRepository<DadosAcesso, Long> {
    @Query(value = "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 1 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 2 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 3 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 4 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 5 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 6 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 7 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 8 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 9 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 10 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 11 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 12 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 13 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 14 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 15 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 16 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 17 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 18 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 19 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 20 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 21 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 22 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 23 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 24 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 25 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 26 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 30 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 31 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 32 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 33 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 34 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 35 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 36 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 37 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 38 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 39 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 40 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 41 UNION ALL\n" +
            "SELECT st.nome, COUNT(da.codigo_site) as acessos FROM dados_acesso as da inner join sites as st on st.id = da.codigo_site where da.codigo_site = 42 order by 2 desc", nativeQuery = true)
    Optional<List<SiteAccessDTO>> findByCodigoSite();
}