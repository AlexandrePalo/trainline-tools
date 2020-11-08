export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Validation Error'
        this.message = message
    }
}

export class TrainlineError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Trainline Error'
        this.message = message
    }
}
