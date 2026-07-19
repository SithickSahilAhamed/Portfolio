import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail, validateContactForm, sendEmailFallback, type ContactFormData } from '../services/emailService';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sithicksahilahamed8625@gmail.com',
      link: 'mailto:sithicksahilahamed8625@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sithicksahilahamed',
      link: 'https://www.linkedin.com/in/sithicksahilahamed/'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/SithickSahilAhamed',
      link: 'https://github.com/SithickSahilAhamed'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');
    setErrors({});
    
    try {
      // Try to send email using EmailJS
      const response = await sendContactEmail(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setSubmitMessage(response.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If EmailJS fails, try fallback method
        const fallbackResponse = await sendEmailFallback(formData);
        if (fallbackResponse.success) {
          setSubmitStatus('success');
          setSubmitMessage(fallbackResponse.message);
        } else {
          setSubmitStatus('error');
          setSubmitMessage(response.message);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide status message after 10 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 10000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Get In Touch
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : formData.name 
                      ? 'border-green-500 focus:border-green-500' 
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                      ? 'border-red-500 focus:border-red-500'
                      : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                      ? 'border-green-500 focus:border-green-500' 
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-vertical ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : formData.message.length >= 10
                      ? 'border-green-500 focus:border-green-500' 
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      {submitMessage}
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      {submitMessage}
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;