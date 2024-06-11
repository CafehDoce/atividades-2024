import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Usuario {
    private String nome;
    private String email;
    private String senha;
    private Date dataNascimento;

    public Usuario(String nome, String email, String senha, Date dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }

    // Getters e Setters
    // Implemente conforme necessário

    public void fazerPostagem(String texto, Date dataPostagem) {
        // Implementação para fazer uma postagem
    }

    public void fazerComentario(Postagem postagem, String texto, Date dataComentario) {
        // Implementação para fazer um comentário em uma postagem
    }
}

class Postagem {
    private String texto;
    private Date dataPostagem;
    private int curtidas;
    private List<Comentario> comentarios;

    public Postagem(String texto, Date dataPostagem) {
        this.texto = texto;
        this.dataPostagem = dataPostagem;
        this.curtidas = 0;
        this.comentarios = new ArrayList<>();
    }

    // Getters e Setters
    // Implemente conforme necessário

    public void adicionarCurtida() {
        this.curtidas++;
    }

    public void adicionarComentario(Comentario comentario) {
        this.comentarios.add(comentario);
    }
}

class Comentario {
    private String texto;
    private Date dataComentario;

    public Comentario(String texto, Date dataComentario) {
        this.texto = texto;
        this.dataComentario = dataComentario;
    }

    // Getters e Setters
    // Implemente conforme necessário
}

class Curtida {
    // Esta classe pode ser simplesmente usada para registrar a curtida, ou conter mais informações
    // como o usuário que deu a curtida, a postagem curtida, etc.
}

public class RedeSocialApp {
    public static void main(String[] args) {
        // Exemplo de uso das classes
        Usuario usuario1 = new Usuario("João", "joao@email.com", "senha123", new Date());
        Usuario usuario2 = new Usuario("Maria", "maria@email.com", "senha456", new Date());

        Postagem postagem1 = new Postagem("Conteúdo da postagem 1", new Date());
        Postagem postagem2 = new Postagem("Conteúdo da postagem 2", new Date());

        usuario1.fazerPostagem("Minha primeira postagem", new Date());
        usuario2.fazerPostagem("Olá mundo!", new Date());

        usuario1.fazerComentario(postagem1, "Comentário na primeira postagem", new Date());

        postagem2.adicionarCurtida();
        postagem2.adicionarCurtida();
        postagem2.adicionarComentario(new Comentario("Comentário na segunda postagem", new Date()));
    }
}