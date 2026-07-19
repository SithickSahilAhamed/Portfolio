# EmailJS Setup Instructions

## Overview
This guide will help you set up EmailJS to handle contact form submissions automatically. EmailJS allows you to send emails directly from your frontend application without needing a backend server.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider:

### For Gmail:
- Service ID: `gmail` (or custom name)
- User ID: Your Gmail address
- Access Token: Generated automatically when you connect

### For Outlook:
- Service ID: `outlook` (or custom name)
- User ID: Your Outlook email address
- Access Token: Generated automatically when you connect

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Message:
{{message}}

---
Sent from: Portfolio Website
Timestamp: {{timestamp}}
User Agent: {{user_agent}}
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address
- `{{timestamp}}` - When the form was submitted
- `{{user_agent}}` - Browser information

## Step 4: Configure Your Application

1. Open `src/services/emailService.ts`
2. Replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key
```

### Finding Your IDs:
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account > API Keys

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email for the submission

## Step 6: Production Deployment

### Environment Variables (Recommended)
For production, use environment variables:

1. Create `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `emailService.ts`:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Verify your service ID is correct
   - Ensure the service is active in your EmailJS dashboard

2. **"Template not found" error**
   - Check your template ID
   - Make sure the template is published

3. **Rate limiting**
   - EmailJS free plan has limits (200 emails/month)
   - Consider upgrading for higher limits

4. **Emails not received**
   - Check spam/junk folders
   - Verify your email service connection
   - Test with different email addresses

### Fallback Method
If EmailJS fails, the system automatically falls back to opening the user's default email client with a pre-filled message.

## Security Notes

- Never expose your private key in frontend code
- Use the public key only for client-side operations
- Consider implementing rate limiting on your end
- Monitor your EmailJS usage to avoid quota exceeded errors

## Free Plan Limitations

- 200 emails per month
- EmailJS branding in emails
- Basic support

## Upgrade Benefits

- Higher email limits
- Remove EmailJS branding
- Priority support
- Advanced features

For more information, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).