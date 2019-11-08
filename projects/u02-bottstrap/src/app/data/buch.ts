export class Buch {

    private name: string;
    private author: string;
    private seitenanzahl: number;
    private verliehen: boolean;

    public constructor(name: string, author: string, seitenanzahl: number, verliehen: boolean) {
        if (!name || !author || seitenanzahl < 1 || (verliehen !== true && verliehen !== false)) {
            throw new Error('invalid arguments');
        }
        this.name = name;
        this.author = author;
        this.seitenanzahl = seitenanzahl;
        this.verliehen = verliehen;
    }

    public getName(): string {
        return this.name;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getSeitenanzahl(): number {
        return this.seitenanzahl;
    }

    public getVerliehen(): boolean {
        return this.verliehen;
    }
}
