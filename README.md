
# porto-e-reis-foundations

## Docker (produção)

Este projeto é buildado com Vite e servido como SPA via Nginx.

### Subir com Docker Compose

```bash
docker compose up --build
```

Abra:

- http://localhost:8235

### Observações

- A porta interna e externa é `8235` (configurada no Nginx e no `docker-compose.yml`).
- Rotas do React Router funcionam via fallback para `index.html` (config em `nginx/default.conf`).

