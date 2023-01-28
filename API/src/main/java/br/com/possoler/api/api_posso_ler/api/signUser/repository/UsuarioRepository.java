package br.com.possoler.api.api_posso_ler.api.signUser.repository;

import br.com.possoler.api.api_posso_ler.api.signUser.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    public Optional<List<Usuario>> findByHash(String hash);
    public Optional<List<Usuario>> findByHashAndAtivo(String hash, Boolean ativo);
}
