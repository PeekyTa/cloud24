"use client"

export default function ContactMapSection() {
  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2353!2d10.1658!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b9f8f5cfed%3A0x8e6c99d8e753c63b!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1689861234567"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="Office Location Map"
            aria-label="Interactive map showing our office location in Tunis, Tunisia"
          />
        </div>
      </div>
    </section>
  )
}

