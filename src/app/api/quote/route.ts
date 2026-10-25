import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Required fields validation
    const {
      fullName,
      email,
      phone,
      requiredService,
      projectLocation,
      propertyType,
      projectStage,
      budgetRangeNaira,
      privacyConsent,
    } = body;

    if (!fullName || !email || !phone || !requiredService || !budgetRangeNaira) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields. Please fill in all mandatory project specifications.",
        },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        {
          success: false,
          error: "Please agree to the privacy and communications consent to proceed.",
        },
        { status: 400 }
      );
    }

    // In a full production deployment with SMTP / CRM credentials,
    // this dispatches an email via Resend/SendGrid and saves to database.
    // For this deployment, we log the inquiry securely and generate a confirmed reference ID.
    const inquiryReference = `PJ-${Date.now().toString().slice(-6)}`;

    console.log("=== NEW PEACE JET PROJECT INQUIRY RECEIVED ===", {
      inquiryReference,
      fullName,
      email,
      phone,
      requiredService,
      projectLocation,
      propertyType,
      projectStage,
      budgetRangeNaira,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        referenceId: inquiryReference,
        message: "Your project inquiry has been received by Peace Jet Construction & Design. An architectural project consultant will review your specifications and contact you within 24 to 48 business hours.",
        isDemoEnvironment: process.env.NODE_ENV !== "production" || !process.env.RESEND_API_KEY,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your proposal request. Please reach out directly via phone or WhatsApp.",
      },
      { status: 500 }
    );
  }
}
