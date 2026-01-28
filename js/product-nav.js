// Product Navigation Script
// Makes product cards clickable to navigate to detail page

document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.productes-grid article');
    
    articles.forEach(article => {
        // Extract product ID from the buy button's onclick attribute
        const buyButton = article.querySelector('.btn-compra');
        if (!buyButton) return;
        
        const onclickAttr = buyButton.getAttribute('onclick');
        if (!onclickAttr) return;
        
        // Extract product ID from the onclick attribute
        // Format: agregarAlCarrito('prod-X', ...)
        const productIdMatch = onclickAttr.match(/'(prod-\d+)'/);
        if (!productIdMatch) return;
        
        const productId = productIdMatch[1];
        
        // Make the article clickable
        article.style.cursor = 'pointer';
        article.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        
        // Add hover effect
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Navigate to detail page on click
        article.addEventListener('click', function(e) {
            // Don't navigate if clicking the button
            if (e.target === buyButton || buyButton.contains(e.target)) {
                return;
            }
            window.location.href = `./views/product-detail.html?id=${productId}`;
        });
    });
});
