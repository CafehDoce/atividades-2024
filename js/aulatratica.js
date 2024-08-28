document.addEventListener('DOMContentLoaded', () => {
    const apiUrls = [
        'https://api.github.com/users/usuario1',
        'https://api.github.com/users/usuario2',
        'https://api.github.com/users/usuario3',
        'https://api.github.com/users/usuario4',
        'https://api.github.com/users/usuario5'
    ];
    
    const cardsContainer = document.getElementById('cards-container');
    
    Promise.all(apiUrls.map(url => fetch(url).then(response => response.json())))
        .then(users => {
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.name}">
                    <h2>${user.name}</h2>
                    <a href="${user.html_url}" target="_blank">Ver Perfil no GitHub</a>
                    <ul class="tech-list">
                        <!-- Aqui você pode adicionar tecnologias manualmente ou buscar de alguma outra API -->
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                `;
                
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});
