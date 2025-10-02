const btn = document.getElementById('btn-redes');
const redes = document.getElementById('redes-sociales');   

btn.addEventListener('click', () => {
    redes.classList.toggle('oculto');
    btn.textContent = redes.classList.contains('oculto') ? 'Mostrar Redes Sociales' : 'Ocultar Redes Sociales';
});