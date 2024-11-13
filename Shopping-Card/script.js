 // Variables globales pour la gestion du panier
 let totalPrice = 0;
 let cart = {
   'product-basket': { price: 100, quantity: 0 },
   'product-socks': { price: 20, quantity: 0 },
   'product-bag': { price: 50, quantity: 0 }
 };
 
 // Fonction pour ajuster la quantité et mettre à jour le total
 function ajusterQuantite(increment, productId) {
   const product = cart[productId];
   product.quantity += increment;
   if (product.quantity < 0) 
    product.quantity = 0;
   document.getElementById('quantite-' + productId).innerText = product.quantity;
   updateTotalPrice();
 }
 
  // Fonction pour supprimer un produit du panier
  function supprimerArticle(productId) {
         const productElement = document.getElementById(productId); 
         productElement.remove(); 
         
     }
      
     
 // Fonction pour mettre à jour le total du panier
 function updateTotalPrice() {
   totalPrice = 0;
 
   for (let productId in cart) {
     const product = cart[productId];
     totalPrice += product.price * product.quantity;
   }
 
   document.querySelector('.total').innerText = totalPrice + ' $';
 }



 // Fonction pour aimer des articles
// function toggleFavorite() {
//     const heartIcon = document.getElementById('heart-icon');
    
//     heartIcon.classList.toggle('favorited');
// }
function toggleFavorite(heartIcon) {
    // Basculer la classe 'favorited' sur l'icône de cœur cliquée
    heartIcon.classList.toggle('favorited');
}