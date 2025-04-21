export default function QuoteCard({ quote }) {  // Must be default export
    return (
      <div className="card mb-4">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{quote.text ? `"${quote.text}"` : "Loading quote..."}</p>
            {quote.author && <footer className="blockquote-footer">{quote.author}</footer>}
          </blockquote>
        </div>
      </div>
    );
  }