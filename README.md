# solid-rest-api
- Una API Rest simples utilizando Typescript y principios de S.O.L.I.D, fue configurado Jest y Eslint para validación de código y pruebas unitarias.

## Ejecutar en Docker
- Copiar o Renomear el archivo `.env.example` para `.env` y definir valores para cada variable
- `docker-compose -f docker-compose.yml up -d --build`

# Endpoints de la API
- [GET] http://localhost:3000/users (Obtiene el listado de usuarios)
- [POST] http://localhost:3000/users (Registra un usuario)
  - JSON `{"email":"nedstark@example.local","password":"123456","name":"Ned Stark"}`
- [POST] http://localhost:3000/auth (Obtiene un token Bearer para autenticación)
  - JSON `{"email":"nedstark@example.local","password":"123456","name":"Ned Stark"}`
- [POST] http://localhost:3000/token (Obtiene un nuevo token a partir del refresh token)
  - JSON `{"token":"REFRESH TOKEN"}`
- [PUT] http://localhost:3000/users (ALTERA UN USUARIO) REQUIERE AUTENTICACIÓN !!!
  - JSON `{"email":"nedstark@example.local","password":"123456","name":"Ned Stark"}`
- [DELETE] http://localhost:3000/users (ELIMINA UN USUARIO) REQUIERE AUTENTICACIÓN !!!
  - JSON `{"_id":"ID DEL USUARIO"}`
