// Gestor del carrito con localStorage

class Carrito {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregar(producto) {
        // Verificar si el producto ya está en el carrito
        const existe = this.items.find(item => item.id === producto.id);
        
        if (existe) {
            existe.cantidad += producto.cantidad || 1;
        } else {
            this.items.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: producto.cantidad || 1
            });
        }
        this.guardar();
    }

    eliminar(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.guardar();
    }

    actualizar(id, cantidad) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.cantidad = cantidad;
            if (cantidad <= 0) {
                this.eliminar(id);
            } else {
                this.guardar();
            }
        }
    }

    guardar() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    }

    obtener() {
        return this.items;
    }

    total() {
        return this.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0).toFixed(2);
    }

    limpiar() {
        this.items = [];
        this.guardar();
    }

    obtenerCantidad() {
        return this.items.reduce((sum, item) => sum + item.cantidad, 0);
    }
}

// Crear instancia global
const carrito = new Carrito();

// Función para agregar producto al carrito desde cualquier página
function agregarAlCarrito(id, nombre, precio, imagen) {
    const producto = {
        id: id,
        nombre: nombre,
        precio: parseFloat(precio),
        imagen: imagen,
        cantidad: 1
    };

    carrito.agregar(producto);
    mostrarNotificacion(`${nombre} añadido al carrito`);
}

// Mostrar notificación visual
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #22C55E 0%, #16A34A 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;

    document.body.appendChild(notificacion);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .notificacion {
        transition: all 0.3s ease !important;
    }
`;
document.head.appendChild(style);
