// Footer.jsx
import React from "react"

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
        <p className="text-sm">© 2025 Valencia David. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:email@example.com"
            className="underline underline-offset-4 text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
