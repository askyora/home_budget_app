import { ReceiptLine } from "./receipt-line";

export interface ReceiptResponse{
        receiptLines: ReceiptLine[];
        fields?: Map<string, string>;
        provider?: string;
        text?: string;
        image?: string;
}