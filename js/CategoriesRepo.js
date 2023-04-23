class CategoriesRepo {
    categories = [];

    async fetchCategories() {
        const response = await fetch(`${API_URL}/categories`);

        if (response.ok) {
            this.categories = response.json();
        } else {
            alert('Произошла ошибка');
        }
    }
}

const categoriesRepo = new CategoriesRepo();
