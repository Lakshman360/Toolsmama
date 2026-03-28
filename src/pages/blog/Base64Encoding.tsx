export default function Base64Encoding() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-8">What is Base64 Encoding and How It Works</h1>
      <div className="prose prose-slate max-w-none">
        <p>Base64 encoding is a method used to convert binary data into a text-based format. It's widely used in web development, email systems, and data transmission to ensure that data can be sent reliably across systems that only support text.</p>
        
        <h2>How Base64 Works</h2>
        <p>Base64 converts binary data into a sequence of 64 printable ASCII characters. This ensures that the data remains intact, regardless of the system or protocol used to transmit it.</p>
        
        <h2>Common Use Cases</h2>
        <ul>
          <li>Embedding images in HTML or CSS</li>
          <li>Sending binary data in JSON or XML</li>
          <li>Transmitting data over protocols that only support text</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Base64 encoding is a fundamental concept in modern computing. Understanding how it works can help you better manage and transmit data in your projects.</p>
      </div>
    </div>
  );
}
