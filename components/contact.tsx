export default function ContactSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Intro */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Have a question or want to collaborate? We’d love to hear from you. Reach out using any of the contact methods below.
        </p>

        {/* 4 responsive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {/* Contact Us */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:min-h-[150px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600">
              Our support team is available Monday to Friday, 9am–6pm.
            </p>
          </div>

          {/* Email Address */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:min-h-[150px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:caboletcoatchemicals@gmail.com
"
                className="text-red-600 hover:underline"
              >
                caboletcoatchemicals@gmail.com

              </a>
            </p>
          </div>

          {/* Phone Number */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:min-h-[150px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+48727936551
            </p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:min-h-[150px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">
              63-900 RAWICZ ul:JANA SKRZETUSKIEGO 8/7
              <br />
              Poland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
