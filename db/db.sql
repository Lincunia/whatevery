CREATE TABLE users (
	id SMALLSERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CRRENT_TIMESTAMP
);
/* Estas inserciones fueron creadas con chatgpt */
INSERT INTO users (name, email) VALUES
('Carlos Pérez', 'carlos.perez@email.com'),
('Ana Martínez', 'ana.martinez@email.com'),
('Luis Gómez', 'luis.gomez@email.com'),
('María Rodríguez', 'maria.rodriguez@email.com'),
('Juan Fernández', 'juan.fernandez@email.com'),
('Laura Sánchez', 'laura.sanchez@email.com'),
('Pedro López', 'pedro.lopez@email.com'),
('Marta García', 'marta.garcia@email.com'),
('Javier González', 'javier.gonzalez@email.com'),
('Claudia Ruiz', 'claudia.ruiz@email.com');
