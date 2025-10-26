// app/resume/page.tsx
'use client'

import { Download } from 'lucide-react'

export default function ResumePage() {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a')
    link.href = './resume.pdf'
    link.download = 'Sheharyar_Khan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* PDF Viewer */}
      <div className="w-full h-screen">
        <iframe
          src="./resume.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Resume PDF"
        />
      </div>
      
      {/* Download Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>
    </div>
  )
}
