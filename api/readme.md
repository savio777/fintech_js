# my first api with prisma

[video tutorial](https://www.youtube.com/watch?v=nuLTwqPNq-w)

#### passos:
- rodar docker database
- cadastrar banco com nome *fin_bank*

#### docker:

```sh
docker run -ti --name postgres_fin -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -d postgres:latest
```

#### troubleshooting don't connect:

- last line in postgres/pg_hba.conf

```
host all all all md5
```
