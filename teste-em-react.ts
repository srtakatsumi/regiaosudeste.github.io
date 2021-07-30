<!DOCTYPE html>
<html>

<head>
        <meta charset="utf-8"/>
        <title>Jornada Brasil - Norte</title>
        <link rel="stylesheet" type ="text/css" href="bootstrap/css/bootstrap.min.css">
        <meta name="viewpoint" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type ="text/css" href="style.css">
        
    </head>

    <body>
        <section class="container">
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Jornada Brasil</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./sul/sul.html">Sul</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../sudeste/sudeste.html">Sudeste</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../nordeste/nordeste.html">Nordeste</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../centrooeste/centrooeste.html">Centro-Oeste</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contato</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search">
                      <button class="btn btn-warning" type="submit">Procurar</button>
                    </form>
                  </div>
                </div>
              </nav>
        </section>

        <div class="jumbotron">
            <div class="container">
                <h2>Região Norte</h2>
                <p>O norte do Brasil engloba os estados de Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins. A floresta tropical da Amazónia, célebre pela sua biodiversidade, abrange a maior parte da região. No estado do Amazonas, a cidade de Manaus encontra-se nas margens do Rio Negro e, por vários quilómetros, a água escura desse rio corre junto à água clara do rio Solimões, no denominado Encontro das Águas. Mais à frente, formam o rio Amazonas.</p>
                <p>Venham conhecer os lugares mais bonitos e suculentos da região sul. Conhecer a cultura, comida, bebidas e danças</p>
            <p><a class="btn btn-primary btn-lg" href="" role="button">Saiba Mais</a></p>    
            </div>
        </div>

        <div class="container-fluid"> 
            <div id="carrosel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner" >
              
                  <div class="carousel-item active">
                    <img src="imagem/slide1.jpg" class="d-block w-100" alt="Ponto turistico y">
                  </div>
              
                  <div class="carousel-item">
                    <img src="imagem/slide2.jpg" class="d-block w-100" alt="Ponto turistico x">
                  </div>
              
                  <div class="carousel-item">
                    <img src="imagem/slide3.jpg" class="d-block w-100" alt="Comida">
                  </div>
                  
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carrosel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carrosel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        

        <section class="container">
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck1">Menor preço</label>
            
                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck2">Maior preço</label>
            
                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck3">Avaliação</label>
            </div>
        </section>

        <section class="container-fluid d-flex flex-wrap">
            <!-- Card Bares e Restaurantes-->
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <img src="imagem/restaurante.jpg" class="card-img-top" alt="Bares e Restaurantes">
                    <div class="card-body">
                        <h5 class="card-title">Bares e Restaurantes</h5>
                        <p class="card-text">Clique e conheça os bares e restaurentes mais badalados.</p>
                        <a href="#" class="btn btn-primary">Saiba mais!</a>
                    </div>
                    </div>
                </div>

            <!-- Card Hoteis-->
                <div class="col">
                    <div class="card">
                        <img src="imagem/hotel.jpg" class="card-img-top" alt="Hoteis">
                        <div class="card-body">
                            <h5 class="card-title">Hoteis</h5>
                            <p class="card-text">Conheças os melhores hoteis da região.</p>
                            <a href="#" class="btn btn-primary">Saiba mais!</a>
                        </div>
                    </div>
                </div>

                <!-- Card Pontos turisticos-->
                    <div class="col">
                        <div class="card">
                            <img src="imagem/pontoturistico.jpg" class="card-img-top" alt="Pontos turisticos">
                            <div class="card-body">
                                <h5 class="card-title">Pontos turisticos</h5>
                                <p class="card-text">Não pode faltar um rolezinho não é mesmo? Vem vamos te mostrar os melhores lugares para tirar algumas fotinhas inesqueciveis.</p>
                                <a href="#" class="btn btn-primary">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </body>
</html>

<!-- arq style.css
    #paineis-sobre{
    margin-top: 20px;
} -->
                                
                                
