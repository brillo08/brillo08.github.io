document.addEventListener('DOMContentLoaded', () => {
    // Manejo de la sección de Información Académica
    const editAcademicButton = document.getElementById('editAcademic');
    const saveAcademicButton = document.getElementById('saveAcademic');
    const cancelAcademicButton = document.getElementById('cancelAcademic');
    const academicInfo = document.getElementById('academicInfo');
    const academicEdit = document.getElementById('academicEdit');
    const primaryInput = document.getElementById('primaryInput');
    const highInput = document.getElementById('highInput');
    const undergradInput = document.getElementById('undergradInput');
    const primarySchool = document.getElementById('primarySchool');
    const highSchool = document.getElementById('highSchool');
    const undergrad = document.getElementById('undergrad');

    editAcademicButton.addEventListener('click', () => {
        // Mostrar el formulario de edición y ocultar la información actual
        academicInfo.style.display = 'none';
        academicEdit.style.display = 'block';                                          

        // Rellenar los campos de entrada con la información actual
        primaryInput.value = primarySchool.textContent.replace('Escuela Primaria: ', '');
        highInput.value = highSchool.textContent.replace('Escuela de Bachillerato: ', '');
        undergradInput.value = undergrad.textContent.replace('Pregrado: ', '');
    });

    saveAcademicButton.addEventListener('click', () => {
        // Actualizar la información con los nuevos valores
        primarySchool.textContent = `Escuela Primaria: ${primaryInput.value}`;
        highSchool.textContent = `Escuela de Bachillerato: ${highInput.value}`;
        undergrad.textContent = `Pregrado: ${undergradInput.value}`;

        // Ocultar el formulario de edición y mostrar la información actualizada
        academicInfo.style.display = 'block';
        academicEdit.style.display = 'none';
    });

    cancelAcademicButton.addEventListener('click', () => {
        // Ocultar el formulario de edición y mostrar la información actual
        academicInfo.style.display = 'block';
        academicEdit.style.display = 'none';
    });

    // Manejo de la sección de Skills
    const skillsForm = document.getElementById('skillsForm');
    const skillInput = document.getElementById('skillInput');
    const skillsList = document.getElementById('skillsList');

    skillsForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const skill = skillInput.value.trim();
        if (skill) {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
            skillInput.value = ''; // Limpia el campo de texto
        }
    });
});
