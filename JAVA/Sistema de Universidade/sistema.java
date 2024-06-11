import java.util.ArrayList;
import java.util.List;

class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters e Setters
}

class Aluno extends Pessoa {
    private String matricula;
    private List<Disciplina> disciplinasMatriculadas;

    public Aluno(String nome, int idade, String matricula) {
        super(nome, idade);
        this.matricula = matricula;
        this.disciplinasMatriculadas = new ArrayList<>();
    }

    // Métodos para matricular em disciplinas, lançar notas, calcular médias, etc.
}

class Professor extends Pessoa {
    private String departamento;
    private List<Disciplina> disciplinasLecionadas;

    public Professor(String nome, int idade, String departamento) {
        super(nome, idade);
        this.departamento = departamento;
        this.disciplinasLecionadas = new ArrayList<>();
    }

    // Métodos para lançar notas, etc.
}

class Curso {
    private String nome;
    private String codigo;
    private List<Disciplina> disciplinas;

    public Curso(String nome, String codigo) {
        this.nome = nome;
        this.codigo = codigo;
        this.disciplinas = new ArrayList<>();
    }

    // Métodos para adicionar disciplinas, etc.
}

class Disciplina {
    private String nome;
    private String codigo;
    private Professor professor;
    private List<Aluno> alunosMatriculados;

    public Disciplina(String nome, String codigo, Professor professor) {
        this.nome = nome;
        this.codigo = codigo;
        this.professor = professor;
        this.alunosMatriculados = new ArrayList<>();
    }

    // Métodos para matricular alunos, lançar notas, calcular médias, etc.
}
