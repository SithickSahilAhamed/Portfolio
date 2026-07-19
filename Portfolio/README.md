# Modern Full-Stack Developer Portfolio

A comprehensive, responsive portfolio website for Sithick Sahil Ahamed Z, featuring modern design, interactive elements, and professional presentation of skills and projects.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Interactive Elements**: Typing animations, skill progress bars, and smooth scrolling navigation
- **SEO Optimized**: Proper meta tags, Open Graph tags, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation

### New Features Added

#### 1. Image Upload System
- **Professional Photo Upload**: Click on the SSA round section to upload your profile image
- **Smart Image Processing**: Automatic cropping and resizing to fit circular container
- **Format Support**: JPG, PNG, GIF, WebP formats accepted
- **File Validation**: Maximum 5MB file size with format validation
- **Drag & Drop**: Intuitive drag-and-drop interface with visual feedback
- **Error Handling**: Comprehensive error messages for invalid files

#### 2. Automated Email Integration
- **EmailJS Integration**: Direct email sending from contact form without backend
- **Form Validation**: Real-time validation with user-friendly error messages
- **Email Templates**: Professional email formatting with all form data
- **Fallback System**: Automatic fallback to default email client if service fails
- **Success Feedback**: Clear confirmation messages for successful submissions
- **Rate Limiting**: Built-in protection against spam submissions

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Image Processing**: HTML5 Canvas API
- **Animations**: CSS3 transitions and keyframes

## 📋 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form)
   - Create account at [EmailJS.com](https://www.emailjs.com/)
   - Follow the detailed setup guide in `src/setup/emailjs-setup.md`
   - Update configuration in `src/services/emailService.ts`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The website uses a modern color scheme defined in CSS custom properties:
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Orange (#f97316)

### Content
Update personal information in the respective component files:
- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Bio and statistics
- `src/components/Skills.tsx` - Technical skills and proficiency
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Education.tsx` - Educational background
- `src/components/Contact.tsx` - Contact information

### Images
- **Profile Photo**: Use the image upload feature in the hero section
- **Project Screenshots**: Add project images to the public folder and reference them

## 📧 Email Configuration

### EmailJS Setup
1. Create EmailJS account and service
2. Create email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to address

3. Update `src/services/emailService.ts` with your credentials:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

### Environment Variables (Production)
Create `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🖼️ Image Upload Features

### Supported Formats
- JPEG/JPG
- PNG
- GIF
- WebP

### Specifications
- **Maximum file size**: 5MB
- **Processing**: Automatic cropping to square aspect ratio
- **Output size**: 400x400 pixels optimized for web
- **Quality**: 90% JPEG compression for optimal file size

### Usage
1. Click on the SSA circle in the hero section
2. Upload image via drag-and-drop or file browser
3. Image is automatically processed and displayed
4. Click the X button to remove the image

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Environment Variables
Set up environment variables in your deployment platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 🧪 Testing

### Contact Form Testing
1. Fill out the contact form with valid information
2. Submit and verify email is received
3. Test with invalid data to verify validation
4. Test fallback functionality by temporarily disabling EmailJS

### Image Upload Testing
1. Test with various image formats and sizes
2. Verify error handling for oversized files
3. Test drag-and-drop functionality
4. Verify image processing and display

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: ES6+, CSS Grid, Flexbox, Canvas API

## 🔧 Performance Optimization

- **Image Optimization**: Automatic compression and resizing
- **Code Splitting**: Lazy loading of components
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Bundle Analysis**: Use `npm run build -- --analyze` to analyze bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- **Email**: sithicksahilahamed8625@gmail.com
- **LinkedIn**: [linkedin.com/in/sithicksahilahamed](https://www.linkedin.com/in/sithicksahilahamed/)
- **GitHub**: [github.com/SithickSahilAhamed](https://github.com/SithickSahilAhamed)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS