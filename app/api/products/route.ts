import { NextResponse } from "next/server";
import { connectToDatabase } from '@/lib/db';
import Product from '@/lib/db/models/product.model';

export async function GET(req: Request) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '8', 10);
        const skip = (page - 1) * limit;

        const products = await Product.find({}).skip(skip).limit(limit);
        return NextResponse.json({ success: true, data: products });
    } catch (error) {
        
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ success: false, message: 'Error fetching products' }, { status: 500 });
        }
    }
}
