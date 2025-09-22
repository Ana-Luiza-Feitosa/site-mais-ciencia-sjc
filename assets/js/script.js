'use strict';
/*navbar alternar*/
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElement = [navOpenBtn, navCloseBtn];

function abreNavbar(){
    navbar.classList.toggle("active");
}

for(let i=0; i< navElement.length;i++){
    navElement[i].addEventListener("click", abreNavbar);
}

const mql = window.matchMedia('(min-width: 992px)');
const normalize = e => { if (e.matches) navbar.classList.remove('active'); };
mql.addEventListener('change', normalize);
normalize(mql);



//MAPA

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado, inicializando mapa...');
  const mapEl = document.getElementById('map');
  if (!mapEl) {
    console.error('Elemento #map não encontrado!');
    return;
  }


  const map = L.map('map', { zoomControl: true }).setView([-23.2237, -45.9009], 12);



  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  console.log('Tiles adicionados ao mapa');

    const EE = 'Escola Estadual';
    const EEMI = 'Escola Estadual de Ensino Médio Integral';
    const EMEFI = 'Escola Municipal de Ensino Fundamental';

  //marcadores
  const locais = [
    { lat: -23.2542, lng: -45.8309, title: 'E.E Profª Edera Irene Pereira de Oliveira Cardoso', desc: EE},
    { lat:-23.1832, lng:-45.85384215937995, title: 'E.E Prof Francisco Pereira da Silva', desc: EE},
    { lat:-23.232765173070007, lng:-45.88266196306696, title: 'E.E Prof Joaquim Andrade Meirelles', desc: EE},
    { lat: -23.21060996564758, lng:-45.779386689207726, title: 'E.E Prof José Antônio Coutinho Condino', desc: String(EE) },
    { lat:-23.224442707813452 , lng: -45.89931271997676, title: 'E.E Profª Maria Dolores Verissimo Madureira', desc:EE  },
    { lat: -23.24731225075198, lng:-45.91725691889215, title: 'E.E Profª Nelson do Nascimento Monteiro', desc: EEMI},
    { lat:-23.201569617581992, lng: -45.857320761223484 , title: 'E.E Prof Pedro Mazza', desc: EE},
    { lat:-23.200395911718253 , lng:-45.88287707471905, title: 'EMEFI Profª Áurea Cantinho Rodrigues', desc: EMEFI },
    { lat:-23.201085467357863 , lng: -45.78442820170978, title: 'EMEFI Prof Antonio Palma Sobrinho', desc: EMEFI },
    { lat:-23.159266294133396 , lng:  -45.91533438797507, title: 'EMEFI Prof Dosulina Chenque Chaves de Andrade', desc: EMEFI},
    { lat: -23.16815135233288 , lng:-45.78989473401002, title: 'EMEFI Prof Emmanuel Antonio dos Santos', desc: EMEFI},
    { lat:-23.28903408568376 , lng:-45.898274487971634, title: 'EMEFI Prof Helio Walter Bevilacqua', desc:EMEFI },
    { lat:-23.175327880844353 , lng:-45.84749158797443, title: 'EMEFI Profª Ilga pusplatais', desc: EMEFI },
    { lat:-23.131647019768522 , lng: -45.76551187633831, title: 'EMEFI Prof Luiz Leite', desc: EMEFI },
    { lat: -23.224640349925053, lng: -45.82019478982705, title: 'EMEFI Profª Luiza Maria Cavalcanti Guratti', desc: EMEFI },
    { lat:-23.18759107094479,lng: -45.868852289828254, title: 'EMEFI Profª Maria Aparecida Santos Ronconi', desc:  EMEFI},
    { lat:-23.13609170060976,  lng:  -45.77517240702835, title: 'EMEFI Prof Possidônio José de Freitas - SJC/SP', desc: EMEFI },
    { lat:-23.17026613719201 , lng: -45.778364632156034, title: 'EMEFI Profª Rosa Tomita', desc: EMEFI },
    { lat:-23.211311552048393 , lng: -45.780276447499936, title: 'EMEFI Profª Terezinha Araujo', desc: EMEFI  }
  ];

  const myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const bounds = [];
  locais.forEach(p => {
    L.marker([p.lat, p.lng], { title: p.title, icon: myIcon })
      .addTo(map)
      .bindPopup(`<b>${p.title}</b><br>${p.desc}`);
    bounds.push([p.lat, p.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }

  setTimeout(() =>  map.invalidateSize(), 100);

  //centralizar o mapa em sjc
  const locateBtn = document.getElementById('locate');
  if (locateBtn) {
    locateBtn.addEventListener('click', () => {
      
      map.setView([-23.2237, -45.9009], 13);
      
      //Marcador temporário
      const tempMarker = L.circleMarker([-23.2237, -45.9009], { 
        radius: 100, 
        color: '#1a73e8',
        fillColor: '#1a73e8',
        fillOpacity: 0.7
      }).addTo(map);
      
      tempMarker.bindPopup('São José dos Campos - SP').openPopup();
      
      setTimeout(() => {
        map.removeLayer(tempMarker);
      }, 3000);
    });
  }
});