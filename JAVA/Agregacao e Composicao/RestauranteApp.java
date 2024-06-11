import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Cliente {
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private String endereco;

    public Cliente(String nome, String cpf, Date dataNascimento, String endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    // Getters e Setters
    // Implemente conforme necessário
}

class Prato {
    private String nome;
    private double preco;

    public Prato(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Getters e Setters
    // Implemente conforme necessário
}

class Pedido {
    private Date dataPedido;
    private List<Prato> pratos;
    private double valorTotal;
    private Cliente cliente;

    public Pedido(Date dataPedido, Cliente cliente) {
        this.dataPedido = dataPedido;
        this.cliente = cliente;
        this.pratos = new ArrayList<>();
        this.valorTotal = 0.0;
    }

    public void adicionarPrato(Prato prato) {
        this.pratos.add(prato);
        this.valorTotal += prato.getPreco();
    }

    // Getters e Setters
    // Implemente conforme necessário
}

class Mesa {
    private int numeroMesa;
    private int lugares;
    private boolean ocupada;

    public Mesa(int numeroMesa, int lugares) {
        this.numeroMesa = numeroMesa;
        this.lugares = lugares;
        this.ocupada = false;
    }

    // Getters e Setters
    // Implemente conforme necessário
}

public class RestauranteApp {
    public static void main(String[] args) {
        // Exemplo de uso das classes
        Cliente cliente1 = new Cliente("João", "12345678901", new Date(), "Rua A, 123");
        Cliente cliente2 = new Cliente("Maria", "98765432109", new Date(), "Rua B, 456");

        Prato prato1 = new Prato("Pizza", 25.0);
        Prato prato2 = new Prato("Salada", 15.0);

        Pedido pedido1 = new Pedido(new Date(), cliente1);
        pedido1.adicionarPrato(prato1);
        pedido1.adicionarPrato(prato2);

        Mesa mesa1 = new Mesa(1, 4);
        mesa1.setOcupada(true);
    }
}
