import promptSync from "prompt-sync";
const prompt = promptSync();
function cadastrarUsuario() {
    const nome = prompt("Digite o seu nome completo: ");
    const idade = parseInt(prompt("Digite a sua idade: "));
    const cpf = prompt("Digite o seu CPF: ");
    const dataNascimento = prompt("Digite a sua data de nascimento dd/mm/aaaa: ");
    return { nome, idade, cpf, dataNascimento };
}
function listarUsuarios(usuarios) {
    console.log("===== USUÁRIOS CADASTRADOS =====\n");
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado ainda.");
        return;
    }
    usuarios.forEach((u, i) => {
        console.log(`[${i + 1}] ${u.nome}`);
        console.log(`    Idade: ${u.idade}`);
        console.log(`    CPF: ${u.cpf}`);
        console.log(`    Nascimento: ${u.dataNascimento}`);
        console.log("-".repeat(40));
    });
    console.log(`\nTotal: ${usuarios.length} usuário(s)`);
}
function buscarIndicePorCpf(usuarios, cpf) {
    return usuarios.findIndex((u) => u.cpf === cpf);
}
function editarUsuario(usuarios) {
    const cpf = prompt("Digite o CPF do usuário que deseja editar: ");
    const index = buscarIndicePorCpf(usuarios, cpf);
    if (index === -1) {
        console.log("Usuário não encontrado.");
        return;
    }
    console.log("Deixe em branco para manter o valor atual.");
    const nome = prompt(`Nome (${usuarios[index].nome}): `);
    const idadeStr = prompt(`Idade (${usuarios[index].idade}): `);
    const dataNascimento = prompt(`Data de nascimento (${usuarios[index].dataNascimento}): `);
    if (nome)
        usuarios[index].nome = nome;
    if (idadeStr)
        usuarios[index].idade = parseInt(idadeStr);
    if (dataNascimento)
        usuarios[index].dataNascimento = dataNascimento;
    console.log("Usuário atualizado com sucesso!");
}
function excluirUsuario(usuarios) {
    const cpf = prompt("Digite o CPF do usuário que deseja excluir: ");
    const index = buscarIndicePorCpf(usuarios, cpf);
    if (index === -1) {
        console.log("Usuário não encontrado.");
        return;
    }
    usuarios.splice(index, 1);
    console.log("Usuário excluído com sucesso!");
}
function exibirMenu() {
    console.log("===== MENU =====");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Editar usuário");
    console.log("4 - Excluir usuário");
    console.log("5 - Sair");
    console.log("================\n");
}
function pausar() {
    prompt("\nPressione Enter para continuar...");
}
function iniciarMenu(usuarios) {
    let sair = false;
    while (!sair) {
        console.clear();
        exibirMenu();
        const opcao = prompt("Escolha uma opção: ");
        console.log();
        switch (opcao) {
            case "1":
                usuarios.push(cadastrarUsuario());
                console.log("\n✅ Usuário cadastrado com sucesso!");
                pausar();
                break;
            case "2":
                listarUsuarios(usuarios);
                pausar();
                break;
            case "3":
                editarUsuario(usuarios);
                pausar();
                break;
            case "4":
                excluirUsuario(usuarios);
                pausar();
                break;
            case "5":
                sair = true;
                console.clear();
                console.log("Saindo... até logo!");
                break;
            default:
                console.log("⚠️  Opção inválida. Tente novamente.");
                pausar();
        }
    }
}
function main() {
    const usuarios = [];
    iniciarMenu(usuarios);
}
main();
