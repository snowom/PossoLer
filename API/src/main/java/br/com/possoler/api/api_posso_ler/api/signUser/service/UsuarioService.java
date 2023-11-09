package br.com.possoler.api.api_posso_ler.api.signUser.service;

import br.com.possoler.api.api_posso_ler.api.signUser.model.Usuario;
import br.com.possoler.api.api_posso_ler.api.signUser.repository.UsuarioRepository;
import exceptions.NotFoundException;
import exceptions.ServerErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class UsuarioService{

    @Autowired
    UsuarioRepository usuarioRepository;

    public void insereUsuario(String userHash, String userCode) {
        Usuario user = Usuario.builder()
            .hash(userHash)
            .codigo(userCode)
            .ativo(false)
            .build();
        usuarioRepository.save(user);
    }

    public HashMap<String, String> isUniqueUser(String hash) {
        HashMap<String, String> response = new HashMap<>();
        List<Usuario> usuarios = buscaUsuariosPorHash(hash);

        switch (usuarios.toArray().length) {
            case 0 -> {
                response.put("message", "hash inválido");
                response.put("status", "falha");
            }
            case 1 -> {
                response.put("message", "autentica");
                response.put("status", "sucesso");
            }
            default -> {
                response.put("message", "copia");
                response.put("status", "falha");
            }
        }
        return response;
    }

    private List<Usuario> buscaUsuariosPorHash(String hash) {
        return usuarioRepository.findByHash(hash)
            .orElseThrow(() -> new ServerErrorException("falha ao localizar usuário"));
    }

    public void activeUser(String hash) {
        List<Usuario> usuarios = findUserByHashAndAtivo(hash, false);
        switch (usuarios.toArray().length) {
            case 0 -> throw new NotFoundException("chave inválida!");
            case 1 -> {
                Usuario usuario = usuarios.get(0);
                usuario.setAtivo(true);
                usuarioRepository.save(usuario);
            }
            default -> throw new ServerErrorException("hash duplicado!");
        }
    }

    private List<Usuario> findUserByHashAndAtivo(String hash, Boolean ativo) {
        return usuarioRepository.findByHashAndAtivo(hash, ativo)
            .orElseThrow(() -> new ServerErrorException("falha ao localizar usuário"));
    }
}
