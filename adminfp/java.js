function formatHour(hora) {
    const [hours, minutes] = hora.split(':');
    const formattedHour = (hours % 12) || 12; // Formato 12 horas
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${formattedHour}:${minutes} ${ampm}`;
}

function mostrarTurnos() {
    const turnosAdmin = JSON.parse(localStorage.getItem('turnos')) || [];
    const listaTurnosAdmin = document.getElementById('listaTurnosAdmin');
    listaTurnosAdmin.innerHTML = '';
    const alertMessageAdmin = document.getElementById('alertMessageAdmin');

    if (turnosAdmin.length === 0) {
        alertMessageAdmin.style.display = 'block';
    } else {
        alertMessageAdmin.style.display = 'none';
        turnosAdmin.forEach(turno => {
            const li = document.createElement('li');
            li.className = 'turno-item';

            const turnoInfo = document.createElement('div');
            turnoInfo.className = 'turno-info';
            
            const nombreDiv = document.createElement('div');
            nombreDiv.className = 'turno-nombre';
            nombreDiv.textContent = turno.nombre;

            const fechaDiv = document.createElement('div');
            fechaDiv.className = 'turno-fecha';
            fechaDiv.textContent = turno.fecha;

            const horaDiv = document.createElement('div');
            horaDiv.className = 'turno-hora';
            horaDiv.textContent = formatHour(turno.hora); // Formatea la hora

            turnoInfo.appendChild(nombreDiv);
            turnoInfo.appendChild(fechaDiv);
            turnoInfo.appendChild(horaDiv);
            li.appendChild(turnoInfo);
            listaTurnosAdmin.appendChild(li);
        });
    }
}
