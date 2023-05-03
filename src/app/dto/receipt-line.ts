export interface ReceiptLine{
    index: number;
    itemCode: string;
    description: string;
    quantity: number;
    rate: number;
    grossPrice: number;
    discount: number;
    netAmount: number;
    validationError:boolean;
    fields:Map<string,string>;
}
