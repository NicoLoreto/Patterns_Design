import config from "./config.json";
export default class MyConfiguration {
    private static instance: MyConfiguration;

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    // El constructor es privado para que no sea accesible desde afuera de la clase, no se podría crear un nuevo objeto de
    // esta clase fuera de la misma clase.
    private constructor() {}

    private static initialize(): void {
        // Inicializar los valores con este método privado.
        this._connectionString = config.connectionString;
        this._environment = config.environment;
        this._apiUrl = config.apiUrl;
    }

    // Si la instancia ya está creada devuleve la instancia creada localmente,
    // si no la crea y guarda una referencia en la instancia de la clase.
    public static getInstance(): MyConfiguration {
        if (!this.instance) {
            this.initialize();
            this.instance = new MyConfiguration();
        }

        return this.instance;
    }

    get connectionString(): string {
        return MyConfiguration._connectionString;
    }

    get environment(): string {
        return MyConfiguration._environment;
    }

    get apiUrl(): string {
        return MyConfiguration._apiUrl;
    }
}
