
class Buch {
    private author: string;
    private seitenanzahl: number;
    private verliehen: boolean;

    public constructor(author: string, seitenanzahl: number, verliehen: boolean) {

        if ( !author || seitenanzahl < 1 || (verliehen !== true && verliehen !== false)) {
            throw new Error('invalid Arguments');
        }
        this.author = author;
        this.seitenanzahl = seitenanzahl;
        this.verliehen = verliehen;
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