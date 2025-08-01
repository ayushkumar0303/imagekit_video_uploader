import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
  try {
    const authenticateParameters = getUploadAuthParams({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    });

    return Response.json({
      authenticateParameters,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    });
  } catch (error) {
    return Response.json({
      error: "Authentication failed",
      status: 500,
    });
  }
}
