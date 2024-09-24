function agregarTurno(nombre, fecha, hora, descripcion) {
    const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
    turnos.push({ nombre, fecha, hora, descripcion });
    localStorage.setItem('turnos', JSON.stringify(turnos));
    location.reload(); // Recargar la página para ver el nuevo turno
}
