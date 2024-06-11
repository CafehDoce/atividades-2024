Requisitos Funcionais:
Gerenciamento de Pessoas:

Armazenar informações básicas de pessoas, como nome, idade, etc.
As pessoas podem ser alunos ou professores.
Gerenciamento de Cursos e Disciplinas:

Cada curso tem uma lista de disciplinas associadas.
As disciplinas devem armazenar informações como nome, código, etc.
Matrícula de Alunos:

Os alunos podem ser matriculados em cursos e disciplinas.
Lançamento de Notas:

Os professores devem ser capazes de lançar notas para os alunos em disciplinas específicas.
Cálculo de Médias e Verificação de Aprovação:

O sistema deve calcular a média das notas dos alunos em uma disciplina.
Deve ser possível verificar se um aluno está aprovado em uma disciplina com base em sua média.
Requisitos Não Funcionais:
Polimorfismo:

Utilizar o polimorfismo para criar listas genéricas de pessoas, alunos e professores.
Eficiência:

O sistema deve ser eficiente na recuperação e manipulação de dados, mesmo com um grande número de alunos, professores, cursos e disciplinas.
Estrutura do Sistema:
Classe Pessoa:
Atributos: nome, idade, etc.
Classe Aluno:
Atributos: matrícula, curso(s) matriculado(s), disciplinas matriculadas.
Classe Professor:
Atributos: departamento, disciplinas lecionadas.
Classe Curso:
Atributos: nome, código, lista de disciplinas.
Classe Disciplina:
Atributos: nome, código, professor, lista de alunos matriculados, notas.