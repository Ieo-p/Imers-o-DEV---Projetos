var listaFilmes = [
  "https://lumiere-a.akamaihd.net/v1/images/eternals_ka_pay1_brpo_92b0a4dd.jpeg",
  "https://img.elo7.com.br/product/original/3E882CA/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-1-poster-geek.jpg",
  "https://assets-prd.ignimgs.com/2021/08/09/dune-insta-vert-main-dom-1638x2048-1628522913715.jpg",
  "https://img.elo7.com.br/product/original/3FBBEDD/big-poster-filme-batman-2022-90x60-cm-lo006-poster.jpg",
  "https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg",
  "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
  "https://t.ctcdn.com.br/3MGgsjMA6hfYH5XVtPOgH1FnZrI=/1024x0/smart/i547704.jpeg",
  "https://images-na.ssl-images-amazon.com/images/I/81SYzIG8oFL.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2f52fe0b7fb492c34572bd142ecaecb15885a28a924a938f009ba1c57da38496._RI_V_TTW_.jpg",
  "https://img.elo7.com.br/product/original/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg",
  "https://www.themoviedb.org/t/p/original/vL6Yv0rtxvgt4hqcPYWtK1vGF3D.jpg",
  "https://assets-prd.ignimgs.com/2021/08/09/witcher-1628509288841.jpg"
];

function adicionar() {
  //document.getElementById("lista").innerHTML += "<img src=" + document.getElementById("adicionar").value + ">";

  var poster = document.createElement("img");

  poster.src = document.getElementById("adicionar").value;

  document.getElementById("lista").appendChild(poster);
}

for (var i = 0; i < listaFilmes.length; i++) {
  //document.getElementById("lista").innerHTML += "<img src=" + listaFilmes[i] + ">";

  poster = document.createElement("img");

  poster.src = listaFilmes[i];

  document.getElementById("lista").appendChild(poster);
}
