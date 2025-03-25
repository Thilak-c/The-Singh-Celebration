import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    // Get the file data
    const data = await req.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    // Get file details
    const fileData = Buffer.from(await file.arrayBuffer());
    const uploadsDir = path.join(process.cwd(), 'public/uploads');

    // Ensure the uploads directory exists
    await fs.mkdir(uploadsDir, { recursive: true });

    // Save the file
    const filePath = path.join(uploadsDir, file.name);
    await fs.writeFile(filePath, fileData);

    return NextResponse.json({ message: 'File uploaded successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to upload file' },
      { status: 500 }
    );
  }
};
