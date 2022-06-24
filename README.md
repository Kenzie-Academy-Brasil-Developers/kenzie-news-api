## API Reference

#### Get all items

```http
  GET /api/news
```

## exemplo: https://kenzie-news-api.herokuapp.com/api/news

## retorno:

```json
[
	{
		"id": 1,
		"titulo": "Supostos crimes no MEC foram cometidos com o respaldo de Milton Ribeiro, diz MPF",
		"resumo": "Procuradora Carolina de Oliveira afirma que provas obtidas apontam para a existência de uma organização criminosa dentro do Ministério da Educação",
		"noticia_completa": "https://jovempan.com.br/noticias/politica/supostos-crimes-no-mec-foram-cometidos-com-o-respaldo-de-milton-ribeiro-diz-mpf.html",
		"categoria": "Politica",
		"fonte": "JP news",
		"imagem": "https://jpimg.com.br/uploads/2020/12/lja20201028002.jpg"
	},
	{
		"id": 2,
		"titulo": "Zé Neto se afasta dos palcos novamente e Cristiano assume shows",
		"resumo": "Cantor apresentou um quadro de tosse, segundo informação confirmada pela assessoria de imprensa",
		"noticia_completa": "https://www.metropoles.com/colunas/leo-dias/ze-neto-se-afasta-dos-palcos-novamente-e-cristiano-assume-shows",
		"categoria": "Entretenimento",
		"fonte": "Metrópoles",
		"imagem": "https://uploads.metropoles.com/wp-content/uploads/2021/12/27133040/Design-sem-nome-100-2-600x400.jpg"
	},
	{
		"id": 3,
		"titulo": "Silmara Souza é a nova CMO da Kenzie Academy Brasil ",
		"resumo": "A executiva acumula 15 anos de experiência em branding e comunicação digital",
		"noticia_completa": "https://www.metropoles.com/colunas/m-buzz/silmara-souza-e-a-nova-cmo-da-kenzie-academy-brasil",
		"categoria": "Négocios",
		"fonte": "Metrópoles",
		"imagem": "https://uploads.metropoles.com/wp-content/uploads/2022/06/14143634/unnamed-3-1-4-600x400.jpg"
	}
]
```


#### Get item

```http
  GET /api/items/id
```

## exemplo: https://kenzie-news-api.herokuapp.com/api/news/3

## retorno:

```json
{
	"id": 3,
	"titulo": "Silmara Souza é a nova CMO da Kenzie Academy Brasil ",
	"resumo": "A executiva acumula 15 anos de experiência em branding e comunicação digital",
	"noticia_completa": "https://www.metropoles.com/colunas/m-buzz/silmara-souza-e-a-nova-cmo-da-kenzie-academy-brasil",
	"categoria": "Négocios",
	"fonte": "Metrópoles",
	"imagem": "https://uploads.metropoles.com/wp-content/uploads/2022/06/14143634/unnamed-3-1-4-600x400.jpg"
}
```
