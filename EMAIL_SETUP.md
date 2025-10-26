# Email Setup Instructions

## Setting up Email for Contact Form

To enable the contact form to send emails to your inbox, you need to set up email configuration.

### Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Step 2: Gmail App Password Setup

1. **Enable 2-Step Verification** on your Google Account:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification
   - Follow the setup process

2. **Generate App Password**:
   - In Google Account Settings → Security
   - Under "2-Step Verification", click "App passwords"
   - Select "Mail" as the app
   - Select "Other" as the device and enter "Portfolio Contact Form"
   - Copy the 16-character password that appears

3. **Update Environment Variables**:
   - Replace `your-email@gmail.com` with your actual Gmail address
   - Replace `your-16-character-app-password` with the generated app password

### Step 3: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email inbox for the message

### Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- App passwords are safer than using your regular Gmail password

### Troubleshooting

- Make sure 2-Step Verification is enabled on your Google Account
- Double-check that the app password is exactly 16 characters
- Ensure your Gmail address is correct
- Check the console for any error messages

### Alternative Email Services

If you prefer not to use Gmail, you can modify the `src/app/api/send-email/route.ts` file to use other email services like:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with other SMTP providers

