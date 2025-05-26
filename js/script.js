console.log("Svetainė įkelta sėkmingai.");

function toggleMap(id) {
  const maps = document.querySelectorAll('.map-box');
  maps.forEach(map => {
    if (map.id === id) {
      map.classList.toggle('active');
    } else {
      map.classList.remove('active');
    }
  });
}
