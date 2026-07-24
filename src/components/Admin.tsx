import React, { useState } from 'react';
import { Copy, Link, Send } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState<'link' | 'message' | null>(null);

  const prefixes = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'];

  const handleGenerate = () => {
    if (!guestName.trim()) {
      alert("Please enter a guest name.");
      return;
    }

    const baseUrl = window.location.origin;
    const urlParams = new URLSearchParams();
    urlParams.set('prefix', prefix);
    urlParams.set('name', guestName.trim());
    
    const link = `${baseUrl}?${urlParams.toString()}`;
    setGeneratedLink(link);

    const message = `Dear ${prefix} ${guestName.trim()} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${link}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ Ashan & Nadini`;
    
    setGeneratedMessage(message);
    setCopied(null);
  };

  const copyToClipboard = async (text: string, type: 'link' | 'message') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-brand-primary-deep flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <CornerFlowers position="all" opacity={0.6} scale={1.2} />
      
      <div className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-brand-primary/20">
        <h1 className="text-4xl font-display text-stone-900 text-center mb-8">Invitation Link Generator</h1>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <label className="block text-sm font-medium text-stone-700 mb-2">Prefix</label>
              <select 
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border-2 border-brand-primary/30 rounded-lg focus:border-brand-primary focus:ring-0 transition-colors font-serif text-lg text-stone-800"
              >
                {prefixes.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full sm:w-2/3">
              <label className="block text-sm font-medium text-stone-700 mb-2">Guest Name</label>
              <input 
                type="text" 
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full px-4 py-3 bg-transparent border-2 border-brand-primary/30 rounded-lg focus:border-brand-primary focus:ring-0 transition-colors font-serif text-lg text-stone-800 placeholder-stone-400"
              />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            className="w-full py-4 bg-brand-primary text-white rounded-lg font-medium text-lg hover:bg-brand-primary-light hover:text-stone-900 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Generate Link
          </button>
          
          {generatedLink && (
            <div className="mt-8 space-y-6 pt-8 border-t border-brand-primary/20">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Generated Link</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={generatedLink}
                    className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-lg text-stone-600 font-mono text-sm"
                  />
                  <button 
                    onClick={() => copyToClipboard(generatedLink, 'link')}
                    className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {copied === 'link' ? 'Copied!' : <><Link className="w-4 h-4" /> Copy Link</>}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message Template</label>
                <div className="relative">
                  <textarea 
                    readOnly
                    value={generatedMessage}
                    rows={10}
                    className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-lg text-stone-800 font-serif text-base resize-none"
                  />
                  <button 
                    onClick={() => copyToClipboard(generatedMessage, 'message')}
                    className="absolute bottom-4 right-4 px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-light hover:text-stone-900 transition-colors flex items-center gap-2 shadow-md"
                  >
                    {copied === 'message' ? 'Copied!' : <><Copy className="w-4 h-4" /> Copy Full Message</>}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
