import { useState } from 'react';
import SEO from './components/SEO';

const Home = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [html, setHtml] = useState<string>('');

  const convertMdToHtml = async () => {
    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown }),
      });
      const data = await response.json();
      if (data.html) {
        setHtml(data.html);
      } else {
        setHtml('Error converting Markdown to HTML.');
      }
    } catch (error) {
      setHtml('Error converting Markdown to HTML.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <SEO 
        title="Markdown to HTML Converter" 
        description="Convert your Markdown text to beautifully styled HTML with our online tool." 
        url="https://yourwebsite.com"
        image="https://yourwebsite.com/images/md-to-html.png"
      />
      <h1 className="text-4xl font-bold mb-4">Markdown to HTML Converter</h1>
      <p className="mb-4">Convert your Markdown text to beautifully styled HTML with our online tool.</p>
      <textarea
        placeholder="Enter Markdown text"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full h-40"
      />
      <button
        onClick={convertMdToHtml}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Convert
      </button>
      {html && (
        <div
          className="mt-4 p-4 border border-gray-300 rounded w-full bg-white shadow"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
};

export default Home;
