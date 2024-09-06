/**
 * Класс, представляющий ошибки, связанные с некорректными типами данных.
 */
export class TypeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TypeError';
    }
}

/**
 * Класс, представляющий ошибки, связанные с некорректными значениями.
 */
export class ValueError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValueError';
    }
}
