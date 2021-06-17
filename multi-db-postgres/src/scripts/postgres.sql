DROP TABLE IF EXISTS herois
CREATE TABLE herois (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  poder TEXT NOT NULL
)

INSERT INTO herois (nome, poder) values 
  ('Flash', 'Velocidade'), 
  ('Batman', 'Dinheiro'), 
  ('Aquaman', 'Falar com peixe')

SELECT * FROM herois
SELECT * FROM herois WHERE nome = 'Flash'

UPDATE herois SET nome = 'Goku', poder = 'Deus' WHERE id = 1

DELETE FROM herois WHERE id = 2
