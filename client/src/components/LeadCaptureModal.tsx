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

    setSubmitted(true);

    const message = `Hi Prime Nest Interiors, I'm interested in interior design consultation. Name: ${formData.fullName}, Mobile: ${formData.mobileNumber}, City: ${formData.city}, Property Type: ${formData.propertyType}${formData.budgetRange ? `, Budget: ${formData.budgetRange}` : ''}`;
    const whatsappUrl = `https://wa.me/919542663490?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    onSubmit(formData);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', mobileNumber: '+91', city: '', propertyType: '', budgetRange: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      {/* Modal container: bottom sheet on mobile, centered card on desktop */}
      <div
        className="relative w-full md:max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                   rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden
                   max-h-[85vh] md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle indicator for mobile */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 bg-slate-600 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Form Content */}
        <div className="px-5 pb-6 pt-2 md:px-8 md:pb-8 md:pt-6">
          {!submitted ? (
            <>
              {/* Header - compact on mobile */}
              <div className="mb-4 md:mb-6 pr-8">
                <h2 className="text-lg md:text-2xl font-bold text-white leading-snug">
                  Get Free Interior Design Consultation
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Prime Nest Interiors · Hyderabad</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mt-3" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3 py-2.5 text-sm bg-slate-700/50 border ${
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
                    className={`w-full px-3 py-2.5 text-sm bg-slate-700/50 border ${
                      errors.mobileNumber ? 'border-red-500' : 'border-slate-600'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors`}
                  />
                  {errors.mobileNumber && <p className="text-red-400 text-xs mt-1">{errors.mobileNumber}</p>}
                </div>

                {/* City and Property Type - side by side on mobile */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="City / Area"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm bg-slate-700/50 border ${
                        errors.city ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors`}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm bg-slate-700/50 border ${
                        errors.propertyType ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                    >
                      <option value="">Property</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="Villa">Villa</option>
                      <option value="Office">Office</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    {errors.propertyType && <p className="text-red-400 text-xs mt-1">{errors.propertyType}</p>}
                  </div>
                </div>

                {/* Budget Range - Collapsible */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowBudget(!showBudget)}
                    className="text-amber-400 text-xs font-medium hover:text-amber-300 transition-colors"
                  >
                    {showBudget ? '▼' : '▶'} Help us understand your project better
                  </button>
                  {showBudget && (
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-slate-700/50 border border-slate-600 rounded-lg text-white mt-2 focus:outline-none focus:border-amber-500 transition-colors"
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
                  className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {createLead.isPending ? 'Submitting...' : 'Get Free Consultation'}
                </button>

                {/* Trust Badges - compact 4-column row on mobile */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-700">
                  {['Free Consultation', 'Transparent Pricing', 'Expert Designers', 'End-to-End Execution'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 text-center pt-1">
                  We never share your information.
                </p>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 text-sm text-center">
                Our team will contact you shortly. Check your WhatsApp for a direct message.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
