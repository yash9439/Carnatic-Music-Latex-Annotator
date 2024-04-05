# Music LaTeX Annotation

This project provides a web-based interface for annotating music using LaTeX syntax. LaTeX is a typesetting system commonly used for technical and scientific documents, and it's particularly useful for annotating musical scores due to its extensive support for mathematical notation.

## Features

- **Interactive Keyboard**: Users can click on virtual keys representing LaTeX commands to insert annotations into the text area.
- **Live Preview**: As users type or click on keys, a live preview of the LaTeX output is displayed below the text area.
- **Supports Various Annotations**: The keyboard includes keys for common music annotations such as subscripts, superscripts, overlines, underlines, dots, and curves.

## How to Use

1. **Open the Web Page**: Load the provided HTML file (`index.html`) in a web browser.
2. **Input Area**: Type or paste the text into the text area provided at the top of the page.
3. **Keyboard Input**: Click on the virtual keys in the keyboard interface to insert LaTeX annotations into the text.
4. **Live Preview**: As annotations are added or modified, the corresponding LaTeX output is displayed below the input area.

## File Structure

- `index.html`: HTML file containing the structure of the web page and the interface elements.
- `style.css`: CSS file containing styles for the appearance of the interface elements.
- `script.js`: JavaScript file containing the logic for handling user interactions, generating LaTeX output, and updating the live preview.

## Dependencies

- **MathJax**: Used for rendering LaTeX equations in the web page. It's included via CDN in the `<head>` section of the HTML file.

## Contributions

Contributions to this project are welcome. If you encounter any issues, have suggestions for improvements, or would like to add new features, feel free to submit a pull request.

## License

This project is licensed under the Apache License 2.0. See the LICENSE file for more information.

---

Feel free to adjust any other details in the README as needed.