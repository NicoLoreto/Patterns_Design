/**
 * La clase Creator declara el método de fábrica que debería devolver un objeto
 * de una clase Product. Las subclases de Creator generalmente proporcionan la
 * implementación de este método.
 */
abstract class Creator {
    /**
     * Nota que el Creator también puede proporcionar alguna implementación predeterminada
     * del método de fábrica.
     */
    public abstract factoryMethod(): Product;

    /**
     * También ten en cuenta que, a pesar de su nombre, la responsabilidad principal
     * del Creator no es crear productos. Por lo general, contiene lógica de negocio
     * central que depende de objetos Product devueltos por el método de fábrica. Las
     * subclases pueden cambiar indirectamente esa lógica de negocio al anular el
     * método de fábrica y devolver un tipo diferente de producto.
     */
    public someOperation(): string {
        // Llama al método de fábrica para crear un objeto Product.
        const product = this.factoryMethod();
        // Ahora, utiliza el producto.
        return `Creator: El mismo código del creador acaba de trabajar con ${product.operation()}`;
    }
}

/**
 * Los Concrete Creators sobrescriben el método de fábrica para cambiar el tipo
 * del producto resultante.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Nota que la firma del método todavía utiliza el tipo de producto abstracto,
     * aunque el producto concreto se devuelve realmente desde el método. De esta
     * manera, el Creator puede mantenerse independiente de las clases de producto
     * concretas.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * La interfaz Product declara las operaciones que todos los productos concretos
 * deben implementar.
 */
interface Product {
    operation(): string;
}

/**
 * Los Concrete Products proporcionan diversas implementaciones de la interfaz Product.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Resultado del ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Resultado del ConcreteProduct2}';
    }
}

/**
 * El código del cliente trabaja con una instancia de un creador concreto,
 * aunque a través de su interfaz base. Mientras el cliente siga trabajando con
 * el creador a través de la interfaz base, se le puede pasar cualquier subclase
 * de creador.
 */
function clientCode(creator: Creator) {
    // ...
    console.log('Cliente: No conozco la clase del creador, pero aún funciona.');
    console.log(creator.someOperation());
    // ...
}

/**
 * La Aplicación elige un tipo de creador según la configuración o el entorno.
 */
console.log('Aplicación: Iniciada con ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('Aplicación: Iniciada con ConcreteCreator2.');
clientCode(new ConcreteCreator2());

/* Resultado 

Aplicación: Iniciada con ConcreteCreator1.
Cliente: No conozco la clase del creador, pero aún funciona.
Creador: El mismo código del creador acaba de trabajar con {Resultado del ConcreteProduct1}

Aplicación: Iniciada con ConcreteCreator2.
Cliente: No conozco la clase del creador, pero aún funciona.
Creador: El mismo código del creador acaba de trabajar con {Resultado del ConcreteProduct2}

*/
