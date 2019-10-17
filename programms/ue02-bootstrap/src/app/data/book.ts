export class Book {
    private name: string;
    private author: string;
    private pageNum: number;
    private inStock: boolean;

    public constructor (name: string, author: string, pageNum: number, inStock: boolean) {
        if (!author || pageNum < 1 || (inStock !== true && inStock !== false)) {
            throw new Error('invailed arguments');
        }

        this.name = name;
        this.author = author;
        this.pageNum = pageNum;
        this.inStock = inStock;
    }

    public getAuthor (): string {
        return this.author;
    }
    public getName (): string {
        return this.name;
    }

    public getPageNum (): number {
        return this.pageNum;
    }

    public getInStock (): boolean {
        return this.inStock;
    }
}
