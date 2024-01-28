# currency-exchange

Telegram bot and dashboard that show current UAH exchange rate

# Start the project

## It's recommended to run using `docker compose`

```
docker compose up -d
```

## Alternatively we can start it using `uvicorn`:

### Start the backend

```
cd api
uvicorn src.main:app --reload  --port 3000
```

### Start the ui

```
cd ui
npm run dev
```

Urls:

- http://127.0.0.1:3000 - backend
- http://127.0.0.1:8020 - ui
