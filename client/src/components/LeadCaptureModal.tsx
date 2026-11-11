'use client';

import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface LeadFormData {
  fullName: string;
  mobileNumber: string;
  city: string;
  propertyType: string;
  budgetRange?: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadFormData) => void;
}

export default function LeadCaptureModal({ isOpen, onClose, onSubmit }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    mobileNumber: '+91',
    city: '',
    propertyType: '',
    budgetRange: '',
  });

  const [showBudget, setShowBudget] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createLead = trpc.leads.create.useMutation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.mobileNumber || formData.mobileNumber.length < 13) newErrors.mobileNumber = 'Valid mobile number required';
    if (!formData.city.trim()) newErrors.city = 'City/Area is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save to database
    try {
      await createLead.mutateAsync({
        name: formData.fullName,
        phone: formData.mobileNumber,
        message: `City: ${formData.city}, Property: ${formData.propertyType}${formData.budgetRange ? `, Budget: ${formData.budgetRange}` : ''}`,
        serviceType: formData.propertyType,
      });
    } catch (err) {
      console.error('Failed to save lead:', err);
    }

    // Show success message
    setSubmitted(true);

    // Send to WhatsApp
    const message = `Hi Prime Nest Interiors, I'm interested in interior design consultation. Name: ${formData.fullName}, Mobile: ${formData.mobileNumber}, City: ${formData.city}, Property Type: ${formData.propertyType}${formData.budgetRange ? `, Budget: ${formData.budgetRange}` : ''}`;
    const whatsappUrl = `https://wa.me/919542663490?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Call parent onSubmit
    onSubmit(formData);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', mobileNumber: '+91', city: '', propertyType: '', budgetRange: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Hero Image */}
          <div className="hidden md:block relative h-full min-h-96 bg-gradient-to-br from-amber-400 to-amber-600 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{
                backgroundImage: 'url(/images/modular-kitchen-premium.webp)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Transform Your Space</h3>
              <p className="text-sm text-gray-200">Premium interior designs for modern living</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-10">
            {!submitted ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Get Free Interior Design Consultation + Free Quote
                  </h2>
                  <p className="text-gray-300 text-sm">Design your dream home with Prime Nest Interiors</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mt-4"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.fullName ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('+91')) val = '+91' + val.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, mobileNumber: val });
                      }}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.mobileNumber ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors`}
                    />
                    {errors.mobileNumber && <p className="text-red-400 text-xs mt-1">{errors.mobileNumber}</p>}
                  </div>

                  {/* City/Area */}
                  <div>
                    <input
                      type="text"
                      placeholder="City / Area (e.g., Hyderabad, Jubilee Hills)"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.city ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors`}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>

                  {/* Property Type */}
                  <div>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${
                        errors.propertyType ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                    >
                      <option value="">Select Property Type</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="Villa">Villa</option>
                      <option value="Office">Office</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    {errors.propertyType && <p className="text-red-400 text-xs mt-1">{errors.propertyType}</p>}
                  </div>

                  {/* Budget Range - Collapsible */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowBudget(!showBudget)}
                      className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                    >
                      {showBudget ? '▼' : '▶'} Help us understand your project better
                    </button>
                    {showBudget && (
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white mt-3 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Under ₹5L">Under ₹5L</option>
                        <option value="₹5L–10L">₹5L–10L</option>
                        <option value="₹10L–20L">₹10L–20L</option>
                        <option value="₹20L+">₹20L+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={createLead.isPending}
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {createLead.isPending ? 'Submitting...' : 'Get Free Consultation'}
                  </button>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Free Consultation
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Transparent Pricing
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Expert Designers
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      End-to-End Execution
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-amber-400">⭐</span>
                      100+ Happy Clients
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-amber-400">⭐</span>
                      Hyderabad Service Available
                    </div>
                  </div>

                  {/* Privacy Text */}
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    We never share your information.
                  </p>
                </form>
              </>
            ) : (
              /* Success Message */
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 text-center">
                  Our team will contact you shortly. Check your WhatsApp for a direct message.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
