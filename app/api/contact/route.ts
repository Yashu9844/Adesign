import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const web3FormsData = new FormData();
    web3FormsData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY || '');
    web3FormsData.append('subject', `AGENCY WEBSITE: ${formData.name}`);
    web3FormsData.append('name', formData.name);
    web3FormsData.append('email', formData.email);
    web3FormsData.append('company', formData.company || '');
    web3FormsData.append('projectType', formData.projectType || '');
    web3FormsData.append('budget', formData.budget || '');
    web3FormsData.append('timeline', formData.timeline || '');
    web3FormsData.append('message', formData.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: web3FormsData,
    });

    const responseText = await response.text();
    console.log('Web3Forms response status:', response.status);
    console.log('Web3Forms response:', responseText.substring(0, 500));

    // Check if response is HTML (Cloudflare challenge or error page)
    if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
      console.error('Web3Forms returned HTML instead of JSON. API key may be invalid.');
      return NextResponse.json({ 
        success: false, 
        error: 'Email service temporarily unavailable. Please try again later or contact us directly.' 
      }, { status: 503 });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Web3Forms response:', responseText);
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid response from mail service' 
      }, { status: 500 });
    }

    if (data.success) {
      console.log('Email sent successfully');
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error('Web3Forms error:', data);
      return NextResponse.json({ 
        success: false, 
        error: data.message || 'Form submission failed' 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Server error' 
    }, { status: 500 });
  }
}
