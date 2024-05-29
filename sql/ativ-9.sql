--01
CREATE TABLE COLABORADOR (
	ID SERIAL PRIMARY KEY,
	NOME VARCHAR(50),
	FUNCAO VARCHAR(30),
	SALARIO NUMERIC(10,2),
	PISOFUNCAO NUMERIC(10,2)	
);

--02
INSERT INTO COLABORADOR
	(NOME, FUNCAO, SALARIO, PISOFUNCAO)
VALUES
	('João Silva', 'Vendedor', 2500.00, 2000.00),
	('Maria Santos', 'Vendedor', 2600.00, 2000.00),
	('Pedro Oliveira', 'Vendedor Externo', 3000.00, 2200.00),
	('Ana Costa', 'Vendedor Externo', 3100.00, 2200.00),
	('Carlos Pereira', 'Gerente da Loja', 4000.00, 3500.00),
	('Juliana Lima', 'Administrativo', 2800.00, 2500.00),
	('Rafael Souza', 'Administrativo', 2900.00, 2500.00);

--03
UPDATE COLABORADOR
SET SALARIO = SALARIO - (SALARIO * 0.30) -- Corrigido a fórmula para aplicar o desconto corretamente
WHERE FUNCAO IN ('Vendedor', 'Vendedor Externo');

--04
SELECT
	NOME,
	FUNCAO,
    FORMAT(SALARIO, 'C') AS 'Salário Formatado',
    FORMAT(PISOFUNCAO, 'C') AS 'Piso da Função Formatado',
    CASE
        WHEN SALARIO > PISOFUNCAO THEN CONCAT('Salário acima do piso em: ', FORMAT(SALARIO - PISOFUNCAO, 'C'))
        WHEN SALARIO = PISOFUNCAO THEN CONCAT('Salário de acordo com o piso: ', FORMAT(PISOFUNCAO, 'C'))
        ELSE CONCAT('Salário abaixo do piso em: ', FORMAT(PISOFUNCAO - SALARIO, 'C'))
    END AS VERIFICA_PISO
FROM 
    COLABORADOR;