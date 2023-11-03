const { html } = require('common-tags');

const FeaturedPost = ({ title, link, description, imageUrl, imageAlt }) => {
    return html`
    <div class="featuredpost__container">
        <img src="${imageUrl}" alt="${imageAlt}" />
        <div>
            <p class="featuredpost__title">${title}</p>
            <p>${description}</p>
            <a href="${link}">Read Post</a>
        </div>
    </div>
    `;
}

module.exports = FeaturedPost;