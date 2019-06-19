# A3HRGO-SERVICE


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
