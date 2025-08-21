document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpeg' },
    { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpeg' },
    { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpeg' },
    { name: 'Luan Santana', image: './img/artista-luan-santana.jpeg' },
    { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpeg' }
  ];

  const albumsData = [
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpeg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpeg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpeg' },
  ];

  const artistGrid = document.querySelector('.artist-grid')
  const albumGrid = document.querySelector('.albums-grid')

  artistsData.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="imagem do ${artist.name}">
      <h3>${artist.name}</h3>
      <p>Artista</p>
    `

    artistGrid.appendChild(artistCard)

  });

  albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
      <img src="${album.image}" alt="imagem do album ${album.name}">
      <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      </div>
      `

    albumGrid.appendChild(albumCard)

  });

})