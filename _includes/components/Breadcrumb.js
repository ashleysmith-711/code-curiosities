const { html } = require('common-tags');

const Breadcrumb = ({ content }) => {
    return html`
    <div class="breadcrumb__container">
        ${content}
    </div>
    `;
}

module.exports = Breadcrumb;