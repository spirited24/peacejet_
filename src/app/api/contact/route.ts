import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const referenceId = `PJC-${Date.now().toString().slice(-5)}`;

    console.log("=== NEW CONTACT INQUIRY RECEIVED ===", {
      referenceId,
      name,
      email,
      phone,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Thank you for reaching out to Peace Jet Construction & Design. We have received your message and will respond promptly.",
        isDemoEnvironment: process.env.NODE_ENV !== "production" || !process.env.RESEND_API_KEY,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit message." },
      { status: 500 }
    );
  }
}
