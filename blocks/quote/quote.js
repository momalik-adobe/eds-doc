export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const config = {};
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase().replace(/[^0-9a-z]+/gi, '-');
      const value = cells[1].textContent.trim();
      config[key] = value;
    }
  });

  const quoteText = config.quotetext || config['quote-text'] || '';
  const quoteAuthor = config.quoteauthor || config['quote-author'] || '';

  const wrapper = document.createElement('figure');
  wrapper.className = 'quote-figure';

  const blockquote = document.createElement('blockquote');
  const p = document.createElement('p');
  p.textContent = quoteText;
  blockquote.append(p);

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = quoteAuthor;

  wrapper.append(blockquote, figcaption);

  block.textContent = '';
  block.append(wrapper);
}