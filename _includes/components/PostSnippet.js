const { html } = require('common-tags');

const PostSnippet = ({title, link, linkText, raised}) => {
    return html`
    <div class="card__container">
        <h3 class="card__title">${title}</h3>
        <a href="${link}">${linkText}</a>
    </div>
    `;
}

module.exports = PostSnippet;