import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiCheck } from 'react-icons/hi'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const form = useRef()

  const onSubmit = () => {
    setSending(true)
    setSendError(false)

    emailjs
      .sendForm(
        'service_5ohpf9m',
        'template_lae8kbx',
        form.current,
        { publicKey: '3krxGDOOSr0d5cMvq' }
      )
      .then(() => {
        setSending(false)
        setSubmitted(true)
        reset()
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setSending(false)
        setSendError(true)
      })
  }

  if (submitted) {
    return (
      <div className="bg-white border border-line rounded-card p-10 shadow-soft text-center">
        <div className="w-14 h-14 rounded-full bg-navy text-gold-light flex items-center justify-center mx-auto mb-5">
          <HiCheck size={26} />
        </div>
        <h3 className="text-xl mb-2">Message received</h3>
        <p className="text-muted">Thank you — a member of our team will get back to you within one business day.</p>
        <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-6">
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3.5 border rounded-card-sm text-sm bg-surface focus:outline-none focus:bg-white focus:border-gold transition-colors'

  return (
    <div className="bg-white border border-line rounded-card p-8 md:p-10 shadow-soft">
      <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2 text-navy">Full Name</label>
            <input
              className={`${inputClass} ${errors.name ? 'border-red-400' : 'border-line'}`}
              placeholder="Your full name"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name is too short' },
                pattern: {
                  value: /^[A-Za-z\s.]+$/,
                  message: 'Only letters allowed',
                },
              })}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2 text-navy">Mobile Number</label>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              className={`${inputClass} ${errors.mobile ? 'border-red-400' : 'border-line'}`}
              placeholder="10-digit mobile number"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Enter a valid 10-digit mobile number',
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10)
              }}
            />
            {errors.mobile && (
              <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-navy">Email Address</label>
          <input
            type="email"
            className={`${inputClass} ${errors.email ? 'border-red-400' : 'border-line'}`}
            placeholder="you@email.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-navy">Subject</label>
          <input
            className={`${inputClass} ${errors.subject ? 'border-red-400' : 'border-line'}`}
            placeholder="e.g. Bank loan valuation"
            {...register('subject', { required: true })}
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-navy">Message</label>
          <textarea
            rows={5}
            className={`${inputClass} resize-y ${errors.message ? 'border-red-400' : 'border-line'}`}
            placeholder="Tell us about the property and your requirement"
            {...register('message', { required: true })}
          />
        </div>

        {sendError && (
          <p className="text-sm text-red-500 mb-3">
            Something went wrong sending your message. Please try again.
          </p>
        )}

        <button type="submit" className="btn btn-primary w-full" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-xs text-muted mt-4">
          We respond to every enquiry within one business day. Your details stay confidential.
        </p>
      </form>
    </div>
  )
}