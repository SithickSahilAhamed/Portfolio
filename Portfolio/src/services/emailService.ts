import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return {
        success: false,
        message: 'Please fill in all required fields.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      to_email: 'sithicksahilahamed8625@gmail.com', // Your email address
      reply_to: formData.email,
      // Additional metadata
      timestamp: new Date().toLocaleString(),
      user_agent: navigator.userAgent,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Handle specific EmailJS errors
    if (error instanceof Error) {
      if (error.message.includes('network')) {
        return {
          success: false,
          message: 'Network error. Please check your internet connection and try again.'
        };
      } else if (error.message.includes('rate limit')) {
        return {
          success: false,
          message: 'Too many requests. Please wait a moment before sending another message.'
        };
      }
    }

    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later or contact me directly via email.'
    };
  }
};

// Alternative: Fallback email service using a simple form submission
export const sendEmailFallback = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Create mailto link as fallback
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:sithicksahilahamed8625@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    return {
      success: true,
      message: 'Opening your default email client. Please send the pre-filled email.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unable to open email client. Please contact me directly at sithicksahilahamed8625@gmail.com'
    };
  }
};

// Utility function to validate form data
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  // Subject validation (optional but with length limit)
  if (formData.subject && formData.subject.length > 100) {
    errors.subject = 'Subject must be less than 100 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};