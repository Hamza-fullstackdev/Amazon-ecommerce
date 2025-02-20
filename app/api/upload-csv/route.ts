import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Data from '@/lib/db/models/Data';
import csv from 'csv-parser';
import { Readable } from 'stream';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

  
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

   
    const rows: Uint8Array[] = [];

    await new Promise<void>((resolve, reject) => {
      Readable.from(buffer.toString())
        .pipe(csv())
        .on('data', (row) => rows.push(row))
        .on('end', resolve)
        .on('error', reject);
    });

    if (!rows.length) {
      return NextResponse.json({ error: 'CSV file is empty' }, { status: 400 });
    }

 
    await Data.insertMany(rows);

    return NextResponse.json({ message: 'CSV data uploaded successfully!' });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
