<!DOCTYPE html>
 <html>
 
 <head>
         <meta charset="utf-8"/>
         <title>Jornada Brasil - Norte</title>
         <link rel="stylesheet" type ="text/css" href="bootstrap/css/bootstrap.min.css">
         <meta name="viewpoint" content="width=device-width, initial-scale=1">
         <link rel="stylesheet" type ="text/css" href="style.css">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

         
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
 
         <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover" onChange="test()">
          <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
      
          <div class="carousel-inner">
            
              <div class="carousel-item active">
                  <!-- modelar a img do slide <img class="d-block w-100" style="height: auto; max-width: 100%" src="imagem/slide1.jpg" alt="Ponto turistico y">-->
                <img class="d-block img-fluid" src="imagem/slide2.jpg" src="imagem/slide1.jpg" alt="Ponto turistico y">
              </div>
      
              <div class="carousel-item">
                <!-- <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Segundo Slide" alt="Segundo Slide"> -->
                <img  class="d-block img-fluid" src="imagem/slide2.jpg" alt="Ponto turistico x">
              </div>
      
              <div class="carousel-item">
                  <!--<img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Terceiro Slide" alt="Terceiro Slide"> -->
                <img class="d-block img-fluid" src="imagem/slide3.jpg"  alt="Comida">
              </div>
          </div>
          
            <a class="carousel-control-prev carousel-control" href="#carousel" role="button" data-slide="prev" onclick="return;">
              <span class="carousel-control-prev-icon" aria-hidden="false"></span>
              <span class="sr-only">Anterior</span>
            </a>
      
            <a class="carousel-control-next carousel-control" href="#carousel" role="button" data-slide="next"  onclick="return;">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Próximo</span>
            </a>
      
        </div>

 
         <main>
          <div class="jumbotron">
            <div class="container">
                <h2>Região Norte</h2>
                <p>O norte do Brasil engloba os estados de Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins. A floresta tropical da Amazónia, célebre pela sua biodiversidade, abrange a maior parte da região. No estado do Amazonas, a cidade de Manaus encontra-se nas margens do Rio Negro e, por vários quilómetros, a água escura desse rio corre junto à água clara do rio Solimões, no denominado Encontro das Águas. Mais à frente, formam o rio Amazonas.</p>
                <p>Venham conhecer os lugares mais bonitos e suculentos da região sul. Conhecer a cultura, comida, bebidas e danças</p>
            
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
     
        <!-- FOOTER -->
      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2021 Grupo 3, Gama Academy. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>

      
       </main>
         
     </body>
 </html>
 

<!-- arq style.css
    #paineis-sobre{
    margin-top: 20px;
}

    .col-md-6{
    padding-right: 133px !important;
 }

} -->
                                
                                
