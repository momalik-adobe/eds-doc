## Quote block – authoring guide (Google Docs / Word)

This block renders a styled quotation with an author, matching the sample UI. It follows the standard AEM Blocks table pattern described in the documentation: [Exploring blocks](https://www.aem.live/docs/exploring-blocks).

### Structure
- Create a table with at least 3 rows and 2 columns.
- Row 1, Column 1 contains the block name: `quote`.
- Subsequent rows define properties in the left column and values in the right column.

### Supported properties
- `quoteText`: The quote text. Use one or multiple paragraphs as needed.
- `quoteAuthor`: The author/source line.

### Minimal example
In Google Docs, create this table:

| quote        |             |
|--------------|-------------|
| quoteText    | Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while. That’s because they were able to connect experiences they’ve had and synthesize new things. |
| quoteAuthor  | Steve Jobs  |

When published, this renders as a blockquote with a left accent bar, opening quote mark, italic body, and bold author.

### Multi‑paragraph quotes
You may put multiple paragraphs in the `quoteText` cell. Each paragraph will be preserved in the rendered blockquote.

### Notes
- Property names are case‑insensitive; `quoteText` or `Quote Text` both work.
- Avoid pasting smart quotes into the property name cells; keep them plain text.
- Do not add extra columns beyond the two required columns.

### Troubleshooting
- If the block does not render: ensure Row 1, Column 1 is exactly `quote`.
- If text appears unstyled: verify the table cell labels `quoteText` and `quoteAuthor` are in the first column.

### Previewing locally
Once authored and published to your content source, load the page with this project; the block will automatically load `blocks/quote/quote.css` and `blocks/quote/quote.js`.


