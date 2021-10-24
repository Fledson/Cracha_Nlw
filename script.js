const linksSocialMedia = {
    github: 'fledson',
    youtube: 'fledson96',
    facebook: 'fledsonhenrique',
    instagram: 'fledson_henrique',
    twitter: 'fledsonhenrique'
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }


}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userImage.src = data.avatar_url;
            userName.textContent = data.name;
            userLogin.textContent = data.login;
            userLink.href = data.html_url;
            userBio.textContent = data.bio;
        })

}

getGitHubProfileInfos()

function showQr() {
    userImage.src = `https://chart.googleapis.com/chart?chs=100x100&cht=qr&chl=https://dowhile.io/convite/fledson`
}

function hideQr() {
    getGitHubProfileInfos()
}

function linkDoWhile() {
    window.open(`https://dowhile.io/convite/${linksSocialMedia.github}`)
}