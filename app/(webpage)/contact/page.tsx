import ContactForm from '@/app/components/contact-form'
import React from 'react'

const Page = () => {
  return (
<main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Finding everything alright?
        </h2>
        <p className="text-lg mb-6">
          Feel free to send a message, just remmber to mint and swap and send your tokens safely.
        </p>

        {/* Contact Form */}
        <ContactForm />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect with Me:</h3>
            <ul className="flex gap-4">
              <li>
                <a href="https://twitter.com/PrimeBlossomDap" className="text-blue-400 hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Or Drop an Email:</h3>
            <p className="text-gray-400">lyub@gg.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page