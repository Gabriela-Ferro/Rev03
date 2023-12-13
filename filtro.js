const products = [
          { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
          { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
          { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
          { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
          { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
        ];
        
        const productList = document.getElementById('list-of-products');  //cambie poo Id porque no tenia un Name sino un Id, y el nombre de la variable, quite una s
        const getInput = document.querySelector('input[type="text"]'); //referencia erroneamente a input
        const getFilterButton = document.getElementById('filter-button'); // ///aniadi la const para referenciar al boton y cambie el metodo para llamarlo
        
        function showProducts(products) {
        
          /**En la funcion anterior entiendo que por cada producto se debe crear un div un titulo y una imagen, sin embargo 
              hay metodos como forEach que permiten hacerlo, ademas se necesita acceder al HTML para mostralos */
          
              productList.innerHTML = ''; //elimine una funcion que contenia un while por que esta const cumple la misma funcion
          products.forEach(product => {
            const productDiv = document.createElement("div"); //cambie el nombre de varias variables
            productDiv.classList.add("product"); //con el fin de que fueran descriptivas
        
            const title = document.createElement("p");
            title.classList.add("title");
            title.textContent = product.nombre;
            //cambie el nombre de varias variables
            const image = document.createElement("img");
            image.setAttribute('src', product.img);
            //cambie el nombre de varias variables
            productDiv.appendChild(title); //cambie el nombre de varias variables
            productDiv.appendChild(image);//cambie el nombre de varias variables
            productList.appendChild(productDiv);//cambie el nombre de varias variables
          });
        }
        
        showProducts(products);
        
        /*function() {
          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }**/ 
          // En esta funcion no senti que fuera clara lo que hacia por lo que la rehice 
        getFilterButton.onclick = function() {
        
          const text = getInput.value.toLowerCase(); 
          const filteredProducts = filterProducts(products, text);
          showProducts(filteredProducts);
        
        };
        
        function filterProducts(products, text) {
          return products.filter(item =>
            item.tipo.includes(text) || item.color.includes(text)
          );
        }
        // (productos = [], texto) => {
        //   return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
        // }  Refactorice esta funcnion para filtrar los porductos