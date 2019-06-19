# A3HRGO-SERVICE

## START

Just code in your terminal
```
npm run start
```

## ENDPOINTS

```
POST http://localhost:8000/login
{
    nif
    , password
}

//if all its ok
{
    "response": {
        "ok": true,
        "message": "Login OK"
    }
}

//else
{
    "response": {
        "ok": false,
        "message": "Login KO"
    }
}
```
