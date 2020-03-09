// == DOM purify: nettoyer le html pour éviter les soucis de failles XSS
// const createDOMPurify = require('dompurify');

// const DOMPurify = createDOMPurify();

// const dangerHtml = (info) => ({ __html: DOMPurify.sanitize(info) });
const dangerHtml = (info) => ({ __html: info });

export default dangerHtml;
