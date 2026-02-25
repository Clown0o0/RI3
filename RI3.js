function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function() { return this.ddd; };
    this.setDdd = function(valor) { this.ddd = valor; };
    this.getNumero = function() { return this.numero; };
    this.setNumero = function(valor) { this.numero = valor; };
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function() { return this.estado; };
    this.setEstado = function(valor) { this.estado = valor; };
    this.getCidade = function() { return this.cidade; };
    this.setCidade = function(valor) { this.cidade = valor; };
    this.getRua = function() { return this.rua; };
    this.setRua = function(valor) { this.rua = valor; };
    this.getNumero = function() { return this.numero; };
    this.setNumero = function(valor) { this.numero = valor; };
}

function Cliente(nome, cpf, cnpj, endereco) {
    var _cpf = cpf;
    var _cnpj = cnpj;   

    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();

    this.getCpf = function() { return _cpf; };
    this.getCnpj = function() { return _cnpj; };
    this.getNome = function() { return this.nome; };
    this.setNome = function(valor) { this.nome = valor; };
    this.getEndereco = function() { return this.endereco; };
    this.setEndereco = function(valor) { this.endereco = valor; };

    this.adicionarTelefone = function(telefone) {
        this.telefones.add(telefone);
    };
}

function Empresa(razaoSocial, nomeFantasia, cnpj, endereco) {
    var _cnpj = cnpj;

    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.endereco = endereco;
    this.clientes = new Set();
    this.telefones = new Set();

    this.getCnpj = function() { return _cnpj; };
    this.getRazaoSocial = function() { return this.razaoSocial; };
    this.setRazaoSocial = function(valor) { this.razaoSocial = valor; };
    this.getNomeFantasia = function() { return this.nomeFantasia; };
    this.setNomeFantasia = function(valor) { this.nomeFantasia = valor; };
    this.getEndereco = function() { return this.endereco; };
    this.setEndereco = function(valor) { this.endereco = valor; };

    this.adicionarCliente = function(cliente) {
        this.clientes.add(cliente);
    };

    this.adicionarTelefone = function(telefone) {
        this.telefones.add(telefone);
    };

    this.detalhe = function() {
        var texto = "Razão Social:  " + this.razaoSocial + "\n";
        texto += "Nome fantasia:  " + this.nomeFantasia + "\n";
        texto += "============================================\n\n";

        this.clientes.forEach(function(cliente) {
            texto += "Nome:          " + cliente.getNome() + "\n";
            texto += "CPF:           " + cliente.getCpf() + "\n";
            texto += "CNPJ:          " + cliente.getCnpj() + "\n";

            var end = cliente.getEndereco();
            texto += "Endereço:      " + end.getRua() + ", " + end.getNumero() + " - " +
                     end.getCidade() + " / " + end.getEstado() + "\n";

            cliente.telefones.forEach(function(tel) {
                texto += "Telefone:      (" + tel.getDdd() + ") " + tel.getNumero() + "\n";
            });

            texto += "============================================\n\n";
        });

        return texto;
    };
}

let endEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrómeda", "123");
let telEmpresa1 = new Telefone("12", "999999999");
let telEmpresa2 = new Telefone("12", "888888888");

let empresa = new Empresa("ABC LTDA", "Mercado Peixes GLUB GLUB", "12.345.678/0001-99", endEmpresa);
empresa.adicionarTelefone(telEmpresa1);
empresa.adicionarTelefone(telEmpresa2);

let end1 = new Endereco("SP", "São José dos Campos", "Av Andrómeda", "456");
let cliente1 = new Cliente("Rudolph Claus", "111.111.111-11", "11.222.333/0001-44", end1);
cliente1.adicionarTelefone(new Telefone("12", "99999999"));
cliente1.adicionarTelefone(new Telefone("12", "88888888"));
empresa.adicionarCliente(cliente1);

let end2 = new Endereco("SP", "São Paulo", "Av. Paulista", "789");
let cliente2 = new Cliente("Vinicius Lopez", "222.222.222-22", "22.333.444/0001-55", end2);
cliente2.adicionarTelefone(new Telefone("21", "88888888"));
cliente2.adicionarTelefone(new Telefone("21", "77777777"));
empresa.adicionarCliente(cliente2);

let end3 = new Endereco("SP", "São José dos Campos", "Av São João", "1011");
let cliente3 = new Cliente("Isabelo Submarino", "333.333.333-33", "33.444.555/0001-66", end3);
cliente3.adicionarTelefone(new Telefone("12", "77777777"));
cliente3.adicionarTelefone(new Telefone("12", "66666666"));
empresa.adicionarCliente(cliente3);

let end4 = new Endereco("SP", "São José dos Campos", "Av Andrómeda", "1213");
let cliente4 = new Cliente("Igor Martinhos", "444.444.444-44", "44.555.666/0001-77", end4);
cliente4.adicionarTelefone(new Telefone("12", "66666666"));
cliente4.adicionarTelefone(new Telefone("12", "55555555"));
empresa.adicionarCliente(cliente4);

let end5 = new Endereco("SP", "São José dos Campos", "Av Andrómeda", "1415");
let cliente5 = new Cliente("Vinicius Konochi", "555.555.555-55", "55.666.777/0001-88", end5);
cliente5.adicionarTelefone(new Telefone("12", "55555555"));
cliente5.adicionarTelefone(new Telefone("12", "44444444"));
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe());
console.log("Total de clientes: " + empresa.clientes.size);