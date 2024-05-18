document.addEventListener('DOMContentLoaded', function() {
    // Array de alimentos (simulado)
    let foods = [
        
       
        // Adicione mais alimentos conforme necessário
    ];

    const foodList = document.getElementById('food-list');
    const addFoodBtn = document.getElementById('add-food-btn');
    const foodFormContainer = document.getElementById('food-form-container');
    const foodForm = document.getElementById('food-form');

    // Função para exibir alimentos na tela
    function renderFoodList() {
        foodList.innerHTML = '';
        foods.forEach((food, index) => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
                <h2>${food.name}</h2>
                <p>Quantidade: ${food.quantity}</p>
                <p>Localização: ${food.location}</p>
                <a href="${food.contactLink}" class="contact-btn" target="_blank">Entrar em contato</a>
                <button class="delete-btn" data-index="${index}">Excluir</button>
            `;
            foodList.appendChild(foodItem);
        });
    }

    renderFoodList();

    // Mostrar/ocultar formulário para adicionar alimentos
    addFoodBtn.addEventListener('click', function() {
        foodFormContainer.style.display = 'block';
    });

    foodForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const foodName = document.getElementById('food-name').value;
        const foodQuantity = parseInt(document.getElementById('food-quantity').value);
        const foodLocation = document.getElementById('food-location').value;
        const contactLink = document.getElementById('contact-link').value;
       
    });

    // Adicionando funcionalidade de exclusão
    foodList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            foods.splice(index, 1);
            renderFoodList();
        }
    });
});


//
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    const hasChildrenCheckbox = document.getElementById('hasChildren');
    const childrenAgeField = document.getElementById('children-age');
    const cardContainer = document.getElementById('card-container');

    hasChildrenCheckbox.addEventListener('change', function() {
        if (hasChildrenCheckbox.checked) {
            childrenAgeField.style.display = 'block';
        } else {
            childrenAgeField.style.display = 'none';
        }
    });

    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Capturando os valores do formulário
        const hasChildren = hasChildrenCheckbox.checked;
        const childrenAge = hasChildren ? document.getElementById('childrenAge').value : 'N/A';
        const contactMethod = document.getElementById('contactMethod').value;
        const address = document.getElementById('address').value;

        // Criando o card com as informações
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-header">
                <h3>Pessoas que Precisam de Doação</h3> <!-- Título do post -->
            </div>
            <div class="card-body">
                ${hasChildren ? `<p><strong>Tem crianças?</strong> Sim</p><p><strong>Idade das crianças:</strong> ${childrenAge}</p>` : `<p><strong>Tem crianças?</strong> Não</p>`}
                <p><strong>Meio de Contato para Doação:</strong> ${contactMethod}</p>
                <p><strong>Endereço:</strong> ${address}</p>
            </div>
        `;

        // Exibir o card na página
        cardContainer.appendChild(card);

        // Limpa o formulário após o envio
        donationForm.reset();
        childrenAgeField.style.display = 'none'; // Oculta o campo de idade das crianças novamente
    });
});
