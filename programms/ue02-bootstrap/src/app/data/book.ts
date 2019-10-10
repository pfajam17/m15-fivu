class Book {
    private author: string;
    private pageNum: number;
    private inStock: boolean;

    public constructor(author: string, pageNum: number, inStock: boolean) {
        if (!author || pageNum < 1 || (inStock !== true && inStock !== false)) {
            throw new Error('invailed arguments');
        }

        this.author = author;
        this.pageNum = pageNum;
        this.inStock = inStock;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getPageNum(): number {
        return this.pageNum;
    }

    public getInStock(): boolean{ 
        return this.inStock;
    }
}
