const $ = document.querySelector.bind(document);
function load(selector, path) {
    fetch(path)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to load: ${res.statusText}`);
            }
            return res.text();
        })
        .then((html) => {
            $(selector).innerHTML = html;
        })
        .catch((error) => {
            console.error('Error loading template:', error);
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}
