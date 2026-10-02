/**
 * PetVida - Clínica Veterinaria
 * Lógica interactiva para la navegación y formularios
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Móvil Desplegable
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            mobileToggle.innerHTML = isOpen ? '✕' : '☰';
        });

        // Cerrar menú al hacer clic en un enlace de navegación
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.innerHTML = '☰';
            });
        });
    }

    // 2. Efecto de Sombra en Header al hacer Scroll
    const header = document.getElementById('mainHeader');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Manejo del Formulario de Solicitud de Citas
    const formCita = document.getElementById('formCita');
    const toast = document.getElementById('toastNotification');

    if (formCita) {
        formCita.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreDueno = document.getElementById('nombreDueno')?.value.trim();
            const nombreMascota = document.getElementById('nombreMascota')?.value.trim();
            const servicio = document.getElementById('servicio')?.value;
            const fecha = document.getElementById('fecha')?.value;

            if (!nombreDueno || !nombreMascota || !fecha) {
                showToast('Por favor completa todos los campos requeridos (*).', 'error');
                return;
            }

            // Mensaje de éxito interactivo
            showToast(`¡Excelente, ${nombreDueno}! Hemos recibido tu solicitud para ${nombreMascota} (${servicio}) el día ${fecha}. Te confirmaremos por WhatsApp en breve.`, 'success');

            // Resetear campos
            formCita.reset();
        });
    }

    // 4. Utilidad para mostrar notificaciones Toast
    function showToast(message, type = 'success') {
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast show ${type}`;

        setTimeout(() => {
            toast.className = 'toast';
        }, 5000);
    }

    // 5. Asignar año dinámico en el footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});
