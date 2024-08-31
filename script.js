document.addEventListener('DOMContentLoaded', () => {
    // Información Académica
    const editAcademicBtn = document.getElementById('editAcademic');
    const academicEditDiv = document.getElementById('academicEdit');
    const academicInfoDiv = document.getElementById('academicInfo');
    const saveAcademicBtn = document.getElementById('saveAcademic');
    const cancelAcademicBtn = document.getElementById('cancelAcademic');
    
    editAcademicBtn.addEventListener('click', () => {
        academicEditDiv.style.display = 'block';
        academicInfoDiv.style.display = 'none';
        document.getElementById('primaryInput').value = document.getElementById('primarySchool').innerText.split(': ')[1];
        document.getElementById('highInput').value = document.getElementById('highSchool').innerText.split(': ')[1];
        document.getElementById('undergradInput').value = document.getElementById('undergrad').innerText.split(': ')[1];
    });

    saveAcademicBtn.addEventListener('click', () => {
        document.getElementById('primarySchool').innerText = 'Escuela Primaria: ' + document.getElementById('primaryInput').value;
        document.getElementById('highSchool').innerText = 'Escuela de Bachillerato: ' + document.getElementById('highInput').value;
        document.getElementById('undergrad').innerText = 'Pregrado: ' + document.getElementById('undergradInput').value;
        academicEditDiv.style.display = 'none';
        academicInfoDiv.style.display = 'block';
    });

    cancelAcademicBtn.addEventListener('click', () => {
        academicEditDiv.style.display = 'none';
        academicInfoDiv.style.display = 'block';
    });

    // Experiencia Laboral
    const editExperienceBtn = document.getElementById('editExperience');
    const experienceEditDiv = document.getElementById('experienceEdit');
    const experienceInfoDiv = document.getElementById('experienceInfo');
    const saveExperienceBtn = document.getElementById('saveExperience');
    const cancelExperienceBtn = document.getElementById('cancelExperience');
    
    editExperienceBtn.addEventListener('click', () => {
        experienceEditDiv.style.display = 'block';
        experienceInfoDiv.style.display = 'none';
        document.getElementById('workPlaceInput').value = document.getElementById('workPlace').innerText.split(': ')[1];
        document.getElementById('companyPhoneInput').value = document.getElementById('companyPhone').innerText.split(': ')[1];
        document.getElementById('workDurationInput').value = document.getElementById('workDuration').innerText.split(': ')[1];
    });

    saveExperienceBtn.addEventListener('click', () => {
        document.getElementById('workPlace').innerText = 'Último Lugar de Trabajo: ' + document.getElementById('workPlaceInput').value;
        document.getElementById('companyPhone').innerText = 'Teléfono de la Empresa: ' + document.getElementById('companyPhoneInput').value;
        document.getElementById('workDuration').innerText = 'Tiempo Trabajado: ' + document.getElementById('workDurationInput').value;
        experienceEditDiv.style.display = 'none';
        experienceInfoDiv.style.display = 'block';
    });

    cancelExperienceBtn.addEventListener('click', () => {
        experienceEditDiv.style.display = 'none';
        experienceInfoDiv.style.display = 'block';
    });

    // Skills
    const skillsForm = document.getElementById('skillsForm');
    const skillsList = document.getElementById('skillsList');

    skillsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const skillInput = document.getElementById('skillInput');
        const skillText = skillInput.value.trim();
        if (skillText) {
            const li = document.createElement('li');
            li.textContent = skillText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', () => {
                skillsList.removeChild(li);
            });
            li.appendChild(deleteBtn);
            skillsList.appendChild(li);
            skillInput.value = '';
        }
    });
});
